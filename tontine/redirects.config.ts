import type { Redirect } from 'next/dist/lib/load-custom-routes'

export const devRedirects: Redirect[] = []

export const localizedRedirects: Redirect[] = [
  {
    source: '/',
    destination: '/en/',
    permanent: false,
  },
]
