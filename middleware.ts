import { NextResponse, type NextRequest } from "next/server";
import {
  PROTECTED_MEDIA_PREFIX,
  UNLOCK_COOKIE,
  UNLOCK_PATH,
  isProtectedSlug,
  unlockToken,
} from "./lib/protected";

/* Gates the protected case studies and their assets.
 *
 * This runs before Vercel serves the prerendered page, so the case study can
 * stay statically generated and still never reach an unauthenticated visitor —
 * the HTML is not sent at all, rather than sent and hidden.
 */

async function isUnlocked(request: NextRequest): Promise<boolean> {
  const password = process.env.CASE_STUDY_PASSWORD;
  // No password configured means the gate cannot be satisfied. Fail closed:
  // a misconfigured environment should hide the work, not publish it.
  if (!password) return false;

  const cookie = request.cookies.get(UNLOCK_COOKIE)?.value;
  if (!cookie) return false;

  return cookie === (await unlockToken(password));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(`${PROTECTED_MEDIA_PREFIX}/`)) {
    // The media route does its own check; this is here so a locked visitor
    // never even reaches it.
    if (await isUnlocked(request)) return NextResponse.next();
    return new NextResponse(null, { status: 404 });
  }

  const slug = pathname.replace(/^\/work\//, "").replace(/\/$/, "");
  if (!isProtectedSlug(slug)) return NextResponse.next();

  if (await isUnlocked(request)) return NextResponse.next();

  // Rewrite rather than redirect: the visitor keeps the case study's URL, so
  // unlocking lands them where they meant to go and a shared link still works.
  const url = request.nextUrl.clone();
  url.pathname = UNLOCK_PATH;
  url.search = `?next=${encodeURIComponent(pathname)}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/work/:slug", "/protected-media/:path*"],
};
