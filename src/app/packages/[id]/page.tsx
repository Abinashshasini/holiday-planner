import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPackageBySlug } from "@/sanity/queries";
import PackageDetailsClient from "./PackageDetailsClient";

const SITE_URL = "https://www.holidayplanner.in";

/** Resolve package from Sanity by slug */
async function resolvePackage(idOrSlug: string) {
  return getPackageBySlug(idOrSlug).catch(() => null);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const pkg = await resolvePackage(resolvedParams.id);

  if (!pkg) {
    return { title: "Package Not Found" };
  }

  const slug = "slug" in pkg ? pkg.slug.current : String((pkg as any).id);
  const description =
    pkg.overview ||
    `Explore ${pkg.title} in ${pkg.location}. Book this ${pkg.duration} package with Holiday Planner, Odisha's most trusted travel agency.`;

  return {
    title: `${pkg.title} — ${pkg.duration} Tour Package in Odisha`,
    description: description.slice(0, 160),
    keywords: [
      pkg.title,
      `${pkg.location} tour`,
      `${pkg.duration} Odisha trip`,
      "Odisha tour package",
      "Holiday Planner",
    ],
    alternates: { canonical: `/packages/${slug}` },
    openGraph: {
      title: `${pkg.title} — ${pkg.duration} | Holiday Planner`,
      description: description.slice(0, 160),
      url: `${SITE_URL}/packages/${slug}`,
      type: "website",
      images: [pkg.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.title} | Holiday Planner`,
      description: description.slice(0, 160),
    },
  };
}

function PackageJsonLd({ pkg }: { pkg: any }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description:
      pkg.overview ||
      `${pkg.duration} tour package covering ${pkg.location}, Odisha.`,
    touristType: pkg.category || "Leisure",
    itinerary: {
      "@type": "ItemList",
      numberOfItems: pkg.itinerary?.length || 0,
      itemListElement:
        pkg.itinerary?.map(
          (
            item: { day: number; title: string; description: string },
            i: number,
          ) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Day ${item.day}: ${item.title}`,
            description: item.description,
          }),
        ) || [],
    },
    offers: {
      "@type": "Offer",
      price: pkg.price?.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      seller: {
        "@type": "TravelAgency",
        name: "Holiday Planner",
        url: "https://www.holidayplanner.in",
      },
    },
    provider: {
      "@type": "TravelAgency",
      name: "Holiday Planner",
      url: "https://www.holidayplanner.in",
      telephone: "+91-7978065576",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function PackageDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const pkg = await resolvePackage(resolvedParams.id);

  if (!pkg) {
    return notFound();
  }

  return (
    <>
      <PackageJsonLd pkg={pkg} />
      <PackageDetailsClient pkg={pkg} />
    </>
  );
}
