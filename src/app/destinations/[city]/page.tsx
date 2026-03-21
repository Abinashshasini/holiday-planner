import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { popularCitiesData } from "@/utils";
import { getAllPackages, type SanityPackage } from "@/sanity/queries";
import DestinationDetailsClient from "./DestinationDetailsClient";
import Link from "next/link";

export function generateStaticParams() {
  return popularCitiesData.map((city) => ({ city: city.slug }));
}

const SITE_URL = "https://www.holidayplanner.in";

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

  const description = cityInfo.history
    ? cityInfo.history.slice(0, 160)
    : `Discover the rich history and top attractions of ${cityInfo.name}, Odisha with Holiday Planner.`;

  return {
    title: `${cityInfo.name} Travel Guide — Top Attractions & History | Odisha Tourism`,
    description,
    keywords: [
      cityInfo.name,
      `${cityInfo.name} tourism`,
      `${cityInfo.name} travel guide`,
      `places to visit in ${cityInfo.name}`,
      "Odisha tourism",
      "Holiday Planner",
    ],
    alternates: { canonical: `/destinations/${citySlug}` },
    openGraph: {
      title: `${cityInfo.name} Travel Guide | Holiday Planner`,
      description,
      url: `${SITE_URL}/destinations/${citySlug}`,
      type: "article",
      images: [cityInfo.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cityInfo.name} Travel Guide | Holiday Planner`,
      description,
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

  return (
    <>
      <DestinationJsonLd cityInfo={cityInfo} />
      <DestinationDetailsClient
        cityInfo={cityInfo}
        relatedPackages={relatedPackages}
      />
    </>
  );
}
