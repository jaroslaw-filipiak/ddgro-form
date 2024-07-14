const path = require("path");
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
  assetPrefix: process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // images: { unoptimized: true },
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
  },
};

module.exports = nextConfig;
