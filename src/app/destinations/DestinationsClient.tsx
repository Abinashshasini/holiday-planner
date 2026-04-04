"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m as motion,
  type Variants,
} from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaCameraRetro } from "react-icons/fa";
import classes from "./destinations.module.scss";
import { popularCitiesData } from "@/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

export default function DestinationsClient() {
  return (
    <LazyMotion features={domAnimation}>
      <div className={classes.page}>
        {/* Hero */}
        <div className={classes.hero}>
          <Image
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2000&auto=format&fit=crop"
            alt="Scenic Odisha"
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
            <span className={classes.heroBadge}>Destinations</span>
            <h1 className={classes.heroTitle}>
              Odisha&apos;s <span>Finest</span> Cities
            </h1>
            <p className={classes.heroSubtitle}>
              Ancient temples, golden coastlines, and untouched wilderness —
              every destination tells a story worth exploring.
            </p>
          </motion.div>
        </div>

        <div className={classes.body}>
          {/* Section Header */}
          <motion.div
            className={classes.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={classes.overline}>Explore</span>
            <h2 className={classes.sectionTitle}>
              Popular <span>Destinations</span>
            </h2>
            <p className={classes.sectionSubtitle}>
              Curated cities and landmarks across Odisha, from spiritual energy
              to architectural marvels.
            </p>
          </motion.div>

          {/* Destination Grid */}
          <motion.div
            className={classes.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
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
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className={classes.cardImage}
                      unoptimized
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
                            .join(" · ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={classes.cardFooter}>
                    <p className={classes.cardDesc}>
                      {dest.history.slice(0, 120)}…
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
