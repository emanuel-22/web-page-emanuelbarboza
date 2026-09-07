import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera .next/standalone (server.js + node_modules mínimo) para la imagen Docker.
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "i.postimg.cc",
      },
    ],
  },
};

export default nextConfig;
