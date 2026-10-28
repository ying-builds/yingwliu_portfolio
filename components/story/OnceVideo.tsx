"use client";

import { useEffect, useRef } from "react";

/* A case study video that plays once when it scrolls into view, then rests on
   its last frame. The controls stay, so it can be replayed. With loop="true"
   (the hero) it loops while visible and pauses off screen. Visitors who ask
   for reduced motion get a still poster and press play themselves. */
export default function OnceVideo({
  src,
  poster,
  loop,
}: {
  src: string;
  poster?: string;
  loop?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let done = false;
    const play = () => {
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (loop) {
          if (entry.isIntersecting) play();
          else video.pause();
        } else if (entry.isIntersecting && !done) {
          done = true;
          play();
        }
      },
      { threshold: loop ? 0.4 : 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [loop]);

  return (
    <video
      ref={ref}
      controls
      muted
      loop={loop}
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
