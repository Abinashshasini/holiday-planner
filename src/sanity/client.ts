import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_READ_TOKEN;

export const sanityClient =
  projectId && projectId !== "your_project_id"
    ? createClient({
        projectId,
        dataset: dataset ?? "production",
        apiVersion: "2024-01-01",
        useCdn: true,
        ...(token && token !== "your_read_token" ? { token } : {}),
      })
    : null;
