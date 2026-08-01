import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

export default function Section({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      <div className={`${styles.sectionContent} ${styles.plainText}`}>
        {children}
      </div>
    </section>
  );
}
