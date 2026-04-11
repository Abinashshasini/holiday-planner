"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import type { SanityPackage } from "@/sanity/queries";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

type PackageItem = SanityPackage;

function getSlug(pkg: PackageItem): string {
  return pkg.slug.current;
}

const OurPackagesClient = ({ packages }: { packages?: SanityPackage[] }) => {
  const source: PackageItem[] = packages ?? [];
  const featured = source.slice(0, 6);

  return (
    <section className="relative bg-bg-elevated py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6 mb-16 flex-wrap"
        >
          <div className="max-w-[600px]">
            <span className="text-base font-bold uppercase tracking-widest text-gold-400 pb-4">
              Handpicked Journeys
            </span>
            <Link href="/packages">
              <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-black text-text-primary leading-[1.1] tracking-tight">
                Featured{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                  Packages
                </span>
              </h2>
            </Link>
            <p className="text-[1.05rem] text-text-secondary leading-relaxed mt-4 max-w-[500px] max-md:text-[0.95rem]">
              Every itinerary is crafted by local experts — from temple trails
              and coastal getaways to wildlife safaris deep in Odisha&apos;s
              untouched heartland.
            </p>
          </div>
          <motion.div whileHover={{ x: 5 }}>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-bg-base text-base font-extrabold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              See All 10+ Packages <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full overflow-visible"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex gap-8 py-5 pb-10 pl-[max(var(--section-px,1.25rem),calc((100vw-80rem)/2+1.25rem))] max-lg:pl-5 md:max-lg:pl-8 overflow-x-auto scroll-smooth scrollbar-none after:content-[''] after:pr-5 after:shrink-0 after:w-px no-scrollbar">
          {featured.map((pkg) => (
            <motion.div
              key={pkg._id}
              className="w-[400px] max-md:w-[300px] shrink-0"
              variants={cardVariants}
            >
              <div className="group relative h-[540px] rounded-2xl overflow-hidden bg-bg-deepest shadow-card flex flex-col justify-end transition-all duration-300 hover:shadow-card-hover">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover z-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,19,0.1)] to-[rgba(6,10,19,0.85)] z-[1] transition-all duration-300 group-hover:from-transparent group-hover:to-[rgba(6,10,19,0.95)]" />

                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-[2]">
                  <div className="flex flex-col gap-1.5 items-start">
                    <span className="px-4 py-2 rounded-full bg-bg-deepest/60 backdrop-blur-[12px] text-white text-[0.8rem] font-bold border border-white/20">
                      {pkg.duration}
                    </span>
                    {pkg.isOnSale && (
                      <span className="inline-block px-3 py-1.5 rounded-full bg-[#ef4444] text-white text-[0.7rem] font-extrabold uppercase tracking-wider shadow-[0_2px_10px_rgba(239,68,68,0.55)] animate-pulse">
                        🔥 Sale
                      </span>
                    )}
                  </div>
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-white text-[0.8rem] font-extrabold uppercase tracking-wide shadow-gold">
                    {pkg.category}
                  </span>
                </div>

                <div className="relative z-[2] px-8 pb-8 pt-10">
                  <div>
                    <Link
                      href={`/packages/${getSlug(pkg)}`}
                      className="no-underline text-inherit"
                    >
                      <h3 className="font-display text-2xl font-black text-white leading-snug mb-3">
                        {pkg.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-white/80 text-base font-medium mb-6 [&_svg]:text-gold-400 [&_svg]:text-[1.2rem]">
                      <CiLocationOn />
                      <span>{pkg.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-300">
                    <div>
                      <span className="block font-mono text-xs text-white/60 uppercase tracking-[0.1em] font-bold mb-1">
                        Starting from
                      </span>
                      {pkg.originalPrice != null && (
                        <span className="block text-[0.8rem] text-[#ff8c69] line-through decoration-[#ef4444] decoration-[1.5px] font-semibold leading-none mb-1.5">
                          &#8377;
                          {Number(pkg.originalPrice).toLocaleString("en-IN")}
                        </span>
                      )}
                      <span className="font-mono text-[1.75rem] font-black text-white leading-none">
                        {pkg.price}
                      </span>
                    </div>
                    <Link
                      href={`/packages/${getSlug(pkg)}`}
                      className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-bg-base text-[0.95rem] font-extrabold transition-all duration-300 hover:translate-x-2 hover:shadow-gold"
                    >
                      View Itinerary <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurPackagesClient;
