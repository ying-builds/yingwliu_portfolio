import type { Metadata } from "next";
import styles from "./page.module.css";
import { safeNext } from "../../lib/protected";

export const metadata: Metadata = {
  title: "Password required — Ying Liu",
  // Keeps this gate itself out of search results — there is nothing here
  // worth indexing, and it would otherwise be the page Google shows for a
  // protected case study's URL.
  robots: { index: false, follow: false },
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;
  const next = safeNext(params.next ?? null);
  const hasError = params.error === "1";

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div>
          <p className={styles.label}>Password required</p>
          <h1 className={styles.title}>This case study is shared privately</h1>
        </div>

        <p className={styles.copy}>
          Input the password on my resume (top right) below to continue.
        </p>

        <form className={styles.form} action="/api/unlock" method="POST">
          <input type="hidden" name="next" value={next} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoFocus
            required
            className={styles.input}
          />
          {hasError && (
            <p className={styles.error}>
              That password didn&apos;t work — try again.
            </p>
          )}
          <button type="submit" className={styles.submit}>
            View case study
          </button>
        </form>
      </div>
    </div>
  );
}
