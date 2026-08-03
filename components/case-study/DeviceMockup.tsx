import Image from "next/image";
import GifPlayer from "./GifPlayer";
import styles from "./CaseStudy.module.css";

/* A looping recording shown inside a laptop.
 *
 * The bezel PNG has a transparent screen cutout, so the video sits behind it
 * and shows through. Everything outside the device is transparent too, which
 * is why the video is positioned to the aperture rather than filling the box —
 * a full-size video would spill out past the laptop's edges.
 *
 * The screen's rounded corners and the notch are painted into the bezel, so
 * they mask the video for free; nothing here needs to redraw them.
 */
export default function DeviceMockup({
  mp4,
  webm,
  poster,
  alt,
}: {
  mp4: string;
  webm?: string;
  poster?: string;
  alt: string;
}) {
  return (
    <div className={styles.deviceFrame}>
      <div className={styles.device}>
        <GifPlayer
          mp4={mp4}
          webm={webm}
          poster={poster}
          className={styles.deviceScreen}
        />
        <Image
          className={styles.deviceBezel}
          src="/images/site/macbook-pro-16.png"
          alt={alt}
          width={2000}
          height={1318}
        />
      </div>
    </div>
  );
}
