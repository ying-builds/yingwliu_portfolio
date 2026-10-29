import type { ReactNode } from "react";
import Frame from "./Frame";
import styles from "./Story.module.css";

/* Open two or three column grid of short headed notes. No boxes. Set
   columns="3" for three across; anything else is two. */
export function Principles({
  columns,
  children,
}: {
  columns?: string;
  children: ReactNode;
}) {
  return (
    <div className={`${styles.principles} ${columns === "3" ? styles.three : ""}`}>
      {children}
    </div>
  );
}

/* A principle can hold several paragraphs, so the body is children rather
   than a string. */
export function Pr({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className={styles.lead}>{children}</p>;
}

export function Cap({ children }: { children: ReactNode }) {
  return <p className={styles.cap}>{children}</p>;
}

/* A titled block of one or two paragraphs, e.g. "The handoff". */
export function Blk({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={styles.blk}>
      <p className={styles.label}>{title}</p>
      {children}
    </div>
  );
}

export function Lesson({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={styles.lesson}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export function Evidence({ children }: { children: ReactNode }) {
  return <ul className={styles.evid}>{children}</ul>;
}

export function Ev({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li>
      <b>{title}</b>
      <span>{children}</span>
    </li>
  );
}

export function StoryStatus({ children }: { children: ReactNode }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.status}>
        <thead>
          <tr>
            <th scope="col">Piece</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function StoryRow({
  piece,
  status,
  live,
}: {
  piece: string;
  status: string;
  // A string, because MDX only delivers string props reliably.
  live?: string;
}) {
  return (
    <tr>
      <td>{piece}</td>
      <td>
        <span className={`${styles.pill} ${live === "true" ? styles.pillLive : ""}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

/* A strip of three big numbers, ruled above and below. */
export function StoryStats({ children }: { children: ReactNode }) {
  return <div className={styles.stats}>{children}</div>;
}

export function StoryStat({ value, children }: { value: string; children: ReactNode }) {
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>{value}</div>
      <p>{children}</p>
    </div>
  );
}

/* A client quote. String props, because MDX only delivers those reliably. */
export function StoryQuote({ text, who }: { text: string; who: string }) {
  return (
    <blockquote className={styles.quote}>
      <p>&ldquo;{text}&rdquo;</p>
      <p className={styles.label}>{who}</p>
    </blockquote>
  );
}

/* A small heading inside a section, e.g. the second topic under Product Guide. */
export function Sub({ children }: { children: ReactNode }) {
  return <h3 className={styles.sub}>{children}</h3>;
}

/* Two framed images side by side, each with a heading and a line. */
export function Picks({ children }: { children: ReactNode }) {
  return <div className={styles.picks}>{children}</div>;
}

export function Pick({
  title,
  src,
  alt,
  width,
  height,
  children,
}: {
  title: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  children: ReactNode;
}) {
  return (
    <figure>
      <h3>{title}</h3>
      <div className={styles.pickBody}>{children}</div>
      <Frame src={src} alt={alt} width={width} height={height} />
    </figure>
  );
}

/* A feature: its name and what it does on the left, a short portrait video on
   the right. For phone recordings, which would be far too tall at column width. */
export function Feature({
  title,
  video,
  poster,
  ratio,
  children,
}: {
  title: string;
  video: string;
  poster?: string;
  ratio?: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureText}>
        <h3>{title}</h3>
        {children}
      </div>
      <Frame video={video} poster={poster} ratio={ratio} />
    </div>
  );
}
