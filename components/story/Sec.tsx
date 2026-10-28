import type { ReactNode } from "react";
import styles from "./Story.module.css";

/* One section of the story: a sticky rail with a small label and a headline,
   and a column of proof beside it. */
export default function Sec({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={`${styles.wrap} ${styles.sec}`}>
      <div className={styles.rail}>
        <p className={styles.label}>{label}</p>
        <h2>{title}</h2>
      </div>
      <div className={styles.col}>{children}</div>
    </section>
  );
}
