import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/atlas-insights',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
