import type { Metadata } from "next";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import BelowFoldSections from "@/components/BelowFoldSections";
import { getAllPackages } from "@/sanity/queries";
import { userRatingData } from "@/utils";

export const metadata: Metadata = {
  title: "Odisha Tour Packages 2026 — Book Now",
  description:
    "Curated Odisha tour packages from ₹4,999. Puri, Konark, Chilika & more. 500+ happy travelers, 4.8★ rated. Book with Holiday Planner today!",
  keywords: [
    // Core package searches
    "Odisha tour packages",
    "Odisha tour packages 2026",
    "Odisha holiday packages",
    "Odisha travel packages",
    "Odisha trip packages",
    "Odisha tourism packages",
    // Origin-based
    "Odisha tour packages from Bhubaneswar",
    "Odisha tour packages from Kolkata",
    "Odisha tour packages from Delhi",
    "Odisha tour packages from Hyderabad",
    "Odisha tour packages from Chennai",
    // Budget searches
    "cheap Odisha tour packages",
    "budget Odisha holiday packages",
    "affordable Odisha tour packages",
    "Odisha packages under 5000",
    "Odisha packages under 10000",
    "Odisha holiday packages all inclusive",
    // Destination-specific
    "Puri tour package",
    "Konark tour package",
    "Bhubaneswar tour package",
    "Chilika Lake tour package",
    "Puri Konark Bhubaneswar tour package",
    "Puri Bhubaneswar Konark 3 days package",
    "Bhitarkanika tour package",
    "Daringbadi tour package",
    "Koraput tribal tour",
    // Category-specific
    "Odisha pilgrimage tour packages",
    "Jagannath Puri darshan package",
    "Odisha temple tour packages",
    "Odisha wildlife safari package",
    "Odisha beach holiday package",
    "Odisha tribal tour package",
    "Odisha nature tour package",
    // Intent-based
    "customized Odisha tour package",
    "best Odisha tour package",
    "Odisha travel planner 2026",
    "best travel agency Bhubaneswar",
    "Odisha tour operator Bhubaneswar",
    "Odisha travel agent",
    "book Odisha tour",
    "plan Odisha trip",
    // Duration-based
    "Odisha 3 days tour package",
    "Odisha 4 days 3 nights package",
    "Odisha 5 days tour",
    "Odisha 7 days tour package",
    "Odisha weekend trip package",
  ],
  alternates: { canonical: "https://www.holidayplanners.co" },
  openGraph: {
    title: "Odisha Tour Packages 2026 — Book Your Dream Trip | Holiday Planner",
    description:
      "Explore curated Odisha tour packages starting ₹4,999. Puri, Konark, Bhubaneswar, Chilika & more. 500+ happy travelers, 4.8★ rated. Plan your perfect Odisha trip today.",
    url: "https://www.holidayplanners.co",
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
    title: "Odisha Tour Packages 2026 — Book Your Dream Trip | Holiday Planner",
    description:
      "Explore curated Odisha tour packages starting ₹4,999. Puri, Konark, Bhubaneswar, Chilika & more. 500+ happy travelers, 4.8★ rated. WhatsApp us to plan your trip today.",
    images: ["https://www.holidayplanners.co/og-image.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide fully customized tour packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We understand every traveler is unique. You can customize any of our existing itineraries or build one entirely from scratch with the help of our expert planners. Just tell us your dates, budget, and interests — we'll handle every detail from temple visits to coastal sunsets.",
      },
    },
    {
      "@type": "Question",
      name: "Are your cabs well maintained and sanitized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our entire fleet consists of premium, well-maintained vehicles. Every cab undergoes a rigorous cleaning and sanitization process before each trip. From compact sedans to luxury Innovas and 12-seater tempo travellers — every vehicle is GPS-tracked and fully insured.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pay the full amount upfront to book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you don't need to pay the full amount initially. You can secure your booking by paying a minimal advance deposit (usually 20%), and the rest can be managed closer to your trip date. We accept UPI, bank transfer, and all major payment methods.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure safety during wildlife tours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our wildlife and nature tours (like Bhitarkanika and Satakosia) are led by certified local guides who know the terrain perfectly. We strictly adhere to all forest department safety guidelines, provide first-aid kits, and maintain emergency communication at all times.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I need to cancel my trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a highly flexible cancellation policy. Cancellations made 7 days prior to the journey receive a near-full refund. For last-minute changes, we'll work with you to reschedule at no extra cost whenever possible.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Holiday Planner different from other agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike booking portals, we're Bhubaneswar-based locals who've explored every corner of Odisha. Our government-recognized guides, personally vetted hotels, and 24/7 on-trip support set us apart. With 500+ happy travelers and a 4.8★ Google rating, we're Odisha's most trusted travel partner.",
      },
    },
    {
      "@type": "Question",
      name: "Can you arrange VIP darshan at Jagannath Temple?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We organize special darshan arrangements at Jagannath Puri and other major temples across Odisha. Skip the long queues and experience the divine in comfort. This service is included in our heritage and spiritual tour packages.",
      },
    },
  ],
};

export default async function Home() {
  const packages = await getAllPackages().catch(() => []);

  const ratingsJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.holidayplanners.co/#localbusiness",
    name: "Holiday Planner",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    review: userRatingData.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      reviewBody: r.message,
      itemReviewed: {
        "@type": "Service",
        name: r.packageInfo,
        provider: { "@type": "TravelAgency", name: "Holiday Planner" },
      },
    })),
  };

  return (
    <div className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingsJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <BelowFoldSections packages={packages} />
    </div>
  );
}
