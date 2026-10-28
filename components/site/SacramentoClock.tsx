"use client";

import { useEffect, useState } from "react";

/* "Sacramento, CA · 3:18 PM", live. The time is the visitor's view of
   Sacramento time, whatever their own clock says.

   It only fills in after the page loads. Rendering the time on the server would
   bake in whatever minute the page was built, and the browser would then
   disagree with it. Until then the time is there but invisible, so the line
   doesn't jump when it appears. */

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "2-digit",
});

type Props = { className?: string; timeClassName?: string };

export default function SacramentoClock({ className, timeClassName }: Props) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={className}>
      Sacramento, CA ·{" "}
      <span
        className={timeClassName}
        style={{ visibility: time ? "visible" : "hidden" }}
      >
        {time ?? "12:00 PM"}
      </span>
    </p>
  );
}
