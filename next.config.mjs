/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/plomeria", destination: "/plomero-quito", permanent: true },
      { source: "/plomero", destination: "/plomero-quito", permanent: true },
      { source: "/electricidad", destination: "/electricista-quito", permanent: true },
      { source: "/electricista", destination: "/electricista-quito", permanent: true },
    ]
  },
}

export default nextConfig
