import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Holiday Planner",
  description:
    "Read Holiday Planner's privacy policy to understand how we collect, use, and protect your personal information when you book tours or car rentals in Odisha.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Holiday Planner",
    description:
      "Read Holiday Planner's privacy policy to understand how we collect, use, and protect your personal information when you book tours or car rentals in Odisha.",
    url: "https://www.holidayplanners.co/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Holiday Planner",
    description:
      "Read Holiday Planner's privacy policy to understand how we collect, use, and protect your personal information when you book tours or car rentals in Odisha.",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-deepest pt-24 pb-16">
      <article className="mx-auto max-w-[780px] px-5 md:px-8 text-text-secondary leading-[1.8] font-main">
        <h1 className="text-3xl font-bold mb-2 text-text-primary font-display">
          Privacy Policy
        </h1>
        <p className="text-text-muted mb-10 text-sm">
          Last updated: April 2026
        </p>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            1. Information We Collect
          </h2>
          <p>
            When you contact us, submit an inquiry, or book a tour or car rental
            through Holiday Planner, we may collect the following information:
          </p>
          <ul className="pl-5 mt-2.5 list-disc">
            <li>Full name</li>
            <li>Mobile number</li>
            <li>
              Travel preferences and trip details (shared voluntarily via
              WhatsApp or our contact form)
            </li>
          </ul>
          <p className="mt-2.5">
            We do not collect payment card details directly — all payment
            arrangements are handled via UPI, bank transfer, or other secure
            channels communicated at the time of booking.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            2. How We Use Your Information
          </h2>
          <p>The information you provide is used solely to:</p>
          <ul className="pl-5 mt-2.5 list-disc">
            <li>Respond to your travel inquiries and service requests</li>
            <li>Plan and confirm your tour packages or car bookings</li>
            <li>Send booking confirmations and itinerary details</li>
            <li>Provide on-trip support and updates</li>
          </ul>
          <p className="mt-2.5">
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            3. Data Storage
          </h2>
          <p>
            Inquiry data submitted via our website contact form is stored
            securely to facilitate follow-up. We retain this data only as long
            as necessary to service your request. You may request deletion of
            your data at any time by contacting us.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            4. Cookies
          </h2>
          <p>
            Our website may use essential cookies to ensure basic functionality.
            We do not use third-party advertising cookies or tracking pixels.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            5. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party services such as
            WhatsApp and Google Maps. These services have their own privacy
            policies, and we are not responsible for their practices.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            6. Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy or wish to
            request deletion of your data, please contact us:
          </p>
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
