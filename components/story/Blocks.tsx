import type { ReactNode } from "react";
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
