import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className={styles.footer}>
        <ul className={`footer-nav ${styles.navList}`}>
          <li>
            <a href="/#work">Work</a>
          </li>
          <li>
            <Link href="/about" prefetch={false}>
              About
            </Link>
          </li>
        </ul>

        <div className={styles.wordmark}>
          <p className={styles.withLove}>with love,</p>
          <p className={styles.name}>Ying Liu</p>
          <p className={styles.copyright}>©2026</p>
        </div>

        <div className={styles.social}>
          <a
            href="https://linkedin.com/in/yingwliu"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:yxngliu@gmail.com" aria-label="Email">
            <EmailIcon />
          </a>
          <a
            href="https://medium.com/@yywliu"
            target="_blank"
            rel="noopener"
            aria-label="Medium"
          >
            <MediumIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 6.5A2.5 2.5 0 0 0 1.5 9v6A2.5 2.5 0 0 0 4 17.5h1V6.5H4zm3 0v11h1.6l2.4-6.6 2.4 6.6H15v-11h-2v7.4L10.8 6.5H9.2L7 13.9V6.5H7zm10.5 0A2.5 2.5 0 0 0 15 9v6a2.5 2.5 0 0 0 2.5 2.5H19V6.5h-1.5z" />
    </svg>
  );
}
