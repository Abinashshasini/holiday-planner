"use client";
import {
  LazyMotion,
  domAnimation,
  m as motion,
  type Variants,
} from "framer-motion";
import {
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaCompass,
} from "react-icons/fa";
import Link from "next/link";
import useWhatsApp from "@/hooks/useWhatsApp";
import Image from "next/image";
import type { SanityPackage } from "@/sanity/queries";

/* Map package location names → destination page slugs */
const locationToSlug: Record<string, string> = {
  bhubaneswar: "bhubaneswar",
  puri: "puri",
  konark: "konark",
  chilika: "chilika",
  "chilika lake": "chilika",
  daringbadi: "daringbadi",
  bhitarkanika: "bhitarkanika",
  cuttack: "cuttack",
  sambalpur: "sambalpur",
  "golden triangle": "bhubaneswar",
  "puri konark bhubaneswar": "puri",
};

function getDestinationSlug(location: string): string | null {
  const key = location.toLowerCase().trim();
  for (const [k, v] of Object.entries(locationToSlug)) {
    if (key.includes(k)) return v;
  }
  return null;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PackageDetailsClient({
  pkg,
  relatedPackages = [],
}: {
  pkg: any;
  relatedPackages?: SanityPackage[];
}) {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  const overview =
    pkg.overview ||
    "A beautiful journey through the scenic landscapes of Odisha.";
  const included = pkg.included || ["Accommodation", "Transport", "Breakfast"];
  const excluded = pkg.excluded || [
    "Flights",
    "Entry Fees",
    "Personal Expenses",
  ];
  const itinerary = pkg.itinerary || [
    {
      day: 1,
      title: "Arrival",
      description: "Arrive and check in to your hotel.",
    },
    { day: 2, title: "Sightseeing", description: "Enjoy local sightseeing." },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-white min-h-screen pt-[70px]">
        {/* Sticky Booking Bar */}
        <motion.div
          className="fixed left-0 right-0 bottom-0 bg-white/90 backdrop-blur-xl z-[1001] py-4 border-t border-gray-100 block lg:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
            <div className="flex flex-col items-start gap-0.5 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                {pkg.originalPrice && (
                  <span className="font-mono text-xs text-red-500 line-through font-semibold">
                    &#8377;{Number(pkg.originalPrice).toLocaleString("en-IN")}
                  </span>
                )}
                <span className="font-mono text-[1.4rem] font-black text-gold-400">
                  {pkg.price}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-text-muted">
                / {pkg.duration}
              </span>
              <span className="text-[0.7rem] text-orange-400 font-bold tracking-[0.02em]">
                🔥 Limited slots available
              </span>
            </div>
            <button
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold rounded-full px-7 py-2.5 text-xs shrink-0 flex items-center gap-2 hover:shadow-[--shadow-gold] transition-all max-[400px]:px-[18px] max-[400px]:text-[0.75rem]"
              onClick={() =>
                handleRedirectTheUserToWhatsApp({
                  messageType: "dynamic",
                  dynamicMessage: `Hi, I am interested in booking the "${pkg.title}" package (${pkg.duration}). Please share the booking details.`,
                })
              }
            >
              <FaWhatsapp /> Book Now
            </button>
          </div>
        </motion.div>

        {/* Hero Banner */}
        <div className="relative h-[70vh] min-h-[480px] bg-gray-900 flex items-center justify-center overflow-hidden pb-12 px-5 md:px-8 lg:px-16">
          {/* Mobile: use card image */}
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center 0%" }}
            className="z-0 block lg:hidden transition-transform duration-[8s]"
            priority
            sizes="100vw"
          />
          {/* Desktop: use cover image, fall back to card image */}
          <Image
            src={pkg.coverImage || pkg.image}
            alt={pkg.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center 0%" }}
            className="z-0 hidden lg:block transition-transform duration-[8s]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,19,0.2)] to-[rgba(6,10,19,0.85)] z-[1]" />
          <motion.div
            className="relative z-[2] text-center max-w-7xl w-full px-5 md:px-8 lg:px-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white font-mono text-base font-bold uppercase tracking-wider mb-4">
              {pkg.category}
            </span>
            <h1 className="font-display text-[clamp(2.2rem,7vw,4rem)] font-black text-white leading-[1.08] tracking-tight mb-6">
              {pkg.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-white/85 text-base font-semibold max-[600px]:flex-col max-[600px]:gap-3">
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-gold-400 text-lg" />{" "}
                {pkg.location}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-gold-400 text-lg" /> {pkg.duration}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 pt-16 pb-20 max-md:pt-10 max-md:pb-14">
          <div className="grid grid-cols-[1.3fr_1fr] gap-14 items-start max-lg:grid-cols-1 max-lg:gap-10">
            <motion.div
              className="flex flex-col"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.section variants={fadeUp} className="mb-14">
                <div className="mb-8">
                  <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                    About This Tour
                  </span>
                  <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-black text-text-primary tracking-[-0.02em]">
                    Tour{" "}
                    <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                      Overview
                    </span>
                  </h2>
                </div>
                <p className="text-lg leading-[1.8] text-text-secondary mb-8 max-w-[800px]">
                  {overview}
                </p>

                <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
                  {pkg.highlights.map((h: string) => (
                    <div
                      key={h}
                      className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-[var(--shadow-card-rest)] transition-all duration-300 hover:shadow-[var(--shadow-card-float)] font-bold text-text-primary text-sm [&_svg]:text-gold-400 [&_svg]:text-[0.7rem] [&_svg]:shrink-0"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-gold-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                      <span className="relative">
                        <FaArrowRight />
                      </span>
                      <span className="relative">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                variants={fadeUp}
                className="grid grid-cols-2 gap-6 mb-14 max-[600px]:grid-cols-1"
              >
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)]">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <h3 className="relative flex items-center gap-2.5 font-display text-lg font-black mb-5 text-gold-400">
                    <FaCheckCircle className="text-xl" /> What&apos;s Included
                  </h3>
                  <ul className="relative list-none p-0">
                    {included.map((i: string) => (
                      <li
                        key={i}
                        className="relative pl-6 mb-3 font-medium text-text-secondary text-base before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-gold-400 before:shadow-[0_0_8px_rgba(99,102,241,0.12)]"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)]">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-red-50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <h3 className="relative flex items-center gap-2.5 font-display text-lg font-black mb-5 text-red-500">
                    <FaTimesCircle className="text-xl" /> What&apos;s Excluded
                  </h3>
                  <ul className="relative list-none p-0">
                    {excluded.map((i: string) => (
                      <li
                        key={i}
                        className="relative pl-6 mb-3 font-medium text-text-secondary text-base before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-red-500 before:shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={fadeUp} className="mb-14">
                <div className="mb-8">
                  <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                    Day by Day
                  </span>
                  <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-black text-text-primary tracking-[-0.02em]">
                    Your{" "}
                    <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                      Itinerary
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col gap-8 relative before:content-[''] before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gold-400 before:to-gray-100 max-md:gap-6 max-md:before:left-6">
                  {itinerary.map(
                    (
                      item: {
                        day: number;
                        title: string;
                        description: string;
                      },
                      index: number,
                    ) => (
                      <div
                        key={index}
                        className="grid grid-cols-[64px_1fr] gap-5 items-start relative max-md:grid-cols-[48px_1fr] max-md:gap-3"
                      >
                        <div className="relative w-16 h-16 bg-white border-2 border-gold-400 rounded-xl flex flex-col items-center justify-center z-[2] shadow-[var(--shadow-card-rest)] max-md:w-12 max-md:h-12 max-md:rounded-lg">
                          <span className="font-mono text-[0.6rem] font-bold uppercase text-text-muted tracking-wider leading-none max-md:text-[0.55rem]">
                            Day
                          </span>
                          <strong className="font-mono text-lg font-black text-gold-400 max-md:text-[0.95rem]">
                            {item.day}
                          </strong>
                        </div>
                        <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-6 py-5 shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)]">
                          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-gold-50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                          <h3 className="relative font-display text-[1.15rem] font-black text-text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="relative text-base text-text-secondary leading-[1.7] m-0">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </motion.section>

              <motion.section variants={fadeUp} className="mb-14">
                <div className="mb-8">
                  <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                    Navigation
                  </span>
                  <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-black text-text-primary tracking-[-0.02em]">
                    Tour{" "}
                    <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                      Map
                    </span>
                  </h2>
                </div>
                <div className="h-[380px] rounded-3xl overflow-hidden border border-gray-100 shadow-[var(--shadow-card-rest)]">
                  <iframe
                    title="Tour Map"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(pkg.location + " Odisha")}&t=&z=8&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.section>
            </motion.div>

            <motion.div
              className="sticky top-[100px] max-lg:static"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 mb-6 shadow-[var(--shadow-card-elevated)]">
                <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold-400/10 blur-[60px]" />
                <div className="relative flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-black text-text-primary m-0">
                    Secure Your Spot
                  </h3>
                  {pkg.isOnSale && (
                    <span className="inline-flex items-center px-3 py-[5px] rounded-full bg-danger text-white font-mono text-[0.65rem] font-black uppercase tracking-wider shadow-[0_2px_10px_rgba(239,68,68,0.35)]">
                      🔥 Sale
                    </span>
                  )}
                </div>
                <div className="relative mb-6">
                  <span className="block font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider mb-1">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-2.5 mb-1">
                    <span className="font-mono text-[2.5rem] font-black text-gold-400">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="font-mono text-base text-red-500 line-through font-semibold">
                        &#8377;
                        {Number(pkg.originalPrice).toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  <span className="block font-mono text-xs font-bold text-text-muted mb-3">
                    per person
                  </span>
                  {pkg.originalPrice &&
                    pkg.discountedPrice &&
                    pkg.originalPrice > pkg.discountedPrice && (
                      <span className="inline-block px-3.5 py-1 rounded-full bg-gold-400/10 text-gold-400 font-mono text-[0.65rem] font-black">
                        Save &#8377;
                        {(
                          Number(pkg.originalPrice) -
                          Number(pkg.discountedPrice)
                        ).toLocaleString("en-IN")}
                        !
                      </span>
                    )}
                </div>

                <ul className="relative list-none p-0 mb-6">
                  <li className="flex items-center gap-3 font-bold text-text-secondary mb-4 text-base [&_svg]:text-gold-400 [&_svg]:text-lg">
                    <FaClock /> {pkg.duration} Trip
                  </li>
                  <li className="flex items-center gap-3 font-bold text-text-secondary mb-4 text-base [&_svg]:text-gold-400 [&_svg]:text-lg">
                    <FaMapMarkerAlt /> {pkg.location}
                  </li>
                </ul>

                <button
                  className="relative w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white font-black rounded-full py-[18px] text-[1.05rem] flex items-center justify-center gap-2 hover:shadow-[var(--shadow-badge-glow)] transition-all"
                  onClick={() =>
                    handleRedirectTheUserToWhatsApp({
                      messageType: "dynamic",
                      dynamicMessage: `Hi, I am interested in booking the "${pkg.title}" package (${pkg.duration}). Please share the booking details.`,
                    })
                  }
                >
                  <FaWhatsapp /> Enquire via WhatsApp
                </button>

                <p className="text-center mt-4 text-xs font-semibold text-text-muted">
                  * Best price guarantee. No booking fees.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)]">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <h4 className="relative font-display text-xl font-black mb-3 text-text-primary">
                  Need Customization?
                </h4>
                <p className="relative text-base text-text-secondary mb-6 leading-[1.6]">
                  We can tailor this itinerary to your specific needs.
                </p>
                <a
                  href="tel:+919861151591"
                  className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-400/30 text-gold-400 font-black text-base hover:border-gold-400 hover:bg-gold-400/10 transition-all"
                >
                  <FaPhone /> Call Travel Expert
                </a>
              </div>

              {/* Destination Cross-Link */}
              {(() => {
                const slug = getDestinationSlug(pkg.location ?? "");
                if (!slug) return null;
                const label =
                  pkg.location.charAt(0).toUpperCase() +
                  pkg.location.slice(1).split(" ")[0];
                return (
                  <Link
                    href={`/destinations/${slug}`}
                    className="flex items-center gap-4 bg-gradient-to-br from-gold-50 to-white border border-gold-400/20 rounded-2xl px-6 py-5 no-underline mt-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-float)] [&>svg]:text-[1.4rem] [&>svg]:text-gold-400 [&>svg]:shrink-0"
                  >
                    <FaCompass />
                    <div>
                      <span className="block font-mono text-[0.65rem] font-bold uppercase tracking-[0.08em] text-gold-400 mb-0.5">
                        Explore Destination
                      </span>
                      <span className="block font-display text-[0.95rem] font-bold text-text-primary">
                        {label} Travel Guide →
                      </span>
                    </div>
                  </Link>
                );
              })()}
            </motion.div>
          </div>

          {/* Similar Packages */}
          {relatedPackages.length > 0 && (
            <motion.section
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10">
                <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                  More Tours
                </span>
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-black text-text-primary tracking-[-0.02em]">
                  You May{" "}
                  <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                    Also Like
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
                {relatedPackages.map((rp) => (
                  <Link
                    key={rp._id}
                    href={`/packages/${rp.slug.current}`}
                    className="block rounded-3xl overflow-hidden no-underline border border-gray-100 bg-white shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)] hover:-translate-y-1 group"
                  >
                    <div className="relative h-[180px] overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,10,19,0.5)] to-transparent" />
                    </div>
                    <div className="p-5 pb-6">
                      <span className="inline-block font-mono text-[0.65rem] font-bold uppercase tracking-[0.07em] text-gold-400 mb-2">
                        {rp.category}
                      </span>
                      <h3 className="font-display text-base font-black text-text-primary mb-4 leading-[1.3]">
                        {rp.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-text-muted flex-wrap [&_span]:flex [&_span]:items-center [&_span]:gap-1 [&_svg]:text-[0.75rem]">
                        <span>
                          <FaMapMarkerAlt /> {rp.location}
                        </span>
                        <span>
                          <FaClock /> {rp.duration}
                        </span>
                        <span className="font-mono font-black !text-gold-400 ml-auto">
                          {rp.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </LazyMotion>
  );
}
