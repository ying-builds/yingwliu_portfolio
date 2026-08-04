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

      // The static site served these from the repo root. Once Vercel builds
      // this as a Next app they stop existing — nothing outside public/ is
      // served — so anything already pointing at them (a résumé link, a
      // LinkedIn post, someone's bookmark) would 404 without these.
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

      // This one was live on both the static site and the Next app before its
      // page was archived, so it has the widest reach of any of them. There is
      // no replacement case study to land on yet, so it goes to the work grid
      // — retarget it once the replacements exist. Temporary, hence 307.
      {
        source: "/ticketmaster-casestudy.html",
        destination: "/#work",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
