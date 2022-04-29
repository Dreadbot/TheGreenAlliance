/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  reactStrictMode: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId}
  ) {
    return {
      '/': { page: '/' }
    }
  },
}

module.exports = nextConfig
