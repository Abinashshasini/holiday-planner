"use client";

import Link from "next/link";
import { LazyMotion, domMax, m as motion, type Variants } from "framer-motion";
import {
  FaRegCalendarCheck,
  FaAward,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { MdOutlineStar, MdOutlineVerified } from "react-icons/md";
import classes from "./about.module.scss";
import Image from "next/image";

const values = [
  {
    icon: <MdOutlineVerified />,
    title: "Your Safety, Non-Negotiable",
    desc: "GPS-tracked fleet, fully insured vehicles, and government-verified drivers — because peace of mind is the foundation of every great journey.",
  },
  {
    icon: <FaAward />,
    title: "Obsessed With Excellence",
    desc: "Handpicked hotels, personally vetted routes, and surprise upgrades when we can. We don't just meet expectations — we redefine them.",
  },
  {
    icon: <MdOutlineStar />,
    title: "Unapologetically Local",
    desc: "Skip the tourist traps. Our certified guides take you to hidden waterfalls, village kitchens, and temple ceremonies most visitors never see.",
  },
  {
    icon: <FaUsers />,
    title: "Always a Call Away",
    desc: "Midnight flight delay? Need a pharmacy at 3 AM? Our 24/7 travel concierge is your lifeline — before, during, and after your trip.",
  },
];

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "15+", label: "Destinations" },
  { value: "3+", label: "Years Experience" },
  { value: "4.8★", label: "Google Rating" },
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
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
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
            style={{ objectFit: "cover" }}
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
            <span className={classes.heroBadge}>
              Est. 2021 &bull; Bhubaneswar
            </span>
            <h1 className={classes.heroTitle}>
              We Don&apos;t Plan Trips. We Craft <span>Memories.</span>
            </h1>
            <p className={classes.heroSub}>
              Born from a love for Odisha&apos;s untold stories — we&apos;ve
              spent 3+ years turning temple trails, coastal sunrises, and tribal
              encounters into journeys that stay with you long after you return
              home.
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
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} className={classes.missionText}>
              <span className={classes.eyebrow}>
                <FaMapMarkedAlt /> Our Story
              </span>
              <h2 className={classes.missionTitle}>
                We Know Odisha Because We Live It
              </h2>
              <p>
                Holiday Planner was born in 2016 with a simple conviction:
                Odisha deserves better than cookie-cutter tourism. We started
                with one car and a notebook full of secret spots. Today,
                we&apos;re Bhubaneswar&apos;s highest-rated travel partner — but
                the notebook still grows.
              </p>
              <p>
                Imagine watching the sunrise paint Konark&apos;s stone chariot
                in gold. Tasting fresh fish curry on a Chilika houseboat while
                dolphins surface alongside you. Walking through Koraput&apos;s
                tribal villages where Dhokra art has been forged for a thousand
                years. These aren&apos;t itinerary bullet points — they&apos;re
                the moments we design around.
              </p>
              <p>
                Every guide in our network holds a government-issued license.
                Every driver is background-verified and road-tested. Every hotel
                is personally inspected. Because when you trust us with your
                family&apos;s vacation, we take that personally.
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
                  ease: "easeInOut",
                }}
              >
                <FaRegCalendarCheck className={classes.fbIcon} />
                <div>
                  <strong>Trusted Since 2021</strong>
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
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} className={classes.sectionHeader}>
              <h2 className={classes.sectionTitle}>
                The Principles Behind <span>Every Journey</span>
              </h2>
              <p className={classes.sectionSub}>
                Four commitments we make to every traveler — no exceptions, no
                fine print, no compromises.
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={classes.odishaContent}>
              <span className={classes.eyebrowWhite}>Why Odisha?</span>
              <h2>A Destination the World Is About to Discover</h2>
              <p>
                While travelers crowd Goa&apos;s beaches and Rajasthan&apos;s
                forts, Odisha quietly offers everything they have — and more.
                Three UNESCO World Heritage Sites. 480 km of pristine coastline.
                Asia&apos;s largest brackish-water lake teeming with Irrawaddy
                dolphins. Tribal communities preserving art forms older than
                recorded history.
              </p>
              <p>
                The secret is getting out. International publications from
                Lonely Planet to Condé Nast are calling Odisha
                &ldquo;India&apos;s last unspoiled frontier.&rdquo; The best
                time to experience it? Before everyone else does.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/packages" className={classes.exploreBtn}>
                  Start Your Odisha Story
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </LazyMotion>
  );
}
