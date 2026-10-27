import Image from "next/image";
import Link from "next/link";
import GifPlayer from "./case-study/GifPlayer";
import { RESUME_URL } from "../lib/links";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bar}>
        <div className={styles.identity}>
          <p className={styles.made}>
            Made with <i>love</i>
            <br />
            &amp; lots of <i>tea</i>,
          </p>
          <Image
            src="/images/site/ying-mark-red.png"
            alt="Ying, written in red Chinese brush calligraphy"
            width={256}
            height={256}
            className={styles.mark}
          />
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <a href="/#work">Work</a>
          <Link href="/about" prefetch={false}>
            About
          </Link>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>

        <div className={styles.right}>
          <p className={styles.copy}>Ying Liu / 2026</p>
          <div className={styles.social}>
            <a
              href="https://linkedin.com/in/yingwliu"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <Image
                src="/images/site/linkedin-icon.png"
                alt=""
                width={100}
                height={100}
                className={styles.icon}
              />
            </a>
            <a href="mailto:yxngliu@gmail.com" aria-label="Email">
              <Image
                src="/images/site/email-icon.png"
                alt=""
                width={60}
                height={60}
                className={styles.icon}
              />
            </a>
            <a
              href="https://medium.com/@yywliu"
              target="_blank"
              rel="noopener"
              aria-label="Medium"
            >
              <Image
                src="/images/site/medium-icon.png"
                alt=""
                width={100}
                height={100}
                className={styles.iconLg}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Slow ink smoke. Decorative, so it is hidden from screen readers, and
          it plays even when the visitor has reduced motion on: it drifts
          slowly, never flashes, and carries no information. */}
      <div className={styles.band} role="presentation">
        <GifPlayer
          mp4="/images/site/footer-smoke.mp4"
          webm="/images/site/footer-smoke.webm"
          poster="/images/site/footer-smoke-poster.webp"
          className={styles.bandVideo}
        />
      </div>
    </footer>
  );
}
