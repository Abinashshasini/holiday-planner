import React from "react";
import { Metadata } from "next";
import PackagesClient from "./PackagesClient";
import { getAllPackages } from "@/sanity/queries";

const SITE_URL = "https://www.holidayplanner.in";

export const metadata: Metadata = {
  title: "Best Odisha Tour Packages 2026 — Budget & Luxury Trips",
  description:
    "Choose from 10+ curated Odisha tour packages — Puri–Konark, Golden Triangle, Tribal Odisha, Chilika Lake, Daringbadi hills & more. Budget-friendly to luxury options starting ₹4,999. Book with Holiday Planner today.",
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
  ],
  alternates: { canonical: "/packages" },
  openGraph: {
    title:
      "Best Odisha Tour Packages 2026 — Budget & Luxury Trips | Holiday Planner",
    description:
      "Curated Odisha tour packages with flexible itineraries from ₹4,999. Explore temples, beaches, wildlife & tribal culture.",
    url: "https://www.holidayplanner.in/packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Odisha Tour Packages 2026 — Budget & Luxury Trips",
    description:
      "Choose from 10+ curated Odisha tour packages — Puri–Konark, Golden Triangle, Tribal Odisha, Chilika Lake, Daringbadi hills & more. Budget-friendly to luxury options starting ₹4,999. Book with Holiday Planner today.",
    images: ["/og-image.jpg"],
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
