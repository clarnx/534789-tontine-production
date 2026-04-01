#!/usr/bin/env node
// Minimal stub — in production this generates robots.txt, llms.txt, and research PDFs from Sanity.
// For this repro the Sanity integration is removed; we create placeholder files instead.

import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

mkdirSync(publicDir, { recursive: true })

writeFileSync(join(publicDir, 'robots.txt'), 'User-agent: *\nAllow: /\n')
writeFileSync(join(publicDir, 'llms.txt'), '# Minimal repro placeholder\n')
writeFileSync(join(publicDir, 'llms-full.txt'), '# Minimal repro placeholder\n')
writeFileSync(join(publicDir, 'ai.txt'), '# Minimal repro placeholder\n')

console.log('[assets] Static placeholder files written to public/')
