'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ourServicesData } from '@/utils';
import classes from './ourServices.module.scss';
import OurServiceButton from './button';
import { FaGlobe, FaHotel, FaCar, FaSuitcase } from 'react-icons/fa';

// Map icons to services based on title keywords
const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('hotel') || t.includes('accommodation')) return <FaHotel />;
  if (t.includes('car') || t.includes('cab')) return <FaCar />;
  if (t.includes('package') || t.includes('tour')) return <FaSuitcase />;
  return <FaGlobe />;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const OurServices = () => {
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
          <span className={classes.subtitle}>What We Do</span>
          <h2 className={classes.title}>Comprehensive <span>Services</span></h2>
          <p className={classes.desc}>Everything you need for a perfect trip, managed perfectly under one roof.</p>
        </motion.div>

        <motion.div 
          className={classes.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ourServicesData.map((service) => (
            <motion.div 
              key={service.id} 
              className={classes.card}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)' }}
            >
              <div className={classes.iconWrapper}>
                {getIcon(service.title)}
              </div>
              <h3 className={classes.serviceTitle}>{service.title}</h3>
              <p className={classes.serviceDesc}>
                Experience premium quality {service.title.toLowerCase()} tailored exactly to your travel needs.
              </p>
              <div className={classes.action}>
                <OurServiceButton data={service} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
