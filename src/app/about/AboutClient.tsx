'use client';

import Link from 'next/link';
import { LazyMotion, domMax, m as motion, type Variants } from 'framer-motion';
import {
  FaRegCalendarCheck,
  FaAward,
  FaUsers,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { MdOutlineStar, MdOutlineVerified } from 'react-icons/md';
import classes from './about.module.scss';
import Image from 'next/image';

const values = [
  {
    icon: <MdOutlineVerified />,
    title: 'Safety First',
    desc: 'All vehicles are well-maintained and our drivers are verified and licensed.',
  },
  {
    icon: <FaAward />,
    title: 'Quality Service',
    desc: 'We go above and beyond to ensure every journey exceeds expectations.',
  },
  {
    icon: <MdOutlineStar />,
    title: 'Authenticity',
    desc: "We curate genuine local experiences that immerse you in Odisha's rich culture.",
  },
  {
    icon: <FaUsers />,
    title: '24/7 Support',
    desc: 'Our team is available around the clock to assist with any travel needs.',
  },
];

const stats = [
  { value: '500+', label: 'Happy Travelers' },
  { value: '15+', label: 'Destinations' },
  { value: '8+', label: 'Years Experience' },
  { value: '4.8★', label: 'Google Rating' },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};

export default function AboutClient() {
  return (
    <LazyMotion features={domMax}>
      <div className={classes.page}>
        {/* Hero */}
        <div className={classes.hero}>
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773410049/odisha-mobile_yhelr2.png"
            alt="Konark Sun Temple Odisha"
            fill
            style={{ objectFit: 'cover' }}
            className={classes.heroImage}
            priority
            unoptimized
          />
          <div className={classes.heroOverlay} />
          <motion.div
            className={classes.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={classes.heroBadge}>Our Legacy</span>
            <h1 className={classes.heroTitle}>
              Crafting <span>Odisha&apos;s</span> Finest Journeys
            </h1>
            <p className={classes.heroSub}>
              From the ancient stones of Konark to the serene waves of Puri, we
              are your dedicated curators of authentic Indian experiences.
            </p>
            <nav className={classes.breadcrumb}>
              <Link href="/">Home</Link> <span>/</span> <span>About Us</span>
            </nav>
          </motion.div>
        </div>

        <div className={classes.body}>
          {/* Mission Section */}
          <motion.section
            className={classes.missionSection}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeUp} className={classes.missionText}>
              <span className={classes.eyebrow}>
                <FaMapMarkedAlt /> Our Mission
              </span>
              <h2 className={classes.missionTitle}>
                Your Gateway to Authentic Odisha
              </h2>
              <p>
                At Holiday Planner, we believe every journey should be more than
                just sightseeing. We craft experiences that connect you to the
                soul of each destination — its people, traditions, flavors, and
                landscapes.
              </p>
              <p>
                From the white sand beaches of Puri and the architectural marvel
                of Konark, to the dense mangroves of Bhitarkanika and the
                vibrant tribal culture of Koraput — we take you beyond the
                tourist trail.
              </p>
              <p>
                Our team of government-recognized guides and English-speaking
                drivers ensures every moment of your trip is safe, comfortable,
                and deeply enriching.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className={classes.missionImageWrap}>
              <div className={classes.missionImageBlob} />
              <motion.div
                className={classes.floatingBadge}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
              >
                <FaRegCalendarCheck className={classes.fbIcon} />
                <div>
                  <strong>Trusted Since 2016</strong>
                  <span>Bhubaneswar&apos;s #1 Travel Partner</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Stats */}
          <motion.section
            className={classes.statsSection}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div
                variants={fadeUp}
                key={s.label}
                className={classes.statCard}
              >
                <span className={classes.statValue}>{s.value}</span>
                <span className={classes.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </motion.section>

          {/* Values */}
          <motion.section
            className={classes.valuesSection}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeUp} className={classes.sectionHeader}>
              <h2 className={classes.sectionTitle}>
                What We <span>Stand For</span>
              </h2>
              <p className={classes.sectionSub}>
                Our core values guide every interaction, every itinerary, and
                every journey we craft.
              </p>
            </motion.div>

            <div className={classes.valuesGrid}>
              {values.map((v) => (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  key={v.title}
                  className={classes.valueCard}
                >
                  <div className={classes.valueIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Odisha */}
          <motion.section
            className={classes.odishaSection}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={classes.odishaContent}>
              <span className={classes.eyebrowWhite}>Why Odisha?</span>
              <h2>India&apos;s Best Kept Secret</h2>
              <p>
                Odisha is a state of extraordinary contrasts — ancient temples
                and pristine beaches, lush forests and colourful tribal markets.
                Home to the Jagannath Temple in Puri, the Sun Temple at Konark,
                and UNESCO World Heritage Sites, Odisha offers experiences that
                rival any destination on earth.
              </p>
              <p>
                Yet it remains wonderfully uncommercialized — which means you
                get authenticity, value, and space that you simply cannot find
                elsewhere.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/packages" className={classes.exploreBtn}>
                  Explore Our Packages
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </LazyMotion>
  );
}
