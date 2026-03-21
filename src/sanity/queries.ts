import { sanityClient } from "./client";

export type SanityPackage = {
  _id: string;
  title: string;
  slug: { current: string };
  image: string; // resolved to a plain URL by GROQ
  location: string;
  duration: string;
  /** Formatted display price, e.g. "₹12,999" — computed from discountedPrice in post-processing */
  price: string;
  originalPrice?: number;
  discountedPrice?: number;
  isOnSale?: boolean;
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
    originalPrice,
    discountedPrice,
    isOnSale,
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
    originalPrice,
    discountedPrice,
    isOnSale,
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

/** Compute a formatted ₹X,XXX price string from Sanity's numeric price fields */
function computePrice(pkg: SanityPackage): SanityPackage {
  const display =
    pkg.discountedPrice != null
      ? "\u20b9" + pkg.discountedPrice.toLocaleString("en-IN")
      : (pkg.price ?? "\u2014");
  return { ...pkg, price: display };
}

export async function getAllPackages(): Promise<SanityPackage[]> {
  if (!sanityClient) return [];
  const results = await sanityClient.fetch<SanityPackage[]>(
    ALL_PACKAGES_QUERY,
    {},
    { next: { tags: ["sanity"] } },
  );
  return results.map(computePrice);
}

export async function getPackageBySlug(
  slug: string,
): Promise<SanityPackage | null> {
  if (!sanityClient) return null;
  const result = await sanityClient.fetch<SanityPackage | null>(
    PACKAGE_BY_SLUG_QUERY,
    { slug },
    { next: { tags: ["sanity", `package-${slug}`] } },
  );
  return result ? computePrice(result) : null;
}
