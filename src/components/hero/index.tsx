'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdExplore } from 'react-icons/md';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { FaArrowRight, FaCar } from 'react-icons/fa';
import classes from './hero.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';

import desktopBg from '@/images/odisha-desktop.png';
import mobileBg from '@/images/odisha-mobile.png';

/* ─────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────── */

/** Outer container – staggers children with a 0.18s gap */
const headlineContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.35 },
  },
};

/** Each headline line slides up + fades in */
const headlineLine: Variants = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { type: 'spring', damping: 18, stiffness: 80 },
  },
};

/** Badge, subtitle, CTA – simpler fade-up */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 22, stiffness: 90 },
  },
};

/** Wrapper that staggers the badge → headings → subtitle → CTA */
const pageStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
const Hero: React.FC = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className={classes.hero}>

      {/* ── Background image with parallax ── */}
      <motion.div className={classes.bgWrap} style={{ y: yBg }}>
        <div className={classes.desktopOnly}>
          <Image src={desktopBg} alt="Scenic Odisha" fill priority className={classes.bgImg} sizes="100vw" />
        </div>
        <div className={classes.mobileOnly}>
          <Image src={mobileBg} alt="Scenic Odisha" fill priority className={classes.bgImg} sizes="100vw" />
        </div>
      </motion.div>

      <div className={classes.overlay} />

      {/* ── Main content ── */}
      <motion.div
        className={classes.content}
        style={{ opacity: textOpacity }}
        variants={pageStagger}
        initial="hidden"
        animate="show"
      >

        {/* Eyebrow badge */}
        <motion.div variants={fadeUp} className={classes.badge}>
          <MdExplore />
          <span>Odisha&apos;s #1 Travel Partner</span>
        </motion.div>

        {/* ── 3 headline lines, each entering independently ── */}
        <motion.div
          className={classes.headlineGroup}
          variants={headlineContainer}
        >
          {/* Line 1 */}
          <div className={classes.lineWrap}>
            <motion.h1 variants={headlineLine} className={classes.headline}>
              Discover the
            </motion.h1>
          </div>

          {/* Line 2 – highlight/accent colour */}
          <div className={classes.lineWrap}>
            <motion.h1 variants={headlineLine} className={`${classes.headline} ${classes.headlineAccent}`}>
              Soul of Odisha
            </motion.h1>
          </div>

          {/* Line 3 */}
          <div className={classes.lineWrap}>
            <motion.h1 variants={headlineLine} className={classes.headlineOutline}>
              — India&apos;s Best Kept Secret
            </motion.h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className={classes.subtitle}>
          Ancient temples, golden beaches, and lush wilderness — all in one state.
          Let us craft your perfect Odisha escape with curated packages and
          premium car rentals.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className={classes.actions}>
          <Link href="/packages" className={classes.btnPrimary}>
            Explore Packages <FaArrowRight />
          </Link>
          <button
            className={classes.btnGlass}
            onClick={() => handleRedirectTheUserToWhatsApp({ messageType: 'generic' })}
          >
            <FaCar /> Book a Ride
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;