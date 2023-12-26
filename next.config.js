/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

//api hostname
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com'
        },
      ],
    },
  }
