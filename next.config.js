const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: !isProd ? '/clients/ddgro-api/form' : undefined,
  // assetPrefix: !isProd ? '/clients/ddgro-api/form/' : undefined,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
