import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nurcabbargok",
  images: {
    unoptimized: true,
  },
  // Ensure we don't have overlapping prefixes
  trailingSlash: true,
};

export default nextConfig;
