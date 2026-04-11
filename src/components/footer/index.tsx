"use client";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0b0f1a]">
      {/* Indigo background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-16 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10)_0%,transparent_70%)]" />
        <div className="absolute -right-10 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Top accent line */}
      <div className="relative z-[1] h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="relative z-[1] mx-auto max-w-7xl px-5 pb-10 pt-14 md:pt-[72px] md:px-8 lg:px-10 md:pb-10">
        <motion.div
          className="grid grid-cols-[2.2fr_1fr_1fr_1.6fr] items-start gap-16 max-lg:grid-cols-2 max-lg:gap-12 max-[560px]:grid-cols-1 max-[560px]:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px" }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-gold-400 to-gold-600 text-xl shadow-[var(--shadow-badge-glow)]">
                🏯
              </div>
              <div>
                <div className="text-[1.75rem] font-bold italic leading-none tracking-tight text-white">
                  Holiday Planner
                </div>
                <div className="mt-0.5 text-[0.7rem] uppercase tracking-[0.25em] text-gold-400">
                  Odisha — Since 2016
                </div>
              </div>
            </div>

            <div className="my-5 h-[1.5px] w-12 bg-gradient-to-r from-gold-400 to-gold-400/0" />

            <p className="mb-7 max-w-[300px] text-[0.95rem] italic leading-[1.85] text-white/50">
              Your gateway to the soul of Odisha — curated journeys, premium
              cars, and memories that last a lifetime.
            </p>

            <div className="flex gap-2.5">
              {[
                {
                  href: "https://wa.me/917978065576",
                  label: "WhatsApp",
                  icon: <FaWhatsapp />,
                },
                {
                  href: "https://www.instagram.com/holidayplannerodisha",
                  label: "Instagram",
                  icon: <FaInstagram />,
                },
                {
                  href: "https://www.facebook.com/holidayplannerodisha",
                  label: "Facebook",
                  icon: <FaFacebook />,
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -3 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-lg text-white/50 transition-all duration-250 hover:-translate-y-0.5 hover:border-transparent hover:text-white hover:shadow-[0_8px_20px_rgba(99,102,241,0.25)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 opacity-0 transition-opacity duration-250 group-hover:opacity-100" />
                  <span className="relative z-[1]">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <div className="mb-7 flex items-center gap-2.5">
              <h4 className="whitespace-nowrap text-[1.05rem] font-semibold uppercase tracking-[0.12em] text-white">
                Explore
              </h4>
              <span className="h-px flex-1 bg-gradient-to-r from-gold-400/40 to-transparent" />
            </div>
            <ul className="flex flex-col gap-0.5">
              {[
                { href: "/", label: "Home" },
                { href: "/packages", label: "Tour Packages" },
                { href: "/destinations", label: "Destinations" },
                { href: "/blog", label: "Travel Blog" },
                { href: "/car-booking", label: "Car Booking" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 py-2 text-[0.92rem] text-white/40 transition-all duration-200 before:h-px before:w-0 before:shrink-0 before:bg-gold-400 before:transition-all before:duration-200 before:content-[''] hover:pl-1 hover:text-white hover:before:w-3"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <div className="mb-7 flex items-center gap-2.5">
              <h4 className="whitespace-nowrap text-[1.05rem] font-semibold uppercase tracking-[0.12em] text-white">
                Services
              </h4>
              <span className="h-px flex-1 bg-gradient-to-r from-gold-400/40 to-transparent" />
            </div>
            <ul className="flex flex-col gap-0.5">
              {[
                { href: "/car-booking", label: "Car Rental" },
                { href: "/car-booking", label: "Luxury Cars" },
                { href: "/car-booking", label: "Tempo Traveller" },
                { href: "/packages", label: "Cultural Tours" },
                { href: "/packages", label: "Beach Getaways" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 py-2 text-[0.92rem] text-white/40 transition-all duration-200 before:h-px before:w-0 before:shrink-0 before:bg-gold-400 before:transition-all before:duration-200 before:content-[''] hover:pl-1 hover:text-white hover:before:w-3"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <div className="mb-7 flex items-center gap-2.5">
              <h4 className="whitespace-nowrap text-[1.05rem] font-semibold uppercase tracking-[0.12em] text-white">
                Get in Touch
              </h4>
              <span className="h-px flex-1 bg-gradient-to-r from-gold-400/40 to-transparent" />
            </div>

            {[
              {
                icon: <FaMapMarkerAlt />,
                label: "Location",
                value: "Bhubaneswar, Odisha, India",
              },
              {
                icon: <FaPhone />,
                label: "Phone",
                value: "+91 98611 51591",
                href: "tel:+919861151591",
              },
              {
                icon: <FaEnvelope />,
                label: "Email",
                value: "holidayplannertravel@gmail.com",
                href: "mailto:holidayplannertravel@gmail.com",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="mb-2 flex items-start gap-3.5 rounded-[10px] border border-white/8 bg-white/5 p-3 px-4 transition-all duration-250 hover:translate-x-1 hover:border-gold-400/25 hover:bg-white/8 min-w-0"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-br from-gold-400/30 to-gold-600/20 text-sm text-gold-400">
                  {item.icon}
                </div>
                <div>
                  <span className="mb-0.5 block text-[0.68rem] uppercase tracking-[0.1em] text-gold-400/80">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-[0.9rem] leading-relaxed text-white/55 transition-colors duration-200 hover:text-white break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="block text-[0.9rem] leading-relaxed text-white/55 break-words">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* UPI QR Code */}
            <div className="mt-4 rounded-[12px] border border-white/8 bg-white/5 p-4 text-center">
              <div className="mx-auto mb-3 w-[140px] overflow-hidden rounded-lg border-2 border-gold-400/30">
                <img
                  src="https://res.cloudinary.com/dcudnuu04/image/upload/v1775927838/Screenshot_2026-04-11_224442_jnkvnl.png"
                  alt="UPI QR Code — Scan to Pay Holiday Planner"
                  width={140}
                  height={140}
                  className="block w-full"
                  loading="lazy"
                />
              </div>
              <p className="text-[0.78rem] font-semibold text-white/70">
                IndusInd Bank
              </p>
              <p className="mt-0.5 text-[0.7rem] uppercase tracking-wider text-gold-400/80">
                Scan &amp; Pay
              </p>
              <p className="mt-1.5 rounded-md bg-white/5 px-2 py-1.5 font-mono text-[0.7rem] text-white/40 select-all">
                Pos.11405278@indus
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Popular Searches SEO bar */}
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5 pt-5 font-mono text-[0.72rem] uppercase tracking-wider text-white/20">
            <span className="mr-1 whitespace-nowrap font-bold text-white/15">
              Popular Searches:
            </span>
            {[
              {
                href: "/packages/puri-tour-packages",
                label: "Puri Tour Packages",
              },
              { href: "/packages", label: "Odisha Holiday Packages" },
              { href: "/destinations/puri", label: "Puri Beach Trip" },
              {
                href: "/packages/couple-tour-packages",
                label: "Honeymoon Packages Odisha",
              },
              {
                href: "/packages/family-tour-packages",
                label: "Family Tours Odisha",
              },
              {
                href: "/packages/weekend-getaways-odisha",
                label: "Weekend Getaways Bhubaneswar",
              },
              { href: "/car-booking", label: "Car Rental Bhubaneswar" },
              { href: "/destinations/konark", label: "Konark Sun Temple Tour" },
            ].map(({ href, label }, i, arr) => (
              <span key={href}>
                <Link
                  href={href}
                  className="text-white/20 no-underline transition-colors duration-200 hover:text-gold-400/80"
                >
                  {label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="mx-1.5 text-white/10">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 pt-7 text-center sm:text-left">
            <p className="text-[0.82rem] italic text-white/25">
              © {currentYear} Holiday Planner. All rights reserved.
            </p>

            <div className="flex gap-5">
              <Link
                href="/privacy"
                className="text-[0.8rem] tracking-wider text-white/25 transition-colors duration-200 hover:text-gold-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[0.8rem] tracking-wider text-white/25 transition-colors duration-200 hover:text-gold-400"
              >
                Terms of Use
              </Link>
            </div>

            <p className="flex items-center gap-1.5 text-[0.82rem] italic text-white/25">
              Crafted with{" "}
              <span className="text-[0.9rem] text-gold-400">♥</span> for Odisha
              Tourism
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
