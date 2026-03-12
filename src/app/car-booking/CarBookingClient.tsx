'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaArrowRight } from 'react-icons/fa';
import { serviceDetailsData } from '@/utils';
import Heading from '@/components/heading';
import useWhatsApp from '@/hooks/useWhatsApp';
import classes from './car-booking.module.scss';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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

const CarBookingClient = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const { luxuryCar, tempoTraveler, carRental } = serviceDetailsData;

  return (
    <>
      <Navbar />
      <div className={classes.page}>
        {/* Hero */}
        <div className={classes.hero}>
          <Image
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop"
            alt="Premium Car Rental"
            layout="fill"
            objectFit="cover"
            className={classes.heroImage}
            priority
          />
          <div className={classes.heroOverlay} />
          <motion.div
            className={classes.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className={classes.heroBadge}>Premium Fleet</span>
            <h1 className={classes.heroTitle}>
              Ride in <span>Comfort</span> & Style
            </h1>
            <p className={classes.heroSub}>
              Experience the best-in-class car rental services in Bhubaneswar.
              From luxury sedans to spacious coaches, we have the perfect ride
              for every journey.
            </p>
            <nav className={classes.breadcrumb}>
              <Link href="/">Home</Link> <span>/</span> <span>Car Booking</span>
            </nav>
          </motion.div>
        </div>

        <div className={classes.body}>
          {/* Luxury Cars Section */}
          <section className={classes.section}>
            <div className={classes.sectionHeader}>
              <Heading textOne="Luxury" textTwo="Fleet" />
              <p className={classes.sectionSub}>
                Curated selection of premium vehicles for weddings, corporate
                travel, and VIP experiences.
              </p>
            </div>

            <motion.div
              className={classes.fleetGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
            >
              {luxuryCar.imageData.map((car) => (
                <motion.div
                  variants={itemVariants}
                  key={`${car.id}-${car.carName}`}
                  className={classes.fleetCard}
                >
                  <div className={classes.fleetImgWrap}>
                    <img
                      src={car.image.src}
                      alt={car.carName}
                      className={classes.fleetImg}
                    />
                    <div className={classes.carOverlay} />
                  </div>
                  <div className={classes.fleetInfo}>
                    <div className={classes.carHeader}>
                      <h3>{car.carName}</h3>
                      <span className={classes.capacityTag}>
                        {car.capacity}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={classes.enquireBtn}
                      onClick={() =>
                        handleRedirectTheUserToWhatsApp({
                          messageType: 'dynamic',
                          dynamicMessage: `Hi, I'd like to enquire about the ${car.carName}. Please share availability and pricing.`,
                        })
                      }
                    >
                      <FaWhatsapp /> Book Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Tempo / Bus Section */}
          <section className={`${classes.section} ${classes.sectionAlt}`}>
            <div className={classes.sectionHeader}>
              <Heading textOne="Group" textTwo="Travel" />
              <p className={classes.sectionSub}>
                Spacious tempo travellers and coaches for family trips, group
                tours, and corporate outings.
              </p>
            </div>

            <motion.div
              className={classes.fleetGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
            >
              {tempoTraveler.imageData.map((car) => (
                <motion.div
                  variants={itemVariants}
                  key={`${car.id}-${car.carName}`}
                  className={classes.fleetCard}
                >
                  <div className={classes.fleetImgWrap}>
                    <img
                      src={car.image.src}
                      alt={car.carName}
                      className={classes.fleetImg}
                    />
                    <div className={classes.carOverlay} />
                  </div>
                  <div className={classes.fleetInfo}>
                    <div className={classes.carHeader}>
                      <h3>{car.carName}</h3>
                      <span className={classes.capacityTag}>
                        {car.capacity}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={classes.enquireBtn}
                      onClick={() =>
                        handleRedirectTheUserToWhatsApp({
                          messageType: 'dynamic',
                          dynamicMessage: `Hi, I'd like to book the ${car.carName}. Please share details.`,
                        })
                      }
                    >
                      <FaWhatsapp /> Book Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Pricing Table Section */}
          <section className={classes.section}>
            <div className={classes.sectionHeader}>
              <Heading textOne="Rental" textTwo="Pricing" />
              <p className={classes.sectionSub}>
                Transparent, all-inclusive pricing with no hidden surprises.
                Best rates guaranteed.
              </p>
            </div>

            <motion.div
              className={classes.tableWrap}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <table className={classes.pricingTable}>
                <thead>
                  <tr>
                    <th>Vehicle Model</th>
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
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={classes.ctaText}>
              <h2>Ready to Start Your Journey?</h2>
              <p>
                Get instant confirmation and professional drivers for a
                worry-free ride.
              </p>
            </div>
            <div className={classes.ctaActions}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={classes.whatsappBtn}
                onClick={() =>
                  handleRedirectTheUserToWhatsApp({ messageType: 'generic' })
                }
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
    </>
  );
};

export default CarBookingClient;
