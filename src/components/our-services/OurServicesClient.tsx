'use client';
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ourServicesData } from '@/utils';
import classes from './ourServices.module.scss';

import {
  FaGlobe,
  FaHotel,
  FaCar,
  FaSuitcase,
  FaBusAlt,
  FaCaravan,
  FaCarSide,
  FaArrowRight,
} from 'react-icons/fa';

const getIcon = (title: string) => {
  if (title === 'Car Rental And Booking') return <FaCarSide />;
  if (title === 'Luxury Car Wedding Car') return <FaCar />;
  if (title === 'Tempo Traveler Booking') return <FaCaravan />;
  if (title === 'Bus Travel Rental') return <FaBusAlt />;
  if (title === 'Package Service / Duty') return <FaSuitcase />;
  if (title === 'Resort Booking') return <FaHotel />;
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
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const OurServicesClient = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className={classes.header}
        >
          <span className={classes.subtitle}>What We Do</span>
          <h2 className={classes.title}>
            Comprehensive <span>Services</span>
          </h2>
          <p className={classes.desc}>
            Everything you need for a perfect trip, managed perfectly under one
            roof.
          </p>
        </motion.div>

        <motion.div
          className={classes.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {ourServicesData.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link
                href={`/${service.URL}`}
                style={{ textDecoration: 'none' }}
                passHref
              >
                <div className={classes.card}>
                  <img
                    src={service.image.src}
                    alt={service.title}
                    className={classes.cardBg}
                  />
                  <div className={classes.overlay} />

                  <div className={classes.topBar}>
                    <div className={classes.iconBadge}>
                      {getIcon(service.title)}
                    </div>
                  </div>

                  <div className={classes.content}>
                    <h3 className={classes.serviceTitle}>{service.title}</h3>
                    <p className={classes.serviceDesc}>
                      {service.message ||
                        'Experience premium quality and comfort with our curated selection of services designed for your ultimate satisfaction.'}
                    </p>

                    <div className={classes.actionWrap}>
                      <button className={classes.actionBtn}>
                        {service.buttonText} <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesClient;
