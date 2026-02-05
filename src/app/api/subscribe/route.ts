import { NextResponse } from "next/server";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID; // optional: add to specific group

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!MAILERLITE_API_KEY) {
      console.error("MAILERLITE_API_KEY is not set");
      return NextResponse.json(
        { error: "Subscription service is not configured" },
        { status: 503 }
      );
    }

    const url = MAILERLITE_GROUP_ID
      ? `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`
      : "https://api.mailerlite.com/api/v2/subscribers";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("MailerLite API error", res.status, data);
      return NextResponse.json(
        { error: data?.message || "Could not add subscriber" },
        { status: res.status >= 500 ? 502 : 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe API error", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
