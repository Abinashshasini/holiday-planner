import { Metadata } from "next";
import CarBookingClient from "./CarBookingClient";

const SITE_URL = "https://www.holidayplanners.co";

function CarServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car Rental & Taxi Service in Bhubaneswar",
    serviceType: "Car Rental",
    description:
      "Premium car rentals in Bhubaneswar starting ₹1,499/day — Innova Crysta, Ertiga, luxury cars, tempo travellers, airport pickups & outstation trips across Odisha. Professional drivers included.",
    url: `${SITE_URL}/car-booking`,
    provider: {
      "@type": "TravelAgency",
      name: "Holiday Planner",
      url: SITE_URL,
      telephone: "+91-9861151591",
    },
    areaServed: { "@type": "State", name: "Odisha" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car Rental Fleet",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hatchback Rental (A/C Xcent)",
          },
          price: "1800",
          priceCurrency: "INR",
          description: "8 Hrs / 80 km — ₹1,800",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Innova Crysta Rental" },
          price: "2500",
          priceCurrency: "INR",
          description: "8 Hrs / 80 km — ₹2,500",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tempo Traveller (12–17 Seater)",
          },
          price: "4500",
          priceCurrency: "INR",
          description: "Group travel across Odisha — starting ₹4,500/day",
        },
      ],
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
  title: "Car Rental Bhubaneswar — Luxury Cars, Tempo Travellers & Taxis",
  description:
    "Book premium car rentals in Bhubaneswar starting ₹1,499/day. Luxury wedding cars, Innova, Ertiga, tempo travellers for group tours, airport pickups & outstation trips across Odisha. Professional drivers included.",
  keywords: [
    "car rental Bhubaneswar",
    "luxury car rental Odisha",
    "tempo traveller booking Bhubaneswar",
    "wedding car Bhubaneswar",
    "Odisha taxi service",
    "Bhubaneswar airport taxi",
    "Innova rental Odisha",
    "Ertiga rental Bhubaneswar",
    "outstation cab Bhubaneswar",
    "Bhubaneswar to Puri cab",
  ],
  alternates: { canonical: "/car-booking" },
  openGraph: {
    title:
      "Car Rental Bhubaneswar — Luxury Cars & Tempo Travellers | Holiday Planner",
    description:
      "Premium car rental service in Bhubaneswar. Luxury cars, tempo travellers, airport pickups & outstation trips at best rates.",
    url: "https://www.holidayplanners.co/car-booking",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Bhubaneswar — Luxury Cars, Tempo Travellers & Taxis",
    description:
      "Book premium car rentals in Bhubaneswar starting ₹1,499/day. Luxury wedding cars, Innova, Ertiga, tempo travellers for group tours, airport pickups & outstation trips across Odisha. Professional drivers included.",
    images: ["/og-image.jpg"],
  },
};

export default function CarBookingPage() {
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
        name: "Car Booking",
        item: "https://www.holidayplanners.co/car-booking",
      },
    ],
  };

  return (
    <>
      <CarServiceJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CarBookingClient />
    </>
  );
}
