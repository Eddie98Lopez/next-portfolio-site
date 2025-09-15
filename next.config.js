/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ldrjmzbrinwdylthbzry.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
