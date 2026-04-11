"use client";

import Link from "next/link";
import { LazyMotion, domMax, m as motion, type Variants } from "framer-motion";
import {
  FaRegCalendarCheck,
  FaAward,
  FaUsers,
  FaMapMarkedAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineStar, MdOutlineVerified } from "react-icons/md";
import Image from "next/image";
import useWhatsApp from "@/hooks/useWhatsApp";

const values = [
  {
    icon: <MdOutlineVerified />,
    title: "Your Safety, Non-Negotiable",
    desc: "GPS-tracked fleet, fully insured vehicles, and government-verified drivers — because peace of mind is the foundation of every great journey.",
  },
  {
    icon: <FaAward />,
    title: "Obsessed With Excellence",
    desc: "Handpicked hotels, personally vetted routes, and surprise upgrades when we can. We don't just meet expectations — we redefine them.",
  },
  {
    icon: <MdOutlineStar />,
    title: "Unapologetically Local",
    desc: "Skip the tourist traps. Our certified guides take you to hidden waterfalls, village kitchens, and temple ceremonies most visitors never see.",
  },
  {
    icon: <FaUsers />,
    title: "Always a Call Away",
    desc: "Midnight flight delay? Need a pharmacy at 3 AM? Our 24/7 travel concierge is your lifeline — before, during, and after your trip.",
  },
];

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "15+", label: "Destinations" },
  { value: "8+", label: "Years Experience" },
  { value: "4.8★", label: "Google Rating" },
];

const timeline = [
  {
    year: "2016",
    title: "One Car, One Dream",
    desc: "Started with a single Innova and a handwritten list of Odisha's hidden gems. Our first guests? A family of four from Mumbai who wanted to see 'the real Odisha.'",
  },
  {
    year: "2018",
    title: "Fleet Grows, Reputation Follows",
    desc: "Expanded to 10+ vehicles. Earned Bhubaneswar's first 4.8★ Google rating for a travel agency. Tribal tourism routes into Koraput and Mayurbhanj launched.",
  },
  {
    year: "2021",
    title: "Survived, Then Thrived",
    desc: "Pivoted through the pandemic by designing private, sanitized-vehicle itineraries. When travel resumed, we were the first call for hundreds of families.",
  },
  {
    year: "2024",
    title: "Technology Meets Tradition",
    desc: "GPS live-tracking, WhatsApp-first booking, real-time itinerary updates — wrapped in the same personal warmth we started with. 500+ happy travelers and counting.",
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export default function AboutClient() {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  return (
    <LazyMotion features={domMax}>
      <div className="bg-white pt-[60px]">
        {/* ── Hero ── */}
        <div className="relative h-[75vh] min-h-[560px] max-h-[800px] bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773502340/Gemini_Generated_Image_754xh8754xh8754x_1_mxlrmz.png"
            alt="Konark Sun Temple Odisha"
            fill
            style={{ objectFit: "cover" }}
            className="z-0 scale-110"
            priority
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.15),transparent)] z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,19,0.35)] via-[rgba(6,10,19,0.5)] to-[rgba(6,10,19,0.88)] z-[1]" />
          <motion.div
            className="relative z-[2] text-center px-6 max-w-[860px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-xl text-white/80 font-mono text-base font-semibold uppercase tracking-wider mb-6">
              Est. 2016 &bull; Bhubaneswar, Odisha
            </span>
            <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white mb-6 leading-[1.02] tracking-tight">
              We Don&apos;t Plan Trips.
              <br />
              We Craft{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Memories.
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/65 max-w-[620px] mx-auto mb-8 leading-relaxed">
              Born from a love for Odisha&apos;s untold stories — we&apos;ve
              spent 8+ years turning temple trails, coastal sunrises, and tribal
              encounters into journeys that stay with you long after you return
              home.
            </p>
            <nav className="flex items-center justify-center gap-2.5 text-xs font-medium text-white/40">
              <Link
                href="/"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span>About Us</span>
            </nav>
          </motion.div>
        </div>

        {/* ── Stats Strip ── */}
        <motion.section
          className="relative -mt-14 z-10 max-w-5xl mx-auto px-5 md:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-3xl bg-white border border-gray-100 shadow-[var(--shadow-card-elevated)] overflow-hidden">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-8 px-4 text-center border-r border-b border-gray-100 last:border-r-0 md:border-b-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0 max-md:[&:nth-child(odd)]:border-r max-md:[&:nth-child(even)]:border-r-0 max-md:[&:nth-child(n+3)]:border-b-0"
              >
                <span className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-black bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent leading-none mb-1.5">
                  {s.value}
                </span>
                <span className="text-[0.7rem] text-text-muted font-bold uppercase tracking-[0.15em]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Body ── */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32">
          {/* ── Our Story ── */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center mb-28 lg:mb-36"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp}>
              <span className="text-base font-bold uppercase tracking-widest text-gold-400 inline-flex items-center gap-2 mb-4">
                <FaMapMarkedAlt /> Our Story
              </span>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-black text-text-primary mb-8 leading-[1.1] tracking-tight">
                We Know Odisha Because{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  We Live It
                </span>
              </h2>
              <div className="space-y-5 [&>p]:text-base [&>p]:md:text-lg [&>p]:text-text-secondary [&>p]:leading-relaxed">
                <p>
                  Holiday Planner was born in 2016 with a simple conviction:
                  Odisha deserves better than cookie-cutter tourism. We started
                  with one car and a notebook full of secret spots. Today,
                  we&apos;re Bhubaneswar&apos;s highest-rated travel partner —
                  but the notebook still grows.
                </p>
                <p>
                  Imagine watching the sunrise paint Konark&apos;s stone chariot
                  in gold. Tasting fresh fish curry on a Chilika houseboat while
                  Irrawaddy dolphins surface alongside you. Walking through
                  Koraput&apos;s tribal villages where Dhokra art has been
                  forged for a thousand years. These aren&apos;t itinerary
                  bullet points — they&apos;re the moments we design around.
                </p>
                <p>
                  Every guide in our network holds a government-issued license.
                  Every driver is background-verified and road-tested. Every
                  hotel is personally inspected. Because when you trust us with
                  your family&apos;s vacation, we take that personally.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="relative w-full h-[540px] max-lg:h-[400px]"
            >
              <div
                className="absolute inset-0 rounded-3xl bg-cover bg-center shadow-[var(--shadow-card-elevated)]"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dcudnuu04/image/upload/v1774025123/Gemini_Generated_Image_m0k7pom0k7pom0k7_vzis4q.webp)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
              <motion.div
                className="absolute bottom-8 -left-6 max-lg:left-4 max-lg:-bottom-4 flex items-center gap-4 px-7 py-5 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[var(--shadow-card-elevated)] z-[2] border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <FaRegCalendarCheck className="text-[2rem] text-gold-400 shrink-0" />
                <div className="flex flex-col">
                  <strong className="font-display text-base font-black text-text-primary leading-tight">
                    Trusted Since 2016
                  </strong>
                  <span className="text-xs text-text-secondary font-semibold">
                    Bhubaneswar&apos;s #1 Travel Partner
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* ── Timeline: Our Journey ── */}
          <motion.section
            className="relative mb-28 lg:mb-36"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-base font-bold uppercase tracking-widest text-gold-400">
                The Journey
              </span>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-black text-text-primary tracking-tight mb-4">
                From One Car to{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  Odisha&apos;s Most Trusted
                </span>
              </h2>
              <p className="text-base md:text-lg text-text-secondary max-w-[560px] mx-auto leading-relaxed">
                Eight years of milestones, lessons, and a relentless commitment
                to making Odisha travel unforgettable.
              </p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  className={`relative flex items-start gap-6 md:gap-10 mb-12 last:mb-0 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse md:text-right"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 border-[3px] border-white shadow-[var(--shadow-badge-glow)] -translate-x-1/2 z-[2]" />
                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      i % 2 === 0 ? "md:pr-0" : "md:pl-0"
                    }`}
                  >
                    <span className="inline-block font-mono text-[0.9rem] font-black text-gold-500 bg-gold-50 px-3 py-1 rounded-full mb-2.5 tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-black text-text-primary mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Values ── */}
          <motion.section
            className="mb-28 lg:mb-36"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-base font-bold uppercase tracking-widest text-gold-400 inline-flex items-center gap-2 mb-4">
                What We Stand For
              </span>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-black text-text-primary mb-4 tracking-tight">
                The Principles Behind{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  Every Journey
                </span>
              </h2>
              <p className="text-base md:text-lg text-text-secondary max-w-[560px] mx-auto leading-relaxed">
                Four commitments we make to every traveler — no exceptions, no
                fine print, no compromises.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <motion.div
                  variants={fadeUp}
                  key={v.title}
                  className="group relative p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-elevated)] overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-[1] flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/15 to-gold-400/5 text-gold-400 flex items-center justify-center text-xl shrink-0 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white group-hover:shadow-[var(--shadow-badge-glow)]">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-black text-text-primary tracking-tight mb-2">
                        {v.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed m-0">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Why Odisha ── */}
          <motion.section
            className="relative rounded-[2rem] bg-gradient-to-b from-gray-50/80 to-white border border-gray-100 py-20 px-8 md:px-14 text-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gold-400/12 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gold-400/8 blur-[80px]" />
            <div className="max-w-[820px] mx-auto relative z-[1]">
              <span className="text-base font-bold uppercase tracking-widest text-gold-500 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 mb-6 shadow-[var(--shadow-card-rest)]">
                Why Odisha?
              </span>
              <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-black text-text-primary mb-6 tracking-tight leading-[1.08]">
                A Destination the World Is{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  About to Discover
                </span>
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
                While travelers crowd Goa&apos;s beaches and Rajasthan&apos;s
                forts, Odisha quietly offers everything they have — and more.
                Three UNESCO World Heritage Sites. 480 km of pristine coastline.
                Asia&apos;s largest brackish-water lake teeming with Irrawaddy
                dolphins. Tribal communities preserving art forms older than
                recorded history.
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10">
                The secret is getting out. International publications from
                Lonely Planet to Condé Nast are calling Odisha
                &ldquo;India&apos;s last unspoiled frontier.&rdquo; The best
                time to experience it? Before everyone else does.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/packages"
                    className="inline-flex items-center px-9 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold text-sm transition-all duration-300 hover:shadow-[var(--shadow-badge-glow)] no-underline"
                  >
                    Explore Packages
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white border border-gray-200 text-text-primary font-bold text-sm transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                  onClick={() =>
                    handleRedirectTheUserToWhatsApp({
                      messageType: "dynamic",
                      dynamicMessage:
                        "Hi, I'd like to plan a custom Odisha trip. Can you help?",
                    })
                  }
                >
                  <FaWhatsapp className="text-green-500" /> Chat With Us
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </LazyMotion>
  );
}
