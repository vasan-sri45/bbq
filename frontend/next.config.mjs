/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   async rewrites() {
    return [
      {
        source: "/api/:path*", // frontend
        destination: "https://bbq-server-yyh9.onrender.com/api/:path*", // backend
        // destination: "http://localhost:4500/api/:path*"
      },
    ];
  },
};

export default nextConfig;
