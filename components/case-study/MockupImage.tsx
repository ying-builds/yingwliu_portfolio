import Image from "next/image";
import styles from "./CaseStudy.module.css";

export default function MockupImage({
  src,
  alt,
  width,
  height,
  preframed,
}: {
  src: string;
  alt: string;
  // Some images were exported with the frame already drawn into the pixels —
  // a --mockup-border-line edge over a --mockup-bg inset. Those must not be
  // framed again, or they render as a frame inside a frame.
  preframed?: string | boolean;
  // Strings, because MDX only delivers string attributes reliably — an
  // expression like width={1326} is silently dropped, which left next/image
  // with no dimensions and serving its largest candidate.
  width: number | string;
  height: number | string;
}) {
  const isPreframed = preframed === true || preframed === "true";
  const w = Number(width);
  const h = Number(height);
  const known = Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;

  return (
    // No aspect-ratio here: the frame has padding, and aspect-ratio applies to
    // the border box, so it would squeeze the image area rather than describe
    // it. The intrinsic width/height below reserve the space instead.
    <div className={isPreframed ? styles.mockupBare : styles.mockupImage}>
      <Image
        src={src}
        alt={alt}
        width={known ? w : 1200}
        height={known ? h : 900}
      />
    </div>
  );
}
