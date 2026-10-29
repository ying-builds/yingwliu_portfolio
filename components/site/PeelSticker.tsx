"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import styles from "./PeelSticker.module.css";

/* A sticker you can peel off the page.

   How the fold works: the sticker is drawn twice. The front copy is clipped to
   one side of a fold line. The back copy is the same picture mirrored across
   that line (so it looks like the flap folded over), tinted to plain paper, and
   clipped to the same side. Moving the line toward the middle peels more.

   - Hover: the corner lifts a little, as an invitation.
   - Press and pull a short way, in any direction: the corner curls over.
   - Pull past a third of the way, or just tap: the sticker peels off, falls down
     and off the page, and presses itself back on a few seconds later.
   - Let go before then and it springs back flat.
   Stickers stay where the page puts them; they can't be moved. */

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

type Mode = "stuck" | "peeling" | "falling" | "gone";

// How far a pull counts as "peeled", as a share of the sticker's size.
const PULL_FOR_FULL = 0.22;
const PEEL_TO_DROP = 0.35;
const FALL_MS = 1000;
const AWAY_MS = 3000; // total time from letting go until it is back

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
  const [mode, setModeState] = useState<Mode>("stuck");
  const modeRef = useRef<Mode>("stuck");
  const [peel, setPeel] = useState(0); // 0 to 1 of the way across
  const peelRef = useRef(0);
  const [hover, setHover] = useState(false);
  const [settle, setSettle] = useState(0); // restarts the press-on animation
  const start = useRef({ px: 0, py: 0, moved: false });
  const timers = useRef<number[]>([]);

  const setMode = (m: Mode) => {
    modeRef.current = m;
    setModeState(m);
  };
  const setPeelBoth = (p: number) => {
    peelRef.current = p;
    setPeel(p);
  };

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const read = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
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
    mode === "peeling" || mode === "falling"
      ? peel
      : mode === "stuck" && hover
        ? HOVER_PEEL
        : 0;
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

  const drop = () => {
    // Keep the fold where it is (at least a good curl) and let it fall.
    setPeelBoth(Math.max(peelRef.current, 0.5));
    setMode("falling");
    timers.current.push(
      window.setTimeout(() => setMode("gone"), FALL_MS),
      window.setTimeout(() => {
        setPeelBoth(0);
        setSettle((n) => n + 1);
        setMode("stuck");
      }, AWAY_MS),
    );
  };

  const down = (e: PointerEvent<HTMLDivElement>) => {
    if (modeRef.current !== "stuck") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, moved: false };
    setMode("peeling");
  };

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (modeRef.current !== "peeling") return;
    const dist = Math.hypot(e.clientX - start.current.px, e.clientY - start.current.py);
    if (dist > 3) start.current.moved = true;
    const base = HOVER_PEEL;
    setPeelBoth(Math.min(1, base + dist / (maxT * PULL_FOR_FULL)));
  };

  const up = () => {
    if (modeRef.current !== "peeling") return;
    // A tap, or a pull past a third of the way, takes it off the page.
    if (!start.current.moved || peelRef.current > PEEL_TO_DROP) {
      drop();
    } else {
      setMode("stuck"); // springs back
      setPeelBoth(0);
    }
  };

  const wrapStyle = {
    "--peel-tilt": `${tilt}deg`,
    "--fall-ms": `${FALL_MS}ms`,
  } as CSSProperties;

  const dragging = mode === "peeling";
  const falling = mode === "falling";

  return (
    <div
      ref={root}
      className={`${styles.sticker} ${className} ${mode === "gone" ? styles.gone : ""} ${
        settle > 0 ? styles.again : ""
      }`}
      style={wrapStyle}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <div key={settle} className={`${styles.inner} ${falling ? styles.falls : ""}`}>
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
