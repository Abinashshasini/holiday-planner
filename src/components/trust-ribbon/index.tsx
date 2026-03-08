'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaTripadvisor, FaMapMarkedAlt, FaAward } from 'react-icons/fa';
import classes from './ribbon.module.scss';

const items = [
  { icon: <FaGoogle />, label: '5.0 ★ Google Reviews' },
  { icon: <FaTripadvisor />, label: 'Travelers\' Choice 2023' },
  { icon: <FaMapMarkedAlt />, label: 'Odisha Tourism Approved' },
  { icon: <FaAward />, label: 'Premium Quality Guaranteed' },
];

const TrustRibbon = () => {
  return (
    <div className={classes.ribbonWrapper}>
      <div className={classes.ribbonContainer}>
        <motion.div 
          className={classes.track}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {items.map((item, idx) => (
            <div key={idx} className={classes.item}>
              <span className={classes.icon}>{item.icon}</span>
              <span className={classes.label}>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustRibbon;
