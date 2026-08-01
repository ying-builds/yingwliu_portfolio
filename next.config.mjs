/** @type {import('next').NextConfig} */
const nextConfig = {
  // Double-invokes effects in development. The hero's canvas and cursor
  // effects attach listeners and animation loops, and this is what surfaces
  // a missing cleanup immediately rather than as a slow leak in production.
  reactStrictMode: true,

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
