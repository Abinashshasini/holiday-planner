import { Metadata } from "next";
import DestinationsClient from "./DestinationsClient";
import { popularCitiesData } from "@/utils";

const SITE_URL = "https://www.holidayplanner.in";

export const metadata: Metadata = {
  title: "Top Destinations in Odisha — Temples, Beaches & Wildlife",
  description:
    "Explore the best places to visit in Odisha: Bhubaneswar temples, Puri beaches, Konark Sun Temple, Chilika Lake, Bhitarkanika mangrove forests, Daringbadi hill station & more. Plan your trip with Holiday Planner.",
  keywords: [
    "Odisha destinations",
    "best places to visit in Odisha",
    "Bhubaneswar travel",
    "Puri tourism",
    "Konark Sun Temple visit",
    "Chilika Lake trip",
    "Odisha heritage sites",
    "Odisha beaches",
    "Bhitarkanika wildlife",
    "Daringbadi hill station",
  ],
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "Top Destinations in Odisha — Temples, Beaches & Wildlife",
    description:
      "Discover the must-visit destinations in Odisha from ancient temples to pristine beaches. Interactive travel guide by Holiday Planner.",
    url: "https://www.holidayplanner.in/destinations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Destinations in Odisha — Temples, Beaches & Wildlife",
    description:
      "Explore the best places to visit in Odisha: Bhubaneswar temples, Puri beaches, Konark Sun Temple, Chilika Lake, Bhitarkanika mangrove forests, Daringbadi hill station & more. Plan your trip with Holiday Planner.",
    images: ["/og-image.jpg"],
  },
};

export default function DestinationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Destinations in Odisha",
    url: `${SITE_URL}/destinations`,
    numberOfItems: popularCitiesData.length,
    itemListElement: popularCitiesData.map((city, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/destinations/${city.slug}`,
      name: city.name,
    })),
  };

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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DestinationsClient />
    </>
  );
}
