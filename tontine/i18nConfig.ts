import type { Config } from 'next-i18n-router/dist/types'

const i18nConfig: Config = {
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
  localeDetector: false,
} as const

// biome-ignore lint/style/noDefaultExport: <Required>
export default i18nConfig
