import React from "react";
import { Metadata } from "next";
import PackagesClient from "./PackagesClient";
import { getAllPackages } from "@/sanity/queries";

const SITE_URL = "https://www.holidayplanners.co";

export const metadata: Metadata = {
  title: "Odisha Tour Packages 2026 — Budget to Luxury",
  description:
    "10+ curated Odisha tour packages from ₹4,999. Puri, Konark, Chilika, Daringbadi & more. Budget to luxury options. Book with Holiday Planner!",
  keywords: [
    "Odisha tour packages",
    "Puri tour package",
    "Konark Sun Temple package",
    "Daringbadi tour",
    "Bhubaneswar city tour",
    "Odisha tribal tours",
    "Chilika Lake tour",
    "budget Odisha trip",
    "luxury Odisha tour",
    "Golden Triangle Odisha",
    "Odisha tour packages with price",
    "family tour Odisha",
    "couple tour Odisha",
    "weekend getaway Odisha",
  ],
  alternates: { canonical: "/packages" },
  openGraph: {
    title:
      "Best Odisha Tour Packages 2026 — Budget & Luxury Trips | Holiday Planner",
    description:
      "Curated Odisha tour packages with flexible itineraries from ₹4,999. Explore temples, beaches, wildlife & tribal culture.",
    url: "https://www.holidayplanners.co/packages",
    type: "website",
    siteName: "Holiday Planner",
    locale: "en_IN",
    images: [
      {
        url: "https://www.holidayplanners.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Odisha Tour Packages — Holiday Planner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odisha Tour Packages 2026 — Budget to Luxury",
    description:
      "10+ curated Odisha tour packages from ₹4,999. Puri, Konark, Chilika, Daringbadi & more. Budget to luxury options. Book with Holiday Planner!",
    images: ["https://www.holidayplanners.co/og-image.jpg"],
  },
};

export default async function PackagesPage() {
  const packages = await getAllPackages().catch(() => []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Odisha Tour Packages",
    url: `${SITE_URL}/packages`,
    numberOfItems: packages.length,
    itemListElement: packages.map((pkg, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/packages/${pkg.slug.current}`,
      name: pkg.title,
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
        name: "Tour Packages",
        item: `${SITE_URL}/packages`,
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
      <PackagesClient packages={packages} />
    </>
  );
}
