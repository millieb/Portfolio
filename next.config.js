/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

module.exports = {
  output: "export",
  distDir: "dist",
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
};
