/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    },
    images: {
        domains: ["img.b-e.az", "fakestoreapi.com"], //prod
    },
};

module.exports = nextConfig;
