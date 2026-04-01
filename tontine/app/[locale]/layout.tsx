import i18nConfig from '@/i18nConfig'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Netlify Repro',
  description: 'Minimal reproduction for Netlify support',
}

export default function LocaleLayout({
  children,
  params: _params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
