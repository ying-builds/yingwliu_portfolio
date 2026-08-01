import styles from "./CaseStudy.module.css";

export default function Breadcrumb({ title }: { title: string }) {
  return (
    <p className={styles.breadcrumb}>
      {/* The separating space lives inside the title span, not as a text node
          between the two — flex drops whitespace-only nodes between siblings. */}
      <a className={styles.all} href="/#work">
        All work /
      </a>
      <span>&nbsp;{title}</span>
    </p>
  );
}
