"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LazyMotion, domMax, m as motion, type Variants } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";

interface FormData {
  name: string;
  number: string;
  message?: string;
}

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

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
};

export default function ContactClient() {
  const [userData, setUserData] = useState<FormData>({
    name: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { name = "", number = "", message = "" } = userData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    const { name: field, value } = e.target;
    if (field === "number" && value.length > 10) return;
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = async () => {
    const nameRegex = /^[a-zA-Z\s]{3,60}$/;
    if (!nameRegex.test(name)) {
      toast.error("Please enter a valid name.");
      return;
    }
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(number)) {
      toast.error("Enter a valid 10-digit Indian number.");
      return;
    }

    setLoading(true);
    try {
      // Primary save: Sanity Studio dashboard
      await axios.post("/api/leads", { name, number, message });
      toast.success("Message sent! We'll be in touch soon 🎉");
      setUserData({ name: "", number: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LazyMotion features={domMax}>
      <div className="bg-white">
        <Toaster position="bottom-center" />
        {/* Hero */}
        <div className="relative h-[70vh] min-h-[450px] bg-gray-900 flex items-center justify-center overflow-hidden pt-[65px]">
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773503637/Gemini_Generated_Image_ss7zkqss7zkqss7z_bbfwy7.webp"
            alt="Odisha Coastline"
            fill
            style={{ objectFit: "cover" }}
            className="z-0 scale-110"
            priority
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.15),transparent)] z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,19,0.35)] via-[rgba(6,10,19,0.5)] to-[rgba(6,10,19,0.88)] z-[1]" />
          <motion.div
            className="relative z-[2] text-center px-6 max-w-[1200px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-xl text-white/80 font-mono text-[0.7rem] font-semibold uppercase tracking-wider mb-6">
              Connect with Us
            </span>
            <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white mb-6 leading-[1.02] tracking-tight">
              Your{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Journey
              </span>{" "}
              Begins Here
            </h1>
            <p className="text-base md:text-lg text-white/65 max-w-[600px] mx-auto mb-8 leading-relaxed">
              Have a destination in mind or need expert advice? Our travel
              planners are ready to craft your perfect Odisha escape.
            </p>
            <nav className="flex items-center justify-center gap-2.5 text-xs font-medium text-white/40">
              <Link
                href="/"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span>Contact</span>
            </nav>
          </motion.div>
        </div>

        <div className="max-w-[1200px] mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Info Panel */}
            <motion.div
              variants={slideLeft}
              className="group relative bg-white rounded-3xl p-8 sm:p-6 lg:p-10 border border-gray-100 flex flex-col overflow-hidden shadow-[var(--shadow-card-rest)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h2 className="relative z-[1] text-2xl font-black text-text-primary mb-4">
                Contact Information
              </h2>
              <p className="relative z-[1] text-lg text-text-secondary leading-relaxed mb-12">
                Reach us through any of these channels and we&apos;ll get back
                to you within hours.
              </p>

              <div className="relative z-[1] flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400/15 to-gold-400/5 flex items-center justify-center text-lg text-gold-400 shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-xs font-extrabold text-gold-400 uppercase tracking-wider">
                    Office Address
                  </strong>
                  <span className="text-base text-text-secondary font-semibold transition-colors">
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>

              <div className="relative z-[1] flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400/15 to-gold-400/5 flex items-center justify-center text-lg text-gold-400 shrink-0">
                  <FaPhone />
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-xs font-extrabold text-gold-400 uppercase tracking-wider">
                    Phone / WhatsApp
                  </strong>
                  <a
                    href="tel:+919861151591"
                    className="text-base text-text-secondary font-semibold transition-colors hover:text-gold-500"
                  >
                    +91 98611 51591
                  </a>
                </div>
              </div>

              <div className="relative z-[1] flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400/15 to-gold-400/5 flex items-center justify-center text-lg text-gold-400 shrink-0">
                  <FaEnvelope />
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-xs font-extrabold text-gold-400 uppercase tracking-wider">
                    Email
                  </strong>
                  <a
                    href="mailto:holidayplannertravel@gmail.com"
                    className="text-base text-text-secondary font-semibold transition-colors hover:text-gold-500"
                  >
                    holidayplannertravel@gmail.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="relative z-[1] bg-gray-50/70 border border-gray-100 rounded-2xl p-5 mb-8">
                <p className="text-xs font-extrabold text-gold-400 uppercase tracking-widest mb-3">
                  Office Hours
                </p>
                <div className="flex justify-between items-center text-sm text-text-primary font-medium py-1">
                  <span>Mon – Sat</span>
                  <span className="font-bold text-text-primary">
                    8:00 AM – 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-text-primary font-medium py-1 mt-1.5 pt-2.5 border-t border-gray-100">
                  <span>Sunday</span>
                  <span className="font-bold text-text-primary">
                    9:00 AM – 5:00 PM
                  </span>
                </div>
              </div>

              <div className="relative z-[1] flex gap-3 mt-auto pt-8 border-t border-gray-100">
                <motion.a
                  whileHover={{ y: -4 }}
                  href="https://wa.me/917978065576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-text-secondary transition-all bg-gray-50 border border-gray-100 hover:bg-[#25d366] hover:text-white hover:border-[#25d366] hover:shadow-[0_4px_12px_rgba(37,211,102,0.3)]"
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4 }}
                  href="https://www.instagram.com/holidayplannerodisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-text-secondary transition-all bg-gray-50 border border-gray-100 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-[#dc2743] hover:shadow-[0_4px_12px_rgba(220,39,67,0.3)]"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4 }}
                  href="https://www.facebook.com/holidayplannerodisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-text-secondary transition-all bg-gray-50 border border-gray-100 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] hover:shadow-[0_4px_12px_rgba(24,119,242,0.3)]"
                >
                  <FaFacebook />
                </motion.a>
              </div>
            </motion.div>

            {/* Form Panel */}
            <motion.div
              variants={slideRight}
              className="bg-white rounded-3xl p-8 sm:p-6 lg:p-10 border border-gray-100 shadow-[var(--shadow-card-rest)]"
            >
              <div className="inline-flex items-center gap-1.5 bg-gold-50 border border-gold-200/40 rounded-full px-4 py-2 text-xs text-gold-500 font-semibold mb-5">
                ⚡ Typical response:{" "}
                <strong className="text-gold-600 font-extrabold">
                  within 2 hours
                </strong>
              </div>
              <h2 className="text-2xl font-black text-text-primary mb-10 tracking-tight">
                Send Us a Message
              </h2>

              <div className="mb-6">
                <label className="block text-xs font-extrabold text-text-secondary mb-2.5 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50/70 border border-gray-100 rounded-2xl text-base text-text-primary font-medium outline-none transition-all placeholder:text-text-muted focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-extrabold text-text-secondary mb-2.5 uppercase tracking-widest">
                  Mobile Number
                </label>
                <div className="flex items-center border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/70 transition-all focus-within:border-gold-400/40 focus-within:ring-2 focus-within:ring-gold-400/10">
                  <span className="px-5 py-3 text-base font-extrabold text-text-muted bg-gray-100/80 border-r border-gray-100">
                    +91
                  </span>
                  <input
                    type="number"
                    name="number"
                    placeholder="10-digit number"
                    value={number}
                    onChange={handleChange}
                    className="flex-1 px-5 py-3 bg-transparent text-base text-text-primary font-semibold outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-text-muted"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-extrabold text-text-secondary mb-2.5 uppercase tracking-widest">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your travel plans, dates, group size, etc."
                  maxLength={300}
                  value={message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50/70 border border-gray-100 rounded-2xl text-base text-text-primary font-medium outline-none transition-all min-h-[150px] resize-y placeholder:text-text-muted focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 mt-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold text-base border-none cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-badge-glow)] disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="h-[400px] md:h-[480px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[var(--shadow-card-rest)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238917.13571684694!2d85.63795!3d20.2960587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Holiday Planner Location - Bhubaneswar"
            />
          </motion.div>
        </div>
      </div>
    </LazyMotion>
  );
}
