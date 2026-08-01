import Image from "next/image";
import styles from "./CaseStudy.module.css";

export default function MockupImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  // Strings, because MDX only delivers string attributes reliably — an
  // expression like width={1326} is silently dropped, which left next/image
  // with no dimensions and serving its largest candidate.
  width: number | string;
  height: number | string;
}) {
  const w = Number(width);
  const h = Number(height);
  const known = Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;

  return (
    <div
      className={styles.mockupImage}
      style={known ? { aspectRatio: `${w} / ${h}` } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={known ? w : 1200}
        height={known ? h : 900}
      />
    </div>
  );
}
