/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['crypto-js'],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "openweathermap.org"
            }
        ]
    }
}
module.exports = nextConfig
