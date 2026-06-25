// Headless hydration smoke test: load each built page into jsdom, run the
// self-hosted production React + the page bundle against the pre-rendered DOM,
// and report any React hydration errors/warnings.
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { JSDOM } from 'jsdom';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_ORIGIN = 'https://freeflowdynamics.com';
const react = readFileSync(join(ROOT, 'assets/vendor/react.production.min.js'), 'utf8');
const reactDom = readFileSync(join(ROOT, 'assets/vendor/react-dom.production.min.js'), 'utf8');

let failures = 0;
for (const file of readdirSync(ROOT).filter((f) => f.endsWith('.html'))) {
  const name = file.replace(/\.html$/, '');
  const url = `${SITE_ORIGIN}/${name === 'index' ? '' : file}`;
  const dom = new JSDOM(readFileSync(join(ROOT, file), 'utf8'), {
    runScripts: 'outside-only', pretendToBeVisual: true, url,
  });
  const w = dom.window;
  const errors = [];
  w.console.error = (...a) => errors.push(a.map(String).join(' '));
  w.console.warn = (...a) => errors.push(a.map(String).join(' '));
  const rootBefore = w.document.getElementById('root').children.length;
  try {
    w.eval(react); w.eval(reactDom);
    w.eval(readFileSync(join(ROOT, 'assets/js', `${name}.js`), 'utf8'));
  } catch (err) {
    console.log(`✗ ${file}: threw — ${err.message}`); failures++; continue;
  }
  await new Promise((r) => setTimeout(r, 60));
  const rootAfter = w.document.getElementById('root').children.length;
  const hydrationErrs = errors.filter((e) => /hydrat|did not match|mismatch|Minified React error/i.test(e));
  const status = hydrationErrs.length === 0 && rootAfter > 0 ? '✓' : '✗';
  if (status === '✗') failures++;
  console.log(`${status} ${file}  rootChildren ${rootBefore}->${rootAfter}  consoleErrs ${errors.length}  hydrationErrs ${hydrationErrs.length}`);
  if (errors.length) console.log('   ', errors.slice(0, 3).map((e) => e.slice(0, 160)).join('\n    '));
}
console.log(failures === 0 ? '\nAll pages hydrated cleanly.' : `\n${failures} page(s) had issues.`);
process.exit(failures === 0 ? 0 : 1);
