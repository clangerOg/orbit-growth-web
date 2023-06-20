/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'images.pexels.com' },
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require('@next/mdx')({
  options: {
    providerImportSource: '@mdx-js/react',
  },
});
module.exports = withMDX(nextConfig);
