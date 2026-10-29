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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.lock}
          src="/images/site/unlock-lock.png"
          width={224}
          height={346}
          alt=""
        />

        <h1 className={styles.title}>This case study is private</h1>

        <p className={styles.copy}>
          Input the password on my resume (top right) below to continue.
        </p>

        <form className={styles.form} action="/api/unlock" method="POST">
          <input type="hidden" name="next" value={next} />
          <div className={styles.field}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              autoFocus
              required
              className={styles.input}
            />
            {/* Sits inside the box at the right. Dim at rest, brighter when the
                box is hovered or filled, brightest and sliding right when the
                arrow itself is hovered. Pressing it (or Enter) submits. */}
            <button type="submit" className={styles.go} aria-label="View case study">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M4 12h15M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {hasError && (
            <p className={styles.error}>
              That password didn&apos;t work, try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
