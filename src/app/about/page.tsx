import React from 'react';
import Link from 'next/link';
import { FaRegCalendarCheck, FaAward, FaUsers, FaMapMarkedAlt } from 'react-icons/fa';
import { MdOutlineStar, MdOutlineVerified } from 'react-icons/md';
import classes from './about.module.scss';

const values = [
  { icon: <MdOutlineVerified />, title: 'Safety First', desc: 'All vehicles are well-maintained and our drivers are verified and licensed.' },
  { icon: <FaAward />, title: 'Quality Service', desc: 'We go above and beyond to ensure every journey exceeds expectations.' },
  { icon: <MdOutlineStar />, title: 'Authenticity', desc: 'We curate genuine local experiences that immerse you in Odisha\'s rich culture.' },
  { icon: <FaUsers />, title: '24/7 Support', desc: 'Our team is available around the clock to assist with any travel needs.' },
];

const stats = [
  { value: '500+', label: 'Happy Travelers' },
  { value: '15+', label: 'Destinations' },
  { value: '8+', label: 'Years Experience' },
  { value: '4.8★', label: 'Google Rating' },
];

export default function AboutPage() {
  return (
    <div className={classes.page}>
      {/* Hero */}
      <div className={classes.hero}>
        <div className={classes.heroOverlay} />
        <div className={classes.heroContent}>
          <span className={classes.heroBadge}>Our Story</span>
          <h1 className={classes.heroTitle}>Passionate About Odisha</h1>
          <p className={classes.heroSub}>
            Born in the heart of Bhubaneswar, Holiday Planner was founded with one simple mission
            — to show the world the breathtaking beauty and culture of Odisha.
          </p>
          <nav className={classes.breadcrumb}>
            <Link href="/">Home</Link> <span>/</span> <span>About Us</span>
          </nav>
        </div>
      </div>

      <div className={classes.body}>

        {/* Mission Section */}
        <section className={classes.missionSection}>
          <div className={classes.missionText}>
            <span className={classes.eyebrow}><FaMapMarkedAlt /> Our Mission</span>
            <h2 className={classes.missionTitle}>Your Gateway to Authentic Odisha</h2>
            <p>
              At Holiday Planner, we believe every journey should be more than just sightseeing.
              We craft experiences that connect you to the soul of each destination — its people,
              traditions, flavors, and landscapes.
            </p>
            <p>
              From the white sand beaches of Puri and the architectural marvel of Konark, to the
              dense mangroves of Bhitarkanika and the vibrant tribal culture of Koraput — we take
              you beyond the tourist trail.
            </p>
            <p>
              Our team of government-recognized guides and English-speaking drivers ensures every
              moment of your trip is safe, comfortable, and deeply enriching.
            </p>
          </div>
          <div className={classes.missionImageWrap}>
            <div className={classes.missionImageBlob} />
            <div className={classes.floatingBadge}>
              <FaRegCalendarCheck className={classes.fbIcon} />
              <div>
                <strong>Trusted Since 2016</strong>
                <span>Bhubaneswar&apos;s #1 Travel Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={classes.statsSection}>
          {stats.map((s) => (
            <div key={s.label} className={classes.statCard}>
              <span className={classes.statValue}>{s.value}</span>
              <span className={classes.statLabel}>{s.label}</span>
            </div>
          ))}
        </section>

        {/* Values */}
        <section className={classes.valuesSection}>
          <div className={classes.sectionHeader}>
            <h2 className={classes.sectionTitle}>
              What We <span>Stand For</span>
            </h2>
            <p className={classes.sectionSub}>
              Our core values guide every interaction, every itinerary, and every journey we craft.
            </p>
          </div>
          <div className={classes.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={classes.valueCard}>
                <div className={classes.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Odisha */}
        <section className={classes.odishaSection}>
          <div className={classes.odishaContent}>
            <span className={classes.eyebrow}>Why Odisha?</span>
            <h2>India&apos;s Best Kept Secret</h2>
            <p>
              Odisha is a state of extraordinary contrasts — ancient temples and pristine beaches,
              lush forests and colourful tribal markets. Home to the Jagannath Temple in Puri, the
              Sun Temple at Konark, and UNESCO World Heritage Sites, Odisha offers experiences that
              rival any destination on earth.
            </p>
            <p>
              Yet it remains wonderfully uncommercialized — which means you get authenticity, value,
              and space that you simply cannot find elsewhere.
            </p>
            <Link href="/packages" className={classes.exploreBtn}>
              Explore Our Packages
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
