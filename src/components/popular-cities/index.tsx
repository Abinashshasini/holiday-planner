'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { popularCitiesData } from '@/utils';
import classes from './popularCities.module.scss';
import { FaLocationArrow } from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const PopularCities = () => {
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
          <span className={classes.subtitle}>Explore</span>
          <h2 className={classes.title}>Popular <span>Destinations</span></h2>
          <p className={classes.desc}>Discover the hidden gems and iconic landmarks of Odisha.</p>
        </motion.div>

        <motion.div 
          className={classes.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {popularCitiesData.slice(0, 6).map((city, i) => {
            // Create a bento layout by making the first item larger
            const isFeatured = i === 0 || i === 3;
            return (
              <motion.div 
                key={city.id} 
                className={`${classes.bentoItem} ${isFeatured ? classes.featured : ''}`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={city.image.src} alt={city.name} className={classes.bgImage} />
                <div className={classes.overlay} />
                
                <div className={classes.content}>
                  <div className={classes.iconBox}>
                    <FaLocationArrow />
                  </div>
                  <h3 className={classes.cityName}>{city.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularCities;

