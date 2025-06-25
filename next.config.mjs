/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    MONDAY_API_TOKEN: process.env.MONDAY_API_TOKEN,
    MONDAY_BOARD_ID: process.env.MONDAY_BOARD_ID,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
};

export default nextConfig;
