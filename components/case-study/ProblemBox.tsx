import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

export default function ProblemBox({ children }: { children: ReactNode }) {
  return (
    <div className="problem-box">
      <p className="label">THE PROBLEM</p>
      <div className={styles.problemText}>{children}</div>
    </div>
  );
}
