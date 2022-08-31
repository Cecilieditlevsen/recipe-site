/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains : ['images.unsplash.com', 'images.arla.com']
  }
}

module.exports = nextConfig
