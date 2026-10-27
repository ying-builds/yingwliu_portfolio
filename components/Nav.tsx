import Link from "next/link";
import styles from "./Nav.module.css";

/* Same resume link as the About page and the footer. */
const RESUME_URL =
  "https://drive.google.com/file/d/1qB0c1SUs6PF13SnWzXNWGTpOsIXcYJKH/view?usp=sharing";

export default function Nav() {
  return (
    <nav className={`nav-bar ${styles.nav}`}>
      <Link
        href="/"
        prefetch={false}
        className={`nav-logo ${styles.logo}`}
      >
        YING LIU
      </Link>
      <ul className={`nav-links ${styles.links}`}>
        <li>
          <a href="/#work">Work</a>
        </li>
        <li>
          <Link href="/about" prefetch={false}>
            About
          </Link>
        </li>
        <li>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
