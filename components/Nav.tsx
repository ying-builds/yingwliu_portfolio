"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import { RESUME_URL } from "../lib/links";

export default function Nav() {
  // On the home page the nav floats over the dark hero artwork, so it switches
  // to light text and sits on top instead of in the page flow.
  const onHome = usePathname() === "/";

  return (
    <nav
      className={`nav-bar ${styles.nav} ${onHome ? styles.overHero : ""}`}
    >
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
          <a href={RESUME_URL} target="_blank" rel="noopener">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
