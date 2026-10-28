import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/arena-consult" : "",
  images: { unoptimized: true },
  outputFileTracingRoot: process.cwd(),
  agentRules: false,
};

export default nextConfig;
