/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["crypto-js"],
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org"
      },
      {
        protocol: "https",
        hostname: "fortresseye.media.amanieric.com"
      }
    ]
  }
};
module.exports = nextConfig;
