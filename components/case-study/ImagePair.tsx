import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* Two images sharing one frame with no gap between them, so they read as a
   single continuous strip rather than two separate cards. */
export default function ImagePair({ children }: { children: ReactNode }) {
  return <div className={styles.imagePair}>{children}</div>;
}
