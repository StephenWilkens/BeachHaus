/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beer.untappd.com",
      },
    ],
  },
};

module.exports = nextConfig;
