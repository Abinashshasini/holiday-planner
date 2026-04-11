"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ourServicesData } from "@/utils";

import {
  FaGlobe,
  FaHotel,
  FaCar,
  FaSuitcase,
  FaBusAlt,
  FaCaravan,
  FaCarSide,
  FaArrowRight,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "917978065576";

const openWhatsApp = (message: string) => {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
};

const getIcon = (title: string) => {
  if (title === "Car Rental And Booking") return <FaCarSide />;
  if (title === "Luxury Car Wedding Car") return <FaCar />;
  if (title === "Tempo Traveler Booking") return <FaCaravan />;
  if (title === "Bus Travel Rental") return <FaBusAlt />;
  if (title === "Package Service / Duty") return <FaSuitcase />;
  if (title === "Resort Booking") return <FaHotel />;
  return <FaGlobe />;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const OurServicesClient = () => {
  return (
    <section className="bg-bg-base py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-base font-bold uppercase tracking-widest text-gold-400 pb-4">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Premium Travel{" "}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            From airport pickups to luxury wedding convoys — everything you need
            for a seamless Odisha experience, managed by experts who know every
            road and hidden gem.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ourServicesData.map((service) => {
            const cardContent = (
              <div className="group relative h-[420px] rounded-2xl overflow-hidden bg-bg-deepest shadow-card">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 transition-all duration-500 group-hover:from-black/10 group-hover:to-black/95" />

                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-black/30 backdrop-blur-md text-white text-lg transition-all duration-300 group-hover:bg-white group-hover:text-gold-500">
                    {getIcon(service.title)}
                  </div>
                </div>

                <div className="relative z-[2] flex flex-col justify-end h-full p-6">
                  <h3 className="text-white font-display font-bold text-xl mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 mb-3">
                    {service.message ||
                      "Experience premium quality and comfort with our curated selection of services designed for your ultimate satisfaction."}
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <button className="inline-flex items-center gap-2 text-gold-400 font-bold text-sm bg-transparent border-none cursor-pointer">
                      {service.action === "whatsapp" ? (
                        <>
                          <FaWhatsapp /> {service.buttonText}
                        </>
                      ) : (
                        <>{service.buttonText}</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div key={service.id} variants={cardVariants}>
                {service.action === "redirect" ? (
                  <Link
                    href={`/${service.URL}`}
                    style={{ textDecoration: "none" }}
                    passHref
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    onClick={() => openWhatsApp(service.message)}
                  >
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesClient;
