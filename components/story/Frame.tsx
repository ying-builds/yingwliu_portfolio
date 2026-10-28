import Image from "next/image";
import OnceVideo from "./OnceVideo";
import styles from "./Story.module.css";
import { PROTECTED_MEDIA_PREFIX } from "../../lib/protected";

/* Every image and video in the story layout sits in this frame, with the same
   stroke on the media itself. Give it `src` for an image or `video` for a
   video. `tag` adds a small label above ("Before and iterations"); "After" and
   "Final Review" tags are drawn darker. */
export default function Frame({
  src,
  alt,
  width,
  height,
  video,
  poster,
  tag,
  caption,
  loop,
  preframed,
  ratio,
}: {
  src?: string;
  alt?: string;
  // Strings, because MDX only delivers string attributes reliably.
  width?: string;
  height?: string;
  video?: string;
  poster?: string;
  tag?: string;
  caption?: string;
  loop?: string;
  // "true" when the frame is already drawn into the image, so it is not framed twice.
  preframed?: string;
  // A video's width / height, e.g. "1440 / 930", when it is not 16 / 10.
  ratio?: string;
}) {
  const w = Number(width);
  const h = Number(height);
  const known = Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;
  // Gated media is fetched by the browser directly so the unlock cookie goes
  // with it. next/image fetches server side and would be refused.
  const isProtected = Boolean(src?.startsWith(PROTECTED_MEDIA_PREFIX));
  const dark = tag === "After" || tag === "Final Review";
  const bare = preframed === "true" && Boolean(src) && !video;

  return (
    <figure className={styles.fig}>
      {tag && <span className={`${styles.tag} ${dark ? styles.tagAfter : ""}`}>{tag}</span>}
      {bare ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.preframed}
          src={src}
          alt={alt ?? ""}
          width={known ? w : undefined}
          height={known ? h : undefined}
          loading="lazy"
          decoding="async"
        />
      ) : (
      <div className={styles.frame}>
        {video ? (
          <OnceVideo src={video} poster={poster} loop={loop === "true"} ratio={ratio} />
        ) : src && isProtected ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? ""}
            width={known ? w : undefined}
            height={known ? h : undefined}
            loading="lazy"
            decoding="async"
          />
        ) : src ? (
          <Image src={src} alt={alt ?? ""} width={known ? w : 1600} height={known ? h : 900} sizes="(max-width: 900px) 100vw, 880px" />
        ) : null}
      </div>
      )}
      {caption && <p className={styles.cap}>{caption}</p>}
    </figure>
  );
}
