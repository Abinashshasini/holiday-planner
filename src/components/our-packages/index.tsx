'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { ourPackagesData } from '@/utils';
import classes from './ourPackages.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
};

const OurPackages = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const featured = ourPackagesData.slice(0, 6);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={classes.header}
        >
          <div className={classes.titleWrapper}>
            <span className={classes.subtitle}>Curated For You</span>
            <h2 className={classes.title}>Featured <span>Packages</span></h2>
          </div>
          <motion.div whileHover={{ x: 5 }}>
            <Link href="/packages" className={classes.viewAll}>
              View All <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className={classes.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featured.map((pkg) => (
            <motion.div 
              key={pkg.id} 
              className={classes.card}
              variants={cardVariants}
              whileHover={{ y: -12 }}
            >
              <Link href={`/packages/${pkg.id}`} className={classes.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pkg.image.src} alt={pkg.title} className={classes.cardImage} />
                <div className={classes.cardOverlay} />
                <span className={classes.durationBadge}>{pkg.duration}</span>
              </Link>
              
              <div className={classes.cardBody}>
                <div className={classes.cardHeader}>
                  <Link href={`/packages/${pkg.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className={classes.cardTitle}>{pkg.title}</h3>
                  </Link>
                  <span className={classes.price}>{pkg.price}</span>
                </div>
                
                <div className={classes.cardLocation}>
                  <CiLocationOn />
                  <span>{pkg.location}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={classes.bookBtn}
                  onClick={() =>
                    handleRedirectTheUserToWhatsApp({
                      messageType: 'dynamic',
                      dynamicMessage: `Hi, I'm interested in the ${pkg.title} package. Please share more details.`,
                    })
                  }
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPackages;

