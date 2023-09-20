/* @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: "",
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fleek.co/**",
        pathname: "/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/**",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ["storageapi.fleek.co"],
    loader: "custom",
  },
  /*  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/profile": { page: "/profile" },
      "/contact": { page: "/contact" },
      "/terms": { page: "/terms" },
      "/privacy": { page: "/privacy" },
    };
  },*/
};

module.exports = nextConfig;
