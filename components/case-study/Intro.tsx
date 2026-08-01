import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

export default function Intro({ children }: { children: ReactNode }) {
  return (
    <div className="caption-block">
      <p className="label">INTRODUCTION</p>
      <div className={styles.plainText}>{children}</div>
    </div>
  );
}
