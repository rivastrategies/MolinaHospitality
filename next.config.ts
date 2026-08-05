import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const usesProjectPath = isGitHubPages && process.env.CUSTOM_DOMAIN !== "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: usesProjectPath ? "/MolinaHospitality" : "",
  assetPrefix: usesProjectPath ? "/MolinaHospitality" : "",
  trailingSlash: isGitHubPages,
  images: { unoptimized: true },
};

export default nextConfig;
