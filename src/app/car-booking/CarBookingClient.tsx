'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaUsers, FaCar, FaStar, FaHeadset } from 'react-icons/fa';
import { serviceDetailsData } from '@/utils';
import useWhatsApp from '@/hooks/useWhatsApp';
import classes from './car-booking.module.scss';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const stats = [
  { icon: FaCar,     value: '50+',  label: 'Vehicles' },
  { icon: FaUsers,   value: '500+', label: 'Happy Customers' },
  { icon: FaStar,    value: '4.8★', label: 'Google Rating' },
  { icon: FaHeadset, value: '24/7', label: 'Support' },
];

const CarBookingClient = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const { luxuryCar, tempoTraveler, carRental } = serviceDetailsData;

  const rowLabels = carRental.tData[0].data.map((d) => d.info);

  return (
    <div className={classes.page}>

      {/* ── Hero ── */}
      <div className={classes.hero}>
        <Image
          src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773410049/odisha-mobile_yhelr2.png"
          alt="Premium Car Rental Bhubaneswar"
          fill
          style={{ objectFit: 'cover' }}
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
          <nav className={classes.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Car Booking</span>
          </nav>
          <span className={classes.heroBadge}>Premium Fleet</span>
          <h1 className={classes.heroTitle}>
            Ride in <span>Comfort</span> &amp; Style
          </h1>
          <p className={classes.heroSub}>
            Bhubaneswar's most trusted car rental — luxury sedans, group coaches
            and everything in between.
          </p>
          <div className={classes.heroActions}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={classes.heroPrimary}
              onClick={() => handleRedirectTheUserToWhatsApp({ messageType: 'generic' })}
            >
              <FaWhatsapp /> Book on WhatsApp
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+917978065576"
              className={classes.heroSecondary}
            >
              <FaPhone /> Call Now
            </motion.a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className={classes.statsStrip}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className={classes.statItem}>
              <Icon className={classes.statIcon} />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Body ── */}
      <div className={classes.body}>

        {/* Luxury Cars */}
        <section className={classes.section}>
          <motion.div
            className={classes.sectionHeader}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className={classes.sectionBadge}><FaCar /> Luxury &amp; Wedding</span>
            <h2 className={classes.sectionTitle}>Premium Car Fleet</h2>
            <p className={classes.sectionDesc}>
              Curated luxury vehicles for weddings, corporate travel, and VIP experiences.
            </p>
          </motion.div>

          <motion.div
            className={classes.fleetGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            {luxuryCar.imageData.map((car, idx) => (
              <motion.div variants={fadeUp} key={`luxury-${idx}`} className={classes.fleetCard}>
                <div className={classes.fleetImgWrap}>
                  <img src={car.image} alt={car.carName} className={classes.fleetImg} />
                  <div className={classes.imgGradient} />
                  <span className={classes.categoryPill}>Luxury</span>
                </div>
                <div className={classes.fleetInfo}>
                  <h3 className={classes.carName}>{car.carName}</h3>
                  <p className={classes.capacityLine}><FaUsers /> {car.capacity}</p>
                  <button
                    className={classes.enquireBtn}
                    onClick={() =>
                      handleRedirectTheUserToWhatsApp({
                        messageType: 'dynamic',
                        dynamicMessage: `Hi, I'd like to enquire about the ${car.carName}. Please share availability and pricing.`,
                      })
                    }
                  >
                    <FaWhatsapp /> Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tempo / Group Travel */}
        <section className={`${classes.section} ${classes.sectionAlt}`}>
          <motion.div
            className={classes.sectionHeader}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className={classes.sectionBadge}><FaUsers /> Group Travel</span>
            <h2 className={classes.sectionTitle}>Tempo Traveller Fleet</h2>
            <p className={classes.sectionDesc}>
              Spacious coaches for family trips, pilgrimages, group tours and corporate outings.
            </p>
          </motion.div>

          <motion.div
            className={classes.fleetGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            {tempoTraveler.imageData.map((car, idx) => (
              <motion.div variants={fadeUp} key={`tempo-${idx}`} className={classes.fleetCard}>
                <div className={classes.fleetImgWrap}>
                  <img src={car.image} alt={car.carName} className={classes.fleetImg} />
                  <div className={classes.imgGradient} />
                  <span className={`${classes.categoryPill} ${classes.pillGroup}`}>Group</span>
                </div>
                <div className={classes.fleetInfo}>
                  <h3 className={classes.carName}>{car.carName}</h3>
                  <p className={classes.capacityLine}><FaUsers /> {car.capacity}</p>
                  <button
                    className={classes.enquireBtn}
                    onClick={() =>
                      handleRedirectTheUserToWhatsApp({
                        messageType: 'dynamic',
                        dynamicMessage: `Hi, I'd like to book the ${car.carName}. Please share details.`,
                      })
                    }
                  >
                    <FaWhatsapp /> Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pricing Table */}
        <section className={classes.section}>
          <motion.div
            className={classes.sectionHeader}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className={classes.sectionBadge}><FaStar /> Transparent Pricing</span>
            <h2 className={classes.sectionTitle}>Car Rental Rates</h2>
            <p className={classes.sectionDesc}>
              All-inclusive pricing with no hidden charges. Driver allowance included.
            </p>
          </motion.div>

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
                  <th className={classes.thFixedCol}>Package / Rate</th>
                  {carRental.tData.map((row, i) => (
                    <th key={i}>{row.carName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rowLabels.map((label, rIdx) => (
                  <tr key={label} className={rIdx % 2 === 0 ? classes.rowEven : classes.rowOdd}>
                    <td className={classes.tdLabel}>{label}</td>
                    {carRental.tData.map((row, cIdx) => (
                      <td key={cIdx} className={classes.tdPrice}>{row.data[rIdx]?.price ?? '—'}</td>
                    ))}
                  </tr>
                ))}
                <tr className={classes.rowBook}>
                  <td className={classes.tdLabel}>Book</td>
                  {carRental.tData.map((row, cIdx) => (
                    <td key={cIdx} className={classes.tdBookCell}>
                      <button
                        className={classes.bookBtnSm}
                        onClick={() =>
                          handleRedirectTheUserToWhatsApp({
                            messageType: 'dynamic',
                            dynamicMessage: `Hi, I want to book the ${row.carName}. Please share details.`,
                          })
                        }
                      >
                        <FaWhatsapp /> Book
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
          <p className={classes.tableNote}>
            * Extra km / hr charges apply beyond package limit. Prices may vary during peak season.
          </p>
        </section>

        {/* Bottom CTA */}
        <motion.div
          className={classes.ctaBanner}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={classes.ctaText}>
            <h2>Ready to Start Your Journey?</h2>
            <p>Get instant confirmation and professional drivers for a worry-free ride.</p>
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
};

export default CarBookingClient;
