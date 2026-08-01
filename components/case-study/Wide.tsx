import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

export default function Wide({ children }: { children: ReactNode }) {
  return <div className={`${styles.wide} ${styles.plainText}`}>{children}</div>;
}
