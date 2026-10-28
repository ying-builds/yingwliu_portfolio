"use client";

import { useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import styles from "./PeelSticker.module.css";

/* A sticker you can peel up and press back down.
   - On load it peels on: lifted and tilted at first, then it settles flat.
   - Hover lifts one edge, like a thumbnail getting under the corner.
   - Press and drag to pick it up and stick it somewhere else on the page.
   - A plain click peels it off and presses it back down in the same spot.
   The position is plain React state, so a refresh puts it back where it began. */

type Props = {
  src: string;
  alt: string;
  /** Sets position and size; comes from the page's CSS module. */
  className?: string;
  /** Resting tilt, in degrees. */
  tilt?: number;
  width: number;
  height: number;
};

export default function PeelSticker({
  src,
  alt,
  className = "",
  tilt = 0,
  width,
  height,
}: Props) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [held, setHeld] = useState(false);
  const [replay, setReplay] = useState(0);
  const start = useRef({ px: 0, py: 0, x: 0, y: 0, moved: false });

  const down = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = {
      px: e.clientX,
      py: e.clientY,
      x: offset.x,
      y: offset.y,
      moved: false,
    };
    setHeld(true);
  };

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!held) return;
    const dx = e.clientX - start.current.px;
    const dy = e.clientY - start.current.py;
    if (Math.abs(dx) + Math.abs(dy) > 4) start.current.moved = true;
    setOffset({ x: start.current.x + dx, y: start.current.y + dy });
  };

  const up = () => {
    if (!held) return;
    setHeld(false);
    // Tapped without dragging: peel it off and stick it back down.
    if (!start.current.moved) setReplay((n) => n + 1);
  };

  return (
    <div
      className={`${styles.sticker} ${className} ${held ? styles.isHeld : ""}`}
      style={
        {
          "--peel-x": `${offset.x}px`,
          "--peel-y": `${offset.y}px`,
          "--peel-tilt": `${tilt}deg`,
        } as CSSProperties
      }
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
    >
      {/* key restarts the peel-on animation for the click replay */}
      <img
        key={replay}
        className={styles.img}
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable={false}
      />
    </div>
  );
}
