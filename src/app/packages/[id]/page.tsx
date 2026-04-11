import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPackageBySlug, getAllPackages } from "@/sanity/queries";
import PackageDetailsClient from "./PackageDetailsClient";

export async function generateStaticParams() {
  const packages = await getAllPackages();
  return packages.map((pkg) => ({ id: pkg.slug.current }));
}

const SITE_URL = "https://www.holidayplanners.co";

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
  const baseDesc = pkg.overview
    ? pkg.overview.slice(0, 95).trimEnd().replace(/\.$/, "")
    : `Explore ${pkg.title} in ${pkg.location}`;
  const description =
    `${baseDesc} — ${pkg.duration} tour${pkg.price ? ` from ${pkg.price}` : ""}. Book with Holiday Planner, Odisha's most trusted travel agency.`.slice(
      0,
      160,
    );

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
      validFrom: `${new Date().getFullYear()}-01-01`,
      seller: {
        "@type": "TravelAgency",
        name: "Holiday Planner",
        url: "https://www.holidayplanners.co",
      },
    },
    provider: {
      "@type": "TravelAgency",
      name: "Holiday Planner",
      url: "https://www.holidayplanners.co",
      telephone: "+91-9861151591",
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
  const [pkg, allPackages] = await Promise.all([
    resolvePackage(resolvedParams.id),
    getAllPackages().catch(() => []),
  ]);

  if (!pkg) {
    return notFound();
  }

  const related = allPackages
    .filter(
      (p) =>
        p.slug.current !== resolvedParams.id &&
        (p.category === pkg.category || p.location === pkg.location),
    )
    .slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tour Packages",
        item: `${SITE_URL}/packages`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.title,
        item: `${SITE_URL}/packages/${pkg.slug.current}`,
      },
    ],
  };

  return (
    <>
      <PackageJsonLd pkg={pkg} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PackageDetailsClient pkg={pkg} relatedPackages={related} />
    </>
  );
}
