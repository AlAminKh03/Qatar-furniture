/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["qatarfurnituredecor.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|svg)$/,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
