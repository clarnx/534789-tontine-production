import { type NextRequest, NextResponse } from 'next/server'
import { i18nRouter } from 'next-i18n-router'
import i18nConfig from './i18nConfig'

// The full site also sets CSP headers, cookies, and other request metadata in
// middleware. The repro keeps only the `_next/image` protection and i18n flow.
export function proxy(request: NextRequest) {
  const isNextImageRequest = request.nextUrl.pathname === '/_next/image/'

  if (isNextImageRequest) {
    const imageUrl = request.nextUrl.searchParams.get('url')
    const width = request.nextUrl.searchParams.get('w')
    const quality = request.nextUrl.searchParams.get('q')

    if (!(imageUrl && width && quality)) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  }

  return i18nRouter(request, i18nConfig)
}

export const config = {
  matcher: [
    {
      source: '/_next/image',
      missing: [{ type: 'query', key: 'url' }],
    },
    {
      source: '/_next/image',
      missing: [{ type: 'query', key: 'w' }],
    },
    {
      source: '/_next/image',
      missing: [{ type: 'query', key: 'q' }],
    },
    /*
     * Match all request paths except for:
     * - api routes
     * - Next.js static/image assets
     * - known public text/image/pdf assets
     * - metadata routes (sitemap / manifest / feed)
     */
    {
      source:
        '/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|llms\\.txt|llms-full\\.txt|ai\\.txt|sitemap(?:\\.xml)?|manifest(?:\\.webmanifest|\\.json)?|feed(?:\\.xml)?|.*\\.(?:png|svg|gif|pdf)).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
