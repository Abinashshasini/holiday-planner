/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes.
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// Must be dynamic — Sanity Studio cannot be statically pre-rendered
export const dynamic = "force-dynamic";

export default function StudioPage() {
  return (
    <div>
      <NextStudio config={config} />
    </div>
  );
}
