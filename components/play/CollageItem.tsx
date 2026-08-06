import Image from "next/image";
import styles from "./CollageItem.module.css";

/* One piece of work plus the annotations pinned to it.
 *
 * Everything is positioned against this component's own box, never the page,
 * so a doodle drawn over the top-left corner of a photo stays over that corner
 * whatever the surrounding layout does.
 *
 * Offsets and sizes are percentage strings for the same reason. "left: 12%"
 * holds its place on the image at any width; "left: 48px" drifts the moment
 * the container resizes. Pass percentages.
 */

export interface Doodle {
  src: string;
  /* All four are percentages of this item's box, e.g. "8%". */
  top: string;
  left: string;
  width: string;
  /* Optional, e.g. "-6deg". Doodles are hand-drawn; a little tilt helps. */
  rotate?: string;
}

export interface CollageLabelSpec extends Doodle {
  /* What the handwriting says. The artwork is a PNG, so this is the only way
     the label reaches a screen reader. Not optional. */
  text: string;
}

export interface CollageItemProps {
  src: string;
  /* Describes the work itself — this is content, not decoration. */
  alt: string;
  width: number;
  height: number;
  doodles?: Doodle[];
  label?: CollageLabelSpec;
}

/* Doodles and labels are recoloured rather than shipped in colour, so the rust
 * stays tied to --site-accent in tokens.css. The mask reads the PNG's alpha
 * channel only, which is why the artwork's own black or dark grey never
 * reaches the screen — see CollageItem.module.css. */
function annotationStyle(d: Doodle): React.CSSProperties {
  return {
    top: d.top,
    left: d.left,
    width: d.width,
    ["--annotation-src" as string]: `url(${d.src})`,
    ["--annotation-rotate" as string]: d.rotate ?? "0deg",
  };
}

export default function CollageItem({
  src,
  alt,
  width,
  height,
  doodles = [],
  label,
}: CollageItemProps) {
  return (
    <figure className={styles.item}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
      />

      {doodles.map((doodle) => (
        <span
          key={doodle.src + doodle.top + doodle.left}
          className={styles.annotation}
          style={annotationStyle(doodle)}
          aria-hidden="true"
        >
          {/* Sizes the box. The mask paints the shape but carries no height of
              its own, and a percentage width on an empty span leaves it zero
              pixels tall. This img is the same file the mask uses, so it costs
              no extra request; hidden rather than removed so it still occupies
              its natural aspect ratio. */}
          <img src={doodle.src} alt="" className={styles.sizer} />
        </span>
      ))}

      {label && (
        <>
          <span
            className={`${styles.annotation} ${styles.label}`}
            style={annotationStyle(label)}
            aria-hidden="true"
          >
            <img src={label.src} alt="" className={styles.sizer} />
          </span>
          {/* The handwriting is an image, so the caption carries the words. */}
          <figcaption className="visually-hidden">{label.text}</figcaption>
        </>
      )}
    </figure>
  );
}
