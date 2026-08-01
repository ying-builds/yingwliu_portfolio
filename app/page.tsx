import type { Metadata } from "next";
import styles from "./page.module.css";
import InkCursor from "../components/site/InkCursor";
import PixelTrail from "../components/site/PixelTrail";
import CustomCursor from "../components/site/CustomCursor";
import ScrollReveal from "../components/site/ScrollReveal";

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
  },
};

export default function HomePage() {
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
            <a
              className={`${styles.projectCard} fade-up`}
              href="/work/product-education-guide"
              target="_blank"
              rel="noopener"
            >
              <div className={styles.projectImage}>
                <img
                  src="/images/product-education-guide/hero-mockup.jpg"
                  alt="Client Product Education Guide"
                />
              </div>
              <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>
                  Ticketmaster / Client Product Education Guide
                </p>
                <p className={styles.projectDesc}>
                  Redefining the framework around client product education
                  resources to help clients learn, troubleshoot, and discover
                  resources more effectively.
                </p>
                <div className={styles.projectMeta}>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Role</p>
                    <p className={styles.projectMetaValue}>
                      Product Designer &amp; UX Researcher
                    </p>
                  </div>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Year</p>
                    <p className={styles.projectMetaValue}>2024</p>
                  </div>
                </div>
                <div className={styles.projectArrow}>View →</div>
              </div>
            </a>

            <a
              className={`${styles.projectCard} fade-up`}
              href="/ticketmaster-casestudy.html"
              target="_blank"
              rel="noopener"
            >
              <div className={styles.projectImage}>
                <img src="/images/site/ipad-mockup.png" alt="Ticketmaster Support Community" />
              </div>
              <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>
                  Ticketmaster / Support Community
                </p>
                <p className={styles.projectDesc}>
                  Shaping navigation, content systems, and search to enable
                  scalable client self-service across 14 global markets.
                </p>
                <div className={styles.projectMeta}>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Role</p>
                    <p className={styles.projectMetaValue}>Sole Product Designer</p>
                  </div>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Year</p>
                    <p className={styles.projectMetaValue}>2023 – 2025</p>
                  </div>
                </div>
                <div className={styles.projectArrow}>View →</div>
              </div>
            </a>

            <a
              className={`${styles.projectCard} fade-up`}
              href="/gsm-casestudy.html"
              target="_blank"
              rel="noopener"
            >
              <div className={styles.projectImage} style={{ background: "#1B3A5C" }}>
                <img src="/images/site/gsm-hero.png" alt="UC Davis GSM" />
              </div>
              <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>UC Davis GSM / Alumni Platform</p>
                <p className={styles.projectDesc}>
                  End-to-end UX and UI for UC Davis GSM&apos;s first alumni
                  platform, serving 80,000+ users.
                </p>
                <div className={styles.projectMeta}>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Role</p>
                    <p className={styles.projectMetaValue}>Lead Product Designer</p>
                  </div>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Year</p>
                    <p className={styles.projectMetaValue}>2023</p>
                  </div>
                </div>
                <div className={styles.projectArrow}>View →</div>
              </div>
            </a>

            <a
              className={`${styles.projectCard} fade-up`}
              href="/bereal-casestudy.html"
              target="_blank"
              rel="noopener"
            >
              <div
                className={styles.projectImage + " " + styles.projectImageBereal}
                style={{ background: "#0A0A09" }}
              >
                <img src="/images/site/bereal-card.png" alt="BeReal" />
              </div>
              <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>BeReal / New Features</p>
                <p className={styles.projectDesc}>
                  Exploring where BeReal could grow — designing features that
                  expand expression without breaking authenticity.
                </p>
                <div className={styles.projectMeta}>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Role</p>
                    <p className={styles.projectMetaValue}>Product Designer</p>
                  </div>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Year</p>
                    <p className={styles.projectMetaValue}>2023</p>
                  </div>
                </div>
                <div className={styles.projectArrow}>View →</div>
              </div>
            </a>

            <a
              className={`${styles.projectCard} fade-up`}
              href="https://davisdesigninteractive.medium.com/netflix-party-case-study-ec1193f097c5"
              target="_blank"
              rel="noopener"
            >
              <div className={styles.projectImage} style={{ background: "#E8E6E3" }}>
                <img src="/images/site/netflix-card.png" alt="Netflix Party" />
              </div>
              <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>Netflix Party / Redesign</p>
                <p className={styles.projectDesc}>
                  Helping people stay connected while watching together during
                  COVID-19.
                </p>
                <div className={styles.projectMeta}>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Role</p>
                    <p className={styles.projectMetaValue}>UX Designer</p>
                  </div>
                  <div className="project-meta-item">
                    <p className={styles.projectMetaLabel}>Year</p>
                    <p className={styles.projectMetaValue}>2020</p>
                  </div>
                </div>
                <div className={styles.projectArrow}>View →</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
