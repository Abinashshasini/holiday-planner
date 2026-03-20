import { sanityClient } from "./client";
import imageUrlBuilder from "@sanity/image-url";

/** Build a URL from a Sanity image reference */
const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;
export function urlFor(
  source: Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0],
): string {
  return builder?.image(source).auto("format").url() ?? "";
}

export type SanityPackage = {
  _id: string;
  title: string;
  slug: { current: string };
  image: string; // resolved to a plain URL by GROQ
  location: string;
  duration: string;
  price: string;
  category: string;
  highlights: string[];
  overview: string;
  included: string[];
  excluded: string[];
  itinerary: { day: number; title: string; description: string }[];
  order?: number;
};

/** Fetch all packages ordered by `order` field, then by creation date */
const ALL_PACKAGES_QUERY = `
  *[_type == "package"] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    "image": image.asset->url,
    location,
    duration,
    price,
    category,
    highlights,
    overview,
    included,
    excluded,
    itinerary[] {
      day,
      title,
      description
    },
    order
  }
`;

/** Fetch a single package by its slug */
const PACKAGE_BY_SLUG_QUERY = `
  *[_type == "package" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    "image": image.asset->url,
    location,
    duration,
    price,
    category,
    highlights,
    overview,
    included,
    excluded,
    itinerary[] {
      day,
      title,
      description
    },
    order
  }
`;

export async function getAllPackages(): Promise<SanityPackage[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    ALL_PACKAGES_QUERY,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getPackageBySlug(
  slug: string,
): Promise<SanityPackage | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    PACKAGE_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } },
  );
}
