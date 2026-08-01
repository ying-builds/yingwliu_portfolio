import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* A single headline figure with its caption underneath. */
export default function StatCard({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.statCard}>
      <p className={styles.statNum}>{value}</p>
      <div className={styles.statDesc}>{children}</div>
    </div>
  );
}
