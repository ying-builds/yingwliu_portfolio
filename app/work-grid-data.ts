import type { CaseStudyCard } from "../lib/case-studies";

/* Case studies that don't have an MDX file yet.

   Everything here is hand-maintained, which is exactly what the MDX-driven
   grid exists to avoid — so this list should only ever shrink.

   Nothing dedupes this against the MDX-driven cards: the two lists are simply
   concatenated. Leaving a converted case study here renders it twice, with the
   stale copy pointing at a legacy page that no longer exists. BeReal did
   exactly that until its entry was removed.

   Two entries stay here permanently rather than becoming MDX, because they
   link out instead of opening a case study page on this site: Netflix Party
   (a Medium article) and Databricks (a Figma deck).

   The Ticketmaster entry is temporary and goes away with the legacy page it
   points at — see the TEMPORARY note in CLAUDE.md. */
export const unconvertedCards: CaseStudyCard[] = [
  {
    slug: "databricks-db-one-business-canvas",
    href: "https://www.figma.com/deck/sA3bjlfenMlpcI72JeIKRg",
    title: "Databricks / DB One Business Canvas",
    description:
      "How might we close the gap between exploring data and delivering a business case?",
    role: "UX Designer",
    year: "2026",
    image: "/images/case-studies/databricks/card.webp",
    imageAlt: "Databricks DB One business canvas",
    // 0 rather than 1: the newest work leads the grid, and every other card
    // keeps the order it already had.
    order: 0,
  },
  {
    slug: "ticketmaster-support-community",
    href: "/ticketmaster-casestudy.html",
    title: "Ticketmaster / Support Community",
    description:
      "Shaping navigation, content systems, and search to enable scalable client self-service across 14 global markets.",
    role: "Sole Product Designer",
    year: "2023 – 2025",
    image: "/images/site/ipad-mockup.png",
    imageAlt: "Ticketmaster Support Community",
    order: 2,
  },
  {
    slug: "netflix-party",
    href: "https://davisdesigninteractive.medium.com/netflix-party-case-study-ec1193f097c5",
    title: "Netflix Party / Redesign",
    description:
      "Helping people stay connected while watching together during COVID-19.",
    role: "UX Designer",
    year: "2020",
    image: "/images/site/netflix-card.png",
    imageAlt: "Netflix Party",
    order: 5,
  },
];

/* Per-card background colours, which are a property of the artwork rather
   than of the case study's content, so they stay in code. */
export const cardImageBackground: Record<string, string | undefined> = {
  "netflix-party": "#E8E6E3",
};
