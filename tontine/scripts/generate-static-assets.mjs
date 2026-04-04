import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const pageDomain = 'https://test-site.com'

// In the full repo this script fetches CMS text and research PDFs. For the
// minimal repro, placeholder files are enough to preserve the same build step
// and public asset footprint without depending on external services.
mkdirSync(publicDir, { recursive: true })

writeFileSync(
  join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${pageDomain}/sitemap.xml\n`
)
writeFileSync(join(publicDir, 'llms.txt'), '# Minimal repro placeholder\n')
writeFileSync(join(publicDir, 'llms-full.txt'), '# Minimal repro placeholder\n')
writeFileSync(join(publicDir, 'ai.txt'), '# Minimal repro placeholder\n')
