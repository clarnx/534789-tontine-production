import type { NextConfig } from 'next'
import { localizedRedirects, devRedirects } from './redirects.config'

const isDevContext =
  process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'development' ||
  !process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE

const nextConfig = {
  async redirects() {
    return isDevContext ? devRedirects : localizedRedirects
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
} satisfies NextConfig

// biome-ignore lint/style/noDefaultExport: <>
export default nextConfig
