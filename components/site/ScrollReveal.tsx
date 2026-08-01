"use client";

import { useEffect } from "react";

/* Reveals .fade-up elements as they scroll into view.

   The hiding styles live behind .reveal-ready, which this adds at runtime.
   That ordering matters: if the CSS hid them up front and this script ever
   failed to run, the page would stay permanently blank. Hidden is opt-in,
   so the no-JS outcome is "everything visible" rather than "nothing". */

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".fade-up"));
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // leave everything visible

    els.forEach((el, i) => {
      el.classList.add("reveal-ready");
      el.style.transitionDelay = `${i * 0.08}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      els.forEach((el) => {
        el.classList.remove("reveal-ready", "visible");
        el.style.transitionDelay = "";
      });
    };
  }, []);

  return null;
}
