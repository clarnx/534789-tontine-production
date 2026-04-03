import type { MetadataRoute } from 'next'

const pageDomain = 'https://test-site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${pageDomain}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
