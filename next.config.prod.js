const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/clients/ddgro-api/form',
  assetPrefix: '/clients/ddgro-api/form',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // images: { unoptimized: true },
  images: {
    loader: 'ddgro',
    loaderFile: './loader.js',
  },
};

module.exports = nextConfig;
