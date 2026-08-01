import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* Responsive row for the card components below. Insights, stats and personas
   all wanted the same behaviour — an even split that collapses to one column
   on narrow screens — so they share this rather than each carrying its own
   grid. */
export default function CardRow({
  columns = 2,
  children,
}: {
  // Loosely typed on purpose: this is written by hand in MDX, where the
  // value can arrive as a string rather than a number.
  columns?: number | string;
  children: ReactNode;
}) {
  const three = Number(columns) === 3;
  return (
    <div className={`${styles.cardRow} ${three ? styles.cardRowThree : ""}`}>
      {children}
    </div>
  );
}
