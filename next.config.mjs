/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "example.com",
      "anotherdomain.com",
    ],
  },
};

export default nextConfig;
