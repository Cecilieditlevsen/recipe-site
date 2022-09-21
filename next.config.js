/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'images.arla.com', 'www.datocms-assets.com'],
  },
}

module.exports = nextConfig
