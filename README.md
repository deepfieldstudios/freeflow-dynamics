# Freeflow Dynamics — website

Marketing site for **Freeflow Dynamics** (Natalie Bruce). Built by [Deep Field](https://github.com/).

- **Live:** https://freeflowdynamics.com
- **Client:** Natalie Bruce
- **Host:** GitHub Pages (this repo, `main` branch, root) under the Deep Field org
- **Domain:** freeflowdynamics.com (registered on Namecheap; apex A-records + `www` CNAME → Pages)
- **Stack:** Static HTML/CSS. Pages use React + Babel from CDN (Claude Design preview build — see note).

## Deploy
Push to `main` → GitHub Pages auto-deploys in ~1 minute. The `CNAME` file pins the custom domain;
`.nojekyll` keeps the `assets/` and `tokens/` folders intact.

## Local preview
```
python3 -m http.server 8000
# open http://localhost:8000  (needs internet — React/Babel load from unpkg CDN)
```

## Known limitation / Phase 2 hardening (todo)
Pages currently load `react` + `react-dom` (dev builds) + `@babel/standalone` from unpkg and compile
JSX in the browser. It works but is slow/SEO-weak and depends on unpkg. Before promoting the site:
swap to production React or precompile the JSX out, then optimise the large photos (several 5–11 MB)
to `webp`.
