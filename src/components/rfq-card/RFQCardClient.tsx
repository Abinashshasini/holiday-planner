"use client";

import { motion } from "framer-motion";
import useWhatsApp from "@/hooks/useWhatsApp";
import { FaWhatsapp, FaClock, FaUsers, FaTag } from "react-icons/fa";
import Link from "next/link";

const stats = [
  {
    icon: <FaUsers />,
    value: "237",
    label: "travelers planned trips this month",
  },
  { icon: <FaClock />, value: "< 5 min", label: "average response time" },
  { icon: <FaTag />, value: "Free", label: "personalised trip consultation" },
];

const RFQCardClient = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  return (
    <section className="relative bg-gradient-to-b from-bg-base via-gold-50/40 to-bg-base py-24 md:py-32 lg:py-36 overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.07),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(99,102,241,0.04),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="flex items-center gap-16 max-lg:flex-col max-lg:text-center">
          {/* Left content */}
          <motion.div
            className="flex-1 max-w-[600px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-gold-400 uppercase tracking-widest mb-6 px-4 py-1.5 bg-gold-400/8 border border-gold-400/15 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Your Journey Starts Here
            </span>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-black text-text-primary mb-6 leading-[1.08] tracking-tight">
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Odisha?
              </span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Tell us your dream trip — dates, group size, must-see spots — and
              our experts will craft a bespoke itinerary with transparent
              pricing. No obligations, just inspiration.
            </p>

            <div className="flex items-center gap-5 flex-wrap mt-10 max-sm:flex-col max-sm:items-stretch max-sm:gap-4">
              <button
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-white font-black text-lg border-none cursor-pointer shadow-[0_8px_30px_rgba(99,102,241,0.25)] whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(99,102,241,0.3)] max-sm:px-7 max-sm:py-4 max-sm:text-base max-sm:justify-center"
                onClick={() =>
                  handleRedirectTheUserToWhatsApp({
                    messageType: "custom",
                    dynamicMessage:
                      "Hi! I'd like a free trip quote for Odisha. Please help me plan my trip.",
                  })
                }
              >
                <FaWhatsapp className="text-[1.4rem]" />
                <span>Get Your Free Quote</span>
              </button>
              <Link
                href="/packages"
                className="text-[0.95rem] font-bold text-gold-400 no-underline transition-colors duration-200 hover:text-gold-500"
              >
                Browse packages →
              </Link>
            </div>
            <p className="text-xs text-text-muted font-semibold uppercase tracking-widest mt-4">
              * No commitments required
            </p>
          </motion.div>

          {/* Right stats card */}
          <motion.div
            className="shrink-0 w-[300px] max-lg:w-full max-lg:max-w-[420px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-card-hover">
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-widest text-text-muted mb-6">
                Why travelers choose us
              </p>
              <div className="flex flex-col gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center shrink-0 text-gold-400 text-sm">
                      {s.icon}
                    </div>
                    <div>
                      <span className="block font-mono text-[1.1rem] font-bold text-text-primary leading-tight">
                        {s.value}
                      </span>
                      <span className="block text-[0.82rem] text-text-muted leading-snug mt-0.5">
                        {s.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RFQCardClient;
