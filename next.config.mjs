/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.moviesanywhere.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
