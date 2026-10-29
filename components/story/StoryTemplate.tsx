import type { ReactNode } from "react";
import Frame from "./Frame";
import styles from "./Story.module.css";

export interface StoryFrontmatter {
  title: string;
  client?: string;
  readTime?: string;
  subheading: string;
  meta?: { role?: string; timeline?: string; tools?: string; team?: string };
  short?: string;
  heroVideo?: string;
  heroPoster?: string;
  heroCaption?: string;
  heroRatio?: string;
  // A still hero, for case studies without a video. Strings, like the MDX props.
  heroImage?: string;
  heroImageAlt?: string;
  heroImageWidth?: string;
  heroImageHeight?: string;
}

// Meta values are plain text, but a name can be written as [Name](https://...)
// and becomes a link.
function withLinks(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
    return m ? (
      <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer">
        {m[1]}
      </a>
    ) : (
      part
    );
  });
}

/* The page shell for the story layout: crumbs, title, one-line summary, meta
   row, "the short version" and the hero video. The sections follow as MDX. */
export default function StoryTemplate({
  frontmatter: f,
  children,
}: {
  frontmatter: StoryFrontmatter;
  children: ReactNode;
}) {
  // Frontmatter is hand-written, so any meta row may be missing. Missing rows
  // are dropped rather than rendered as empty labels.
  const rows = (
    [
      ["Role", f.meta?.role],
      ["Timeline", f.meta?.timeline],
      ["Tools", f.meta?.tools],
      ["Team", f.meta?.team],
    ] as [string, string | undefined][]
  ).filter((row): row is [string, string] => Boolean(row[1]));

  // The short version may carry one emphasised phrase, written *like this*.
  const short = (f.short ?? "").split(/\*([^*]+)\*/);

  return (
    <article className={styles.story}>
      <header className={`${styles.wrap} ${styles.hero}`}>
        <p className={styles.crumbs}>
          <a href="/#work">All work</a>
          {f.client ? <> / <b>{f.client}</b></> : null}
          {f.readTime ? <> / {f.readTime}</> : null}
        </p>
        <h1 className={styles.title}>{f.title}</h1>
        <p className={styles.lede}>{f.subheading}</p>

        {rows.length > 0 && (
          <div className={styles.meta}>
            {rows.map(([label, value]) => (
              <div key={label}>
                <p className={styles.label}>{label}</p>
                <p>{withLinks(value)}</p>
              </div>
            ))}
          </div>
        )}

        {f.short && (
          <div className={styles.short}>
            <div>
              <p className={styles.label}>The short version</p>
            </div>
            <p className={styles.big}>
              {short.map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))}
            </p>
          </div>
        )}

        {!f.heroVideo && f.heroImage && (
          <Frame
            src={f.heroImage}
            alt={f.heroImageAlt}
            width={f.heroImageWidth}
            height={f.heroImageHeight}
            caption={f.heroCaption}
          />
        )}

        {f.heroVideo && (
          <Frame
            video={f.heroVideo}
            poster={f.heroPoster}
            caption={f.heroCaption}
            loop="true"
            ratio={f.heroRatio}
          />
        )}
      </header>
      {children}
    </article>
  );
}
