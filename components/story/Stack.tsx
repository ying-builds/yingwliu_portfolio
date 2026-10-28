import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./Story.module.css";

/* A tagged frame holding several images, each with its own caption. Used for
   the usability testing before and after boards. */
export function Stack({ tag, children }: { tag?: string; children: ReactNode }) {
  return (
    <figure className={styles.fig}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <div className={`${styles.frame} ${styles.stack}`}>{children}</div>
    </figure>
  );
}

export function StackItem({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: string;
  height: string;
  caption?: string;
}) {
  return (
    <figure>
      <Image
        className={styles.frameImg}
        src={src}
        alt={alt}
        width={Number(width) || 1600}
        height={Number(height) || 900}
        sizes="(max-width: 900px) 100vw, 840px"
      />
      {caption && <p className={styles.cap}>{caption}</p>}
    </figure>
  );
}

/* Three images side by side inside a frame, e.g. persona sheets. */
export function Row({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.frame} ${styles.stack}`}>
      <div className={`${styles.row} ${styles.n3}`}>{children}</div>
    </div>
  );
}
