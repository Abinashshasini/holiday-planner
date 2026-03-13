'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineFilterList } from 'react-icons/md';
import { ourPackagesData } from '@/utils';
import useWhatsApp from '@/hooks/useWhatsApp';
import classes from './packages.module.scss';


const categories = ['all', 'beach', 'heritage', 'nature', 'tribal'];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function PackagesClient() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  const filtered =
    activeFilter === 'all'
      ? ourPackagesData
      : ourPackagesData.filter((p) => p.category === activeFilter);

  return (
    <>

      <div className={classes.page}>
        {/* Page Hero */}
        <div className={classes.hero}>
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773410046/odisha-desktop_s0n0fu.png"
            alt="Chilika Lake Odisha"
            fill
            style={{ objectFit: 'cover' }}
            className={classes.heroImage}
            priority
          />
          <div className={classes.heroOverlay} />
          <motion.div
            className={classes.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className={classes.heroBadge}>Curated Journeys</span>
            <h1 className={classes.heroTitle}>
              Odisha&apos;s <span>Signature</span> Packages
            </h1>
            <p className={classes.heroSub}>
              Discover the perfect blend of spirituality, nature, and heritage
              with our handcrafted travel experiences across the heart of India.
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
            transition={{ delay: 0.3 }}
          >
            <span className={classes.filterLabel}>
              <MdOutlineFilterList /> Filter:
            </span>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${classes.filterBtn} ${activeFilter === cat ? classes.active : ''}`}
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
              const cardClass = `${classes.card} ${isFeatured ? classes.featured : ''} ${isWide ? classes.wide : ''}`;

              return (
                <motion.div
                  variants={itemVariants}
                  key={`${pkg.id}-${pkg.title}`}
                  className={cardClass}
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className={classes.cardImgBackground}
                  />
                  <div className={classes.cardOverlayFull} />

                  <div className={classes.badges}>
                    <span className={classes.durationBadge}>
                      {pkg.duration}
                    </span>
                    <span className={classes.categoryBadge}>
                      {pkg.category}
                    </span>
                  </div>

                  <div className={classes.cardContentOverlay}>
                    <div className={classes.cardHeaderMain}>
                      <Link
                        href={`/packages/${pkg.id}`}
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
                      {/* Only show highlights on featured large card or on hover for others */}
                      {isFeatured && (
                        <ul className={classes.highlightsWhite}>
                          {pkg.highlights.slice(0, 4).map((h) => (
                            <li key={h}>
                              <FaArrowRight /> {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className={classes.cardFooterWhite}>
                        <div className={classes.priceBox}>
                          <span className={classes.fromLabelWhite}>From</span>
                          <span className={classes.priceWhite}>
                            {pkg.price}
                          </span>
                        </div>
                        <div className={classes.btnGroup}>
                          <Link
                            href={`/packages/${pkg.id}`}
                            className={classes.viewBtn}
                          >
                            View
                          </Link>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={classes.bookBtnSmall}
                            onClick={(e) => {
                              e.preventDefault();
                              handleRedirectTheUserToWhatsApp({
                                messageType: 'dynamic',
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2>Can&apos;t find what you&apos;re looking for?</h2>
            <p>
              We craft custom itineraries tailored to your preferences and
              budget.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={classes.ctaBtn}
              onClick={() =>
                handleRedirectTheUserToWhatsApp({
                  messageType: 'dynamic',
                  dynamicMessage:
                    "Hi, I'd like a custom tour package. Please help me plan my trip.",
                })
              }
            >
              Request a Custom Package
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
