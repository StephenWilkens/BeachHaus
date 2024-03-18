/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beer.untappd.com",
      },
      {
        protocol: "https",
        hostname: "utfb-images.untappd.com",
      },
    ],
  },
};

module.exports = nextConfig;
