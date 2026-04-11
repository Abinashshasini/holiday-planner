"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m as motion,
  type Variants,
} from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import {
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaShieldAlt,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";
import type { SanityPackage } from "@/sanity/queries";
import useWhatsApp from "@/hooks/useWhatsApp";

type PackageItem = SanityPackage;

function getSlug(pkg: PackageItem): string {
  return pkg.slug.current;
}

function getKey(pkg: PackageItem): string {
  return pkg._id;
}

const categories = ["all", "beach", "heritage", "nature", "tribal"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PackagesClient({
  packages,
  defaultFilter = "all",
}: {
  packages?: SanityPackage[];
  defaultFilter?: string;
}) {
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  const source: PackageItem[] = packages ?? [];

  const filtered =
    activeFilter === "all"
      ? source
      : source.filter((p) => p.category === activeFilter);

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-white min-h-screen">
        {/* Page Hero */}
        <div className="relative h-[70vh] min-h-[400px] bg-gray-900 flex items-center justify-center overflow-hidden pb-12 px-5 md:px-8">
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773502340/Gemini_Generated_Image_754xh8754xh8754x_1_mxlrmz.png"
            alt="Scenic Odisha landscape"
            fill
            style={{ objectFit: "cover", objectPosition: "center 0%" }}
            className="z-0 scale-105 transition-transform duration-[8s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(6,10,19,0.2)] to-[rgba(6,10,19,0.85)]" />
          <motion.div
            className="relative z-[2] text-center px-5 md:px-8 max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-xl text-white font-mono text-base font-bold tracking-widest uppercase mb-6">
              10+ Handcrafted Itineraries
            </span>
            <h1 className="font-display text-[clamp(2.2rem,6vw,3.5rem)] font-black text-white mb-4 leading-[1.08] tracking-tight">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Odisha
              </span>{" "}
              Journey
            </h1>
            <p className="text-lg text-white/80 max-w-[620px] mx-auto mb-6 leading-relaxed font-medium">
              Temple trails, coastal escapes, tribal encounters, wildlife
              safaris — every package designed by locals who&apos;ve explored
              every corner of this extraordinary state.
            </p>
            <nav className="flex items-center justify-center gap-2.5 font-mono text-[0.65rem] font-semibold text-white/50 tracking-widest uppercase">
              <Link
                href="/"
                className="text-gold-400 hover:text-white transition-colors no-underline"
              >
                Home
              </Link>{" "}
              <span>/</span> <span>Packages</span>
            </nav>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 pt-16 pb-20 md:pt-10 md:pb-12 relative">
          {/* Unified Control Panel */}
          <motion.div
            className="rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-[var(--shadow-card-rest)] mb-12 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Trust Metrics */}
            <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-3 md:gap-x-10 py-5 px-8">
              {[
                { icon: <FaStar />, value: "4.8★", label: "Google Rating" },
                {
                  icon: <FaShieldAlt />,
                  value: "500+",
                  label: "Happy Travelers",
                },
                {
                  icon: <FaMoneyBillWave />,
                  value: "Zero",
                  label: "Advance Payment",
                },
                { icon: <FaHeadset />, value: "24/7", label: "Trip Support" },
              ].map((item, i, arr) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-gold-400 text-sm">{item.icon}</span>
                  <span className="text-xs text-text-secondary">
                    <strong className="text-text-primary font-bold">
                      {item.value}
                    </strong>{" "}
                    {item.label}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="w-px h-4 bg-gray-200/70 ml-4 md:ml-6 max-sm:hidden" />
                  )}
                </div>
              ))}
            </div>

            {/* Urgency Accent */}
            <div className="bg-gradient-to-r from-gold-50 via-gold-50/60 to-transparent border-t border-b border-gray-100 px-8 py-3 text-center">
              <span className="text-xs text-gold-500 font-semibold leading-relaxed">
                🔥 <strong className="text-gold-600">Peak Season Alert:</strong>{" "}
                April–June packages are filling fast — only limited slots remain
                for the summer holiday season.
              </span>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-2.5 flex-wrap px-8 py-4 max-sm:px-5 max-sm:py-4">
              <span className="flex items-center gap-2 font-mono text-[0.65rem] font-bold text-text-primary uppercase tracking-widest mr-1">
                <MdOutlineFilterList /> Filter:
              </span>
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-xs font-bold cursor-pointer transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-[var(--shadow-badge-glow)]"
                      : "text-text-secondary hover:text-gold-500 hover:bg-gold-50"
                  }`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Package Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-6 max-sm:auto-rows-auto max-sm:gap-5 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={activeFilter}
          >
            {filtered.map((pkg, index) => {
              const isFeatured = index === 0;
              const isWide = index === 3;

              return (
                <motion.div
                  variants={itemVariants}
                  key={getKey(pkg)}
                  className={`group relative rounded-3xl overflow-hidden border border-gray-100 bg-white transition-all duration-500 flex flex-col justify-end min-h-[400px] max-sm:min-h-[420px] shadow-[var(--shadow-card-rest)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-elevated)] ${
                    isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
                  } ${isWide ? "lg:col-span-2" : ""}`}
                >
                  {isFeatured && (
                    <div className="absolute top-5 -right-[34px] z-[4] bg-gradient-to-r from-gold-400 to-gold-600 text-white font-mono text-[0.6rem] font-black uppercase tracking-widest py-1.5 px-10 rotate-45 shadow-[var(--shadow-badge-glow)]">
                      <span className="block text-center">★ Most Popular</span>
                    </div>
                  )}
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] z-0 group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(6,10,19,0.88)] z-[1] transition-all duration-500 group-hover:to-[rgba(6,10,19,0.95)]" />

                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-[2]">
                    <div className="flex flex-col gap-1.5 items-start">
                      <span className="px-3.5 py-1.5 rounded-full font-mono text-[0.65rem] font-black uppercase tracking-widest bg-[rgba(6,10,19,0.5)] backdrop-blur-xl text-white border border-white/[0.12]">
                        {pkg.duration}
                      </span>
                      {pkg.isOnSale && (
                        <span className="inline-block px-3 py-1.5 rounded-full bg-red-500 text-white font-mono text-[0.65rem] font-black uppercase tracking-widest shadow-[0_2px_10px_rgba(239,68,68,0.45)]">
                          🔥 Sale
                        </span>
                      )}
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full font-mono text-[0.65rem] font-black uppercase tracking-widest bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-[var(--shadow-badge-glow)]">
                      {pkg.category}
                    </span>
                  </div>

                  <div
                    className={`relative z-[2] p-6 w-full flex flex-col gap-4 ${isFeatured ? "lg:p-10" : ""}`}
                  >
                    <div>
                      <Link
                        href={`/packages/${getSlug(pkg)}`}
                        className="no-underline text-inherit"
                      >
                        <h3
                          className={`font-display font-black text-white leading-[1.15] m-0 ${isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}
                        >
                          {pkg.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-1.5 text-white/75 text-xs font-semibold mt-1">
                        <CiLocationOn className="text-gold-400" />
                        <span>{pkg.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      <ul
                        className={`list-none p-0 m-0 flex flex-col gap-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-sm:hidden ${
                          isFeatured
                            ? "opacity-100 max-h-[200px] translate-y-0 max-sm:!flex"
                            : "opacity-0 max-h-0 overflow-hidden translate-y-2 group-hover:opacity-100 group-hover:max-h-[120px] group-hover:translate-y-0"
                        }`}
                      >
                        {pkg.highlights
                          .slice(0, isFeatured ? 4 : 3)
                          .map((h: string) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-white/85 text-xs font-medium"
                            >
                              <FaArrowRight className="text-gold-400 text-[0.6rem]" />{" "}
                              {h}
                            </li>
                          ))}
                      </ul>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex flex-col">
                          <span className="block font-mono text-[0.6rem] text-white/45 uppercase font-bold tracking-widest mb-0.5">
                            Starting from
                          </span>
                          {pkg.originalPrice != null && (
                            <span className="block font-mono text-[0.65rem] text-red-400/90 line-through decoration-red-500 decoration-[1.5px] font-semibold leading-none mb-0.5">
                              &#8377;
                              {Number(pkg.originalPrice).toLocaleString(
                                "en-IN",
                              )}
                            </span>
                          )}
                          <span className="font-mono text-[1.4rem] font-black text-gold-400 leading-none">
                            {pkg.price}
                          </span>
                          <span className="block font-mono text-[0.6rem] text-white/35 font-semibold mt-0.5">
                            per person
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/packages/${getSlug(pkg)}`}
                            className="px-5 py-2 rounded-full bg-white/[0.12] backdrop-blur-sm border border-white/[0.15] text-white text-xs font-bold no-underline transition-all duration-300 tracking-[0.01em] hover:bg-gold-400 hover:text-white hover:border-gold-400 hover:shadow-[var(--shadow-badge-glow)]"
                          >
                            Explore
                          </Link>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-[38px] h-[38px] rounded-full bg-[#25d366] text-white border-none flex items-center justify-center cursor-pointer text-base transition-all shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
                            onClick={(e) => {
                              e.preventDefault();
                              handleRedirectTheUserToWhatsApp({
                                messageType: "dynamic",
                                dynamicMessage: `Hi, I'm interested in the ${pkg.title} package (${pkg.duration}).`,
                              });
                            }}
                          >
                            <FaWhatsapp />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white py-16 px-10 max-md:py-12 max-md:px-6 text-center shadow-[var(--shadow-card-rest)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-gold-400/15 blur-[80px]" />
            <span className="relative z-[1] block text-[0.85rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-3">
              Custom Itinerary
            </span>
            <h2 className="relative z-[1] font-display text-2xl md:text-3xl font-black mb-4 tracking-tight leading-[1.1] text-text-primary">
              Your Perfect Trip Doesn&apos;t Exist Yet —{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Let&apos;s Create It
              </span>
            </h2>
            <p className="relative z-[1] text-lg mb-8 text-text-secondary max-w-[560px] mx-auto leading-relaxed">
              Tell us your dates, dream destinations, and travel style. Our
              experts will craft a bespoke Odisha itinerary you won&apos;t find
              anywhere else.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-[1] px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white font-black text-base cursor-pointer border-none transition-all duration-300 hover:shadow-[var(--shadow-badge-glow)]"
              onClick={() =>
                handleRedirectTheUserToWhatsApp({
                  messageType: "dynamic",
                  dynamicMessage:
                    "Hi, I'd like a custom Odisha tour package tailored to my preferences. Please help me plan!",
                })
              }
            >
              Design My Trip on WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </div>
    </LazyMotion>
  );
}
