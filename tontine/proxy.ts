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
    const hasRequiredImageParams = Boolean(imageUrl && width && quality)

    if (!hasRequiredImageParams) {
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
     * Match all request paths except for the ones starting with:
     * - // (double-slash paths)
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files) except when missing required query parameters
     * - any route ending in a file extension (.png, .pdf, .etc, ...)
     * - metadata routes (sitemap/feed/manifest), with or without extensions
     */
    {
      source:
        '/((?!/|api|_next/static|_next/image|sitemap(?:\\.xml)?|manifest(?:\\.webmanifest|\\.json)?|feed(?:\\.xml)?|.*\\.[^/]+$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
