/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // There's no separate /work index — the case study grid lives on the
      // homepage, so send a truncated URL there instead of 404ing.
      {
        source: "/work",
        destination: "/#work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
