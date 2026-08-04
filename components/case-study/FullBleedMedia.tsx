import GifPlayer from "./GifPlayer";
import styles from "./CaseStudy.module.css";

export default function FullBleedMedia({
  mp4,
  webm,
  poster,
}: {
  mp4: string;
  webm?: string;
  poster?: string;
}) {
  return (
    <div className={styles.fullBleedMedia}>
      <GifPlayer mp4={mp4} webm={webm} poster={poster} />
    </div>
  );
}
