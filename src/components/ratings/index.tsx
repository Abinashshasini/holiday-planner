'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import UserRatingCard from './UserRatingCard';
import classes from './ratings.module.scss';
import { userRatingData } from '@/utils';
import { FaStar } from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Ratings = () => {
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
          <div className={classes.headerContent}>
            <span className={classes.subtitle}>Testimonials</span>
            <h2 className={classes.title}>What Our <span>Travelers</span> Say</h2>
          </div>

          <div className={classes.overallRating}>
            <div className={classes.ratingBadge}>
              4.8 <FaStar />
            </div>
            <div className={classes.ratingText}>
              <h4>200+ Verified Ratings</h4>
              <p>Based on reviews across multiple platforms.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={classes.masonryGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {userRatingData.map((element, index) => (
            <UserRatingCard
              message={element.message}
              name={element.name}
              rating={element.rating}
              time={element.time}
              key={element.id}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ratings;
