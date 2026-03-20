"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdExplore } from "react-icons/md";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  FaArrowRight,
  FaCar,
  FaStar,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import classes from "./hero.module.scss";
import useWhatsApp from "@/hooks/useWhatsApp";
import { DesktopBg, MobileBg } from "../../utils/index";

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
    transition: { type: "spring", damping: 22, stiffness: 90 },
  },
};

const pageStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const trustStats = [
  { icon: <FaUsers />, value: "500+", label: "Happy Travelers" },
  { icon: <FaStar />, value: "4.8★", label: "Google Rating" },
  { icon: <BsShieldCheck />, value: "3+", label: "Years Trusted" },
  { icon: <FaMapMarkerAlt />, value: "15+", label: "Destinations" },
];

const HeroClient: React.FC = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <LazyMotion features={domAnimation}>
      <section ref={sectionRef} className={classes.hero}>
        <m.div className={classes.bgWrap} style={{ y: yBg }}>
          <div className={classes.desktopOnly}>
            <Image
              src={DesktopBg}
              alt="Scenic Odisha"
              fill
              priority
              unoptimized
              className={classes.bgImg}
            />
          </div>
          <div className={classes.mobileOnly}>
            <Image
              src={MobileBg}
              alt="Scenic Odisha"
              fill
              priority
              unoptimized
              className={classes.bgImg}
            />
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

          <m.div className={classes.headlineGroup} variants={headlineContainer}>
            <div className={classes.lineWrap}>
              <h1 className={classes.headline}>Discover the</h1>
            </div>

            <div className={classes.lineWrap}>
              <h1 className={`${classes.headline} ${classes.headlineAccent}`}>
                Soul of Odisha
              </h1>
            </div>

            <div className={classes.lineWrap}>
              <h1 className={classes.headlineOutline}>
                — Where Ancient Wonders Meet Untouched Shores
              </h1>
            </div>
          </m.div>

          <p className={classes.subtitle}>
            From the sun-kissed temples of Konark to the pristine waters of
            Chilika — experience a land where every sunrise tells a
            thousand-year-old story. Your journey begins with one click.
          </p>

          <m.div variants={fadeUp} className={classes.actions}>
            <Link href="/packages" className={classes.btnPrimary}>
              Explore Packages <FaArrowRight />
            </Link>
            <button
              className={classes.btnGlass}
              onClick={() =>
                handleRedirectTheUserToWhatsApp({ messageType: "generic" })
              }
            >
              <FaCar /> Book a Ride
            </button>
          </m.div>
        </m.div>

        {/* Trust Stats Strip */}
        <m.div
          className={classes.trustStrip}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            type: "spring",
            damping: 20,
          }}
        >
          {trustStats.map((stat, i) => (
            <div key={i} className={classes.trustItem}>
              <span className={classes.trustIcon}>{stat.icon}</span>
              <div className={classes.trustText}>
                <span className={classes.trustValue}>{stat.value}</span>
                <span className={classes.trustLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default HeroClient;
