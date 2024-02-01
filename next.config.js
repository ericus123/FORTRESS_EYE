/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['crypto-js'],
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
}
module.exports = nextConfig
