import React from "react";
import { Metadata } from "next";
import AboutClient from "./AboutClient";

const SITE_URL = "https://www.holidayplanners.co";

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#organization`,
    name: "Holiday Planner",
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.jpg`,
    foundingDate: "2016",
    description:
      "Bhubaneswar's most trusted travel agency offering curated Odisha tour packages, premium car rentals, and government-certified guide services since 2016.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      addressCountry: "IN",
    },
    telephone: "+91-9861151591",
    email: "holidayplannertravel@gmail.com",
    areaServed: { "@type": "State", name: "Odisha" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
    },
    sameAs: [
      "https://www.instagram.com/holidayplannerodisha",
      "https://wa.me/917978065576",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export const metadata: Metadata = {
  title: "About Us — The Story Behind Odisha's Most Trusted Travel Partner",
  description:
    "Since 2016, Holiday Planner has been crafting unforgettable Odisha experiences for 500+ travelers. Government-recognized guides, a premium fleet, and a 4.8★ Google rating — discover why families, adventurers, and pilgrims trust us with their most cherished journeys.",
  keywords: [
    "About Holiday Planner",
    "Odisha travel agency",
    "Bhubaneswar tour operator",
    "authentic Odisha tours",
    "trusted travel partner Odisha",
    "best travel agency Bhubaneswar",
    "Odisha tourism experts",
    "premium car rental Odisha",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title:
      "About Holiday Planner — The Story Behind Odisha's #1 Travel Partner",
    description:
      "Since 2016, we've turned Odisha vacations into stories worth retelling. 500+ happy travelers, 4.8★ rated, government-recognized guides.",
    url: "https://www.holidayplanners.co/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — The Story Behind Odisha's Most Trusted Travel Partner",
    description:
      "Since 2016, Holiday Planner has been crafting unforgettable Odisha experiences for 500+ travelers. Government-recognized guides, a premium fleet, and a 4.8★ Google rating — discover why families, adventurers, and pilgrims trust us with their most cherished journeys.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.holidayplanners.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.holidayplanners.co/about",
      },
    ],
  };

  return (
    <>
      <OrganizationJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
