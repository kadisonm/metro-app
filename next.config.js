/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/metro-app",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;