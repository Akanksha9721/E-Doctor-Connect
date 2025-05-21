/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // disables built-in Next.js image optimization
  },
  reactStrictMode: true, // helps catch potential problems in development
  //swcMinify: true, // enables SWC compiler-based minification
}

export default nextConfig;
