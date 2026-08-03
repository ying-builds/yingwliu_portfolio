import type { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import ProjectHero, { type ProjectMeta } from "./ProjectHero";
import TitleBlock from "./TitleBlock";
import styles from "./CaseStudy.module.css";

export interface CaseStudyFrontmatter {
  title: string;
  client?: string;
  projectLabel?: string;
  dates: string;
  subheading: string;
  meta: ProjectMeta;
  heroLogo?: string;
  heroLogoAlt?: string;
  heroMockup: string;
  heroMockupAlt: string;
}

export default function CaseStudyTemplate({
  frontmatter,
  children,
}: {
  frontmatter: CaseStudyFrontmatter;
  children: ReactNode;
}) {
  return (
    <article>
      <Breadcrumb title={frontmatter.title} />
      <ProjectHero
        logo={frontmatter.heroLogo}
        logoAlt={frontmatter.heroLogoAlt}
        client={frontmatter.client}
        meta={frontmatter.meta}
        mockup={frontmatter.heroMockup}
        mockupAlt={frontmatter.heroMockupAlt}
      />
      <TitleBlock
        projectLabel={frontmatter.projectLabel}
        title={frontmatter.title}
        dates={frontmatter.dates}
        subheading={frontmatter.subheading}
      />
      <div className={styles.body}>{children}</div>
    </article>
  );
}
