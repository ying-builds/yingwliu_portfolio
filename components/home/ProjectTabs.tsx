"use client";

import { useEffect, useState } from "react";
import styles from "./ProjectTabs.module.css";
import type { AiCard, PlayTile, WorkCard } from "../../app/home-data";

/* The Work / Play / AI section under the hero. One page, three tabs: the URL
   stays on the site root. A #work, #play or #ai in the address picks the tab,
   so the nav's "Work" link and any shared link land in the right place.

   Every panel is in the HTML (the inactive ones are just hidden), so nothing
   depends on JavaScript to be found by a search engine. */

type TabId = "work" | "play" | "ai";
const TABS: { id: TabId; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "play", label: "Play" },
  { id: "ai", label: "AI" },
];

// A work card with its description already filled in (page.tsx does that).
export type WorkCardView = WorkCard & { description: string };

type Props = {
  work: WorkCardView[];
  play: PlayTile[];
  ai: AiCard[];
};

function fromHash(): TabId | null {
  const h = window.location.hash.replace("#", "");
  return TABS.some((t) => t.id === h) ? (h as TabId) : null;
}

export default function ProjectTabs({ work, play, ai }: Props) {
  const [tab, setTab] = useState<TabId>("work");

  // Pick up a #play / #ai link on load and when the hash changes.
  useEffect(() => {
    const sync = () => {
      const t = fromHash();
      if (t) setTab(t);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const choose = (id: TabId) => {
    setTab(id);
    // Keep the address in step without jumping the page.
    history.replaceState(null, "", id === "work" ? "/#work" : `/#${id}`);
  };

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = TABS[(i + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length];
    choose(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <section className={styles.band} id="work">
      <div className={styles.inner}>
        <div className={styles.tabs} role="tablist" aria-label="Projects">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === t.id ? 0 : -1}
              className={styles.tab}
              onClick={() => choose(t.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          id="panel-work"
          role="tabpanel"
          aria-labelledby="tab-work"
          hidden={tab !== "work"}
          className={styles.cards}
        >
          {work.map((c) => (
            <Card key={c.id} card={c} />
          ))}
        </div>

        <div
          id="panel-play"
          role="tabpanel"
          aria-labelledby="tab-play"
          hidden={tab !== "play"}
          className={styles.masonry}
        >
          {[0, 1, 2].map((col) => (
            <div key={col} className={styles.column}>
              {play
                .filter((p) => p.column === col)
                .map((p) => (
                  <Tile key={p.id} tile={p} />
                ))}
            </div>
          ))}
        </div>

        <div
          id="panel-ai"
          role="tabpanel"
          aria-labelledby="tab-ai"
          hidden={tab !== "ai"}
          className={styles.cards}
        >
          {ai.map((c) => (
            <Card
              key={c.id}
              card={{
                ...c,
                id: c.id,
                tags: c.tags,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type CardData = {
  id: string;
  company: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
  imageAlt?: string;
  locked?: boolean;
};

function Card({ card }: { card: CardData }) {
  const body = (
    <>
      <div className={styles.cover}>
        {card.image ? (
          <img src={card.image} alt={card.imageAlt ?? ""} loading="lazy" />
        ) : null}
      </div>
      <div className={styles.caption}>
        <p className={styles.company}>{card.company}</p>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.description}>{card.description}</p>
        <p className={styles.tags}>
          {card.locked ? (
            <svg
              className={styles.lock}
              viewBox="0 0 12 12"
              role="img"
              aria-label="Private, password protected"
              focusable="false"
            >
              <rect x="2" y="5.25" width="8" height="5.5" rx="1" />
              <path d="M4 5.25V3.75a2 2 0 0 1 4 0v1.5" />
            </svg>
          ) : null}
          {card.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </p>
      </div>
    </>
  );

  return card.href ? (
    <a
      className={`${styles.card} ${styles.cardLink}`}
      href={card.href}
      target="_blank"
      rel="noopener"
    >
      {body}
    </a>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}

function Tile({ tile }: { tile: PlayTile }) {
  const inner = (
    <>
      <img
        src={tile.image}
        alt={tile.alt}
        loading="lazy"
        style={tile.zoom ? { transform: `translate(-0.65%, -1.19%) scale(${tile.zoom})`, transformOrigin: "top left" } : undefined}
      />
      <span className={styles.pill}>
        {/* Only the tiles that open somewhere get an arrow, in front of the title. */}
        {tile.href ? (
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        ) : null}
        <span className={styles.pillText}>
          {tile.name ? <strong className={styles.pillTitle}>{tile.name}</strong> : null}
          {tile.tags.length ? <span className={styles.pillTags}>{tile.tags.join(" · ")}</span> : null}
        </span>
      </span>
    </>
  );
  const style = { aspectRatio: `528 / ${tile.height}` };

  return tile.href ? (
    <a
      className={`${styles.tile} ${styles.tileLink}`}
      style={style}
      href={tile.href}
      target="_blank"
      rel="noopener"
    >
      {inner}
    </a>
  ) : (
    <div className={styles.tile} style={style}>
      {inner}
    </div>
  );
}
