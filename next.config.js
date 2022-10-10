/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["eu-wotp.wgcdn.co"],
  },
};

module.exports = nextConfig;
