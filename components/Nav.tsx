import Link from "next/link";
import styles from "./Nav.module.css";

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
    </nav>
  );
}
