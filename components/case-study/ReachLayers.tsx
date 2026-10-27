import styles from "./ClientSelfService.module.css";

/* How far my designs had to travel to reach the Salesforce developers. */
export default function ReachLayers() {
  return (
    <ol className={styles.layers} aria-label="Who I could reach">
      <li className={`${styles.layer} ${styles.layerMe}`}>
        <b>Me</b>
        <span>Design</span>
      </li>
      <li className={styles.layerLink}>via Product</li>
      <li className={styles.layer}>
        <b>Product</b>
        <span>Kari</span>
      </li>
      <li className={styles.layerLink}>only when concrete</li>
      <li className={`${styles.layer} ${styles.layerFaint}`}>
        <b>Salesforce developers</b>
        <span>rare, bottlenecked</span>
      </li>
    </ol>
  );
}
