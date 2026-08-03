import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* A dark full-bleed band stating what the product stands for. Centred, and the
   only dark section in a case study that uses it — it's a deliberate break in
   the page rather than a recurring pattern. */
export default function Pillars({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.pillars}>
      <p className={styles.pillarsTitle}>{title}</p>
      <div className={styles.pillarsList}>{children}</div>
    </section>
  );
}
