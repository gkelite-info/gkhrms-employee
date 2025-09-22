import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ✅ Skip type checking at build time
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Skip ESLint checks at build time
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
