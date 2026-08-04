import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* Responsive row for the card components below. Insights, stats and personas
   all wanted the same behaviour — an even split that collapses to one column
   on narrow screens — so they share this rather than each carrying its own
   grid. */
export default function CardRow({
  columns = 2,
  spaced,
  children,
}: {
  // Loosely typed on purpose: this is written by hand in MDX, where the
  // value can arrive as a string rather than a number.
  columns?: number | string;
  /* Set to "true" when the row sits mid-block with body copy either side of
     it. The surrounding text keeps its 20px rhythm; the row gets 40px so the
     cards still read as their own beat. */
  spaced?: string;
  children: ReactNode;
}) {
  const classNames = [
    styles.cardRow,
    Number(columns) === 3 ? styles.cardRowThree : "",
    spaced === "true" ? styles.cardRowSpaced : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
}
