import Image from "next/image";
import styles from "./CaseStudy.module.css";

export interface ProjectMeta {
  role: string;
  timeline: string;
  tools: string;
  team: string;
}

export default function ProjectHero({
  logo,
  logoAlt,
  client,
  meta,
  mockup,
  mockupAlt,
}: {
  logo?: string;
  logoAlt?: string;
  client?: string;
  meta?: ProjectMeta;
  mockup: string;
  mockupAlt: string;
}) {
  // Frontmatter is hand-written, so meta or any row within it may be absent.
  // Missing rows are dropped rather than rendering empty labels, and an
  // absent meta block no longer fails the build.
  const rows: [string, string][] = (
    [
      ["ROLE", meta?.role],
      ["TIMELINE", meta?.timeline],
      ["TOOLS", meta?.tools],
      ["TEAM", meta?.team],
    ] as [string, string | undefined][]
  ).filter((row): row is [string, string] => Boolean(row[1]));

  // The blue circles are Ticketmaster's brand device, not a decoration the
  // template offers. Keyed off the client rather than a boolean flag, so no
  // other case study can switch them on for itself.
  const isTicketmaster = client?.trim().toLowerCase() === "ticketmaster";

  return (
    <section className={styles.hero}>
      {isTicketmaster && (
        <>
          <span className={`${styles.ellipse} ${styles.ellipseOne}`} />
          <span className={`${styles.ellipse} ${styles.ellipseTwo}`} />
          <span className={`${styles.ellipse} ${styles.ellipseThree}`} />
        </>
      )}

      <div className={styles.heroInner}>
        <div className={styles.heroMeta}>
          {logo && (
            <Image
              src={logo}
              alt={logoAlt ?? ""}
              width={352}
              height={48}
              className={styles.heroLogo}
            />
          )}
          <div className="meta-details-dark">
            {rows.map(([label, value], i) => (
              <div key={label}>
                {i > 0 && <div className="divider" />}
                <p className="meta-label">{label}</p>
                <p className="meta-value">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mockupFrame}>
          <Image src={mockup} alt={mockupAlt} width={551} height={392} />
        </div>
      </div>
    </section>
  );
}
