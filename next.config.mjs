/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: "https://dummyjson.com/:path*",
      },
    ];
  },
};

export default nextConfig;
