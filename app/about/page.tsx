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
    /* "profile", not "website" — this page is about a person, and the more
       specific type was already here. */
    type: "profile",
    /* Repeated from the root layout deliberately. Next merges metadata
       shallowly, so declaring openGraph here replaces the parent's object
       rather than merging into it — anything set only in the layout, siteName
       and the image alt included, is absent from this page without it. */
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

          {/* Left: eyebrow, polaroid, one-line caption */}
          <div className={styles.aboutLeft}>
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
              Ying prides herself on being empathetic, yet logical. Turning
              creative experiences into something strategic and grounded.
            </p>
          </div>

          {/* Right: the bio, then what she's up to right now */}
          <div className={styles.aboutRight}>
            <p className={styles.bioLabel}>About</p>
            <p className={styles.bioText}>
              I grew up having fun through all creative mediums (making duct
              tape wallets and miniature furniture for my LPS, taking every art
              elective, and playing minecraft with my cousins) it was how I made
              sense of the world as an only child. But what actually shaped my
              instincts as a designer was growing up with immigrant Chinese
              parents. It taught me to read the room, pick up on what people
              aren&apos;t saying, and pay attention to whether something is
              actually working for them.
            </p>
            <p className={styles.bioText}>
              That&apos;s what I bring into my work: empathy that&apos;s
              practiced, not performed. I design by listening first — then
              turning what I hear into something clear and useful.
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

            {/* The lighter words open each line; the darker words carry it. */}
            <ul className={styles.nowList}>
              <li>
                <span className={styles.nowLead}>Shedding</span> my fear of
                external perception by sharing my ideas through{" "}
                <a
                  href="https://www.instagram.com/yingwliu"
                  target="_blank"
                  rel="noopener"
                  className={styles.bioLink}
                >
                  reels
                </a>{" "}
                and{" "}
                <a
                  href="https://www.tiktok.com/@yingwliu"
                  target="_blank"
                  rel="noopener"
                  className={styles.bioLink}
                >
                  tiktoks
                </a>
              </li>
              <li>
                <span className={styles.nowLead}>Thinking about how to</span>{" "}
                get every fig on my{" "}
                <a
                  href="https://theebookclubx.substack.com/p/the-fig-tree-analogy-explained"
                  target="_blank"
                  rel="noopener"
                  className={styles.bioLink}
                >
                  fig tree
                </a>
              </li>
              <li>
                <span className={styles.nowLead}>Seeking</span> ways to
                increase my surface of luck
              </li>
            </ul>
          </div>

          <div className={`${styles.shadowText} ${styles.shadowTextBottom}`}>
            瑩
          </div>
        </section>

      </div>
    </>
  );
}
