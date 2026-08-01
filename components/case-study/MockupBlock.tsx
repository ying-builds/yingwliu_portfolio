import GifPlayer from "./GifPlayer";
import styles from "./CaseStudy.module.css";

export default function MockupBlock({
  mp4,
  webm,
  poster,
}: {
  mp4: string;
  webm?: string;
  poster?: string;
}) {
  return (
    <div className={styles.mockupBlock}>
      <GifPlayer
        mp4={mp4}
        webm={webm}
        poster={poster}
        className={styles.blockVideo}
      />
    </div>
  );
}
