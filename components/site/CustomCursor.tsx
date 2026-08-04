"use client";

import { useEffect, useRef } from "react";

/* Ring-and-dot cursor replacing the system one, growing over anything
   interactive.

   The legacy version attached enter/leave listeners to every link at load.
   That snapshot goes stale the moment React renders anything new, so this
   uses one delegated pair of listeners on the document instead — elements
   that mount later are picked up for free. */

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary';

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;

    // Pointer-less devices keep their native behavior.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("cursor-host");

    function onMove(e: MouseEvent) {
      dot!.style.left = `${e.clientX}px`;
      dot!.style.top = `${e.clientY}px`;
    }

    function onOver(e: MouseEvent) {
      const t = e.target as Element | null;
      if (t?.closest?.(INTERACTIVE)) dot!.classList.add("hovering");
    }

    function onOut(e: MouseEvent) {
      const t = e.target as Element | null;
      if (t?.closest?.(INTERACTIVE)) dot!.classList.remove("hovering");
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("cursor-host");
    };
  }, []);

  return <div ref={ref} className="custom-cursor" aria-hidden="true" />;
}
