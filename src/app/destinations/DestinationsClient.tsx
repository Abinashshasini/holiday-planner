"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m as motion,
  type Variants,
} from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaCameraRetro } from "react-icons/fa";
import { popularCitiesData } from "@/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

export default function DestinationsClient() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative h-[72vh] min-h-[480px] flex items-end overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1775908432/jrc3niu3korvggd6bjtm_q8jeih.webp"
            alt="Scenic Odisha"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/85 z-[1]" />
          <motion.div
            className="relative z-[2] w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-16 pb-16"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-xl text-white/90 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
              Destinations
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
              Odisha&apos;s{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Finest
              </span>{" "}
              Cities
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-[560px]">
              Ancient temples, golden coastlines, and untouched wilderness —
              every destination tells a story worth exploring.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-32">
          {/* Section Header */}
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-base font-bold uppercase tracking-widest text-gold-400">
              Explore Odisha
            </span>
            <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Popular{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-secondary">
              Ancient temples, golden coastlines, and untouched wilderness —
              choose your next Odisha adventure.
            </p>
          </motion.div>

          {/* Destination Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {popularCitiesData.map((dest) => (
              <motion.div
                key={dest.id}
                className="h-full"
                variants={cardVariants}
              >
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="group flex flex-col h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:shadow-[var(--shadow-card-float)]"
                >
                  <div className="relative h-[220px] md:h-[280px] overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/85" />

                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold-400/10 backdrop-blur-lg text-gold-300 font-mono text-xs font-semibold flex items-center gap-1.5 z-[2]">
                      <FaCameraRetro /> {dest.attractions.length} Spots
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 z-[2]">
                      <h3 className="font-display text-2xl font-black text-white leading-[1.1] mb-1.5 tracking-tight">
                        {dest.name}
                      </h3>
                      <div className="flex items-center gap-2 text-white/75 text-xs font-medium">
                        <FaMapMarkerAlt className="text-gold-400 text-[0.75rem]" />
                        <span>
                          {dest.attractions
                            .slice(0, 2)
                            .map((a) => a.name)
                            .join(" · ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1 line-clamp-3">
                      {dest.history.slice(0, 130)}…
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium">
                        <FaMapMarkerAlt className="text-gold-400" />
                        <span>{dest.attractions.length} landmarks</span>
                      </div>
                      <span className="text-gold-400 text-xs font-bold inline-flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5">
                        Discover More <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </LazyMotion>
  );
}
