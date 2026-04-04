import type { MetadataRoute } from 'next'

// In the main app these values come from site settings and a sanity query
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tontine',
    short_name: 'Tontine',
    description: 'Tontine website',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2975BF',
  }
}
