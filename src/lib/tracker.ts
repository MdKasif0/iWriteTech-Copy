import { createXRay } from "@hellyeah/x-ray/server";
import { HELLYEAH_SERVER_TRACKER_ID } from "@/lib/xray";

export const tracker = createXRay(HELLYEAH_SERVER_TRACKER_ID, {
  env: process.env.HELLYEAH_TRACKER_ENV,
});

export function getVisitorIdFromCookie(cookieHeader: string | null) {
  const cookie = cookieHeader
    ?.split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("hy_attr="));

  if (!cookie) return undefined;

  try {
    const payload = JSON.parse(
      Buffer.from(decodeURIComponent(cookie.slice("hy_attr=".length)), "base64url").toString("utf8"),
    ) as { vid?: unknown };

    return typeof payload.vid === "string" ? payload.vid : undefined;
  } catch {
    return undefined;
  }
}

export { cv } from "@hellyeah/x-ray/server";
