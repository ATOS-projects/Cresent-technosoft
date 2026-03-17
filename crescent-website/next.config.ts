import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Cresent-technosoft',
  assetPrefix: '/Cresent-technosoft',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
    unoptimized: true,
  }
};

export default nextConfig;
