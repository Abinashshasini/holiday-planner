import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/revalidate
 *
 * Called by a Sanity webhook whenever content changes.
 * Invalidates all Next.js cache entries tagged "sanity" so the
 * next visitor gets freshly-built pages without a full redeploy.
 *
 * Sanity webhook setup (sanity.io/manage → API → Webhooks):
 *   URL:    https://www.holidayplanners.co/api/revalidate
 *   Method: POST
 *   Filter: (leave blank to revalidate on any change)
 *   Secret: set a random string and add it as SANITY_WEBHOOK_SECRET
 *           in your Vercel environment variables
 *   Header:  x-sanity-webhook-secret: <your-secret>
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;

  // Reject requests that don't carry the correct secret
  if (secret) {
    const incomingSecret = req.headers.get("x-sanity-webhook-secret");
    if (incomingSecret !== secret) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }
  }

  revalidateTag("sanity", "default");

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}
