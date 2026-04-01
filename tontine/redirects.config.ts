import type { Redirect } from 'next/dist/lib/load-custom-routes'

export const devRedirects: Array<Redirect> = []

export const localizedRedirects: Array<Redirect> = [
  {
    source: '/',
    destination: '/en/',
    permanent: false,
  },
]
