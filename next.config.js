/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  },
};

module.exports = nextConfig;
