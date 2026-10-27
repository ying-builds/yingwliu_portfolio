import styles from "./ClientSelfService.module.css";

/* The three things a stuck client can do. Only the first is self-service, and
   that contrast is the whole point, so the first card is drawn dark. Written
   as a list so a screen reader hears three options rather than a picture. */
export default function PathsDiagram() {
  return (
    <ul className={styles.paths} aria-label="A stuck client has three paths">
      <li className={`${styles.path} ${styles.pathGood}`}>
        <span className={styles.pathTag}>Self-service</span>
        <span className={styles.pathTitle}>Search the site</span>
        <span className={styles.pathNote}>The path we wanted</span>
      </li>
      <li className={styles.path}>
        <span className={styles.pathTag}>Needs a person</span>
        <span className={styles.pathTitle}>Email their CSS</span>
        <span className={styles.pathNote}>The CSS logs the case by hand</span>
      </li>
      <li className={styles.path}>
        <span className={styles.pathTag}>Needs a person</span>
        <span className={styles.pathTitle}>Submit a case</span>
        <span className={styles.pathNote}>A support agent picks it up</span>
      </li>
    </ul>
  );
}
