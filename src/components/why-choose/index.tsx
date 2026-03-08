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

const WhyChooseUs = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div 
          className={classes.contentWrapper}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={classes.subtitle}>Our Promise</span>
          <h2 className={classes.title}>Why Choose <span>Holiday Planner</span></h2>
          <p className={classes.storyText}>
            Based in Bhubaneswar, Odisha, we specialize in cultural and nature-focused holiday experiences across India and beyond. 
            With government-recognized guides and English-speaking chauffeurs, we ensure authentic, insightful travel. 
            Our dedicated team handles every detail to make your journey completely seamless and deeply memorable.
          </p>
          
          <div className={classes.statsBox}>
            <div className={classes.statItem}>
              <h3>15+</h3>
              <span>Destinations</span>
            </div>
            <div className={classes.statItem}>
              <h3>500+</h3>
              <span>Happy Clients</span>
            </div>
            <div className={classes.statItem}>
              <h3>4.8★</h3>
              <span>Rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={classes.featureGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whyChooseUsData.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className={classes.featureCard} whileHover={{ y: -8, scale: 1.02 }}>
              <div className={classes.iconBubble}>
                <item.Icon />
              </div>
              <h4 className={classes.featureText}>{item.text}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

