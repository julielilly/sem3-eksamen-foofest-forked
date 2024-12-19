/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "showy-energetic-marimba.glitch.me",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
//glitch.com/edit/#!/showy-energetic-marimba?path=src%2FBands.js%3A1%3A0

export default nextConfig;
