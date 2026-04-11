"use client";

import Link from "next/link";
import { LazyMotion, domMax, m as motion } from "framer-motion";
import {
  FaArrowRight,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUtensils,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import useWhatsApp from "@/hooks/useWhatsApp";
import type { SanityPackage } from "@/sanity/queries";
import Image from "next/image";
import { blogPosts } from "@/utils/blogPosts";

const staggerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DestinationDetailsClient({
  cityInfo,
  relatedPackages,
}: {
  cityInfo: any;
  relatedPackages: SanityPackage[];
}) {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  const cityRelatedPosts = blogPosts
    .filter((post) => post.tags.includes(cityInfo.slug))
    .slice(0, 2);

  return (
    <LazyMotion features={domMax}>
      <section className="bg-white">
        {/* Dynamic Hero Section */}
        <section className="relative h-[72vh] min-h-[500px] bg-bg-deepest flex items-center justify-center overflow-hidden">
          <Image
            src={cityInfo.image}
            alt={cityInfo.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center 0%" }}
            className="z-0 scale-110"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,19,0.2)] to-[rgba(6,10,19,0.85)] z-[1]" />

          <motion.div
            className="relative z-[2] text-center max-w-7xl w-full px-5 md:px-8 lg:px-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-sm font-extrabold text-gold-400 uppercase tracking-[0.2em] mb-4">
              Destination Guide
            </span>
            <h1 className="font-display text-[clamp(3rem,10vw,5rem)] font-black text-white leading-none tracking-[-0.04em] [text-shadow:0_10px_30px_rgba(0,0,0,0.3)]">
              {cityInfo.name}
            </h1>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 py-[60px] md:py-[100px]">
          {/* History & Overview */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                Discovery
              </span>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-black text-text-primary tracking-[-0.02em]">
                The{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  Legacy
                </span>{" "}
                of {cityInfo.name}
              </h2>
            </div>
            <p className="text-xl text-text-secondary leading-[1.8] mb-12 max-w-[900px]">
              {cityInfo.history}
            </p>

            {/* Quick Info Bar */}
            <div className="flex gap-12 p-8 bg-white rounded-2xl border border-gray-100 shadow-[var(--shadow-card-rest)] max-sm:flex-col max-sm:gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gold-400/10 text-gold-400 flex items-center justify-center text-2xl">
                  <FaCalendarAlt />
                </div>
                <div>
                  <h4 className="text-[0.85rem] font-extrabold text-text-muted uppercase tracking-[0.05em] mb-1">
                    Best Time
                  </h4>
                  <p className="text-lg font-extrabold text-text-primary">
                    {cityInfo.bestTimeToVisit}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gold-400/10 text-gold-400 flex items-center justify-center text-2xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-[0.85rem] font-extrabold text-text-muted uppercase tracking-[0.05em] mb-1">
                    Top Spots
                  </h4>
                  <p className="text-lg font-extrabold text-text-primary">
                    {cityInfo.attractions?.length || 0} Landmarks
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Local Flavors */}
          {cityInfo.localFood && (
            <section className="mb-24">
              <div className="mb-10">
                <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                  Gastronomy
                </span>
                <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-black text-text-primary tracking-[-0.02em]">
                  Local{" "}
                  <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                    Flavors
                  </span>
                </h2>
              </div>
              <motion.div
                className="flex flex-wrap gap-4"
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {cityInfo.localFood.map((food: string, idx: number) => (
                  <motion.div
                    key={idx}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-gray-100 bg-white px-6 py-3 font-bold text-text-primary shadow-[var(--shadow-card-rest)] transition-all duration-300 hover:border-gold-400/20 hover:shadow-[var(--shadow-card-float)]"
                    variants={itemVariants}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-gold-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <span className="relative text-gold-400">
                      <FaUtensils />
                    </span>
                    <span className="relative">{food}</span>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Top Attractions Grid */}
          <section className="mb-24">
            <div className="mb-10">
              <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                Highlights
              </span>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-black text-text-primary tracking-[-0.02em]">
                Places to{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  Explore
                </span>
              </h2>
            </div>

            {cityInfo.attractions && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
              >
                {cityInfo.attractions.map((attr: any, index: number) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)]"
                    variants={itemVariants}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-50 text-gold-400 text-xl transition-all duration-300 group-hover:bg-gold-400 group-hover:text-white group-hover:shadow-[var(--shadow-badge-glow)]">
                        <FaMapMarkerAlt />
                      </div>

                      <div className="relative min-w-0">
                        <span className="mb-1 block text-[0.75rem] font-extrabold uppercase tracking-[0.1em] text-gold-400">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-[1.3rem] font-black text-text-primary leading-tight mb-3 tracking-tight">
                          {attr.name}
                        </h3>
                        <p className="text-[0.92rem] leading-[1.7] text-text-secondary">
                          {attr.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>

          {/* Travel Tips */}
          {cityInfo.travelTips && (
            <section className="mb-24">
              <div className="mb-10">
                <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                  Pro Tips
                </span>
                <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-black text-text-primary tracking-[-0.02em]">
                  Essential{" "}
                  <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                    Travel Tips
                  </span>
                </h2>
              </div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {cityInfo.travelTips.map((tip: string, idx: number) => (
                  <motion.div
                    key={idx}
                    className="group relative flex gap-5 overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)]"
                    variants={itemVariants}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <FaLightbulb className="relative text-2xl text-gold-400 shrink-0 mt-0.5" />
                    <p className="relative text-base font-semibold text-text-secondary leading-relaxed">
                      {tip}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Related Tours Section */}
          {relatedPackages.length > 0 && (
            <section className="mb-10">
              <div className="mb-10">
                <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                  Available Tours
                </span>
                <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-black text-text-primary tracking-[-0.02em]">
                  Explore{" "}
                  <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                    Packages
                  </span>
                </h2>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {relatedPackages.map((pkg) => (
                  <motion.div
                    key={pkg._id}
                    className="group relative h-[480px] rounded-2xl overflow-hidden bg-bg-deepest transition-all duration-300 flex flex-col justify-end hover:-translate-y-2.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    variants={itemVariants}
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[rgba(6,10,19,0.9)]" />

                    <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-[2]">
                      <div className="flex flex-col gap-1.5 items-start">
                        <span className="px-3 py-1.5 rounded-full text-xs font-extrabold text-white bg-[rgba(6,10,19,0.6)] backdrop-blur-sm">
                          {pkg.duration}
                        </span>
                        {pkg.isOnSale && (
                          <span className="inline-block px-3 py-1.5 rounded-full bg-red-500 text-white text-[0.7rem] font-extrabold uppercase tracking-wider shadow-[0_2px_10px_rgba(239,68,68,0.55)] animate-pulse">
                            🔥 Sale
                          </span>
                        )}
                      </div>
                      <span className="px-3 py-1.5 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-gold-400 to-gold-600">
                        {pkg.category}
                      </span>
                    </div>

                    <div className="relative z-[2] p-8">
                      <div>
                        <Link
                          href={`/packages/${pkg.slug.current}`}
                          className="no-underline"
                        >
                          <h3 className="font-display text-2xl font-black text-white mb-2">
                            {pkg.title}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-1.5 text-white/80 text-[0.85rem] font-semibold mb-4">
                          <CiLocationOn />
                          <span>{pkg.location}</span>
                        </div>
                      </div>

                      <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <ul className="list-none p-0 m-0 mb-6">
                          {pkg.highlights.slice(0, 3).map((h: string) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-white text-[0.85rem] mb-1.5"
                            >
                              <FaArrowRight className="text-gold-400" /> {h}
                            </li>
                          ))}
                        </ul>

                        <div className="flex justify-between items-center pt-5 border-t border-white/10">
                          <div className="flex flex-col">
                            <span className="block text-[0.7rem] text-white/60 uppercase mb-0.5">
                              Starting from
                            </span>
                            {pkg.originalPrice != null && (
                              <span className="block text-xs text-[rgba(255,140,105,0.95)] line-through decoration-red-500 decoration-[1.5px] font-semibold leading-none mb-0.5">
                                &#8377;
                                {Number(pkg.originalPrice).toLocaleString(
                                  "en-IN",
                                )}
                              </span>
                            )}
                            <span className="text-[1.4rem] font-black text-white">
                              {pkg.price}
                            </span>
                          </div>
                          <div className="flex gap-2.5">
                            <Link
                              href={`/packages/${pkg.slug.current}`}
                              className="px-4 py-2 rounded-full text-[0.8rem] font-extrabold border border-white/30 bg-white/10 text-white transition-all duration-200 hover:bg-white/20"
                            >
                              View
                            </Link>
                            <button
                              className="px-4 py-2 rounded-full text-[0.8rem] font-extrabold border-none bg-gradient-to-r from-gold-400 to-gold-600 text-white transition-all duration-200 flex items-center gap-1 cursor-pointer hover:from-gold-500 hover:to-gold-700"
                              onClick={(e) => {
                                e.preventDefault();
                                handleRedirectTheUserToWhatsApp({
                                  messageType: "dynamic",
                                  dynamicMessage: `Hi, I'm interested in the ${pkg.title} package (${pkg.duration}). Please share details and availability.`,
                                });
                              }}
                            >
                              <FaWhatsapp /> Book
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Related Blog Posts */}
          {cityRelatedPosts.length > 0 && (
            <section className="mb-16">
              <div className="mb-10">
                <span className="block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
                  From Our Blog
                </span>
                <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-black text-text-primary tracking-[-0.02em]">
                  Travel{" "}
                  <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                    Guides
                  </span>
                </h2>
              </div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-7"
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
              >
                {cityRelatedPosts.map((post) => (
                  <motion.div
                    key={post.slug}
                    variants={itemVariants}
                    className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)]"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block no-underline h-full"
                    >
                      <div className="relative h-[180px] overflow-hidden bg-bg-elevated">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <span className="absolute top-3.5 left-3.5 bg-gradient-to-r from-gold-400 to-gold-600 text-white text-[0.7rem] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="px-6 pt-5 pb-6">
                        <h3 className="font-display text-[1.05rem] font-extrabold text-text-primary leading-[1.4] mb-2.5 tracking-tight">
                          {post.title}
                        </h3>
                        <p className="text-[0.9rem] text-text-secondary leading-relaxed mb-3.5">
                          {post.excerpt.slice(0, 110)}…
                        </p>
                        <div className="flex items-center gap-1.5 text-[0.8rem] text-text-muted font-semibold">
                          <FaClock className="text-xs text-gold-400" />
                          <span>{post.readTime}</span>
                          <span className="ml-auto text-gold-400 font-bold text-[0.82rem] transition-transform duration-200 group-hover:translate-x-1">
                            Read guide →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Internal links: pillar → spoke navigation */}
          <section className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap gap-4 justify-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3 text-[0.9rem] font-semibold text-text-primary no-underline shadow-[var(--shadow-card-rest)] transition-all duration-300 hover:border-gold-400/25 hover:shadow-[var(--shadow-card-float)]"
            >
              <FaArrowRight className="text-gold-400" /> Explore All Odisha Tour
              Packages
            </Link>
            <Link
              href="/car-booking"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3 text-[0.9rem] font-semibold text-text-primary no-underline shadow-[var(--shadow-card-rest)] transition-all duration-300 hover:border-gold-400/25 hover:shadow-[var(--shadow-card-float)]"
            >
              <FaArrowRight className="text-gold-400" /> Book Transport for Your{" "}
              {cityInfo.name} Trip
            </Link>
          </section>
        </div>
      </section>
    </LazyMotion>
  );
}
