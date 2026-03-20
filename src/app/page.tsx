import Hero from "@/components/hero";
import BelowFoldSections from "@/components/BelowFoldSections";
import { Suspense } from "react";
import { getAllPackages } from "@/sanity/queries";

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

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px 20px",
              background:
                "linear-gradient(to bottom, rgb(5, 10, 25), rgb(22 29 51))",
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              Loading your experience...
            </div>
          </div>
        }
      >
        <BelowFoldSections packages={packages} />
      </Suspense>
    </div>
  );
}
