/* Everything the Work / Play / AI section shows, in one place.

   Work cards for converted case studies read their title line and one-liner
   from the case study's own MDX (see page.tsx), so those two can't drift.
   Everything else is written here by hand, matching the Figma frames. */

export type WorkCard = {
  id: string;
  company: string;
  title: string;
  /* Overrides the MDX description. Leave out to use the case study's. */
  description?: string;
  tags: string[];
  /* Where the card goes. Left out = not clickable (a private project). */
  href?: string;
  /* A case study on this site: slug of its MDX file, used to read the card
     description and to open it in the same-origin way. */
  slug?: string;
  image?: string;
  imageAlt?: string;
  /* Shows the padlock and "Private" in the tag row. */
  locked?: boolean;
  /* Placeholder copy that still needs writing. */
  placeholder?: boolean;
};

export const workCards: WorkCard[] = [
  {
    id: "client-self-service",
    company: "Ticketmaster",
    title: "Rethinking Client Self-Service",
    slug: "client-self-service",
    href: "/work/client-self-service",
    tags: ["B2B", "Client support"],
    image: "/images/case-studies/client-self-service/card.webp",
    imageAlt: "The redesigned Ticketmaster Client Help Center home page",
  },
  {
    id: "event-programming-form",
    company: "Ticketmaster",
    title: "Event Programming Form",
    description:
      "Redesigning event programming form to improve event intake to creation experience for internal employees.",
    tags: ["Request access"],
    locked: true,
  },
  {
    id: "alumni-learning-platform",
    company: "UC Davis Graduate School of Management",
    title: "Alumni Learning Platform",
    /* Placeholder from the Figma frame until the card copy is final. */
    description: "One line on what you did and for whom",
    tags: ["Tag", "Tag"],
    placeholder: true,
    slug: "uc-davis-gsm",
    href: "/work/uc-davis-gsm",
    image: "/images/home/gsm-card.webp",
    imageAlt:
      "GSM Lifelong Learning platform screens: landing page, learning library and content upload",
  },
];

export type PlayTile = {
  id: string;
  name: string;
  tags: string[];
  image: string;
  alt: string;
  /* Artwork's own height at the tile's 528px design width. The tile keeps
     this shape at any width. */
  height: number;
  column: 0 | 1 | 2;
  href?: string;
  /* A little zoom for artwork that has a margin to crop (Housefield). */
  zoom?: number;
};

/* Only Netflix Party and BeReal link anywhere; the rest are looked at, not
   opened. Order inside a column is top to bottom, as in Figma. */
export const playTiles: PlayTile[] = [
  { id: "bereal", name: "BeReal", tags: ["Passion project"], image: "/images/play/bereal.webp", alt: "BeReal app screens", height: 380, column: 0, href: "/work/bereal" },
  { id: "shroom", name: "Shroom", tags: ["Lamp design", "AutoCAD", "Industrial design"], image: "/images/play/shroom.webp", alt: "Shroom lamp", height: 440, column: 0 },
  { id: "metamorphosis", name: "Metamorphosis", tags: ["Museum exhibition concept", "Photoshop"], image: "/images/play/metamorphosis.webp", alt: "Metamorphosis exhibition posters", height: 360, column: 0 },
  { id: "art-projects-1", name: "", tags: ["Multimedia"], image: "/images/play/art-projects-1.webp", alt: "Multimedia koi and lotus artwork", height: 400, column: 0 },

  { id: "netflix-party", name: "Netflix Party", tags: ["Redesign", "Design sprint"], image: "/images/play/netflix-party.webp", alt: "Netflix Party redesign", height: 300, column: 1, href: "https://davisdesigninteractive.medium.com/netflix-party-case-study-ec1193f097c5" },
  { id: "cospace", name: "CoSpace", tags: ["Improving remote productivity", "Design sprint"], image: "/images/play/cospace.webp", alt: "CoSpace app screens", height: 520, column: 1 },
  { id: "hackdavis", name: "HackDavis", tags: ["Director of brand design"], image: "/images/play/hackdavis.webp", alt: "HackDavis brand work", height: 340, column: 1 },
  { id: "boundless", name: "Boundless", tags: ["Director of digital media"], image: "/images/play/boundless.webp", alt: "Boundless rush campaign", height: 360, column: 1 },
  { id: "color-scheme", name: "Color Scheme", tags: ["Adobe Illustrator"], image: "/images/play/color-scheme.webp", alt: "Four color schemes of one interior", height: 380, column: 1 },

  { id: "aggieworks", name: "AggieWorks", tags: ["Director of product design", "Graphic design"], image: "/images/play/aggieworks.webp", alt: "AggieWorks Instagram posts", height: 460, column: 2 },
  { id: "housefield", name: "Housefield", tags: ["Bench design", "AutoCAD", "Industrial design"], image: "/images/play/housefield.webp", alt: "The Housefield bench", height: 340, column: 2, zoom: 1.11 },
  { id: "tattoos-in-moods", name: "Tattoos in Moods", tags: ["Zine", "Adobe Illustrator", "Print"], image: "/images/play/tattoos-in-moods.webp", alt: "Tattoos in Moods zine spreads", height: 400, column: 2 },
  { id: "art-projects-2", name: "", tags: ["Multimedia"], image: "/images/play/art-projects-2.webp", alt: "Three multimedia portraits", height: 320, column: 2 },
  { id: "create-your-desires", name: "Create Your Desires", tags: ["VP of marketing & design"], image: "/images/play/create-your-desires.webp", alt: "Create Your Desires rush campaign", height: 440, column: 2 },
];

export type AiCard = {
  id: string;
  company: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
  /* Cover background, for art that doesn't fill the frame. */
  coverBackground?: string;
};

export const aiCards: AiCard[] = [
  {
    id: "databricks",
    company: "Databricks",
    title: "A Canvas for Business Analysts",
    description:
      "A visualization builder that allows analysts to create interactive dashboards quickly using natural language.",
    tags: ["AI", "BI", "4-hour build with Claude"],
    href: "https://www.figma.com/deck/sA3bjlfenMlpcI72JeIKRg",
    image: "/images/home/databricks-card.webp",
    imageAlt: "A Databricks workspace showing a business canvas dashboard",
  },
];
