"use client";

import { useEffect, useRef } from "react";
import styles from "./ClientSelfService.module.css";

/* A thin bar across the top of the window that fills as the reader scrolls
   down the page. It only changes a transform, and only once per frame, so it
   stays cheap on long pages. Decorative, so hidden from screen readers. */
export default function ReadingProgress() {
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let queued = false;

    function update() {
      queued = false;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      bar!.style.transform = `scaleX(${progress})`;
    }

    function onScroll() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={styles.progress} aria-hidden="true">
      <span ref={barRef} className={styles.progressBar} />
    </div>
  );
}
