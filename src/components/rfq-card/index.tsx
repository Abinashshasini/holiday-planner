'use client';
import React from 'react';
import { motion } from 'framer-motion';
import classes from './rfqCard.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';
import { FaWhatsapp } from 'react-icons/fa';

const RFQCard = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  
  return (
    <section className={classes.section}>
      <motion.div 
        className={classes.container}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 60 }}
      >
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <span className={classes.eyebrow}>Limited Time Offer</span>
            <h2 className={classes.headline}>Dreaming of Your Next Adventure?</h2>
            <p className={classes.sub}>
              Chat with our travel experts on WhatsApp and get a personalized quote in minutes. 
              No commitments, just pure exploration.
            </p>
          </div>
          
          <motion.button
            className={classes.cta}
            onClick={() => handleRedirectTheUserToWhatsApp({ messageType: 'generic' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FaWhatsapp />
            Request a Quote
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default RFQCard;

