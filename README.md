# Netlify Repro (Minimal)

Minimal Next.js repro extracted from the Tontine setup, focused on Netlify behavior and core metadata routes.

## Purpose

Use this repo to validate a small, reproducible setup with:

- i18n request handling via `tontine/proxy.ts`
- metadata routes:
  - `tontine/app/manifest.ts`
  - `tontine/app/sitemap.ts`
- generated static text assets:
  - `tontine/public/robots.txt`
  - `tontine/public/llms.txt`
  - `tontine/public/llms-full.txt`
  - `tontine/public/ai.txt`

## Commands

From repo root:

```bash
npm install
npm run dev-tontine
npm run build:tontine
npm run generate-assets
npm run check-types
```

## Notes

- `npm run generate-assets` writes minimal placeholder files and `robots.txt`.
- Domain values in metadata are intentionally static in this repro.
- For the full source project documentation, see `README.full-reference.md`.
