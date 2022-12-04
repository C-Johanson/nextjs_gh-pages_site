/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: "/nextjs_gh-pages_site",
  assetPrefix: "/nextjs_gh-pages_site",
};

module.exports = nextConfig
