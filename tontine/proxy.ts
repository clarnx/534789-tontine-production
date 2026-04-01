import type { NextRequest } from 'next/server'
import { i18nRouter } from 'next-i18n-router'
import i18nConfig from './i18nConfig'

export function proxy(request: NextRequest) {
  return i18nRouter(request, i18nConfig)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     *
     */
    {
      source:
        '/((?!api|static|_next|favicon.ico|assets/|sitemap|manifest|feed|.*.txt|.*.png|.*.svg|.*.gif|.*.pdf).*)',
    },
  ],
}
