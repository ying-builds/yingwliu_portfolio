import type { ReactNode } from "react";
import styles from "./ClientSelfService.module.css";

/* Where each piece of the project ended up. Rows come in as <StatusRow>
   children so the MDX stays readable. */
export function StatusTable({ children }: { children: ReactNode }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.status}>
        <thead>
          <tr>
            <th scope="col">Piece</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function StatusRow({
  piece,
  status,
  live,
}: {
  piece: string;
  status: string;
  // A string, because MDX only delivers string props reliably.
  live?: string;
}) {
  const isLive = live === "true";
  return (
    <tr>
      <td>{piece}</td>
      <td>
        <span className={`${styles.pill} ${isLive ? styles.pillLive : ""}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
