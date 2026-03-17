import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Cresent-technosoft',
  assetPrefix: '/Cresent-technosoft/',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
