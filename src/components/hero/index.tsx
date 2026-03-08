'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { FaArrowRight, FaCar } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import classes from './hero.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';

const stats = [
  { value: '500+', label: 'Happy Travelers' },
  { value: '15+', label: 'Destinations' },
  { value: '4.8★', label: 'Google Rating' },
  { value: '8+', label: 'Years Experience' },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUpAnim: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } },
};

const Hero: React.FC = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const ref = useRef(null);
  
  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className={classes.hero}>
      <motion.div className={classes.bgMedia} style={{ y: yBg }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={classes.bgVideo}
          poster="/hero-bg.jpg"
        >
          {/* <source src="/hero-video.mp4" type="video/mp4" />  Uncomment when video is added */}
        </video>
        <div className={classes.bgFallback} />
      </motion.div>
      <div className={classes.overlay} />

      <motion.div 
        className={classes.content}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ opacity: opacityText }}
      >
        <motion.div variants={fadeUpAnim} className={classes.badge}>
          <MdExplore />
          <span>Odisha&apos;s #1 Travel Partner</span>
        </motion.div>

        <motion.h1 variants={fadeUpAnim} className={classes.headline}>
          Discover the <br />
          <span className={classes.highlight}>Soul of Odisha</span>
        </motion.h1>

        <motion.p variants={fadeUpAnim} className={classes.subtitle}>
          Curated tour packages, premium car rentals, and unforgettable journeys across Odisha&apos;s most breathtaking destinations.
        </motion.p>

        <motion.div variants={fadeUpAnim} className={classes.actions}>
          <Link href="/packages" className={classes.btnPrimary}>
            Explore Packages <FaArrowRight />
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={classes.btnGlass}
            onClick={() => handleRedirectTheUserToWhatsApp({ messageType: 'generic' })}
          >
            <FaCar /> Book a Car
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div 
        className={classes.statsBar}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, type: 'spring' }}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className={classes.statItem}>
            <span className={classes.statValue}>{stat.value}</span>
            <span className={classes.statLabel}>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
