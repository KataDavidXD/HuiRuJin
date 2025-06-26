/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  
  // GitHub Pages configuration
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://katadavidxd.github.io/HuiRuJin' 
    : '',
  basePath: process.env.NODE_ENV === 'production' 
    ? '/HuiRuJin' 
    : '',

  // Experimental features
  experimental: {},

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false
  }
}

module.exports = nextConfig