import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* Portrait above a name and short description. The image is cropped from the
   top left so faces stay in frame at any card height. */
export default function PersonaCard({
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
    <div className={styles.personaCard}>
      <div className={styles.personaImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </div>
      <div className={styles.personaInfo}>
        <p className={styles.personaName}>{name}</p>
        <div className={styles.personaDesc}>{children}</div>
      </div>
    </div>
  );
}
