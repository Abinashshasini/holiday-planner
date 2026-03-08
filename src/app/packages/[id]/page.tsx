'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FaWhatsapp, FaArrowRight, FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { ourPackagesData } from '@/utils';
import useWhatsApp from '@/hooks/useWhatsApp';
import classes from './packageDetails.module.scss';
import Image from 'next/image';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function PackageDetailsPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const pkg = ourPackagesData.find((p) => p.id === id);
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  if (!pkg) {
    return notFound();
  }

  // Define defaults in case itinerary data is missing (shouldn't be, but safe fallback)
  const overview = pkg.overview || 'A beautiful journey through the scenic landscapes of Odisha.';
  const included = pkg.included || ['Accommodation', 'Transport', 'Breakfast'];
  const excluded = pkg.excluded || ['Flights', 'Entry Fees', 'Personal Expenses'];
  const itinerary = pkg.itinerary || [
    { day: 1, title: 'Arrival', description: 'Arrive and check in to your hotel.' },
    { day: 2, title: 'Sightseeing', description: 'Enjoy local sightseeing.' }
  ];

  return (
    <div className={classes.page}>
      
      {/* Sticky Booking Bar for Desktop & Mobile */}
      <motion.div 
        className={classes.stickyBar}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
      >
        <div className={classes.stickyContainer}>
          <div className={classes.stickyInfo}>
            <span className={classes.stickyPrice}>{pkg.price}</span>
            <span className={classes.stickyDuration}>/ {pkg.duration}</span>
          </div>
          <button 
            className={classes.stickyBtn}
            onClick={() => handleRedirectTheUserToWhatsApp({
              messageType: 'dynamic',
              dynamicMessage: `Hi, I am interested in booking the "${pkg.title}" package (${pkg.duration}). Please share the booking details.`
            })}
          >
            <FaWhatsapp /> Book Now
          </button>
        </div>
      </motion.div>

      {/* Hero Banner */}
      <div className={classes.hero}>
        <div className={classes.heroOverlay} />
        <Image src={pkg.image.src} alt={pkg.title} layout="fill" objectFit="cover" className={classes.heroImage} priority />
        <motion.div 
          className={classes.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={classes.heroBadge}>{pkg.category}</span>
          <h1 className={classes.heroTitle}>{pkg.title}</h1>
          <div className={classes.heroMeta}>
            <span><FaMapMarkerAlt /> {pkg.location}</span>
            <span><FaClock /> {pkg.duration}</span>
          </div>
        </motion.div>
      </div>

      <div className={classes.body}>
        <div className={classes.layout}>
          
          {/* Main Content Left */}
          <motion.div 
            className={classes.mainContent}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Overview */}
            <motion.section variants={fadeUp} className={classes.section}>
              <h2>Overview</h2>
              <p className={classes.overviewText}>{overview}</p>
              
              <div className={classes.highlightsGrid}>
                {pkg.highlights.map(h => (
                  <div key={h} className={classes.highlightTag}>
                    <FaArrowRight /> {h}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Inclusions & Exclusions */}
            <motion.section variants={fadeUp} className={classes.incExcSection}>
              <div className={classes.incCol}>
                <h3><FaCheckCircle className={classes.incIcon} /> What's Included</h3>
                <ul>
                  {included.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div className={classes.excCol}>
                <h3><FaTimesCircle className={classes.excIcon} /> What's Excluded</h3>
                <ul>
                  {excluded.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            </motion.section>

            {/* Dynamic Itinerary Timeline */}
            <motion.section variants={fadeUp} className={classes.section}>
              <h2>Itinerary</h2>
              <div className={classes.timeline}>
                {itinerary.map((item, index) => (
                  <div key={index} className={classes.timelineItem}>
                    <div className={classes.timelineMarker}>
                      <span>Day</span>
                      <strong>{item.day}</strong>
                    </div>
                    <div className={classes.timelineContent}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </motion.div>

          {/* Sidebar Right (Desktop only booking card) */}
          <motion.div 
            className={classes.sidebar}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <div className={classes.bookingCard}>
              <h3>Book This Tour</h3>
              <div className={classes.priceBox}>
                <span className={classes.priceLabel}>Starting from</span>
                <span className={classes.priceValue}>{pkg.price}</span>
                <span className={classes.perPerson}>per person</span>
              </div>
              
              <ul className={classes.summaryList}>
                <li><FaClock /> {pkg.duration}</li>
                <li><FaMapMarkerAlt /> {pkg.location}</li>
              </ul>

              <button 
                className={classes.primaryBtn}
                onClick={() => handleRedirectTheUserToWhatsApp({
                  messageType: 'dynamic',
                  dynamicMessage: `Hi, I am interested in booking the "${pkg.title}" package (${pkg.duration}). Please share the booking details.`
                })}
              >
                <FaWhatsapp /> Enquire via WhatsApp
              </button>
              
              <p className={classes.guarantee}>No hidden fees. Instant reply within 15 mins.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
