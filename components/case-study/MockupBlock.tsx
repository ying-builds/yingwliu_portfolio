import GifPlayer from "./GifPlayer";
import styles from "./CaseStudy.module.css";

/**
 * A fixed-size window onto a video. The video itself is never re-cut — it
 * renders at full size inside a box with overflow hidden, and these three
 * values decide which part of it you see:
 *
 *   zoom    how much wider the video renders than the window (100% = no zoom)
 *   offsetX how far to slide the video left, as a % of the window's width
 *   offsetY how far to slide the video up, as a % of the window's height
 *
 * Both offsets are normally negative, since sliding the video up/left is what
 * brings a lower/righter part of it into view.
 */
export default function MockupBlock({
  mp4,
  webm,
  poster,
  zoom = "100%",
  offsetX = "0%",
  offsetY = "0%",
}: {
  mp4: string;
  webm?: string;
  poster?: string;
  zoom?: string;
  offsetX?: string;
  offsetY?: string;
}) {
  return (
    <div className={styles.mockupBlock}>
      <GifPlayer
        mp4={mp4}
        webm={webm}
        poster={poster}
        className={styles.blockVideo}
        style={{ width: zoom, left: offsetX, top: offsetY }}
      />
    </div>
  );
}
