import { NextRequest, NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
  accept?: boolean;
};

export async function POST(req: NextRequest) {
  try {
    const uid = process.env.CONTACT_UID;
    const client_key = process.env.CONTACT_CLIENT_KEY;
    const endpoint = process.env.CONTACT_ENDPOINT;

    if (!uid || !client_key || !endpoint) {
      return NextResponse.json(
        { ok: false, error: "Server not configured" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as ContactBody;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const mobile = body.mobile?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const accept = Boolean(body.accept);

    if (!name || !message || (!email && !mobile) || !accept) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Name, message, acceptance and either email or mobile are required",
        },
        { status: 400 }
      );
    }

    const payload = {
      uid,
      client_key,
      name,
      email,
      mobile,
      message,
      accept,
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        {
          ok: false,
          error: "Upstream error",
          details: text.slice(0, 300),
        },
        { status: 502 }
      );
    }

    const data = await res.json().catch(() => null);

    return NextResponse.json({ ok: true, data });
  } catch (error) {
    console.error("[contact] error:", error);
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}