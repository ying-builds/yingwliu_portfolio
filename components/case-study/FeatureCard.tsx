import type { ReactNode } from "react";
import GifPlayer from "./GifPlayer";
import styles from "./CaseStudy.module.css";

/* A dark panel pairing a feature write-up with its visual.

   The visual is either a still or a looping clip, so this takes an image or
   an mp4/webm pair rather than forcing motion through an <img>. Text sits
   first in the DOM so it is read before the media on a screen reader and on
   narrow screens, where the two columns stack. */
export default function FeatureCard({
  label,
  title,
  image,
  imageAlt,
  mp4,
  webm,
  poster,
  children,
}: {
  label: string;
  title: string;
  image?: string;
  imageAlt?: string;
  mp4?: string;
  webm?: string;
  poster?: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.featureCard}>
      <div>
        <p className={styles.featureLabel}>{label}</p>
        <p className={styles.featureTitle}>{title}</p>
        <div className={styles.featureDesc}>{children}</div>
      </div>
      <div className={styles.featureVisual}>
        {mp4 ? (
          <GifPlayer mp4={mp4} webm={webm} poster={poster} />
        ) : image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={imageAlt ?? ""} loading="lazy" decoding="async" />
        ) : null}
      </div>
    </div>
  );
}
