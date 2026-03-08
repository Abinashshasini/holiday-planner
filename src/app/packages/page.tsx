'use client';
import React, { useState } from 'react';
import Link from 'next/link';
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

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  const filtered = activeFilter === 'all'
    ? ourPackagesData
    : ourPackagesData.filter((p) => p.category === activeFilter);

  return (
    <div className={classes.page}>
      {/* Page Hero */}
      <div className={classes.hero}>
        <div className={classes.heroOverlay} />
        <motion.div 
          className={classes.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={classes.heroBadge}>Discover Odisha</span>
          <h1 className={classes.heroTitle}>Explore Our Tour Packages</h1>
          <p className={classes.heroSub}>
            Handcrafted journeys to Odisha&apos;s most stunning destinations — beaches, temples,
            wildlife, tribal culture and more.
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
          <span className={classes.filterLabel}><MdOutlineFilterList /> Filter:</span>
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
          {filtered.map((pkg) => (
            <motion.div variants={itemVariants} key={`${pkg.id}-${pkg.title}`} className={classes.card}>
              <Link href={`/packages/${pkg.id}`} className={classes.imgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pkg.image.src} alt={pkg.title} className={classes.cardImg} />
                <div className={classes.cardOverlay} />
                <span className={classes.durationBadge}>{pkg.duration}</span>
                <span className={classes.categoryBadge}>{pkg.category}</span>
              </Link>
              <div className={classes.cardBody}>
                <Link href={`/packages/${pkg.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className={classes.cardTitle}>{pkg.title}</h3>
                </Link>
                <div className={classes.location}>
                  <CiLocationOn />
                  <span>{pkg.location}</span>
                </div>
                <ul className={classes.highlights}>
                  {pkg.highlights.map((h) => (
                    <li key={h}><FaArrowRight /> {h}</li>
                  ))}
                </ul>
                <div className={classes.cardFooter}>
                  <div>
                    <span className={classes.fromLabel}>Starting from</span>
                    <span className={classes.price}>{pkg.price}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={classes.bookBtn}
                    onClick={() =>
                      handleRedirectTheUserToWhatsApp({
                        messageType: 'dynamic',
                        dynamicMessage: `Hi, I'm interested in the ${pkg.title} package (${pkg.duration}). Please share details and availability.`,
                      })
                    }
                  >
                    <FaWhatsapp /> Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className={classes.ctaBanner}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Can&apos;t find what you&apos;re looking for?</h2>
          <p>We craft custom itineraries tailored to your preferences and budget.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={classes.ctaBtn}
            onClick={() =>
              handleRedirectTheUserToWhatsApp({
                messageType: 'dynamic',
                dynamicMessage: "Hi, I'd like a custom tour package. Please help me plan my trip.",
              })
            }
          >
            Request a Custom Package
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
