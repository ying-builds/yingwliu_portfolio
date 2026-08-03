import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

export default function Intro({ children }: { children: ReactNode }) {
  return (
    <div className={styles.introRow}>
      <div className={styles.introSpacer} />
      <div className={`${styles.introCol} caption-block`}>
        <p className="label">INTRODUCTION</p>
        <div className={styles.plainText}>{children}</div>
      </div>
      {/* Closes the preamble before the first section. Its own flex line, so
          it spans the whole title + content block rather than just one column. */}
      <div className={styles.introRule} />
    </div>
  );
}
