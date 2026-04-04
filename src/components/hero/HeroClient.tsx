"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import useWhatsApp from "@/hooks/useWhatsApp";
import classes from "./hero.module.scss";

export default function HeroClient() {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  return (
    <LazyMotion features={domAnimation}>
      <section className={classes.heroNew}>
        {/* Background */}
        <div className={classes.bg}>
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773506046/odisha-desktop_s0n0fu.webp"
            alt="Scenic Odisha landscape"
            fill
            priority
            className={classes.bgImg}
            unoptimized
          />
          <div className={classes.overlay} />
        </div>

        <div className={classes.container}>
          {/* Left */}
          <motion.div
            className={classes.left}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={classes.badge}>
              Odisha&apos;s Trusted Travel Experts
            </span>

            <h1 className={classes.title}>
              Discover Odisha <span>Beyond the Guidebooks</span>
            </h1>

            <p className={classes.subtitle}>
              Curated journeys, verified local experts, and unforgettable
              experiences — from ancient temples to hidden beaches.
            </p>

            <div className={classes.actions}>
              <button
                className={classes.primary}
                onClick={() =>
                  handleRedirectTheUserToWhatsApp({
                    messageType: "dynamic",
                    dynamicMessage:
                      "Hi, I'd like to plan a trip to Odisha. Please share available packages and pricing.",
                  })
                }
              >
                <FaWhatsapp /> Plan My Trip
              </button>

              <Link href="/packages" className={classes.secondary}>
                Explore Packages <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          {/* Right visual stack */}
          <motion.div
            className={classes.right}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={classes.cardLarge}>
              <Image
                src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773502340/Gemini_Generated_Image_754xh8754xh8754x_1_mxlrmz.png"
                alt="Jagannath Temple, Puri"
                fill
                className={classes.cardImg}
                unoptimized
              />
              <div className={classes.cardOverlay}>
                <span>Jagannath Temple</span>
              </div>
            </div>

            <div className={classes.cardSmall}>
              <Image
                src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773502340/Gemini_Generated_Image_c98ondc98ondc98o_iw3atg.png"
                alt="Lingaraj Temple, Bhubaneswar"
                fill
                className={classes.cardImg}
                unoptimized
              />
            </div>

            <div className={classes.floatingStat}>
              <strong>500+</strong>
              <span>Happy Travelers</span>
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}
