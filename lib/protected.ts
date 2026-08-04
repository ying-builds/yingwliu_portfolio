/* Which case studies sit behind the shared password, and the plumbing both the
 * middleware and the unlock route need to agree on.
 *
 * The password itself is never in this repo. It comes from CASE_STUDY_PASSWORD
 * in the environment and is only ever compared on the server, so it reaches
 * neither the client bundle nor git history.
 */

export const PROTECTED_SLUGS = ["product-education-guide"] as const;

/* Assets for a protected case study live outside public/ and are served
 * through this route, which checks the same cookie the page does. */
export const PROTECTED_MEDIA_PREFIX = "/protected-media";

export const UNLOCK_COOKIE = "cs_unlock";
export const UNLOCK_PATH = "/unlock";

/* Thirty days. Long enough that someone reviewing the work over a few sessions
 * isn't asked twice, short enough that a borrowed laptop doesn't stay unlocked
 * indefinitely. */
export const UNLOCK_MAX_AGE = 60 * 60 * 24 * 30;

export function isProtectedSlug(slug: string): boolean {
  return (PROTECTED_SLUGS as readonly string[]).includes(slug);
}

/* The cookie holds a digest rather than the password, so a glance at devtools
 * doesn't hand over the password itself. Web Crypto is what's available on the
 * edge runtime, hence async. */
export async function unlockToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`ying-portfolio:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/* Only ever send someone back to a case study page. Without this an attacker
 * could hand out /unlock?next=https://evil.example and use the site as an open
 * redirect once the visitor unlocks. */
export function safeNext(next: string | null): string {
  if (!next) return "/";
  if (!next.startsWith("/work/")) return "/";
  if (next.startsWith("//")) return "/";
  return next;
}
