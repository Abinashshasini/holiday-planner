'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import classes from './whyChoose.module.scss';
import { whyChooseUsData } from '@/utils';

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

const WhyChooseUsClient = () => {
  const topFeatures = whyChooseUsData.slice(0, 4);
  const bottomFeatures = whyChooseUsData.slice(4);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.topRow}>
          <motion.div 
            className={classes.contentSide}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={classes.subtitle}>Our Promise</span>
            <h2 className={classes.title}>The Art of <span>Memorable</span> Travel</h2>
            <p className={classes.storyText}>
              Based in Bhubaneswar, we don&apos;t just plan trips; we curate life-changing experiences. 
              Our government-recognized guides ensure every mile is safe and authentic.
            </p>
            
            <div className={classes.statsList}>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>15+</div>
                <div className={classes.statLabel}>Destinations</div>
              </div>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>500+</div>
                <div className={classes.statLabel}>Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={classes.sideGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {topFeatures.map((item) => (
              <motion.div key={item.id} variants={itemVariants} className={classes.compactFeature}>
                <div className={classes.miniIcon}>
                  <item.Icon />
                </div>
                <h4 className={classes.miniTitle}>{item.text}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className={classes.bottomGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {bottomFeatures.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className={`${classes.fullFeature} ${classes.desktopOnlyCard}`}>
              <div className={classes.iconCircle}>
                <item.Icon />
              </div>
              <div className={classes.featureTextWrapper}>
                <h4 className={classes.featureTitle}>{item.text}</h4>
                <p className={classes.featureDesc}>Reliability and excellence in every aspect.</p>
              </div>
            </motion.div>
          ))}

          {whyChooseUsData.map((item) => (
            <motion.div key={`mobile-${item.id}`} variants={itemVariants} className={`${classes.fullFeature} ${classes.mobileOnlyCard}`}>
              <div className={classes.iconCircle}>
                <item.Icon />
              </div>
              <div className={classes.featureTextWrapper}>
                <h4 className={classes.featureTitle}>{item.text}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsClient;
