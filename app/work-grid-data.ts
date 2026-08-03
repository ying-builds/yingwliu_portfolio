import type { CaseStudyCard } from "../lib/case-studies";

/* Case studies that don't have an MDX file yet.

   Everything here is hand-maintained, which is exactly what the MDX-driven
   grid exists to avoid — so this list should only ever shrink. When UC Davis
   GSM is converted, delete its entry and the card keeps appearing, sourced
   from frontmatter instead.

   Nothing dedupes this against the MDX-driven cards: the two lists are simply
   concatenated. Leaving a converted case study here renders it twice, with the
   stale copy pointing at a legacy page that no longer exists. BeReal did
   exactly that until its entry was removed.

   Netflix Party stays here permanently: it links out to a Medium article
   rather than to a case study page.

   The Ticketmaster entry is temporary and goes away with the legacy page it
   points at — see the TEMPORARY note in CLAUDE.md. */
export const unconvertedCards: CaseStudyCard[] = [
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
    slug: "uc-davis-gsm",
    href: "/gsm-casestudy.html",
    title: "UC Davis GSM / Alumni Platform",
    description:
      "End-to-end UX and UI for UC Davis GSM's first alumni platform, serving 80,000+ users.",
    role: "Lead Product Designer",
    year: "2023",
    image: "/images/site/gsm-hero.png",
    imageAlt: "UC Davis GSM",
    order: 3,
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
  "uc-davis-gsm": "#1B3A5C",
  bereal: "#0A0A09",
  "netflix-party": "#E8E6E3",
};

/* BeReal's card art is a transparent PNG that needs containing rather than
   cropping. Keyed by slug so it survives the move to MDX. */
export const cardImageContain = new Set(["bereal"]);
