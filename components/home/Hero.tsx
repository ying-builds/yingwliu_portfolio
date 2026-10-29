"use client";

import { useRef } from "react";
import styles from "./Hero.module.css";
import { ARTBOARD, NOTE, bean, hotspots } from "./hero-data";

/* The interactive journal hero.

   The scene is one flat background picture with the clickable pieces (headphones,
   cat sticker, passport photo, pen) laid on top, plus real text for everything
   readable. Positions are all multiples of `--u`, one artboard pixel, so the
   scene scales as a single piece. See hero-data.ts for where the numbers
   come from. */

// Turns an artboard number into CSS. One place, so the rest reads cleanly.
const u = (n: number) => `calc(${n} * var(--u))`;

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.hero} id="hero" aria-label="Introduction">
      <div className={styles.stage} ref={stageRef}>
        <img
          className={styles.background}
          src="/images/site/hero/background-v4.webp"
          width={ARTBOARD.width * 2}
          height={ARTBOARD.height * 2}
          alt=""
          fetchPriority="high"
        />

        <p className={styles.psst} style={{ left: u(278), top: u(260) }}>
          psst, poke around!
        </p>

        {/* The journal paragraph. Width matches the Figma text box so it wraps
            on the same words; the two hand-drawn underlines sit under
            "product designer". */}
        <h1
          className={styles.journal}
          /* Figma has this box at y=232; the browser sets Crimson Pro's baseline
              about 4px lower than Figma does, so it is nudged up to keep the
              underlines sitting where they were drawn. */
          style={{ left: u(852), top: u(233.5), width: u(183) }}
        >
          Ying is a <em>product</em> <em>designer</em> and an only child who
          learned to make sense of the world through creativity and play.
          <span className={styles.previously}>
            Previously at <span className={styles.company}>Ticketmaster</span>.
          </span>
        </h1>
        <span
          className={styles.underline}
          aria-hidden="true"
          style={{ left: u(932), top: u(258.5), width: u(67) }}
        />
        <span
          className={styles.underline}
          aria-hidden="true"
          style={{ left: u(855), top: u(283.5), width: u(67) }}
        />

        <p className={styles.petBean} style={{ left: u(1393.5), top: u(294.5) }}>
          pet bean!
        </p>

        {/* Bean: no picture of her here (she is in the background), only the
            hover area and the sparkles that pop above her. */}
        <div
          className={styles.bean}
          style={{ left: u(bean.x), top: u(bean.y), width: u(bean.w), height: u(bean.h) }}
          aria-hidden="true"
        >
          {bean.sparkles.map((s, i) => (
            <span
              key={i}
              className={`${styles.sparkle} ${
                s.tone === "butter" ? styles.butter : styles.cream
              }`}
              style={{
                left: u(s.x),
                top: u(s.y),
                width: u(s.w),
                height: u(s.h),
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>

        {hotspots.map((h) => {
          return (
            <div
              key={h.id}
              className={styles.spot}
              style={{ left: u(h.x), top: u(h.y), width: u(h.w), height: u(h.h) }}
              data-hotspot
            >
              <button
                type="button"
                className={styles.spotButton}
                aria-label={h.label}
              >
                <img
                  className={`${styles.art} ${styles[`wiggle${h.wiggle}`]}`}
                  src={h.art.src}
                  alt=""
                  style={{
                    left: u(h.art.x - h.x),
                    top: u(h.art.y - h.y),
                    width: u(h.art.w),
                    height: u(h.art.h),
                  }}
                />
              </button>
              {h.front && (
                <img
                  className={styles.front}
                  src={h.front.src}
                  alt=""
                  style={{
                    left: u(h.front.x - h.x),
                    top: u(h.front.y - h.y),
                    width: u(h.front.w),
                    height: u(h.front.h),
                  }}
                />
              )}
              <div
                className={styles.note}
                style={{
                  left: u(h.note.x - h.x),
                  top: u(h.note.y - h.y),
                  width: u(NOTE.w),
                  height: u(NOTE.h),
                }}
                role="note"
              >
                <img src={NOTE.src} alt="" />
                {h.note.cover && (
                  <img className={styles.cover} src={h.note.cover} alt="" />
                )}
                <p className={h.note.cover ? styles.withCover : undefined}>
                  {h.note.lines.map((l) => (
                    <span key={l.text} style={{ fontSize: u(l.size) }}>
                      {l.text}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
