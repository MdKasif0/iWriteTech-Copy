export const trackerId =
  process.env.NEXT_PUBLIC_HELLYEAH_TRACKER_ID ??
  process.env.NEXT_PUBLIC_TRACKER_ID ??
  "";

export const trackerEnv =
  process.env.NEXT_PUBLIC_HELLYEAH_TRACKER_ENV ??
  process.env.NEXT_PUBLIC_TRACKER_ENV ??
  "production";
