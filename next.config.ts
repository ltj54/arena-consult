import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/arena-consult",
  images: { unoptimized: true },
  outputFileTracingRoot: process.cwd(),
  agentRules: false,
};

export default nextConfig;
