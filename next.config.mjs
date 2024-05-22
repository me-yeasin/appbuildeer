/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https" || "http",
        hostname: "**",
        pathname: "**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
