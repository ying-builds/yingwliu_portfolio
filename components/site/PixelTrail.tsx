"use client";

import { useEffect, useRef } from "react";

/* A short comet-tail of pixels that eases toward the cursor, but only while
   it is over the host element. */

const TRAIL_LENGTH = 18;
const TRAIL_COLORS = [
  "rgba(26,25,22,0.5)",
  "rgba(26,25,22,0.35)",
  "rgba(26,25,22,0.2)",
  "rgba(26,25,22,0.15)",
  "rgba(26,25,22,0.08)",
  "rgba(26,25,22,0.04)",
];

export default function PixelTrail({ hostId }: { hostId: string }) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const host = document.getElementById(hostId);
    if (!layer || !host) return;

    // Respect a reduced-motion preference — this is decorative only.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;
    let inHost = false;

    const dots = Array.from({ length: TRAIL_LENGTH }, (_, i) => {
      const el = document.createElement("div");
      el.className = "pixel-trail";
      const size = Math.max(1, 3 - Math.floor(i / 6));
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.background = TRAIL_COLORS[Math.min(i, TRAIL_COLORS.length - 1)];
      el.style.opacity = "0";
      layer.appendChild(el);
      return { el, x: -100, y: -100 };
    });

    function tick() {
      if (disposed) return;
      if (!inHost) {
        rafId = null;
        return;
      }
      let px = mouseX;
      let py = mouseY;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const ease = 0.35 - i * 0.015;
        d.x += (px - d.x) * ease;
        d.y += (py - d.y) * ease;
        d.el.style.left = `${d.x}px`;
        d.el.style.top = `${d.y}px`;
        d.el.style.opacity = "1";
        px = d.x;
        py = d.y;
      }
      rafId = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    function onEnter() {
      inHost = true;
      if (rafId === null) rafId = requestAnimationFrame(tick);
    }
    function onLeave() {
      inHost = false;
      dots.forEach((d) => (d.el.style.opacity = "0"));
    }

    document.addEventListener("mousemove", onMove);
    host.addEventListener("mouseenter", onEnter);
    host.addEventListener("mouseleave", onLeave);

    return () => {
      disposed = true;
      document.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseenter", onEnter);
      host.removeEventListener("mouseleave", onLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
      dots.forEach((d) => d.el.remove());
    };
  }, [hostId]);

  return <div ref={layerRef} aria-hidden="true" />;
}
