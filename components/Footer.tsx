import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className={`footer-bar ${styles.bar}`}>
        <div className={styles.identity}>
          <div className={styles.wordmark}>
            <p className={styles.withLove}>with love,</p>
            <p className={styles.name}>Ying Liu</p>
            <p className={styles.copyright}>©2026</p>
          </div>
          <Image
            src="/images/site/ying-mark-red.png"
            alt=""
            width={256}
            height={256}
            className={styles.mark}
          />
        </div>

        <ul className={`footer-nav ${styles.navList}`}>
          <li>
            <a href="/#work">Work</a>
          </li>
          <li>
            <Link href="/play" prefetch={false}>
              Play
            </Link>
          </li>
          <li>
            <Link href="/about" prefetch={false}>
              About
            </Link>
          </li>
        </ul>

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

      <Image
        src="/images/site/footer-band.webp"
        alt=""
        width={2880}
        height={205}
        className={styles.band}
      />
    </footer>
  );
}
