const withPlugins = require('next-compose-plugins');
const transpileModules = require('next-transpile-modules');
const bundleAnalyzer = require('@next/bundle-analyzer');

const withTM = transpileModules([]);
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([[withBundleAnalyzer], [withTM]], {
  reactStrictMode: true, // https://betterprogramming.pub/react-strictmode-is-your-lifeline-for-the-future-1f73064d3bf8
  target: 'serverless',
  trailingSlash: true,
  webpack5: true,
});
