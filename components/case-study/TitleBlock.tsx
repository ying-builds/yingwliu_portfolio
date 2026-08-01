import styles from "./CaseStudy.module.css";

export default function TitleBlock({
  projectLabel = "PROJECT",
  title,
  dates,
  subheading,
}: {
  projectLabel?: string;
  title: string;
  dates: string;
  subheading: string;
}) {
  return (
    <div className={styles.titleBlock}>
      <div className={styles.titleCol}>
        <p className="label">{projectLabel}</p>
        <h1 className="project-title">{title}</h1>
        <p className={styles.titleDates}>{dates}</p>
      </div>
      <div className={styles.subheadCol}>
        <h3>{subheading}</h3>
      </div>
    </div>
  );
}
