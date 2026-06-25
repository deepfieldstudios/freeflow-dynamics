# Freeflow Dynamics — website

Marketing site for **Freeflow Dynamics** (Natalie Bruce). Built by Deep Field.

- **Live:** https://freeflowdynamics.com
- **Client:** Natalie Bruce
- **Host:** GitHub Pages (this repo, `main` branch, root) under the `deepfieldstudios` org
- **Domain:** freeflowdynamics.com (registered on Namecheap; apex A-records + `www` CNAME → Pages)
- **Stack:** Pre-rendered static HTML + self-hosted production React (hydrated). No build runs on
  the server — the repo root holds the built, deployable site.

## Architecture
Pages are authored as React (in `src/*.html`, one inline JSX bundle each). A Node build step
(`build/build.mjs`) **pre-renders** each page to static HTML for SEO/first paint, **precompiles**
the JSX to plain JS (`assets/js/*.js`), and the page loads self-hosted **production** React from
`assets/vendor/` to **hydrate**. There is no in-browser Babel and no CDN runtime dependency.
Booking uses the Calendly popup widget.

## Build (only needed when changing a page)
```
npm install            # one-time: installs build deps (React, Babel, jsdom)
npm run build          # src/*.html -> built *.html + assets/js/*.js
node build/smoke.mjs   # headless hydration check (no console/hydration errors)
```
Edit pages in `src/`, never the built root `*.html` directly. Commit the built output (root
`*.html`, `assets/js/`, `assets/vendor/`) — that's what GitHub Pages serves. `node_modules/` is
gitignored.

## Deploy
Push to `main` → GitHub Pages auto-deploys in ~1 minute. The `CNAME` file pins the custom domain;
`.nojekyll` keeps the `assets/` and `tokens/` folders intact.

## Local preview
```
python3 -m http.server 8000   # open http://localhost:8000
```

## Images
Photos in `assets/photos/` are optimised (max 2400px, JPEG q70). Pristine originals from the
Claude Design export are kept outside the repo at `../_original-export-photos/`.

## Still to do (nice-to-have)
- SEO/AEO layer: per-page OG/Twitter images, `robots.txt`, `sitemap.xml`, JSON-LD.
- Replace placeholder testimonials in the Reviews section with real client words.
