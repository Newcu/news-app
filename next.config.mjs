// next.config.mjs
import { NextConfig } from 'next';

const nextConfig = {
  images: {
    domains: [
      'picsum.photos',
      'techcrunch.com',
      'images.wired.it',
      'cdn.vox-cdn.com',
      'i.kinja-img.com',
      'images.eurogamer.net',
      'a.espncdn.com',
      's.yimg.com',
      'e0.365dm.com',
      'pmcvariety.files.wordpress.com',
      'www.hollywoodreporter.com',
      'pyxis.nymag.com',
      'static01.nyt.com',
      'ichef.bbci.co.uk',
      'www.aljazeera.com'
    ],
    // Add remotePatterns for more flexibility with subdomains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.redd.it',
      },
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: '**.media.tumblr.com',
      }
    ]
  },
  // Enable React strict mode for development
  reactStrictMode: true,
  // Make optimizations for production builds
  swcMinify: true,
} satisfies NextConfig;

export default nextConfig;