import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

/* A dark full-bleed band stating what the product stands for. Centred, and the
 * only dark section in a case study that uses it — it's a deliberate break in
 * the page rather than a recurring pattern.
 *
 * `label` names the band the way a Section label names a section. It sits
 * inside the band rather than in a left column, because the band is full bleed
 * and has no column to sit beside.
 *
 * The closing line and its link come in as plain strings rather than as a JSX
 * slot: MDX drops expression props silently, so `footer={<>…</>}` would arrive
 * undefined with nothing to show for it. Both are optional, and the rule above
 * them only renders when there is something to divide.
 */
export default function Pillars({
  label,
  title,
  footer,
  linkLabel,
  linkHref,
  children,
}: {
  label?: string;
  title: string;
  footer?: string;
  linkLabel?: string;
  linkHref?: string;
  children: ReactNode;
}) {
  const hasLink = Boolean(linkLabel && linkHref);
  const hasFooter = Boolean(footer) || hasLink;

  return (
    <section className={styles.pillars}>
      {label && <h2 className={styles.pillarsLabel}>{label}</h2>}
      <p className={styles.pillarsTitle}>{title}</p>
      <div className={styles.pillarsList}>{children}</div>

      {hasFooter && (
        <>
          <span className={styles.pillarsRule} />
          <div className={styles.pillarsFooter}>
            {footer && <p>{footer}</p>}
            {hasLink && (
              <p>
                <a href={linkHref} target="_blank" rel="noopener noreferrer">
                  {linkLabel}
                </a>
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
}
