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
  width: number;
  height: number;
}) {
  return (
    <div
      className={styles.mockupImage}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
