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
  meta,
  mockup,
  mockupAlt,
}: {
  logo?: string;
  logoAlt?: string;
  meta: ProjectMeta;
  mockup: string;
  mockupAlt: string;
}) {
  const rows: [string, string][] = [
    ["ROLE", meta.role],
    ["TIMELINE", meta.timeline],
    ["TOOLS", meta.tools],
    ["TEAM", meta.team],
  ];

  return (
    <section className={styles.hero}>
      <span className={`${styles.ellipse} ${styles.ellipseOne}`} />
      <span className={`${styles.ellipse} ${styles.ellipseTwo}`} />
      <span className={`${styles.ellipse} ${styles.ellipseThree}`} />

      <div className={styles.heroInner}>
        <div className={styles.heroMeta}>
          {logo && (
            <Image
              src={logo}
              alt={logoAlt ?? ""}
              width={138}
              height={19}
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
