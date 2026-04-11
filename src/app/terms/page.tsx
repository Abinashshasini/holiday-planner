import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Holiday Planner's terms of service: booking policies, cancellation rules & responsibilities for Odisha tour packages and car rentals.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service",
    description:
      "Holiday Planner's terms of service: booking policies, cancellation rules & responsibilities for Odisha tour packages and car rentals.",
    url: "https://www.holidayplanners.co/terms",
    type: "website",
    siteName: "Holiday Planner",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service",
    description:
      "Holiday Planner's terms of service: booking policies, cancellation rules & responsibilities for Odisha tour packages and car rentals.",
  },
};

export default function TermsPage() {
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
        name: "Terms of Service",
        item: "https://www.holidayplanners.co/terms",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-bg-deepest pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="mx-auto max-w-[780px] px-5 md:px-8 text-text-secondary leading-[1.8] font-main">
        <h1 className="text-3xl font-bold mb-2 text-text-primary font-display">
          Terms of Service
        </h1>
        <p className="text-text-muted mb-10 text-sm">
          Last updated: April 2026
        </p>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            1. Services
          </h2>
          <p>
            Holiday Planner (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
            provides travel planning services including curated tour packages,
            car rentals, tempo traveller bookings, and luxury vehicle hire
            across Odisha, India. By engaging our services — whether through our
            website, WhatsApp, or phone — you agree to these terms.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            2. Bookings &amp; Payment
          </h2>
          <ul className="pl-5 list-disc">
            <li>
              A booking is confirmed upon receipt of an advance deposit
              (typically 20% of the total package cost) unless otherwise agreed.
            </li>
            <li>
              The balance is due as specified in your booking confirmation.
            </li>
            <li>
              We accept payment via UPI, bank transfer, and other methods
              communicated at the time of booking.
            </li>
            <li>
              Prices quoted are per the agreed itinerary and do not include
              personal travel insurance, airfare, or items specified as excluded
              in the package details.
            </li>
          </ul>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            3. Cancellation &amp; Refund Policy
          </h2>
          <ul className="pl-5 list-disc">
            <li>
              <strong className="text-text-primary">
                7+ days before departure:
              </strong>{" "}
              Near-full refund of advance deposit, minus any non-refundable
              third-party costs (hotel pre-bookings, permits, etc.).
            </li>
            <li>
              <strong className="text-text-primary">
                3–6 days before departure:
              </strong>{" "}
              50% of the total booking amount is non-refundable.
            </li>
            <li>
              <strong className="text-text-primary">
                Less than 3 days / no-show:
              </strong>{" "}
              No refund. We will make reasonable efforts to reschedule at no
              extra charge where possible.
            </li>
            <li>
              Cancellations must be communicated via WhatsApp or phone to our
              team directly.
            </li>
          </ul>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            4. Changes to Itinerary
          </h2>
          <p>
            We reserve the right to modify itineraries due to unforeseen
            circumstances including weather conditions, road closures, or force
            majeure events. We will notify you as soon as possible and provide
            suitable alternatives at no additional cost where feasible.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            5. Traveler Responsibilities
          </h2>
          <ul className="pl-5 list-disc">
            <li>
              Ensure all travelers carry valid government-issued photo ID for
              the duration of the trip.
            </li>
            <li>
              Inform us of any medical conditions, dietary requirements, or
              accessibility needs at the time of booking.
            </li>
            <li>
              Comply with all temple, wildlife sanctuary, and forest reserve
              entry regulations.
            </li>
            <li>
              Holiday Planner is not responsible for loss of personal belongings
              during the trip.
            </li>
          </ul>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            Holiday Planner acts as an organizer and facilitator. We are not
            liable for any injury, loss, accident, delay, or damage arising from
            circumstances beyond our reasonable control, including natural
            disasters, civil unrest, or third-party service failures. We
            strongly recommend all travelers obtain travel insurance prior to
            departure.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            7. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be
            subject to the jurisdiction of courts in Bhubaneswar, Odisha.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            8. Contact
          </h2>
          <p>For any questions regarding these terms, please reach out:</p>
          <ul className="pl-5 mt-2.5 list-disc">
            <li>
              Email:{" "}
              <a
                href="mailto:holidayplannertravel@gmail.com"
                className="text-ocean-400 hover:text-ocean-300 transition-colors"
              >
                holidayplannertravel@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+919861151591"
                className="text-ocean-400 hover:text-ocean-300 transition-colors"
              >
                +91 98611 51591
              </a>
            </li>
            <li>Address: Bhubaneswar, Odisha, India</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
