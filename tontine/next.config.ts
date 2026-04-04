import type { NextConfig } from 'next'
import { devRedirects, localizedRedirects } from './redirects.config'

const isDevContext =
  process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'development' ||
  !process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE

// This repro keeps only the routing-related config that affects the behavior, sentry excluded
const nextConfig = {
  async redirects() {
    // Netlify needs localized redirects or it will 404
    return isDevContext ? devRedirects : localizedRedirects
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'abs.twimg.com',
        port: '',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [480, 768, 810, 1024, 1200, 1680],
    imageSizes: [16, 32, 48, 64, 96, 128],
    qualities: [65, 85, 91],
  },
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    optimizePackageImports: [
      'tailwind-merge',
      'clsx',
      '@tailwindcss/postcss',
      'axios',
      'axios-retry',
      '@sanity/icons',
      '@sanity/asset-utils',
      '@sentry/nextjs',
      '@mux/mux-video-react',
      'embla-carousel-autoplay',
      'embla-carousel-react',
      'next-share',
      'next-i18n-router',
      'cookies-next',
      'react-turnstile',
    ],
  },
} satisfies NextConfig

// biome-ignore lint/style/noDefaultExport: <>
export default nextConfig
