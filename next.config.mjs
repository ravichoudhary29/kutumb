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
  },
};

export default nextConfig;
