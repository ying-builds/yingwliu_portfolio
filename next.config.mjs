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

      // The static site served these four from the repo root. Once Vercel
      // builds this as a Next app they stop existing — nothing outside
      // public/ is served — so anything already pointing at them (a résumé
      // link, a LinkedIn post, someone's bookmark) would 404 without these.
      // /ticketmaster-casestudy.html needs no rule: it was moved into
      // public/, so it keeps working at the same URL.
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/bereal-casestudy.html",
        destination: "/work/bereal",
        permanent: true,
      },
      {
        source: "/gsm-casestudy.html",
        destination: "/work/uc-davis-gsm",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
