import styles from "./CaseStudy.module.css";

export default function Breadcrumb({ title }: { title: string }) {
  return (
    <p className={styles.breadcrumb}>
      <span className={styles.all}>All work / </span>
      {title}
    </p>
  );
}
