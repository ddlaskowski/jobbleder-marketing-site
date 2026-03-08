import { NextRequest, NextResponse } from "next/server";

type FootprintBody = {
  view?: string;
};

export async function POST(req: NextRequest) {
  try {
    const uid = process.env.CONTACT_UID;
    const endpoint = process.env.FOOTPRINT_ENDPOINT;

    if (!uid || !endpoint) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const body = (await req.json().catch(() => ({}))) as FootprintBody;

    const payload = {
      uid,
      view: body.view ?? "unknown_view",
    };

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    }).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}