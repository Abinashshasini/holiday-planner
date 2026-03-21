import { NextRequest, NextResponse } from "next/server";
import { sanityWriteClient } from "@/sanity/client";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, number, message } = body ?? {};
  console.log(" name, number, message: ", name, number, message);

  // Basic server-side validation
  if (
    typeof name !== "string" ||
    !/^[a-zA-Z\s]{3,60}$/.test(name) ||
    typeof number !== "string" ||
    !/^[6-9]\d{9}$/.test(number)
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  if (!sanityWriteClient) {
    console.error(
      "[/api/leads] sanityWriteClient is null — check SANITY_API_WRITE_TOKEN in .env.local",
    );
    return NextResponse.json(
      { error: "Write client not configured" },
      { status: 503 },
    );
  }

  try {
    const response = await sanityWriteClient.create({
      _type: "lead",
      name: name.trim(),
      number: number.trim(),
      message: typeof message === "string" ? message.trim().slice(0, 200) : "",
      submittedAt: new Date().toISOString(),
      status: "new",
    });
    console.log("Sanity response:", response);
  } catch (err: any) {
    console.error("[/api/leads] Sanity write failed:", err?.message ?? err);
    return NextResponse.json(
      { error: err?.message ?? "Sanity write failed" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
