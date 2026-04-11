"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Temple Trail",
    subtitle: "Sacred Heritage",
    description:
      "Walk the golden triangle of Puri, Konark & Bhubaneswar with VIP darshan access — no queues, no rush.",
    cta: "Explore This Journey",
    href: "/packages",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773502340/Gemini_Generated_Image_754xh8754xh8754x_1_mxlrmz.png",
    tag: "Heritage · Spiritual",
    large: true,
  },
  {
    id: 2,
    title: "Coastal Odyssey",
    subtitle: "Beaches & Wildlife",
    description:
      "Dolphins at Chilika, sunrise at Chandrabhaga, fresh seafood on a moonlit Puri beach.",
    cta: "Explore This Journey",
    href: "/destinations/puri",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773503526/Gemini_Generated_Image_rac3l0rac3l0rac3_ztsxhq.webp",
    tag: "Nature · Coastal",
    large: false,
  },
  {
    id: 3,
    title: "Tribal Heartland",
    subtitle: "Untouched Odisha",
    description:
      "Meet the Bonda and Dongria Kondh tribes in Odisha's untouched western highlands.",
    cta: "Explore This Journey",
    href: "/packages",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1775906077/kf9e5iwwr8psruqzktqk_reogqj.webp",
    tag: "Tribal · Adventure",
    large: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SignatureExperiences() {
  return (
    <section className="relative bg-bg-base py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle radial glow overlays */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(212,162,84,0.04),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          className="text-center max-w-[700px] mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-base font-bold uppercase tracking-widest text-gold-400 pb-4">
            Curated Experiences
          </span>
          <h2 className="font-display font-black text-text-primary text-2xl md:text-3xl lg:text-4xl leading-tight">
            Journeys You Won&apos;t Find{" "}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Anywhere Else
            </span>
          </h2>
          <p className="text-text-secondary mt-4 text-base leading-relaxed">
            Three ways to experience Odisha — each designed by local insiders
            who know every hidden road, sacred ritual, and sunrise spot.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.15fr_0.85fr] gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px" }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`group relative rounded-2xl overflow-hidden bg-bg-deepest min-h-[340px]${
                exp.large
                  ? " sm:col-span-2 md:col-span-1 md:row-span-2 md:min-h-[540px]"
                  : ""
              }`}
            >
              <Link href={exp.href} className="absolute inset-0 z-[1]">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/25 transition-all duration-500 group-hover:from-black/85 group-hover:to-black/40" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-[2]">
                  <span className="bg-white/[0.12] backdrop-blur border border-white/[0.2] rounded-full font-mono uppercase text-xs px-3 py-1 text-white w-fit mb-3">
                    {exp.tag}
                  </span>
                  <h3 className="font-display font-black text-white text-xl md:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-[0.75rem] text-white/60 uppercase tracking-wider mt-1">
                    {exp.subtitle}
                  </p>
                  <p className="text-white/[0.82] text-sm max-w-[340px] mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-white/90 border-b border-white/30 hover:text-white hover:border-white w-fit mt-4 pb-0.5 transition-colors duration-300">
                    {exp.cta}{" "}
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
