import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "altizachen-frontend-ivory.vercel.app",
      },
    ],
  },
};

export default nextConfig;
