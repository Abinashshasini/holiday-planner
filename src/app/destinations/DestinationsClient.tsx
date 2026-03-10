'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import classes from './destinations.module.scss';
import { popularCitiesData } from '@/utils';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as any;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
} as any;

export default function DestinationsClient() {
  return (
    <>
      <Navbar />
      <div className={classes.page}>

        {/* Hero */}
        <div className={classes.hero}>
          <div className={classes.heroOverlay} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1526685472855-6b6fb0b79fd1?q=80&w=1920&auto=format&fit=crop"
            alt="Odisha Destinations"
            className={classes.heroImage}
          />
          <motion.div
            className={classes.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={classes.heroBadge}>Interactive Guide</span>
            <h1 className={classes.heroTitle}>Explore <span>Odisha</span></h1>
            <p className={classes.heroSubtitle}>
              Uncover the rich history, spiritual depths, and wild landscapes of India's best-kept secret.
            </p>
          </motion.div>
        </div>

        <div className={classes.body}>
          <motion.div
            className={classes.grid}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
          >
            {popularCitiesData.map((dest) => (
              <motion.div
                key={dest.id}
                className={classes.card}
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className={classes.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dest.image.src} alt={dest.name} className={classes.cardImage} />
                  <div className={classes.cardOverlay} />
                  <div className={classes.cardTitleBox}>
                    <h3>{dest.name}</h3>
                  </div>
                </div>

                <div className={classes.cardBody}>
                  <p className={classes.description}>{dest.history.slice(0, 120)}...</p>

                  <div className={classes.spotsList}>
                    <FaMapMarkerAlt className={classes.icon} />
                    <span>{dest.attractions.slice(0, 2).map(a => a.name).join(' • ')}</span>
                  </div>

                  <Link href={`/destinations/${dest.slug}`} className={classes.exploreBtn}>
                    Explore City <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </>
  );
}
