"use client";
import Link from "next/link";
import Image from "next/image";
import { LazyMotion, domMax, m as motion, type Variants } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaUsers,
  FaCar,
  FaStar,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaUserCheck,
  FaBolt,
} from "react-icons/fa";
import { serviceDetailsData } from "@/utils";
import useWhatsApp from "@/hooks/useWhatsApp";
import classes from "./car-booking.module.scss";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: FaShieldAlt,
    title: "Fully Insured Fleet",
    desc: "Comprehensive vehicle & passenger coverage on every trip — zero liability on you.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Real-Time GPS Tracking",
    desc: "Every car is live-tracked. Share your route with family for complete peace of mind.",
  },
  {
    icon: FaUserCheck,
    title: "Verified Chauffeurs",
    desc: "Government-licensed, background-checked, hospitality-trained — travel companions, not just drivers.",
  },
  {
    icon: FaBolt,
    title: "Confirmed in 10 Minutes",
    desc: "WhatsApp your dates, get a price, book instantly. No forms, no waitlists, no stress.",
  },
];

const CarBookingClient = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const { luxuryCar, tempoTraveler, carRental } = serviceDetailsData;

  const rowLabels = carRental.tData[0].data.map((d) => d.info);

  return (
    <LazyMotion features={domMax}>
      <div className={classes.page}>
        {/* ── Hero ── */}
        <div className={classes.hero}>
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773410049/odisha-mobile_yhelr2.png"
            alt="Premium Car Rental Bhubaneswar"
            fill
            style={{ objectFit: "cover" }}
            className={classes.heroImage}
            priority
            unoptimized
          />
          <div className={classes.heroOverlay} />
          <motion.div
            className={classes.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className={classes.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Car Booking</span>
            </nav>
            <span className={classes.heroBadge}>
              GPS-Tracked · Fully Insured · 24/7 Support
            </span>
            <h1 className={classes.heroTitle}>
              Travel Odisha in <span>Comfort</span> &amp; Confidence
            </h1>
            <p className={classes.heroSub}>
              Background-verified chauffeurs, fully insured vehicles, and
              real-time GPS tracking — from Bhubaneswar airport pickups to
              multi-day temple circuit tours.
            </p>
            <div className={classes.heroActions}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={classes.heroPrimary}
                onClick={() =>
                  handleRedirectTheUserToWhatsApp({
                    messageType: "dynamic",
                    dynamicMessage:
                      "Hi, I'd like to book a car for my Odisha trip. Please share available options and pricing.",
                  })
                }
              >
                <FaWhatsapp /> Get Instant Quote
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+9861151591"
                className={classes.heroSecondary}
              >
                <FaPhone /> Same-Day Booking
              </motion.a>
            </div>
            <p className={classes.trustPill}>
              No advance payment &nbsp;·&nbsp; Instant confirmation
              &nbsp;·&nbsp; Cancel anytime
            </p>
          </motion.div>
        </div>

        {/* ── Body ── */}
        <div className={classes.body}>
          {/* ── Why Our Fleet ── */}
          <motion.section
            className={classes.featuresSection}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                variants={fadeUp}
                key={title}
                className={classes.featureItem}
              >
                <div className={classes.featureIcon}>
                  <Icon />
                </div>
                <div>
                  <h3 className={classes.featureTitle}>{title}</h3>
                  <p className={classes.featureDesc}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Luxury Cars */}
          <section className={classes.section}>
            <motion.div
              className={classes.sectionHeader}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className={classes.sectionBadge}>
                <FaCar /> Luxury &amp; Wedding
              </span>
              <h2 className={classes.sectionTitle}>Premium Car Fleet</h2>
              <p className={classes.sectionDesc}>
                Immaculately maintained luxury sedans and SUVs for weddings,
                corporate transfers, and VIP Odisha experiences — driven by
                trained chauffeurs who know every road.
              </p>
            </motion.div>

            <motion.div
              className={classes.fleetGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {luxuryCar.imageData.map((car, idx) => (
                <motion.div
                  variants={fadeUp}
                  key={`luxury-${idx}`}
                  className={classes.fleetCard}
                >
                  <div className={classes.fleetImgWrap}>
                    <Image
                      src={car.image}
                      alt={car.carName}
                      fill
                      style={{ objectFit: "cover" }}
                      className={classes.fleetImg}
                      unoptimized
                    />
                    <div className={classes.imgGradient} />
                    <span className={classes.categoryPill}>Luxury</span>
                  </div>
                  <div className={classes.fleetInfo}>
                    <h3 className={classes.carName}>{car.carName}</h3>
                    <p className={classes.capacityLine}>
                      <FaUsers /> {car.capacity}
                    </p>
                    <button
                      className={classes.enquireBtn}
                      onClick={() =>
                        handleRedirectTheUserToWhatsApp({
                          messageType: "dynamic",
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
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className={classes.sectionBadge}>
                <FaUsers /> Group Travel
              </span>
              <h2 className={classes.sectionTitle}>Tempo Traveller Fleet</h2>
              <p className={classes.sectionDesc}>
                12 to 26-seater AC coaches for pilgrimages, family reunions,
                school excursions, and corporate retreats — push-back seats,
                ample luggage space, stress-free journeys.
              </p>
            </motion.div>

            <motion.div
              className={classes.fleetGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {tempoTraveler.imageData.map((car, idx) => (
                <motion.div
                  variants={fadeUp}
                  key={`tempo-${idx}`}
                  className={classes.fleetCard}
                >
                  <div className={classes.fleetImgWrap}>
                    <Image
                      src={car.image}
                      alt={car.carName}
                      fill
                      style={{ objectFit: "cover" }}
                      className={classes.fleetImg}
                      unoptimized
                    />
                    <div className={classes.imgGradient} />
                    <span
                      className={`${classes.categoryPill} ${classes.pillGroup}`}
                    >
                      Group
                    </span>
                  </div>
                  <div className={classes.fleetInfo}>
                    <h3 className={classes.carName}>{car.carName}</h3>
                    <p className={classes.capacityLine}>
                      <FaUsers /> {car.capacity}
                    </p>
                    <button
                      className={classes.enquireBtn}
                      onClick={() =>
                        handleRedirectTheUserToWhatsApp({
                          messageType: "dynamic",
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
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className={classes.sectionBadge}>
                <FaStar /> Transparent Pricing
              </span>
              <h2 className={classes.sectionTitle}>Car Rental Rates</h2>
              <p className={classes.sectionDesc}>
                All-inclusive pricing with no hidden charges. Driver allowance
                included.
              </p>
            </motion.div>

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
                    <th className={classes.thFixedCol}>Package / Rate</th>
                    {carRental.tData.map((row, i) => (
                      <th key={i}>{row.carName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rowLabels.map((label, rIdx) => (
                    <tr
                      key={label}
                      className={
                        rIdx % 2 === 0 ? classes.rowEven : classes.rowOdd
                      }
                    >
                      <td className={classes.tdLabel}>{label}</td>
                      {carRental.tData.map((row, cIdx) => (
                        <td key={cIdx} className={classes.tdPrice}>
                          {row.data[rIdx]?.price ?? "—"}
                        </td>
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
                              messageType: "dynamic",
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
              * Extra km / hr charges apply beyond package limit. Prices may
              vary during peak season.
            </p>
          </section>

          {/* Bottom CTA */}
          <motion.div
            className={classes.ctaBanner}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={classes.ctaText}>
              <h2>Odisha Is Waiting — Your Car Is Ready.</h2>
              <p>
                WhatsApp us your travel dates and pickup location. We&apos;ll
                confirm availability, share a transparent price, and have a
                verified driver at your door — all in under 10 minutes.
              </p>
            </div>
            <div className={classes.ctaStack}>
              <div className={classes.ctaActions}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={classes.whatsappBtn}
                  onClick={() =>
                    handleRedirectTheUserToWhatsApp({
                      messageType: "dynamic",
                      dynamicMessage:
                        "Hi, I'd like to book a car for my Odisha trip. Please share available options and pricing.",
                    })
                  }
                >
                  <FaWhatsapp /> Book on WhatsApp
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919861151591"
                  className={classes.callBtn}
                >
                  <FaPhone /> Call for Same-Day Booking
                </motion.a>
              </div>
              <p className={classes.ctaTrust}>
                No advance payment &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp;
                Verified drivers &nbsp;·&nbsp; 4.8★ on Google
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default CarBookingClient;
