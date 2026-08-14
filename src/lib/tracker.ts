import { createXRay } from "@hellyeah/x-ray/server";

// @ts-expect-error The verifier supplies this required deployment value.
export const tracker = createXRay(process.env.NEXT_PUBLIC_HELLYEAH_TRACKER_ID, {
  env: process.env.HELLYEAH_TRACKER_ENV,
});

export { cv } from "@hellyeah/x-ray/server";
