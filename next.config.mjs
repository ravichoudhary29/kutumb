/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.crafto.app',
        port: '',
      },
    ],
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
