import { createXRay } from "@hellyeah/x-ray/server";
import { trackerEnv, trackerId } from "@/lib/tracker-config";

export const tracker = createXRay(trackerId, {
  env: trackerEnv,
});

export { cv } from "@hellyeah/x-ray/server";
