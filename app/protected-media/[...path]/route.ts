import fs from "node:fs";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { UNLOCK_COOKIE, unlockToken } from "../../../lib/protected";

/* Serves the assets belonging to a protected case study.
 *
 * They live in private/ rather than public/, so they have no URL of their own —
 * this route is the only way to reach them, and it checks the same cookie the
 * page does. Without it the writing would be gated while every mockup stayed
 * one direct link away.
 */

const ROOT = path.join(process.cwd(), "private");

const TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const password = process.env.CASE_STUDY_PASSWORD;
  const cookie = request.cookies.get(UNLOCK_COOKIE)?.value;
  const ok = Boolean(password) && cookie === (await unlockToken(password!));

  // 404 rather than 401: a locked visitor learns nothing about what exists.
  if (!ok) return new NextResponse(null, { status: 404 });

  const { path: segments } = await params;
  const target = path.join(ROOT, ...segments);

  // Resolve before comparing, so ../ in the URL cannot walk out of private/.
  const resolved = path.resolve(target);
  if (!resolved.startsWith(path.resolve(ROOT) + path.sep)) {
    return new NextResponse(null, { status: 404 });
  }
  if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
    return new NextResponse(null, { status: 404 });
  }

  const body = fs.readFileSync(resolved);
  return new NextResponse(new Uint8Array(body), {
    headers: {
      "Content-Type": TYPES[path.extname(resolved).toLowerCase()] ?? "application/octet-stream",
      "Content-Length": String(body.length),
      // private: cached in the visitor's browser, never in a shared CDN cache
      // where it could outlive their access.
      "Cache-Control": "private, max-age=3600",
    },
  });
}
