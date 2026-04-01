'use client';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['your-external-package'],
  },
};

module.exports = nextConfig;