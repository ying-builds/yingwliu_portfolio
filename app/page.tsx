import type { Metadata } from "next";
import styles from "./page.module.css";
import CustomCursor from "../components/site/CustomCursor";
import Hero from "../components/home/Hero";
import ProjectTabs, {
  type WorkCardView,
} from "../components/home/ProjectTabs";
import { getCaseStudyCards } from "../lib/case-studies";
import { aiCards, playTiles, workCards } from "./home-data";

// The site root carries the full identity rather than the "[Page] — Ying Liu"
// pattern the inner pages follow.
export const metadata: Metadata = {
  title: "Ying Liu | UX & Product Designer Portfolio",
  description:
    "Ying Liu is a UX and product designer in Sacramento, CA. See her work and case studies, from help centers to social apps.",
  openGraph: {
    title: "Ying Liu | UX & Product Designer Portfolio",
    description:
      "Ying Liu is a UX and product designer in Sacramento, CA. See her work and case studies, from help centers to social apps.",
    type: "website",
    /* siteName, images and the image's alt are all repeated from the root
       layout on purpose. Next merges metadata shallowly: declaring openGraph
       here replaces the parent's object outright rather than merging into it,
       so anything set only in the layout is absent from this page. Same
       applies to /about, /play and the case studies. */
    siteName: "Ying Liu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Ying Liu, product designer, Sacramento",
      },
    ],
  },
};

export default function HomePage() {
  // A Work card for a converted case study takes its one-liner from that case
  // study's own frontmatter, so the two can't drift. A card that sets its own
  // description (a private project, or copy still being written) keeps it.
  const converted = new Map(getCaseStudyCards().map((c) => [c.slug, c]));
  const work: WorkCardView[] = workCards.map((c) => ({
    ...c,
    description:
      c.description ?? (c.slug ? converted.get(c.slug)?.description : "") ?? "",
  }));

  return (
    <div className={styles.page}>
      <CustomCursor />
      <Hero />
      <ProjectTabs work={work} play={playTiles} ai={aiCards} />
    </div>
  );
}
