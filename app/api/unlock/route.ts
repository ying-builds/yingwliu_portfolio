import { NextResponse, type NextRequest } from "next/server";
import {
  UNLOCK_COOKIE,
  UNLOCK_MAX_AGE,
  UNLOCK_PATH,
  safeNext,
  unlockToken,
} from "../../../lib/protected";

/* Validates the shared password and issues the unlock cookie.
 *
 * The comparison happens here, on the server, and the password is read from the
 * environment — it is never sent to the browser and never written to the repo.
 */
export async function POST(request: NextRequest) {
  const form = await request.formData();
  const submitted = String(form.get("password") ?? "");
  const next = safeNext(String(form.get("next") ?? ""));

  const password = process.env.CASE_STUDY_PASSWORD;

  if (!password || submitted !== password) {
    const url = new URL(UNLOCK_PATH, request.url);
    url.searchParams.set("next", next);
    url.searchParams.set("error", "1");
    return NextResponse.redirect(url, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(next, request.url), {
    status: 303,
  });
  response.cookies.set({
    name: UNLOCK_COOKIE,
    value: await unlockToken(password),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: UNLOCK_MAX_AGE,
  });
  return response;
}
