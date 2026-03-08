'use client';
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { serviceDetailsData } from '@/utils';
import Heading from '@/components/heading';
import useWhatsApp from '@/hooks/useWhatsApp';
import classes from './car-booking.module.scss';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function CarBookingPage() {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const { luxuryCar, tempoTraveler, carRental } = serviceDetailsData;

  return (
    <div className={classes.page}>
      {/* Hero */}
      <div className={classes.hero}>
        <div className={classes.heroOverlay} />
        <motion.div 
          className={classes.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={classes.heroBadge}>Premium Fleet</span>
          <h1 className={classes.heroTitle}>Ride in Comfort & Style</h1>
          <p className={classes.heroSub}>
            Choose from our extensive fleet — hatchbacks to luxury sedans, tempo travellers to
            mini-buses. All cars are air-conditioned with professional drivers.
          </p>
          <nav className={classes.breadcrumb}>
            <Link href="/">Home</Link> <span>/</span> <span>Car Booking</span>
          </nav>
        </motion.div>
      </div>

      <div className={classes.body}>

        {/* Luxury Cars Section */}
        <section className={classes.section}>
          <Heading textOne="Luxury" textTwo="Cars" />
          <p className={classes.sectionSub}>Perfect for weddings, corporate events, and special occasions.</p>
          <motion.div 
            className={classes.fleetGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {luxuryCar.imageData.map((car) => (
              <motion.div variants={itemVariants} key={`${car.id}-${car.carName}`} className={classes.fleetCard}>
                <div className={classes.fleetImgWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={car.image.src} alt={car.carName} className={classes.fleetImg} />
                </div>
                <div className={classes.fleetInfo}>
                  <h3>{car.carName}</h3>
                  <p>{car.capacity}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={classes.enquireBtn}
                    onClick={() =>
                      handleRedirectTheUserToWhatsApp({
                        messageType: 'dynamic',
                        dynamicMessage: `Hi, I'd like to enquire about the ${car.carName}. Please share availability and pricing.`,
                      })
                    }
                  >
                    <FaWhatsapp /> Enquire
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tempo / Bus Section */}
        <section className={`${classes.section} ${classes.sectionAlt}`}>
          <Heading textOne="Tempo" textTwo="Travellers & Buses" />
          <p className={classes.sectionSub}>Ideal for group tours, family trips, and corporate outings.</p>
          <motion.div 
            className={classes.fleetGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {tempoTraveler.imageData.map((car) => (
              <motion.div variants={itemVariants} key={`${car.id}-${car.carName}`} className={classes.fleetCard}>
                <div className={classes.fleetImgWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={car.image.src} alt={car.carName} className={classes.fleetImg} />
                </div>
                <div className={classes.fleetInfo}>
                  <h3>{car.carName}</h3>
                  <p>{car.capacity}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={classes.enquireBtn}
                    onClick={() =>
                      handleRedirectTheUserToWhatsApp({
                        messageType: 'dynamic',
                        dynamicMessage: `Hi, I'd like to book the ${car.carName}. Please share details.`,
                      })
                    }
                  >
                    <FaWhatsapp /> Enquire
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pricing Table Section */}
        <section className={classes.section}>
          <Heading textOne="Car Rental" textTwo="Pricing" />
          <p className={classes.sectionSub}>Transparent pricing for all budgets. No hidden charges.</p>
          <motion.div 
            className={classes.tableWrap}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <table className={classes.pricingTable}>
              <thead>
                <tr>
                  <th>Vehicle</th>
                  {carRental.tData[0].data.map((d) => (
                    <th key={d.info}>{d.info}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {carRental.tData.map((row) => (
                  <tr key={`${row.id}-${row.carName}`}>
                    <td className={classes.carNameCell}>{row.carName}</td>
                    {row.data.map((d) => (
                      <td key={d.info}>{d.price}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <motion.div 
          className={classes.ctaBanner}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={classes.ctaText}>
            <h2>Ready to Book Your Ride?</h2>
            <p>Call or WhatsApp us for instant booking and confirmation.</p>
          </div>
          <div className={classes.ctaActions}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={classes.whatsappBtn}
              onClick={() => handleRedirectTheUserToWhatsApp({ messageType: 'generic' })}
            >
              <FaWhatsapp /> WhatsApp Us
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+917978065576" 
              className={classes.callBtn}
            >
              <FaPhone /> Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
