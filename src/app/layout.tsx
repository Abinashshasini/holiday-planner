import type { Metadata } from "next";
import "./globals.css";
import ConditionalShell from "@/components/ConditionalShell";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.holidayplanner.in";
const SITE_NAME = "Holiday Planner";

export const metadata: Metadata = {
  title: {
    default: "Holiday Planner | #1 Travel Agency & Car Rental in Odisha",
    template: "%s | Holiday Planner",
  },
  description:
    "Discover Odisha with curated tour packages, premium car rentals, and luxury vehicles. Book your dream trip with Holiday Planner — Bhubaneswar's most trusted travel partner with 500+ happy travelers and 4.8★ Google rating. Explore Puri, Konark, Chilika, Daringbadi & more.",
  keywords: [
    "Odisha tours",
    "car rental Bhubaneswar",
    "Puri tour package",
    "Odisha travel planner",
    "tempo traveller Bhubaneswar",
    "luxury car rental Odisha",
    "Odisha tourism",
    "Bhubaneswar car hire",
    "Konark Sun Temple tour",
    "Chilika Lake trip",
    "Daringbadi tour package",
    "Odisha holiday packages",
    "best travel agency Odisha",
    "Bhubaneswar to Puri cab",
    "Odisha pilgrimage tour",
    "wedding car rental Bhubaneswar",
    "group tour Odisha",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Holiday Planner | #1 Travel Agency & Car Rental in Odisha",
    description:
      "Discover Odisha with curated tour packages, premium car rentals, and luxury vehicles. Bhubaneswar's most trusted travel partner.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holiday Planner — Explore Odisha with curated tours and premium car rentals",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Planner | #1 Travel Agency & Car Rental in Odisha",
    description:
      "Discover Odisha with curated tour packages, premium car rentals, and luxury vehicles.",
    images: ["/og-image.jpg"],
    creator: "@holidayplannerodisha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
  category: "travel",
};

// JSON-LD structured data for the whole site
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.jpg`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Bhubaneswar's most trusted travel agency offering curated Odisha tour packages, premium car rentals, tempo travellers, and luxury wedding cars.",
  telephone: "+91-7978065576",
  email: "info@holidayplanner.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.2961,
    longitude: 85.8245,
  },
  areaServed: {
    "@type": "State",
    name: "Odisha",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/holidayplannerodisha",
    "https://wa.me/917978065576",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Odisha Tour Packages & Car Rentals",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Odisha Tour Packages" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Car Rental Bhubaneswar" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tempo Traveller Booking Odisha",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury & Wedding Car Rental",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  );
}
