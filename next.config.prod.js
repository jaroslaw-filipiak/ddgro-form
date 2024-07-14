const path = require("path");
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
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
