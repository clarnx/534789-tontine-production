import type { MetadataRoute } from 'next'

// In the full app the sitemap is assembled from CMS/page data. Keeping this
// route in the repro shows that metadata generation is part of the setup, even
// though the values here are intentionally static and dependency-free.
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
