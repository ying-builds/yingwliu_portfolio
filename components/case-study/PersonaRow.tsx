import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* One persona per row: their sheet on the left, their name and summary on the
   right. The bio, goals and motivations stay inside the sheet image itself. */
export default function PersonaRow({
  image,
  imageAlt,
  name,
  children,
}: {
  image: string;
  imageAlt: string;
  name: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.personaRow}>
      <div className={styles.personaRowImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </div>

      <div className={styles.personaRowBody}>
        <p className={styles.personaRowName}>{name}</p>
        <div className={styles.personaRowDesc}>{children}</div>
      </div>
    </div>
  );
}
