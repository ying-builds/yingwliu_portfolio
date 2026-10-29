"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import styles from "./PeelSticker.module.css";

/* A sticker you can really peel.

   How the fold works: the sticker is drawn twice. The front copy is clipped to
   one side of a fold line. The back copy is the same picture mirrored across
   that line (so it looks like the flap folded over), tinted to plain paper, and
   clipped to the same side. Moving the line toward the middle peels more.

   - Hover: the corner lifts a little, as an invitation.
   - Press and pull toward the middle: the corner curls over.
   - Let go past halfway: the sticker comes off the page and floats loose.
   - A loose sticker can be carried; let go and it presses down where it is.
   - Let go before halfway and it springs back flat. */

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Resting tilt, in degrees. */
  tilt?: number;
  width: number;
  height: number;
  /** Which bottom corner you peel from. */
  corner?: "br" | "bl";
};

type Mode = "stuck" | "peeling" | "loose" | "moving";

export default function PeelSticker({
  src,
  alt,
  className = "",
  tilt = 0,
  width,
  height,
  corner = "br",
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [mode, setMode] = useState<Mode>("stuck");
  const [peel, setPeel] = useState(0); // 0 to 1 of the way across
  const [hover, setHover] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [settle, setSettle] = useState(0);
  const drag = useRef({ px: 0, py: 0, x: 0, y: 0, p: 0, moved: false });

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const read = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { w, h } = size;
  const ready = w > 0 && h > 0;

  // Fold geometry. n points from the middle toward the peel corner.
  const cx = corner === "br" ? w : 0;
  const cy = h;
  let nx = cx - w / 2;
  let ny = cy - h / 2;
  const len = Math.hypot(nx, ny) || 1;
  nx /= len;
  ny /= len;
  const maxT = Math.abs(nx) * w + Math.abs(ny) * h; // corner to far side, along n
  const HOVER_PEEL = 0.1;
  const shown =
    mode === "peeling" ? peel : mode === "stuck" && hover ? HOVER_PEEL : 0;
  const t = shown * maxT;

  // Clip: the half plane on the kept side of the fold.
  const L = (w + h) * 2;
  const p0x = cx - t * nx;
  const p0y = cy - t * ny;
  const ux = -ny;
  const uy = nx;
  const pt = (a: number, b: number) =>
    `${(p0x + ux * a + nx * b).toFixed(2)}px ${(p0y + uy * a + ny * b).toFixed(2)}px`;
  const clip = `polygon(${pt(L, 0)}, ${pt(-L, 0)}, ${pt(-L, -L)}, ${pt(L, -L)})`;

  // Mirror across the fold line, for the back of the flap.
  const k = 2 * (nx * cx + ny * cy - t);
  const matrix = `matrix(${1 - 2 * nx * nx}, ${-2 * nx * ny}, ${-2 * nx * ny}, ${
    1 - 2 * ny * ny
  }, ${k * nx}, ${k * ny})`;

  const down = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = {
      px: e.clientX,
      py: e.clientY,
      x: offset.x,
      y: offset.y,
      p: shown,
      moved: false,
    };
    setMode((m) => (m === "loose" ? "moving" : "peeling"));
  };

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (mode !== "peeling" && mode !== "moving") return;
    const dx = e.clientX - drag.current.px;
    const dy = e.clientY - drag.current.py;
    if (Math.abs(dx) + Math.abs(dy) > 3) drag.current.moved = true;
    if (mode === "moving") {
      setOffset({ x: drag.current.x + dx, y: drag.current.y + dy });
    } else {
      // Pulling toward the middle (against n) peels.
      const pull = -(dx * nx + dy * ny);
      const next = drag.current.p + pull / (maxT * 1.2);
      setPeel(Math.min(1, Math.max(0, next)));
    }
  };

  const up = () => {
    if (mode === "peeling") {
      if (peel > 0.5) {
        setMode("loose"); // off the page
      } else {
        setMode("stuck"); // springs back
      }
      setPeel(0);
    } else if (mode === "moving") {
      setMode("stuck"); // pressed down where it was dropped
      setSettle((n) => n + 1);
    }
  };

  const wrapStyle = {
    "--peel-x": `${offset.x}px`,
    "--peel-y": `${offset.y}px`,
    "--peel-tilt": `${tilt}deg`,
    "--peel-clip": clip,
  } as CSSProperties;

  const dragging = mode === "peeling";
  const loose = mode === "loose" || mode === "moving";

  return (
    <div
      ref={root}
      className={`${styles.sticker} ${className} ${loose ? styles.isLoose : ""}`}
      style={wrapStyle}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <div key={settle} className={styles.inner}>
        {/* Front: everything on the kept side of the fold */}
        <div
          className={`${styles.clip} ${dragging ? styles.noEase : ""}`}
          style={ready ? { clipPath: clip } : undefined}
        >
          <img
            className={styles.img}
            src={src}
            alt={alt}
            width={width}
            height={height}
            draggable={false}
          />
        </div>

        {/* Back of the flap: the same picture, mirrored and turned to paper */}
        {ready && t > 0.5 && (
          <div
            className={`${styles.flapShadow} ${dragging ? styles.noEase : ""}`}
            aria-hidden="true"
          >
            <div className={styles.clip} style={{ clipPath: clip }}>
              <img
                className={styles.flap}
                src={src}
                alt=""
                width={w}
                height={h}
                draggable={false}
                style={{ transform: matrix }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
