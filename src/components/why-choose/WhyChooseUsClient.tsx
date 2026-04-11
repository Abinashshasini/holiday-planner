"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { whyChooseUsData } from "@/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const stats = [
  {
    number: "500+",
    label: "Happy Travelers",
    proof: "And counting — join them",
  },
  { number: "4.8★", label: "Google Rating", proof: "150+ verified reviews" },
  {
    number: "0",
    label: "Hidden Charges",
    proof: "Transparent pricing, always",
  },
];

const WhyChooseUsClient = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6">
      {/* Background blurred glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold-100/25 blur-[140px]" />
        <div className="absolute bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-ocean-300/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-[720px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-base font-bold uppercase tracking-widest text-gold-400">
            Our Promise
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Why 500+ Travelers{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-[1.7] text-text-secondary">
            Backed by real numbers, not empty claims. Since 2016, we&apos;ve
            built Odisha&apos;s most trusted travel brand — government-licensed
            guides, a spotless fleet, and itineraries designed around you.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          className="mb-12 grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white/70 px-8 py-10 text-center shadow-[var(--shadow-card-rest)] backdrop-blur-xl transition-all duration-500 hover:shadow-[var(--shadow-card-float)]"
            >
              {/* Hover glow overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-100/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-2 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text font-mono text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none text-transparent">
                  {s.number}
                </div>
                <div className="mb-1.5 font-display text-base font-bold text-text-primary">
                  {s.label}
                </div>
                <div className="text-xs font-medium text-text-muted">
                  {s.proof}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whyChooseUsData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-gray-100 bg-white/70 p-6 shadow-[var(--shadow-card-rest)] backdrop-blur-xl transition-all duration-500 hover:shadow-[var(--shadow-card-float)] max-sm:p-4"
            >
              {/* Hover glow overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-100/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-xl text-gold-400 shadow-[var(--shadow-badge-glow)] transition-all duration-300 group-hover:bg-gold-400 group-hover:text-white">
                <item.Icon />
              </div>

              <div className="relative">
                <h4 className="mb-1.5 font-display text-[0.95rem] font-bold leading-[1.3] text-text-primary">
                  {item.text}
                </h4>
                <p className="text-[0.82rem] leading-[1.55] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsClient;
