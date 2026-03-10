'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaTripadvisor, FaMapMarkedAlt, FaAward, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import classes from './ribbon.module.scss';

const badges = [
  {
    icon: <FaGoogle />,
    value: '4.9★',
    label: 'Google Rating',
    color: '#4285F4',
    glow: 'rgba(66,133,244,0.25)',
  },
  {
    icon: <FaTripadvisor />,
    value: "Travelers' Choice",
    label: 'TripAdvisor 2024',
    color: '#34E0A1',
    glow: 'rgba(52,224,161,0.25)',
  },
  {
    icon: <FaMapMarkedAlt />,
    value: 'Approved',
    label: 'Odisha Tourism',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
  },
  {
    icon: <FaShieldAlt />,
    value: '100%',
    label: 'Secure Payments',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    icon: <FaAward />,
    value: '8+ Years',
    label: 'Trusted Experience',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.25)',
  },
  {
    icon: <FaHeadset />,
    value: '24/7',
    label: 'Customer Support',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.25)',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 90 } },
};

const TrustRibbon = () => {
  return (
    <section className={classes.section}>


      <div className={classes.inner}>
        <motion.p
          className={classes.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why thousands of travellers trust us
        </motion.p>

        <motion.div
          className={classes.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {badges.map((b) => (
            <motion.div
              key={b.label}
              className={classes.badge}
              variants={item}
              whileHover={{ y: -6, scale: 1.03 }}
              style={
                {
                  '--badge-color': b.color,
                  '--badge-glow': b.glow,
                } as React.CSSProperties
              }
            >
              <div className={classes.iconWrap}>{b.icon}</div>
              <div className={classes.badgeText}>
                <span className={classes.badgeValue}>{b.value}</span>
                <span className={classes.badgeLabel}>{b.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustRibbon;
