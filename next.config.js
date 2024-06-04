/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: '/tailwind-landing-page-template-v2',
  /*
  assetPrefix: '/tailwind-landing-page-template-v2/',
  publicRuntimeConfig: {
    basePath: 'tailwind-landing-page-template-v2',
  },
  */
};

module.exports = nextConfig;
