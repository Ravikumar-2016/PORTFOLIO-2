/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img2.chinadaily.com.cn",
      "agriculture.buzz",
      "sjc.microlink.io",
      "v0.blob.com",
      "cdn-icons-png.flaticon.com", // Added domain for the external image source
    ],
  },
}

module.exports = nextConfig
