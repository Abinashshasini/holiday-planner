"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaUsers,
  FaCar,
  FaStar,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaUserCheck,
  FaBolt,
} from "react-icons/fa";
import { serviceDetailsData } from "@/utils";
import useWhatsApp from "@/hooks/useWhatsApp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: FaShieldAlt,
    title: "Fully Insured Fleet",
    desc: "Comprehensive vehicle & passenger coverage on every trip — zero liability on you.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Real-Time GPS Tracking",
    desc: "Every car is live-tracked. Share your route with family for complete peace of mind.",
  },
  {
    icon: FaUserCheck,
    title: "Verified Chauffeurs",
    desc: "Government-licensed, background-checked, hospitality-trained — travel companions, not just drivers.",
  },
  {
    icon: FaBolt,
    title: "Confirmed in 10 Minutes",
    desc: "WhatsApp your dates, get a price, book instantly. No forms, no waitlists, no stress.",
  },
];

const CarBookingClient = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const { luxuryCar, tempoTraveler, carRental } = serviceDetailsData;

  const rowLabels = carRental.tData[0].data.map((d) => d.info);

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <div className="relative h-[88vh] min-h-[560px] max-h-[800px] bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773503526/Gemini_Generated_Image_rac3l0rac3l0rac3_ztsxhq.webp"
          alt="Premium Car Rental Bhubaneswar"
          fill
          style={{ objectFit: "cover" }}
          className="z-0 scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(3,7,18,0.5)] to-[rgba(15,23,42,0.9)] z-[1]" />
        <motion.div
          className="relative z-[2] text-center px-5 md:px-8 max-w-[800px] w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className="flex items-center justify-center gap-2.5 text-base font-medium text-white/40 mb-6">
            <Link
              href="/"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span>Car Booking</span>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-xl text-white/85 font-mono text-[0.65rem] font-semibold uppercase tracking-wider mb-6">
            GPS-Tracked · Fully Insured · 24/7 Support
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-[1.05] tracking-tight">
            Travel Odisha in{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Comfort
            </span>{" "}
            &amp; Confidence
          </h1>
          <p className="text-base md:text-lg text-white/65 max-w-[560px] mx-auto mb-8 leading-relaxed">
            Background-verified chauffeurs, fully insured vehicles, and
            real-time GPS tracking — from Bhubaneswar airport pickups to
            multi-day temple circuit tours.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold rounded-xl px-7 py-3.5 text-sm shadow-[0_8px_24px_rgba(99,102,241,0.15)] transition-all cursor-pointer"
              onClick={() =>
                handleRedirectTheUserToWhatsApp({
                  messageType: "dynamic",
                  dynamicMessage:
                    "Hi, I'd like to book a car for my Odisha trip. Please share available options and pricing.",
                })
              }
            >
              <FaWhatsapp /> Get Instant Quote
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+919861151591"
              className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.15] backdrop-blur-xl text-white font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-white/[0.14] transition-all cursor-pointer"
            >
              <FaPhone /> Same-Day Booking
            </motion.a>
          </div>
          <p className="mt-5 font-mono text-[0.65rem] text-white/35 font-medium tracking-[0.04em]">
            No advance payment &nbsp;·&nbsp; Instant confirmation &nbsp;·&nbsp;
            Cancel anytime
          </p>
        </motion.div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-32">
        {/* ── Why Our Fleet ── */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px" }}
        >
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              variants={fadeUp}
              key={title}
              className="group relative rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-xl p-6 shadow-[var(--shadow-card-rest)] hover:shadow-[var(--shadow-card-float)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-[1]">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold-400/15 to-gold-400/5 flex items-center justify-center text-gold-400 text-base mb-4">
                  <Icon />
                </div>
                <h3 className="font-display text-sm font-bold text-text-primary mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed m-0">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Luxury Cars */}
        <section className="mb-24">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px" }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-[0.9rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
              <FaCar /> Luxury &amp; Wedding
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight mb-3 leading-[1.1]">
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Premium
              </span>{" "}
              Car Fleet
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-[560px] mx-auto leading-relaxed">
              Immaculately maintained luxury sedans and SUVs for weddings,
              corporate transfers, and VIP Odisha experiences — driven by
              trained chauffeurs who know every road.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px" }}
          >
            {luxuryCar.imageData.map((car, idx) => (
              <motion.div
                variants={fadeUp}
                key={`luxury-${idx}`}
                className="group relative rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-[var(--shadow-card-rest)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-elevated)] transition-all duration-500"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />
                <div className="relative h-[220px] overflow-hidden bg-gray-50">
                  <Image
                    src={car.image}
                    alt={car.carName}
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.45)] to-transparent" />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white font-mono text-[0.6rem] font-black uppercase tracking-widest shadow-[var(--shadow-badge-glow)]">
                    Luxury
                  </span>
                </div>
                <div className="relative z-[3] p-6 border-t border-gray-100">
                  <h3 className="font-display text-lg font-black text-text-primary tracking-tight mb-1.5">
                    {car.carName}
                  </h3>
                  <p className="flex items-center gap-2 text-xs font-medium text-text-secondary mb-5 leading-snug">
                    <FaUsers className="text-gold-400 flex-shrink-0" />{" "}
                    {car.capacity}
                  </p>
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 border border-gold-400/25 text-gold-500 font-bold rounded-full px-4 py-3 text-xs hover:bg-gradient-to-r hover:from-gold-400 hover:to-gold-600 hover:text-white hover:border-transparent hover:shadow-[var(--shadow-badge-glow)] transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      handleRedirectTheUserToWhatsApp({
                        messageType: "dynamic",
                        dynamicMessage: `Hi, I'd like to enquire about the ${car.carName}. Please share availability and pricing.`,
                      })
                    }
                  >
                    <FaWhatsapp /> Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tempo / Group Travel */}
        <section className="relative mb-24 rounded-[2rem] bg-gradient-to-b from-gray-50/80 to-white border border-gray-100 p-8 md:p-14 overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gold-400/10 blur-[100px]" />
          <motion.div
            className="relative z-[1] text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px" }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-[0.9rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
              <FaUsers /> Group Travel
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-primary tracking-tight mb-3 leading-[1.1]">
              Tempo Traveller{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Fleet
              </span>
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-[560px] mx-auto leading-relaxed">
              12 to 26-seater AC coaches for pilgrimages, family reunions,
              school excursions, and corporate retreats — push-back seats, ample
              luggage space, stress-free journeys.
            </p>
          </motion.div>

          <motion.div
            className="relative z-[1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px" }}
          >
            {tempoTraveler.imageData.map((car, idx) => (
              <motion.div
                variants={fadeUp}
                key={`tempo-${idx}`}
                className="group relative rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-[var(--shadow-card-rest)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-elevated)] transition-all duration-500"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />
                <div className="relative h-[220px] overflow-hidden bg-gray-50">
                  <Image
                    src={car.image}
                    alt={car.carName}
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.45)] to-transparent" />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-mono text-[0.6rem] font-black uppercase tracking-widest shadow-[0_4px_12px_rgba(16,185,129,0.25)]">
                    Group
                  </span>
                </div>
                <div className="relative z-[3] p-6 border-t border-gray-100">
                  <h3 className="font-display text-lg font-black text-text-primary tracking-tight mb-1.5">
                    {car.carName}
                  </h3>
                  <p className="flex items-center gap-2 text-xs font-medium text-text-secondary mb-5 leading-snug">
                    <FaUsers className="text-gold-400 flex-shrink-0" />{" "}
                    {car.capacity}
                  </p>
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 border border-gold-400/25 text-gold-500 font-bold rounded-full px-4 py-3 text-xs hover:bg-gradient-to-r hover:from-gold-400 hover:to-gold-600 hover:text-white hover:border-transparent hover:shadow-[var(--shadow-badge-glow)] transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      handleRedirectTheUserToWhatsApp({
                        messageType: "dynamic",
                        dynamicMessage: `Hi, I'd like to book the ${car.carName}. Please share details.`,
                      })
                    }
                  >
                    <FaWhatsapp /> Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pricing Table */}
        <section className="mb-24">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px" }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-[0.9rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
              <FaStar /> Transparent Pricing
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-text-primary tracking-tight mb-3 leading-[1.1]">
              Car Rental{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Rates
              </span>
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-[560px] mx-auto leading-relaxed">
              All-inclusive pricing with no hidden charges. Driver allowance
              included.
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto rounded-3xl shadow-[var(--shadow-card-rest)] border border-gray-100 bg-white [-webkit-overflow-scrolling:touch]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <table className="w-full border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-5 text-left font-mono text-[0.65rem] font-bold uppercase tracking-wider text-text-muted w-[200px] min-w-[160px] whitespace-nowrap">
                    Package / Rate
                  </th>
                  {carRental.tData.map((row, i) => (
                    <th
                      key={i}
                      className="p-5 text-center font-display text-xs font-bold text-text-primary whitespace-nowrap border-l border-gray-100"
                    >
                      {row.carName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rowLabels.map((label, rIdx) => (
                  <tr
                    key={label}
                    className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <td className="px-6 py-4 text-xs font-semibold text-text-secondary whitespace-nowrap border-r border-gray-100">
                      {label}
                    </td>
                    {carRental.tData.map((row, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-6 py-4 text-center font-mono text-sm font-bold text-gold-500 border-l border-gray-100 whitespace-nowrap"
                      >
                        {row.data[rIdx]?.price ?? "—"}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-gold-50/60 border-t border-gray-100">
                  <td className="px-6 py-4 text-xs font-semibold text-text-secondary whitespace-nowrap border-r border-gray-100">
                    Book
                  </td>
                  {carRental.tData.map((row, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-5 py-3.5 text-center border-l border-gray-100"
                    >
                      <button
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold rounded-full px-5 py-2.5 text-[0.65rem] uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-[var(--shadow-badge-glow)] transition-all duration-300 cursor-pointer"
                        onClick={() =>
                          handleRedirectTheUserToWhatsApp({
                            messageType: "dynamic",
                            dynamicMessage: `Hi, I want to book the ${row.carName}. Please share details.`,
                          })
                        }
                      >
                        <FaWhatsapp /> Book
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
          <p className="mt-3 text-[0.7rem] text-text-muted text-center md:hidden">
            ← Swipe to see all rates →
          </p>
          <p className="mt-5 text-xs text-text-muted italic text-center">
            * Extra km / hr charges apply beyond package limit. Prices may vary
            during peak season.
          </p>
        </section>

        {/* Bottom CTA */}
        <motion.div
          className="relative rounded-3xl border border-gray-100 bg-white p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-[var(--shadow-card-rest)] gap-10 lg:gap-0"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-gold-400/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gold-400/10 blur-[60px]" />
          <div className="relative z-[1] max-w-[520px] text-center lg:text-left">
            <span className="block text-[0.8rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
              Ready to Go?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-3 tracking-tight leading-[1.1] text-text-primary">
              Odisha Is Waiting —{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Your Car Is Ready.
              </span>
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              WhatsApp us your travel dates and pickup location. We&apos;ll
              confirm availability, share a transparent price, and have a
              verified driver at your door — all in under 10 minutes.
            </p>
          </div>
          <div className="relative z-[1] flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
            <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold rounded-full px-9 py-4 text-sm shadow-[var(--shadow-badge-glow)] hover:shadow-[var(--shadow-card-elevated)] transition-all duration-300 cursor-pointer"
                onClick={() =>
                  handleRedirectTheUserToWhatsApp({
                    messageType: "dynamic",
                    dynamicMessage:
                      "Hi, I'd like to book a car for my Odisha trip. Please share available options and pricing.",
                  })
                }
              >
                <FaWhatsapp /> Book on WhatsApp
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919861151591"
                className="inline-flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-text-primary font-semibold rounded-full px-9 py-4 text-sm hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              >
                <FaPhone /> Call for Same-Day Booking
              </motion.a>
            </div>
            <p className="font-mono text-[0.65rem] text-text-muted font-medium tracking-[0.04em] text-center lg:text-right">
              No advance payment &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp;
              Verified drivers &nbsp;·&nbsp; 4.8★ on Google
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarBookingClient;
