'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdExplore } from 'react-icons/md';
import { LazyMotion, domAnimation, m, useScroll, useTransform, type Variants } from 'framer-motion';
import { FaArrowRight, FaCar } from 'react-icons/fa';
import classes from './hero.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';


/* ─────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────── */

const headlineContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.35 },
  },
};



const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 22, stiffness: 90 },
  },
};

const pageStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const HeroClient: React.FC = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <LazyMotion features={domAnimation}>
    <section ref={sectionRef} className={classes.hero}>
      <m.div className={classes.bgWrap} style={{ y: yBg }}>
        <div className={classes.desktopOnly}>
          <Image src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773506046/odisha-desktop_s0n0fu.webp" alt="Scenic Odisha" fill priority className={classes.bgImg} sizes="100vw" />
        </div>
        <div className={classes.mobileOnly}>
          <Image src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773506504/odisha-mobile_yhelr2.webp" alt="Scenic Odisha" fill priority className={classes.bgImg} sizes="100vw" />
        </div>
      </m.div>

      <div className={classes.overlay} />

      <m.div
        className={classes.content}
        style={{ opacity: textOpacity }}
        variants={pageStagger}
        initial="hidden"
        animate="show"
      >
        <m.div variants={fadeUp} className={classes.badge}>
          <MdExplore />
          <span>Odisha&apos;s #1 Travel Partner</span>
        </m.div>

        <m.div
          className={classes.headlineGroup}
          variants={headlineContainer}
        >
          <div className={classes.lineWrap}>
            <h1 className={classes.headline}>
              Discover the
            </h1>
          </div>

          <div className={classes.lineWrap}>
            <h1 className={`${classes.headline} ${classes.headlineAccent}`}>
              Soul of Odisha
            </h1>
          </div>

          <div className={classes.lineWrap}>
            <h1 className={classes.headlineOutline}>
              — India&apos;s Best Kept Secret
            </h1>
          </div>
        </m.div>

        <m.p variants={fadeUp} className={classes.subtitle}>
          Ancient temples, golden beaches, and lush wilderness — all in one state.
          Let us craft your perfect Odisha escape with curated packages and
          premium car rentals.
        </m.p>

        <m.div variants={fadeUp} className={classes.actions}>
          <Link href="/packages" className={classes.btnPrimary}>
            Explore Packages <FaArrowRight />
          </Link>
          <button
            className={classes.btnGlass}
            onClick={() => handleRedirectTheUserToWhatsApp({ messageType: 'generic' })}
          >
            <FaCar /> Book a Ride
          </button>
        </m.div>
      </m.div>
    </section>
    </LazyMotion>
  );
};

export default HeroClient;
