import { Metadata } from "next";
import { popularCitiesData } from "@/utils";
import { getAllPackages, type SanityPackage } from "@/sanity/queries";
import DestinationDetailsClient from "./DestinationDetailsClient";
import Link from "next/link";

export function generateStaticParams() {
  return popularCitiesData.map((city) => ({ city: city.slug }));
}

const SITE_URL = "https://www.holidayplanners.co";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city;
  const cityInfo = popularCitiesData.find((c) => c.slug === citySlug);

  if (!cityInfo) {
    return {
      title: "Destination Not Found",
    };
  }

  const topAttractions = cityInfo.attractions
    ?.slice(0, 2)
    .map((a: any) => a.name)
    .join(" & ");
  const bestTimeSummary =
    cityInfo.bestTimeToVisit?.split(".")[0]?.split(",")[0] ?? "";
  const description = topAttractions
    ? `Explore ${cityInfo.name}, Odisha \u2014 ${topAttractions}${bestTimeSummary ? `. Best time: ${bestTimeSummary}` : ""}. Book curated tour packages with Holiday Planner.`.slice(
        0,
        160,
      )
    : `Discover the rich history and top attractions of ${cityInfo.name}, Odisha. Plan your perfect trip with Holiday Planner.`;

  return {
    title: `${cityInfo.name} Travel Guide 2026 — Top Attractions`,
    description,
    keywords: [
      cityInfo.name,
      `${cityInfo.name} tourism`,
      `${cityInfo.name} travel guide`,
      `places to visit in ${cityInfo.name}`,
      `how to reach ${cityInfo.name}`,
      `${cityInfo.name} best time to visit`,
      `${cityInfo.name} tour packages`,
      `things to do in ${cityInfo.name}`,
      "Odisha tourism",
      "Holiday Planner",
    ],
    alternates: { canonical: `/destinations/${citySlug}` },
    openGraph: {
      title: `${cityInfo.name} Travel Guide 2026`,
      description,
      url: `${SITE_URL}/destinations/${citySlug}`,
      type: "article",
      siteName: "Holiday Planner",
      locale: "en_IN",
      images: [
        {
          url: cityInfo.image,
          width: 1200,
          height: 630,
          alt: `${cityInfo.name} — Odisha Travel Guide`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cityInfo.name} Travel Guide 2026`,
      description,
      images: [cityInfo.image],
    },
  };
}

function DestinationJsonLd({ cityInfo }: { cityInfo: any }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: cityInfo.name,
    description:
      cityInfo.history ||
      `Explore ${cityInfo.name}, a popular tourist destination in Odisha.`,
    image: cityInfo.image,
    url: `${SITE_URL}/destinations/${cityInfo.slug}`,
    touristType: ["Cultural tourism", "Sightseeing"],
    containedInPlace: {
      "@type": "State",
      name: "Odisha",
      containedInPlace: { "@type": "Country", name: "India" },
    },
    includesAttraction:
      cityInfo.attractions?.map((attr: any) => ({
        "@type": "TouristAttraction",
        name: attr.name,
        description: attr.desc,
      })) ?? [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city;
  const cityInfo = popularCitiesData.find((c) => c.slug === citySlug);

  if (!cityInfo) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1>Destination Not Found</h1>
        <p>
          Attempted slug: <strong>{citySlug}</strong>
        </p>
        <Link href="/">Go Home</Link>
      </div>
    );
  }

  const allPackages = await getAllPackages().catch(() => [] as SanityPackage[]);
  const relatedPackages = allPackages.filter(
    (pkg) =>
      pkg.location.toLowerCase().includes(cityInfo.name.toLowerCase()) ||
      pkg.title.toLowerCase().includes(cityInfo.name.toLowerCase()),
  );

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
        name: "Destinations",
        item: `${SITE_URL}/destinations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cityInfo.name,
        item: `${SITE_URL}/destinations/${cityInfo.slug}`,
      },
    ],
  };

  return (
    <>
      <DestinationJsonLd cityInfo={cityInfo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DestinationDetailsClient
        cityInfo={cityInfo}
        relatedPackages={relatedPackages}
      />
    </>
  );
}
