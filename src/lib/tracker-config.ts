export const trackerId =
  process.env.NEXT_PUBLIC_HELLYEAH_TRACKER_ID ??
  process.env.NEXT_PUBLIC_TRACKER_ID ??
  "019fac52-9342-7000-be75-c7819cde34f8";

export const trackerEnv =
  process.env.NEXT_PUBLIC_HELLYEAH_TRACKER_ENV ??
  process.env.NEXT_PUBLIC_TRACKER_ENV ??
  "prod";

export const serverTrackerEnv = process.env.HELLYEAH_TRACKER_ENV ?? trackerEnv;
