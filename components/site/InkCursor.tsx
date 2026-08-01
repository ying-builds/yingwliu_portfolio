"use client";

import { useEffect, useRef } from "react";

/* Pixel-ink bleed that follows the cursor across the hero.
   Blobs grow, hold, then fade out to nothing — they never persist. An
   earlier version baked settled blobs onto an offscreen canvas, which made
   the hero fill up with a permanent grey mass; the fade below is what
   replaced it, so the alpha ramp is the part that matters. */

const PIXEL = 8;
const BLOB_MAX_R = 48;
const BLOB_EXPAND_MS = 500; // grow to full size
const BLOB_HOLD_MS = 400; // hold at full ink
const BLOB_FADE_MS = 1800; // fade out to nothing
const BLOB_LIFE = BLOB_EXPAND_MS + BLOB_HOLD_MS + BLOB_FADE_MS;
const DEPOSIT_EVERY = 10;
const SHADE_DARK = 20;
const BASE_ALPHA = 0.95;

type Blob = { x: number; y: number; born: number; maxR: number; seed: number };

function noise(x: number, y: number, s: number) {
  const n = Math.sin(x * 12.9898 + y * 78.233 + s * 43.12) * 43758.5453;
  return n - Math.floor(n);
}

function blobAlpha(age: number) {
  if (age < BLOB_EXPAND_MS) {
    const p = age / BLOB_EXPAND_MS;
    return 1 - Math.pow(1 - p, 3);
  }
  const holdEnd = BLOB_EXPAND_MS + BLOB_HOLD_MS;
  if (age < holdEnd) return 1;
  const fadeAge = age - holdEnd;
  if (fadeAge >= BLOB_FADE_MS) return 0;
  return 1 - fadeAge / BLOB_FADE_MS;
}

export default function InkCursor({ hostId }: { hostId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = document.getElementById(hostId);
    if (!canvas || !host) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let blobs: Blob[] = [];
    let prevX: number | null = null;
    let prevY: number | null = null;
    let lastDeposit = 0;
    let rafId: number | null = null;
    // Set on cleanup so a frame already queued for this effect run can't
    // draw after React has torn it down (StrictMode remounts immediately).
    let disposed = false;

    function resize() {
      const rect = host!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, W, H);
    }

    function paint(now: number) {
      const cols = Math.ceil(W / PIXEL);
      const rows = Math.ceil(H / PIXEL);
      const grid = new Float32Array(cols * rows);

      for (const blob of blobs) {
        const age = now - blob.born;
        const alpha = blobAlpha(age);
        if (alpha <= 0) continue;

        const expandP = Math.min(age / BLOB_EXPAND_MS, 1);
        const r = blob.maxR * (1 - Math.pow(1 - expandP, 3));
        if (r < 1) continue;

        const minCol = Math.max(0, Math.floor((blob.x - r - PIXEL) / PIXEL));
        const maxCol = Math.min(cols - 1, Math.ceil((blob.x + r + PIXEL) / PIXEL));
        const minRow = Math.max(0, Math.floor((blob.y - r - PIXEL) / PIXEL));
        const maxRow = Math.min(rows - 1, Math.ceil((blob.y + r + PIXEL) / PIXEL));

        for (let col = minCol; col <= maxCol; col++) {
          for (let row = minRow; row <= maxRow; row++) {
            const dx = col * PIXEL + PIXEL * 0.5 - blob.x;
            const dy = row * PIXEL + PIXEL * 0.5 - blob.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);
            const wobble =
              r *
              0.18 *
              (noise(Math.cos(angle) * 2.5, Math.sin(angle) * 2.5, blob.seed) - 0.5);

            if (dist < r + wobble) {
              const idx = row * cols + col;
              if (alpha > grid[idx]) grid[idx] = alpha;
            }
          }
        }
      }

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const a = grid[row * cols + col];
          if (a < 0.01) continue;
          const nv = noise(col, row, 42) * 10 - 5;
          const shade = Math.max(15, Math.min(60, SHADE_DARK + nv));
          ctx!.fillStyle = `rgba(${shade},${shade},${shade},${(a * BASE_ALPHA).toFixed(3)})`;
          ctx!.fillRect(col * PIXEL, row * PIXEL, PIXEL, PIXEL);
        }
      }
    }

    function render() {
      if (disposed) return;
      const now = performance.now();
      blobs = blobs.filter((b) => now - b.born < BLOB_LIFE);

      ctx!.clearRect(0, 0, W, H);

      if (blobs.length === 0) {
        rafId = null;
        return;
      }

      paint(now);
      rafId = requestAnimationFrame(render);
    }

    function deposit(x: number, y: number) {
      blobs.push({
        x,
        y,
        born: performance.now(),
        maxR: BLOB_MAX_R * (0.8 + Math.random() * 0.4),
        seed: Math.random() * 999,
      });
    }

    function onMove(e: MouseEvent) {
      const rect = host!.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const now = performance.now();
      if (now - lastDeposit < DEPOSIT_EVERY) return;
      lastDeposit = now;

      if (prevX !== null && prevY !== null) {
        const dx = mx - prevX;
        const dy = my - prevY;
        const steps = Math.max(1, Math.min(6, Math.floor(Math.sqrt(dx * dx + dy * dy) / 10)));
        for (let i = 1; i <= steps; i++) {
          deposit(prevX + dx * (i / steps), prevY + dy * (i / steps));
        }
      } else {
        deposit(mx, my);
      }
      prevX = mx;
      prevY = my;
      if (rafId === null) rafId = requestAnimationFrame(render);
    }

    function onLeave() {
      prevX = null;
      prevY = null;
    }

    resize();
    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    return () => {
      disposed = true;
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      ro.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
      blobs = [];
    };
  }, [hostId]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        /* No z-index. The legacy page asked for 2.5, which is not a valid
           z-index — browsers ignore it — so the canvas has always painted at
           auto, under the grain overlay (2) and the hero text (3). Kept as-is
           so the layering matches the live site. */
        pointerEvents: "none",
      }}
    />
  );
}
