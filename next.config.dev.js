const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  loader: 'ddgro',
  loaderFile: './loader.js',
};

module.exports = nextConfig;
