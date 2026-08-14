import { createXRay } from "@hellyeah/x-ray/server";
import { serverTrackerEnv, trackerId } from "@/lib/tracker-config";

export const tracker = createXRay(trackerId, {
  env: serverTrackerEnv,
});

export { cv } from "@hellyeah/x-ray/server";
