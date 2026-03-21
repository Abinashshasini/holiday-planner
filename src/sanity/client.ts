import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_READ_TOKEN;
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

export const sanityClient =
  projectId && projectId !== "your_project_id"
    ? createClient({
        projectId,
        dataset: dataset ?? "production",
        apiVersion: "2024-01-01",
        // useCdn:false so Next.js data-cache (not Sanity CDN) owns caching;
        // on-demand revalidation via webhook then works correctly.
        useCdn: false,
        ...(token && token !== "your_read_token" ? { token } : {}),
      })
    : null;

/** Server-only write client — never expose to the browser */
export const sanityWriteClient =
  projectId && projectId !== "your_project_id" && writeToken
    ? createClient({
        projectId,
        dataset: dataset ?? "production",
        apiVersion: "2024-01-01",
        useCdn: false,
        token: writeToken,
      })
    : null;
