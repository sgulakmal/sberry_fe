import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sberry-images-dev.s3.amazonaws.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "giphy.com",
        pathname: "/gifs/**",
      },
      {
        protocol: "https",
        hostname: "**.giphy.com",
        pathname: "/media/**",
      },


    ],
  },
};

export default nextConfig;

