import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Cresent-technosoft';
  repo = `/${repoName}`;
}

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repo !== '' ? repo : undefined,
  assetPrefix: repo !== '' ? repo : undefined,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
