'use client';

import Link from 'next/link';
import { LazyMotion, domAnimation, m as motion, type Variants } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight, FaCameraRetro } from 'react-icons/fa';
import classes from './destinations.module.scss';
import { popularCitiesData } from '@/utils';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};

export default function DestinationsClient() {
  return (
    <LazyMotion features={domAnimation}>
     
      <div className={classes.page}>
        {/* Hero Section */}
        <div className={classes.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2000&auto=format&fit=crop"
            alt="Scenic Odisha"
            className={classes.heroImage}
          />
          <div className={classes.heroOverlay} />
          <motion.div
            className={classes.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={classes.heroBadge}>Discovery Guide</span>
            <h1 className={classes.heroTitle}>
              Odisha&apos;s <span>Majestic</span> Cities
            </h1>
            <p className={classes.heroSubtitle}>
              Embark on a journey through ancient stone carvings, golden
              coastlines, and untouched wilderness. Every destination tells a
              story.
            </p>
          </motion.div>
        </div>

        <div className={classes.body}>
          {/* Intro Text to make the page look full */}
          <motion.div
            className={classes.intro}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={classes.introLine} />
            <h2 className={classes.introTitle}>Explore the Landmarks</h2>
            <p className={classes.introText}>
              From the spiritual energy of the Jagannath Temple to the
              architectural precision of the Sun Temple, Odisha offers a diverse
              palette of experiences for every type of traveler. Discover our
              curated list of must-visit cities and landmarks.
            </p>
          </motion.div>

          {/* Destination Grid */}
          <motion.div
            className={classes.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {popularCitiesData.map((dest) => (
              <motion.div
                key={dest.id}
                className={classes.card}
                variants={cardVariants}
              >
                <Link
                  href={`/destinations/${dest.slug}`}
                  className={classes.cardInner}
                >
                  <div className={classes.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className={classes.cardImage}
                    />
                    <div className={classes.cardOverlay} />

                    <div className={classes.cardBadge}>
                      <FaCameraRetro /> {dest.attractions.length} Spots
                    </div>

                    <div className={classes.cardContent}>
                      <h3 className={classes.destName}>{dest.name}</h3>
                      <div className={classes.attractions}>
                        <FaMapMarkerAlt />
                        <span>
                          {dest.attractions
                            .slice(0, 2)
                            .map((a) => a.name)
                            .join(' • ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={classes.cardFooter}>
                    <p className={classes.cardDesc}>
                      {dest.history.slice(0, 95)}...
                    </p>
                    <span className={classes.exploreLink}>
                      Discover More <FaArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </LazyMotion>
  );
}
