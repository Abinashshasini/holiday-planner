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
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";
import type { SanityPackage } from "@/sanity/queries";
import useWhatsApp from "@/hooks/useWhatsApp";
import classes from "./packages.module.scss";

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
}: {
  packages?: SanityPackage[];
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  const source: PackageItem[] = packages ?? [];

  const filtered =
    activeFilter === "all"
      ? source
      : source.filter((p) => p.category === activeFilter);

  return (
    <LazyMotion features={domAnimation}>
      <div className={classes.page}>
        {/* Page Hero */}
        <div className={classes.hero}>
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773410046/odisha-desktop_s0n0fu.png"
            alt="Scenic Odisha landscape"
            fill
            style={{ objectFit: "cover" }}
            className={classes.heroImage}
            priority
            unoptimized
            sizes="100vw"
          />
          <div className={classes.heroOverlay} />
          <motion.div
            className={classes.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={classes.heroBadge}>
              10+ Handcrafted Itineraries
            </span>
            <h1 className={classes.heroTitle}>
              Find Your Perfect <span>Odisha</span> Journey
            </h1>
            <p className={classes.heroSub}>
              Temple trails, coastal escapes, tribal encounters, wildlife
              safaris — every package designed by locals who&apos;ve explored
              every corner of this extraordinary state.
            </p>
            <nav className={classes.breadcrumb}>
              <Link href="/">Home</Link> <span>/</span> <span>Packages</span>
            </nav>
          </motion.div>
        </div>

        <div className={classes.body}>
          {/* Filters */}
          <motion.div
            className={classes.filterBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={classes.filterLabel}>
              <MdOutlineFilterList /> Filter:
            </span>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${classes.filterBtn} ${activeFilter === cat ? classes.active : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Package Grid */}
          <motion.div
            className={classes.grid}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={activeFilter} // Re-trigger animation on filter change
          >
            {filtered.map((pkg, index) => {
              const isFeatured = index === 0;
              const isWide = index === 3;
              // On desktop we want some variation, but let's keep it simple to avoid breaking
              const cardClass = `${classes.card} ${isFeatured ? classes.featured : ""} ${isWide ? classes.wide : ""}`;

              return (
                <motion.div
                  variants={itemVariants}
                  key={getKey(pkg)}
                  className={cardClass}
                >
                  {isFeatured && (
                    <div className={classes.popularRibbon}>
                      <span>★ Most Popular</span>
                    </div>
                  )}
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className={classes.cardImgBackground}
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={classes.cardOverlayFull} />

                  <div className={classes.badges}>
                    <div className={classes.badgesLeft}>
                      <span className={classes.durationBadge}>
                        {pkg.duration}
                      </span>
                      {pkg.isOnSale && (
                        <span className={classes.saleBadge}>🔥 Sale</span>
                      )}
                    </div>
                    <span className={classes.categoryBadge}>
                      {pkg.category}
                    </span>
                  </div>

                  <div className={classes.cardContentOverlay}>
                    <div className={classes.cardHeaderMain}>
                      <Link
                        href={`/packages/${getSlug(pkg)}`}
                        className={classes.linkReset}
                      >
                        <h3 className={classes.cardTitleWhite}>{pkg.title}</h3>
                      </Link>
                      <div className={classes.locationWhite}>
                        <CiLocationOn />
                        <span>{pkg.location}</span>
                      </div>
                    </div>

                    <div className={classes.detailsArea}>
                      <ul className={classes.highlightsWhite}>
                        {pkg.highlights
                          .slice(0, isFeatured ? 4 : 3)
                          .map((h: string) => (
                            <li key={h}>
                              <FaArrowRight /> {h}
                            </li>
                          ))}
                      </ul>

                      <div className={classes.cardFooterWhite}>
                        <div className={classes.priceBox}>
                          <span className={classes.fromLabelWhite}>
                            Starting from
                          </span>
                          {pkg.originalPrice != null && (
                            <span className={classes.originalPriceWhiteStrike}>
                              &#8377;
                              {Number(pkg.originalPrice).toLocaleString(
                                "en-IN",
                              )}
                            </span>
                          )}
                          <span className={classes.priceWhite}>
                            {pkg.price}
                          </span>
                          <span className={classes.perPerson}>per person</span>
                        </div>
                        <div className={classes.btnGroup}>
                          <Link
                            href={`/packages/${getSlug(pkg)}`}
                            className={classes.viewBtn}
                          >
                            Explore
                          </Link>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={classes.bookBtnSmall}
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
            className={classes.ctaBanner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2>
              Your Perfect Trip Doesn&apos;t Exist Yet — Let&apos;s Create It
            </h2>
            <p>
              Tell us your dates, dream destinations, and travel style. Our
              experts will craft a bespoke Odisha itinerary you won&apos;t find
              anywhere else.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={classes.ctaBtn}
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
