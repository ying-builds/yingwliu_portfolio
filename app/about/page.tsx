import type { Metadata } from "next";
import styles from "./page.module.css";
import CustomCursor from "../../components/site/CustomCursor";
import SacramentoClock from "../../components/site/SacramentoClock";

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

          {/* The open notebook: left page is the photo, right page is the text.
              Below 900px the notebook picture drops away and the two halves
              simply stack. */}
          <div className={styles.notebook}>
            <div className={styles.aboutLeft}>
              <div className={styles.leftStack}>
                <SacramentoClock className={styles.aboutEyebrow} />
                <p className={`${styles.aboutEyebrow} ${styles.aboutTitle}`}>
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
            </div>

          {/* Right: the bio, then what she's up to right now */}
          <div className={styles.aboutRight}>
            <p className={styles.bioLabel}>About</p>
            <p className={styles.bioText}>
              I&apos;m an only child, so I grew up making my own fun. Duct tape
              wallets, rainbow cupcakes, Minecraft with my cousins. It was how I
              made sense of the world.
            </p>
            <p className={styles.bioText}>
              My immigrant Chinese parents taught me the rest without ever
              saying it. How to read a room. How to feel what someone
              isn&apos;t saying. How to tell when something is actually working
              for them.
            </p>
            <p className={styles.bioText}>
              That&apos;s what I bring to design. Empathy that&apos;s
              practiced, not performed.
            </p>

            <p className={`${styles.bioLabel} ${styles.nowLabel}`}>
              I am currently
            </p>
            <p className={styles.nowText}>
              Reading, weightlifting, and filming silly videos
            </p>

            {/* The lighter words open each line; the darker words carry it. */}
            <p className={`${styles.bioLabel} ${styles.nowLabel}`}>
              Otherwise I am
            </p>
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

            <div className={styles.contactLinks}>
              <a href="mailto:yxngliu@gmail.com">yxngliu@gmail.com</a>
              <a
                href="https://linkedin.com/in/yingwliu"
                target="_blank"
                rel="noopener"
              >
                linkedin.com/in/yingwliu
              </a>
            </div>
          </div>
          </div>

          <div className={`${styles.shadowText} ${styles.shadowTextBottom}`}>
            瑩
          </div>
        </section>

      </div>
    </>
  );
}
