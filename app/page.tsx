import type { Metadata } from "next";
import styles from "./page.module.css";
import InkCursor from "../components/site/InkCursor";
import PixelTrail from "../components/site/PixelTrail";
import CustomCursor from "../components/site/CustomCursor";
import ScrollReveal from "../components/site/ScrollReveal";
import { getCaseStudyCards } from "../lib/case-studies";
import {
  unconvertedCards,
  cardImageBackground,
} from "./work-grid-data";

// The site root carries the full identity rather than the "[Page] — Ying Liu"
// pattern the inner pages follow.
export const metadata: Metadata = {
  title: "Ying Liu — Product Designer",
  description:
    "Using a strategist's intuition to turn ambiguity into clarity through grounded experiences.",
  openGraph: {
    title: "Ying Liu — Product Designer",
    description:
      "Using a strategist's intuition to turn ambiguity into clarity through grounded experiences.",
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
  // Converted case studies come from their own MDX frontmatter; the rest are
  // listed by hand until they are converted. Sorted together so the grid order
  // does not jump when one moves from the second group to the first.
  const cards = [...getCaseStudyCards(), ...unconvertedCards].sort(
    (a, b) => a.order - b.order,
  );

  return (
    <div className={styles.page}>
      <CustomCursor />
      <PixelTrail hostId="hero" />
      <ScrollReveal />

      <section className={styles.heroDark} id="hero">
        <div className={styles.grainOverlay} />
        <InkCursor hostId="hero" />

        <div className={styles.heroContent}>
          <p className={styles.heroRole}>Product Designer</p>
          <h1 className={styles.heroName}>
            <span className={styles.calligraphy}>
              Ying <span className={styles.cjk}>瀅</span>
            </span>
          </h1>
        </div>

        <div className={styles.heroBottom}>
          <p className={styles.heroBio}>
            Using a strategist&apos;s intuition to turn ambiguity into clarity
            through grounded experiences.
          </p>
        </div>

        <a href="#work" className={styles.scrollHint} aria-label="Scroll to work">
          <span>Work</span>
          <div className={styles.scrollLine} />
        </a>
      </section>

      <section className={styles.workSection} id="work">
        <p className={`${styles.workHeader} fade-up`}>Selected Work</p>
        <div className={styles.projects}>
          <div className={styles.projectsGrid}>
            {cards.map((card) => {
              const background = cardImageBackground[card.slug];

              return (
                <a
                  key={card.slug}
                  className={`${styles.projectCard} fade-up`}
                  href={card.href}
                  target="_blank"
                  rel="noopener"
                >
                  <div
                    className={styles.projectImage}
                    style={background ? { background } : undefined}
                  >
                    {card.image ? (
                      <img src={card.image} alt={card.imageAlt} />
                    ) : null}
                  </div>
                  <div className={styles.projectInfo}>
                    <p className={styles.projectTitle}>{card.title}</p>
                    <p className={styles.projectDesc}>{card.description}</p>
                    <div className={styles.projectMeta}>
                      <div className="project-meta-item">
                        <p className={styles.projectMetaLabel}>Role</p>
                        <p className={styles.projectMetaValue}>{card.role}</p>
                      </div>
                      <div className="project-meta-item">
                        <p className={styles.projectMetaLabel}>Year</p>
                        <p className={styles.projectMetaValue}>{card.year}</p>
                      </div>
                    </div>
                    <div className={styles.projectArrow}>View →</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
