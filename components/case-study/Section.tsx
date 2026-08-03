import { Fragment, type ReactNode } from "react";
import styles from "./CaseStudy.module.css";

export default function Section({
  label,
  width,
  children,
}: {
  label: string;
  /* "wide" widens the content column for sections holding side-by-side blocks
     (the persona rows). Body paragraphs stay at the normal column width, so
     only the wide blocks actually get the extra room. */
  width?: string;
  children: ReactNode;
}) {
  const content = [
    styles.sectionContent,
    styles.plainText,
    width === "wide" ? styles.sectionContentWide : "",
  ]
    .filter(Boolean)
    .join(" ");

  /* Each word gets its own nowrap span so the label only ever breaks at a
     space. Without this a hyphenated word is a break opportunity, and
     "Lo-Fi to Hi-Fi" splits as "Hi-" / "Fi" in the 169px column. */
  const words = label.split(" ");

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionLabel}>
        {words.map((word, i) => (
          <Fragment key={i}>
            {i > 0 ? " " : null}
            <span className={styles.sectionLabelWord}>{word}</span>
          </Fragment>
        ))}
      </h2>
      <div className={content}>{children}</div>
    </section>
  );
}
