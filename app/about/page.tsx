import type { Metadata } from "next";
import styles from "./page.module.css";
import CustomCursor from "../../components/site/CustomCursor";

export const metadata: Metadata = {
  title: "About — Ying Liu",
  description:
    "Product Designer in Sacramento, CA, designing with empathy that's practiced, not performed.",
  openGraph: {
    title: "About — Ying Liu",
    description:
      "Product Designer in Sacramento, CA, designing with empathy that's practiced, not performed.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Outside .page on purpose. .page has to create a stacking context —
          .shadowText sits at z-index: -1 and would otherwise paint behind the
          page's own background — but that context also traps the cursor, whose
          z-index then resolves against .page's 0 rather than against the nav's
          100. The cursor disappeared under the nav bar. The homepage has no
          such wrapper, which is why it only showed up here. */}
      <CustomCursor />

      <div className={styles.page}>
        <div className={styles.grain} />

        <section className={styles.aboutHero}>
          <div className={`${styles.shadowText} ${styles.shadowTextTop}`}>
            Ying Liu
          </div>

          <p className={styles.aboutEyebrow}>
            Product Designer · Sacramento, CA
          </p>

          <div className={styles.polaroid}>
            <img
              src="/images/site/polaroid_portrait_photo.png"
              alt="Ying Liu"
            />
          </div>

          <p className={styles.aboutTagline}>
            Using my intuition to turn
            <br />
            ambiguity into clarity through
            <br />
            grounded experiences.
          </p>

          <div className={`${styles.shadowText} ${styles.shadowTextBottom}`}>
            瑩
          </div>
        </section>

        <section className={styles.bioSection}>
          <p className={styles.bioLabel}>About</p>
          <p className={styles.bioText}>
            I grew up having fun through all creative mediums (making duct tape
            wallets and miniature furniture for my LPS, taking every art
            elective, and playing minecraft with my cousins) it was how I made
            sense of the world as an only child. But what actually shaped my
            instincts as a designer was growing up with immigrant Chinese
            parents. It taught me to read the room, pick up on what people
            aren&apos;t saying, and pay attention to whether something is
            actually working for them.
          </p>
          <p className={styles.bioText}>
            That&apos;s what I bring into my work: empathy that&apos;s
            practiced, not performed. I design by listening first — then turning
            what I hear into something clear and useful.
          </p>
          <p className={styles.bioText}>
            Outside of design, you&apos;ll find me creating content on{" "}
            <a
              href="https://www.tiktok.com/@yingwliu"
              target="_blank"
              rel="noopener"
              className={styles.bioLink}
            >
              TikTok
            </a>
            , sharing learnings on{" "}
            <a
              href="https://medium.com/@yywliu"
              target="_blank"
              rel="noopener"
              className={styles.bioLink}
            >
              Medium
            </a>
            , or{" "}
            <span className={styles.hoverVideoTrigger}>
              lifting at the gym
              <span className={styles.hoverVideo}>
                <img src="/images/site/gym-hover.gif" alt="Ying lifting" />
              </span>
            </span>
            . Balance keeps everything sharp.
          </p>
        </section>

        <div className={styles.detailsRow}>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Currently</p>
            <p className={styles.detailValue}>Open to opportunities</p>
          </div>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Previously</p>
            <p className={styles.detailValue}>Ticketmaster</p>
          </div>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Education</p>
            <p className={styles.detailValue}>UC Davis</p>
          </div>
        </div>

        <section className={styles.interestsSection}>
          <p className={styles.interestsLabel}>
            Products I&apos;d love to work on
          </p>
          <p className={styles.interestsList}>
            <span>Fintech</span>
            <span>Productivity Tools</span>
            <span>Social Media</span>
            <span>Consumer-Facing</span>
            <span>Anime</span>
            <span>Overwatch</span>
            <span>Fashion</span>
          </p>
        </section>

        <section className={styles.connectSection}>
          <div className={styles.connectLinks}>
            <a
              href="https://linkedin.com/in/yingwliu"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a href="mailto:yxngliu@gmail.com">Email</a>
            <a href="https://medium.com/@yywliu" target="_blank" rel="noopener">
              Medium
            </a>
            <a
              className={styles.connectResume}
              href="https://drive.google.com/file/d/1qB0c1SUs6PF13SnWzXNWGTpOsIXcYJKH/view?usp=sharing"
              target="_blank"
              rel="noopener"
            >
              Resume
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
