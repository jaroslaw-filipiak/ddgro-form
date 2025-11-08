const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // images: { unoptimized: true },
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
    domains: [
      'ddgro-form.vercel.app',
      'kalkulator.ddgro.eu',
      'octopus-app-jmbhj.ondigitalocean.app',
    ],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  output: 'export',
  trailingSlash: false,
};

module.exports = nextConfig;
