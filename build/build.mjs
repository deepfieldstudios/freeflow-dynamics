// Production build for the Freeflow Dynamics site.
//
// Source of truth = src/*.html (authored Claude Design pages: static <head> +
// one inline <script type="text/babel"> that renders the whole page).
//
// For each page this:
//   1. extracts the inline JSX,
//   2. precompiles JSX -> JS with Babel (no in-browser Babel),
//   3. server-side pre-renders the React tree to static HTML (SEO + first paint),
//   4. writes a client bundle that hydrates that markup with self-hosted
//      production React (no unpkg runtime dependency),
//   5. rewrites the page HTML accordingly and emits it to the repo root.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { transformSync } from '@babel/core';
import presetReact from '@babel/preset-react';
import { JSDOM } from 'jsdom';
import React from 'react';
import { renderToString } from 'react-dom/server';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'src');
const SITE_ORIGIN = 'https://freeflowdynamics.com';

const pages = readdirSync(SRC).filter((f) => f.endsWith('.html'));
let ok = 0;

for (const file of pages) {
  const name = file.replace(/\.html$/, '');
  const html = readFileSync(join(SRC, file), 'utf8');

  // 1. Pull out the inline JSX.
  const m = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
  if (!m) { console.error(`✗ ${file}: no <script type="text/babel"> found`); continue; }
  const jsxSource = m[1];

  // Separate the ReactDOM.createRoot(...).render(...) call from the components.
  const componentsSource = jsxSource.replace(/ReactDOM\.createRoot\([\s\S]*?\)\.render\([\s\S]*?\);?/, '');

  // 2. Compile JSX -> JS (classic runtime -> React.createElement).
  const compiled = transformSync(componentsSource, {
    presets: [[presetReact, { runtime: 'classic' }]],
    filename: `${name}.jsx`,
    babelrc: false, configFile: false,
  }).code;

  // 3. Server-side pre-render. Provide browser globals (Nav reads window.location
  //    during render) via jsdom scoped to this page's URL.
  const pageUrl = `${SITE_ORIGIN}/${name === 'index' ? '' : name + '.html'}`;
  const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: pageUrl });
  const saved = {};
  for (const k of ['window', 'document', 'location']) {
    saved[k] = globalThis[k];
  }
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.location = dom.window.location;

  let ssr = '';
  try {
    const App = new Function('React', `${compiled}\n;return App;`)(React);
    ssr = renderToString(React.createElement(App));
  } catch (err) {
    console.error(`✗ ${file}: SSR failed — ${err.message}`);
    for (const k of Object.keys(saved)) globalThis[k] = saved[k];
    continue;
  }
  for (const k of Object.keys(saved)) globalThis[k] = saved[k];

  // 4. Client bundle: same components, then hydrate. React/ReactDOM are UMD globals.
  const clientJs =
`/* Auto-generated from src/${file} by build/build.mjs — do not edit directly. */
(function () {
${compiled}
ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(App));
})();
`;
  writeFileSync(join(ROOT, 'assets', 'js', `${name}.js`), clientJs);
  // content hash for cache-busting the bundle URL (so a deploy can never run a stale bundle)
  const hash = createHash('sha256').update(clientJs).digest('hex').slice(0, 8);

  // 5. Rewrite the page HTML.
  let out = html;
  // remove the in-browser dev React + Babel CDN scripts
  out = out.replace(/[\t ]*<script src="https:\/\/unpkg\.com\/(react|react-dom)@[^"]*\.development\.js"[^>]*><\/script>\s*/g, '');
  out = out.replace(/[\t ]*<script src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>\s*/g, '');
  // remove the inline babel script
  out = out.replace(/[\t ]*<script type="text\/babel">[\s\S]*?<\/script>\s*/, '');
  // self-hosted production React in <head>
  out = out.replace(/<\/head>/,
    '<script src="assets/vendor/react.production.min.js"></script>\n' +
    '<script src="assets/vendor/react-dom.production.min.js"></script>\n</head>');
  // inject pre-rendered markup into the root container
  out = out.replace(/<div id="root">\s*<\/div>/, `<div id="root">${ssr}</div>`);
  // load the page bundle at end of body
  out = out.replace(/<\/body>/, `<script src="assets/js/${name}.js?v=${hash}"></script>\n</body>`);

  writeFileSync(join(ROOT, file), out);
  console.log(`✓ ${file}  (ssr ${ssr.length.toLocaleString()} chars, bundle ${clientJs.length.toLocaleString()} chars)`);
  ok++;
}

console.log(`\nBuilt ${ok}/${pages.length} pages.`);
if (ok !== pages.length) process.exit(1);
