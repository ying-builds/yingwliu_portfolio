import Image from "next/image";
import styles from "./CaseStudy.module.css";

/* An image that runs the full width of the page, acting as a divider between
 * sections rather than as an asset belonging to one.
 *
 * Deliberately unframed: the --mockup-bg surface and its border are what mark
 * an image as supporting material inside a section, so keeping them here would
 * work against the divider reading.
 */
export default function FullBleedImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  // Strings — MDX drops expression props, so width={2880} arrives undefined.
  width: number | string;
  height: number | string;
}) {
  const w = Number(width);
  const h = Number(height);
  const known = Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;

  return (
    <div className={styles.fullBleedImage}>
      <Image
        src={src}
        alt={alt}
        width={known ? w : 2880}
        height={known ? h : 1000}
        sizes="100vw"
      />
    </div>
  );
}
