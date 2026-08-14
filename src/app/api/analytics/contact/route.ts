import { NextResponse } from "next/server";
import { cv, tracker } from "@/lib/tracker";

const subjectValues = new Set(["general", "feedback", "partnership", "other"]);

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^\S+@\S+\.\S+$/.test(value);
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { email, subject, visitorId } = payload as Record<string, unknown>;

  if (!isValidEmail(email) || typeof subject !== "string" || !subjectValues.has(subject)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  await tracker.trackImmediate(cv.contact, {
    distinctId: email,
    identity: { email },
    visitorId: typeof visitorId === "string" && visitorId ? visitorId : undefined,
    metadata: {
      form_id: "contact",
      subject,
      completion_channel: "netlify_form",
    },
  });

  return NextResponse.json({ ok: true });
}
