import React from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";

const SITE_URL = "https://www.holidayplanner.in";

function ContactPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Holiday Planner",
    url: `${SITE_URL}/contact`,
    description:
      "Contact Holiday Planner for curated Odisha tour packages, car rentals, and 24/7 travel assistance via WhatsApp, phone, or email.",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Holiday Planner",
      url: SITE_URL,
      telephone: "+91-9861151591",
      email: "holidayplannertravel@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        opens: "00:00",
        closes: "23:59",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9861151591",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Odia"],
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch for Odisha Tours & Car Bookings",
  description:
    "Reach out to Holiday Planner for customized Odisha tour packages, car rentals, and travel assistance. Available 24/7 via WhatsApp, phone, or email. Plan your perfect journey today.",
  keywords: [
    "Contact Holiday Planner",
    "Odisha travel contact",
    "Bhubaneswar travel agency phone",
    "book Odisha tour",
    "travel inquiry Odisha",
    "holiday planner WhatsApp",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Holiday Planner — Plan Your Dream Odisha Trip",
    description:
      "Call, WhatsApp, or email Holiday Planner for personalized tour packages and car rentals across Odisha.",
    url: "https://www.holidayplanner.in/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Get in Touch for Odisha Tours & Car Bookings",
    description:
      "Reach out to Holiday Planner for customized Odisha tour packages, car rentals, and travel assistance. Available 24/7 via WhatsApp, phone, or email. Plan your perfect journey today.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.holidayplanner.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://www.holidayplanner.in/contact",
      },
    ],
  };

  return (
    <>
      <ContactPageJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
