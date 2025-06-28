import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from any domain
      },
    ],
  },
  experimental: {
    authInterrupts: true,
    externalMiddlewareRewritesResolve: true,
    scrollRestoration: true,
    // ppr: "incremental",
    useLightningcss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
  poweredByHeader: false,
  output: "standalone",
}

export default nextConfig
