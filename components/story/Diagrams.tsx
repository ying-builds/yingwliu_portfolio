import styles from "./Story.module.css";

/* Diagrams for the Client Self-Service case study, redrawn in the story
   layout's tokens. They hold fixed copy for that one project, so they live
   here rather than as general blocks. */

/* A stuck client has three paths, and only one of them is self-service. The
   SVG is for wider screens and a plain list stands in on phones. */
export function StoryPaths() {
  return (
    <figure className={styles.fig}>
      <svg
        className={`${styles.diagram} ${styles.diagramPaths}`}
        viewBox="0 0 760 330"
        role="img"
        aria-label="A stuck client has three paths. Searching the site is self-service. Emailing a CSS and submitting a case both need a person."
      >
        <rect className={`${styles.node} ${styles.nodeMe}`} x="8" y="125" width="190" height="80" rx="4" />
        <text className={`${styles.t1} ${styles.t1Inv}`} x="28" y="160">A client is stuck</text>
        <text className={`${styles.t2} ${styles.t2Inv}`} x="28" y="182">7 clients, 3 paths</text>
        <path className={`${styles.arrow} ${styles.arrowGood}`} d="M198 165 C 300 165, 330 52, 462 52" />
        <path className={styles.arrow} d="M198 165 L 462 165" />
        <path className={styles.arrow} d="M198 165 C 300 165, 330 278, 462 278" />
        <rect className={`${styles.node} ${styles.nodeGood}`} x="462" y="10" width="290" height="84" rx="4" />
        <text className={styles.t3} x="480" y="34">SELF-SERVICE</text>
        <text className={styles.t1} x="480" y="58">Search the site</text>
        <text className={styles.t2} x="480" y="78">The path we wanted</text>
        <rect className={styles.node} x="462" y="123" width="290" height="84" rx="4" />
        <text className={`${styles.t3} ${styles.t3Dim}`} x="480" y="147">NEEDS A PERSON</text>
        <text className={styles.t1} x="480" y="171">Email their CSS</text>
        <text className={styles.t2} x="480" y="191">The CSS logs the case by hand</text>
        <rect className={styles.node} x="462" y="236" width="290" height="84" rx="4" />
        <text className={`${styles.t3} ${styles.t3Dim}`} x="480" y="260">NEEDS A PERSON</text>
        <text className={styles.t1} x="480" y="284">Submit a case</text>
        <text className={styles.t2} x="480" y="304">A support agent picks it up</text>
      </svg>
      <ul className={styles.pathsM} aria-label="A stuck client has three paths">
        <li className={styles.pathGood}>
          <p className={styles.label}>Self-service</p>
          <b>Search the site</b>
          <span>The path we wanted</span>
        </li>
        <li>
          <p className={styles.label}>Needs a person</p>
          <b>Email their CSS</b>
          <span>The CSS logs the case by hand</span>
        </li>
        <li>
          <p className={styles.label}>Needs a person</p>
          <b>Submit a case</b>
          <span>A support agent picks it up</span>
        </li>
      </ul>
    </figure>
  );
}

/* Who the designer could reach on the platform: product, and only
   occasionally the Salesforce developers. */
export function StoryLayers() {
  return (
    <div className={styles.layers} role="img" aria-label="Who I could reach: me, then Product (Kari), then rarely the Salesforce developers">
      <div className={`${styles.layerNode} ${styles.layerMe}`}><b>Me</b><span>Design</span></div>
      <div className={styles.layerLink}><span>via Product</span></div>
      <div className={styles.layerNode}><b>Product</b><span>Kari</span></div>
      <div className={`${styles.layerLink} ${styles.layerNarrow}`}><span>only when concrete</span></div>
      <div className={`${styles.layerNode} ${styles.layerDash}`}><b>Salesforce developers</b><span>rare, bottlenecked</span></div>
    </div>
  );
}
