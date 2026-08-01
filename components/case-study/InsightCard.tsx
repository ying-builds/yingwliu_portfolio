import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* A numbered research finding. The number is decorative ordering rather than
   data, so it is not marked up as a heading. */
export default function InsightCard({
  num,
  children,
}: {
  num: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.insightCard}>
      <p className={styles.insightNum}>{num}</p>
      <div className={styles.insightText}>{children}</div>
    </div>
  );
}
