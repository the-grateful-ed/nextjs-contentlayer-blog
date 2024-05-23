const { withContentlayer } = require("next-contentlayer");
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Include MDX extension
};

module.exports = withContentlayer(withMDX(nextConfig));
