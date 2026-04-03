/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   async rewrites() {
    return [
      {
        source: "/api/:path*", // frontend
        destination: "http://localhost:4500/api/:path*", // backend
      },
    ];
  },
};

export default nextConfig;
