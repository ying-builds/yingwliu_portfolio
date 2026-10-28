"use client";

import { useEffect, useState } from "react";

/* "Wed, Oct 28 · 3:42 PM", live, in Sacramento time whatever the visitor's own
   clock says.

   It only fills in after the page loads. Rendering it on the server would bake
   in whatever minute the page was built, and the browser would then disagree
   with it. Until then the text is there but invisible, so the line doesn't
   jump when it appears. */

const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  weekday: "short",
  month: "short",
  day: "numeric",
});

const timeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "2-digit",
});

type Props = { className?: string };

export default function SacramentoClock({ className }: Props) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setText(`${dateFormat.format(now)} · ${timeFormat.format(now)}`);
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={className} style={{ visibility: text ? "visible" : "hidden" }}>
      {text ?? "Wed, Oct 28 · 12:00 PM"}
    </p>
  );
}
