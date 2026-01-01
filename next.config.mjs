/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: "https://embassy-backend-fastify.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
