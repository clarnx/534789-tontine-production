import type { NextRequest } from 'next/server'
import { i18nRouter } from 'next-i18n-router'
import i18nConfig from './i18nConfig'

// The full site also sets CSP headers, cookies, and other request metadata in
// middleware.
export function proxy(request: NextRequest) {
  return i18nRouter(request, i18nConfig)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - Next.js static/image assets
     * - known public text/image/pdf assets
     * - metadata routes (sitemap / manifest / feed)
     */
    {
      source:
        '/((?!api|static|_next|favicon\\.ico|robots\\.txt|llms\\.txt|llms-full\\.txt|ai\\.txt|sitemap(?:\\.xml)?|manifest(?:\\.webmanifest|\\.json)?|feed(?:\\.xml)?|.*\\.(?:png|svg|gif|pdf)).*)',
    },
  ],
}
