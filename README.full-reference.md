# Tontine Websites

Monorepo for the Tontine web platform, including:

- `tontine/`: Next.js website
- `sanity-studio/`: Sanity Studio CMS
- `cypress/`: E2E and component tests

## Repository Structure

- `netlify.toml`: Netlify build/deploy configuration
- `scripts/generate-static-assets.mjs`: Generates `robots.txt`, AI/LLM text files, and research PDFs
- `scripts/run-tests.sh`: CI test orchestrator
- `scripts/remove-sourcemaps.sh`: Postbuild sourcemap cleanup

## Quick Start

1. Install dependencies:

```bash
npm run setup
```

2. Create local env files from the examples:

```bash
cp .env.example .env.local
cp cypress.env.example.json cypress.env.json
```

1. Start website locally:

```bash
npm run dev-tontine
```

4. Start Sanity Studio locally:

```bash
npm run dev-sanity
```

Website: <http://localhost:3000>
Sanity Studio: <http://localhost:3333>

## Environment Setup

Use `.env.example` as the starting point for local website and asset generation. Copy it to one of these supported locations:

- `.env.local`
- `.env`
- `tontine/.env.local`
- `tontine/.env`

For Cypress, copy `cypress.env.example.json` to `cypress.env.json` and update values as needed.

## Canonical Root Scripts

### Development

- `npm run dev-tontine`
- `npm run start-tontine`
- `npm run dev-sanity`

### Build

- `npm run build:tontine`
- `npm run build:stats`
- `npm run build-sanity`
- `npm run postbuild`

### Quality

- `npm run format-lint`
- `npm run format-lint:fix`
- `npm run check-types:all`

### Tests

- `npm run run-tests`
- `npm run e2e`
- `npm run e2e:headless`
- `npm run cypress:component`
- `npm run cypress:component:headless`

## Static Asset Generation

`npm run generate-assets` runs `scripts/generate-static-assets.mjs`.

It generates:

- `tontine/public/robots.txt`
- `tontine/public/llms.txt`
- `tontine/public/llms-full.txt`
- `tontine/public/ai.txt`
- `tontine/public/research/**` PDF files

Behavior:

- Automatically loads local env files listed above.
- Uses Sanity API to fetch website LLM content and research assets.

Failure behavior (strict):

- Fails if required LLM assets cannot be generated.
- Fails if no research PDFs are found.
- Fails if any PDF download fails.

## Testing Workflow

`npm run run-tests` executes `scripts/run-tests.sh`, which:

1. Builds website locally (skipped on Netlify)
2. Ensures Cypress binary exists (`npm -w cypress run ensure:binary`)
3. Runs headless E2E and component tests

If Cypress fails in CI with binary-missing errors, run:

```bash
npm -w cypress run ensure:binary
```

## Script Logging Prefixes

Operational scripts in `scripts/` use standardized prefixes for output:

- `[assets]` for `scripts/generate-static-assets.mjs`
- `[run-tests]` for `scripts/run-tests.sh`
- `[postbuild]` for `scripts/remove-sourcemaps.sh`

Messages keep action-oriented and concise for CI log scannability.

## Netlify Branch Behavior

- Branch name contains `-s-`: skip Netlify website build (Sanity dry-run path)
- Branch name contains `-f-`: run both website and Sanity build workflows

Important contexts in `netlify.toml`:

- `deploy-preview`: lint/format fix, build website, run tests
- `staging`: lint/format fix, build website, type coverage, run tests
- `production-tontine`: lint/format, build website, postbuild cleanup

## Deployment

Production website deploy:

```bash
git push origin staging:production-tontine
```

Sanity production deploy:

```bash
git push origin staging:production-sanity
npm -w sanity-studio run deploy
```

## Sanity Content Model Flow

When adding a new section:

1. Add schema in `sanity-studio/schemas/section/`
2. Add React section in `tontine/sections/`
3. Register in `tontine/sections/Sections.ts`
4. Add query shape in `tontine/sanity-queries/sanity-queries.ts`

Dynamic rendering references:

- `tontine/app/[locale]/page.tsx`
- `tontine/app/[locale]/[...slug]/page.tsx`
- `tontine/components/page-content/PageContent.tsx`

## Sanity Migrations

From repo root:

```bash
npx sanity migration list
npx sanity migration run <name>
npx sanity migration run <name> --no-dry-run
```

## Security Notes

If you add external scripts/images/videos, update CSP-related files:

- `tontine/data-resource/security-constants.ts`
- `tontine/middleware.ts`

## PR Checklist

1. `npm run format-lint`
2. `npm run check-types:all`
3. `npm run build:tontine`
4. Run tests relevant to your change (`e2e:headless`, component tests)
5. Keep scripts non-duplicative and documentation updated
