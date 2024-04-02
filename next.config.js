const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/clients/ddgro-api/form',
  assetPrefix: '.',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
