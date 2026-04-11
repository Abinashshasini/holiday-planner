"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import useWhatsApp from "@/hooks/useWhatsApp";

export default function HeroClient() {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773506046/odisha-desktop_s0n0fu.webp"
            alt="Scenic Odisha landscape"
            fill
            priority
            className="object-cover scale-[1.03]"
            sizes="100vw"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[rgba(6,10,19,0.92)] from-0% via-[rgba(6,10,19,0.72)] via-40% to-[rgba(6,10,19,0.2)] to-100%" />
        </div>

        <div className="relative z-[2] max-w-7xl mx-auto px-5 md:px-8 lg:px-16 grid grid-cols-2 items-center gap-12 pt-[100px] pb-20 max-lg:grid-cols-1 max-lg:gap-10 max-lg:text-center">
          {/* Left */}
          <motion.div
            className="max-w-[580px] max-lg:max-w-full max-lg:mx-auto"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-xl font-mono text-xs font-semibold uppercase tracking-widest text-white/85 mb-6">
              Odisha&apos;s Trusted Travel Experts
            </span>

            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-black text-white leading-[1.05] tracking-tight mb-5">
              Discover Odisha{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                Beyond the Guidebooks
              </span>
            </h1>

            <p className="text-lg text-white/60 leading-[1.7] max-w-[480px] mb-8 font-normal max-lg:max-w-full max-lg:mx-auto">
              Curated journeys, verified local experts, and unforgettable
              experiences — from ancient temples to hidden beaches.
            </p>

            <div className="flex items-center gap-4 flex-wrap max-lg:justify-center">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold text-[0.95rem] tracking-tight no-underline whitespace-nowrap shadow-[0_8px_30px_rgba(212,162,84,0.35)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(212,162,84,0.45)] active:translate-y-0"
              >
                Explore Curated Trips <FaArrowRight className="text-sm" />
              </Link>

              <button
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/[0.08] text-white font-semibold text-[0.95rem] border border-white/20 backdrop-blur-xl cursor-pointer transition-all duration-500 no-underline whitespace-nowrap hover:bg-white/15 hover:border-white/40 hover:-translate-y-0.5"
                onClick={() =>
                  handleRedirectTheUserToWhatsApp({
                    messageType: "dynamic",
                    dynamicMessage:
                      "Hi! I'd like to plan a custom Odisha trip. Here's what I'm thinking:",
                  })
                }
              >
                <FaWhatsapp /> Plan My Custom Trip
              </button>
            </div>
          </motion.div>

          {/* Right visual stack */}
          <motion.div
            className="relative grid grid-cols-[1.2fr_0.8fr] grid-rows-[auto_auto] gap-4 h-[460px] max-lg:max-w-[520px] max-lg:mx-auto max-lg:h-[360px] max-sm:h-[280px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dcudnuu04/image/upload/v1775905337/Gemini_Generated_Image_16zxea16zxea16zx_xsrd2x.png"
                alt="Jagannath Temple, Puri"
                fill
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent flex items-end p-5 z-[1]">
                <span className="font-display text-base font-bold text-white">
                  Jagannath Temple, Puri
                </span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://res.cloudinary.com/dcudnuu04/image/upload/v1775905333/gvt0v4pvbeklidmrphvk_rvohcy.webp"
                alt="Konark Sun Temple"
                fill
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent flex items-end p-5 z-[1]">
                <span className="font-display text-base font-bold text-white">
                  Konark Sun Temple
                </span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://res.cloudinary.com/dcudnuu04/image/upload/v1775905333/cqpet9r6amzgfrdd6ajr_zb0pq9.webp"
                alt="Lingaraj Temple, Bhubaneswar"
                fill
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent flex items-end p-5 z-[1]">
                <span className="font-display text-base font-bold text-white">
                  Lingaraj Temple
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}
