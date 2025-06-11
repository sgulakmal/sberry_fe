import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "sberry-images-dev.s3.amazonaws.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
