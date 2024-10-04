/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/Portfolio" : "",
  output: "export",
  distDir: "dist",
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
};
