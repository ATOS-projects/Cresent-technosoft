import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Apply basePath only when building for production
  basePath: isProd ? '/Cresent-technosoft' : '',
  assetPrefix: isProd ? '/Cresent-technosoft' : '',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
