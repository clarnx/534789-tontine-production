# Netlify Repro (Minimal Monorepo)

Minimal Next.js reproduction extracted from the Tontine setup, keeping only the root monorepo config and the `tontine/` app workspace.

## Scope

This repo intentionally includes only the pieces needed to show:

- root npm workspace + Netlify config
- i18n request handling via `tontine/proxy.ts`
- metadata routes:
  - `tontine/app/manifest.ts`
  - `tontine/app/sitemap.ts`
- generated static text assets:
  - `tontine/public/robots.txt`
  - `tontine/public/llms.txt`
  - `tontine/public/llms-full.txt`
  - `tontine/public/ai.txt`

It intentionally excludes the non-essential parts of the main repo, including `sanity-studio/`, `cypress/`, shared components, hooks, providers, sections, and CMS data code.

## Commands

From repo root:

```bash
npm install
npm run dev-tontine
npm run build:tontine
npm run generate-assets
npm run check-types
npm run check-types:all
```

## Notes

- `npm run generate-assets` writes placeholder static text assets so the build stays self-contained.
- Netlify builds run from the repo root and publish `tontine/.next` to mirror the main monorepo layout.
- `dynamicParams = false` is enabled on the locale and catch-all route segments to reflect the support recommendation that was tested here.
- Domain values in metadata remain intentionally static in this repro.
- For the full source project documentation, see `README.full-reference.md`.

## Intentionally omitted from the full app

To keep this example small and safe to share, the repro does **not** copy some
production-only parts of the main project, including:

- CMS-backed content fetching and section rendering
- middleware cookie/CSP/security header logic
- Sentry and other monitoring integrations
- Cypress tests and the `sanity-studio/` workspace
- image/CDN settings and other unrelated build optimizations

Those concerns exist in the real repository, but they are not required to show
the App Router + monorepo + Netlify behavior being discussed here.
