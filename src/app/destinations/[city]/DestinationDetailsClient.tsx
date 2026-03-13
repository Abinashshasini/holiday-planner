'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {

  FaArrowRight,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUtensils,
  FaLightbulb,
} from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { ourPackagesData } from '@/utils';
import useWhatsApp from '@/hooks/useWhatsApp';
import classes from './destinationDetails.module.scss';


import Image from 'next/image';

const staggerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DestinationDetailsClient({
  cityInfo,
}: {
  cityInfo: any;
}) {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  // Find related tours based on location exact or partial match
  const relatedPackages = ourPackagesData.filter(
    (pkg) =>
      pkg.location.toLowerCase().includes(cityInfo.name.toLowerCase()) ||
      pkg.title.toLowerCase().includes(cityInfo.name.toLowerCase()),
  );

  return (
    <>
     
      <main className={classes.main}>
        {/* Dynamic Hero Section */}
        <section className={classes.hero}>
          <Image
            src={cityInfo.image}
            alt={cityInfo.name}
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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={classes.badge}>Destination Guide</span>
            <h1 className={classes.cityName}>{cityInfo.name}</h1>
          </motion.div>
        </section>

        <div className={classes.container}>
          {/* History & Overview */}
          <motion.section
            className={classes.historySection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={classes.headerBlock}>
              <span className={classes.sectionSubtitle}>Discovery</span>
              <h2 className={classes.sectionTitle}>
                The <span>Legacy</span> of {cityInfo.name}
              </h2>
            </div>
            <p className={classes.historyText}>{cityInfo.history}</p>

            {/* Quick Info Bar */}
            <div className={classes.quickInfoBar}>
              <div className={classes.infoItem}>
                <div className={classes.infoIcon}>
                  <FaCalendarAlt />
                </div>
                <div className={classes.infoContent}>
                  <h4>Best Time</h4>
                  <p>{cityInfo.bestTimeToVisit}</p>
                </div>
              </div>
              <div className={classes.infoItem}>
                <div className={classes.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={classes.infoContent}>
                  <h4>Top Spots</h4>
                  <p>{cityInfo.attractions?.length || 0} Landmarks</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Local Flavors */}
          {cityInfo.localFood && (
            <section className={classes.foodSection}>
              <div className={classes.headerBlock}>
                <span className={classes.sectionSubtitle}>Gastronomy</span>
                <h2 className={classes.sectionTitle}>
                  Local <span>Flavors</span>
                </h2>
              </div>
              <motion.div
                className={classes.foodGrid}
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {cityInfo.localFood.map((food: string, idx: number) => (
                  <motion.div
                    key={idx}
                    className={classes.foodItem}
                    variants={itemVariants}
                  >
                    <div className={classes.foodIcon}>
                      <FaUtensils />
                    </div>
                    <span>{food}</span>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Top Attractions Grid */}
          <section className={classes.attractionsSection}>
            <div className={classes.headerBlock}>
              <span className={classes.sectionSubtitle}>Highlights</span>
              <h2 className={classes.sectionTitle}>
                Places to <span>Explore</span>
              </h2>
            </div>

            {cityInfo.attractions && (
              <motion.div
                className={classes.bentoGrid}
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
              >
                {cityInfo.attractions.map((attr: any, index: number) => (
                  <motion.div
                    key={index}
                    className={classes.attractionCard}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={attr.image}
                      alt={attr.name}
                      className={classes.attrImage}
                    />
                    <div className={classes.attrOverlay} />
                    <div className={classes.attrContent}>
                      <div className={classes.iconCircle}>
                        <FaMapMarkerAlt />
                      </div>
                      <h3>{attr.name}</h3>
                      <p>{attr.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>

          {/* Travel Tips */}
          {cityInfo.travelTips && (
            <section className={classes.tipsSection}>
              <div className={classes.headerBlock}>
                <span className={classes.sectionSubtitle}>Pro Tips</span>
                <h2 className={classes.sectionTitle}>
                  Essential <span>Travel Tips</span>
                </h2>
              </div>
              <motion.div
                className={classes.tipsGrid}
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {cityInfo.travelTips.map((tip: string, idx: number) => (
                  <motion.div
                    key={idx}
                    className={classes.tipCard}
                    variants={itemVariants}
                  >
                    <FaLightbulb />
                    <p>{tip}</p>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Related Tours Section */}
          {relatedPackages.length > 0 && (
            <section className={classes.relatedToursSection}>
              <div className={classes.headerBlock}>
                <span className={classes.sectionSubtitle}>Available Tours</span>
                <h2 className={classes.sectionTitle}>
                  Explore <span>Packages</span>
                </h2>
              </div>

              <motion.div
                className={classes.packagesGrid}
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {relatedPackages.map((pkg: any) => (
                  <motion.div
                    key={pkg.id}
                    className={classes.packageCard}
                    variants={itemVariants}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className={classes.pkgImgBackground}
                    />
                    <div className={classes.pkgOverlayFull} />

                    <div className={classes.badges}>
                      <span className={classes.durationBadge}>
                        {pkg.duration}
                      </span>
                      <span className={classes.categoryBadge}>
                        {pkg.category}
                      </span>
                    </div>

                    <div className={classes.pkgContentOverlay}>
                      <div className={classes.pkgHeaderMain}>
                        <Link
                          href={`/packages/${pkg.id}`}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <h3 className={classes.pkgTitleWhite}>{pkg.title}</h3>
                        </Link>
                        <div className={classes.locationWhite}>
                          <CiLocationOn />
                          <span>{pkg.location}</span>
                        </div>
                      </div>

                      <div className={classes.hoverReveal}>
                        <ul className={classes.highlightsWhite}>
                          {pkg.highlights.slice(0, 3).map((h: string) => (
                            <li key={h}>
                              <FaArrowRight /> {h}
                            </li>
                          ))}
                        </ul>

                        <div className={classes.pkgFooterWhite}>
                          <div className={classes.priceBox}>
                            <span className={classes.fromLabelWhite}>
                              Starting from
                            </span>
                            <span className={classes.priceWhite}>
                              {pkg.price}
                            </span>
                          </div>
                          <div className={classes.btnGroup}>
                            <Link
                              href={`/packages/${pkg.id}`}
                              className={classes.viewBtn}
                            >
                              View
                            </Link>
                            <button
                              className={classes.bookBtnSmall}
                              onClick={(e) => {
                                e.preventDefault();
                                handleRedirectTheUserToWhatsApp({
                                  messageType: 'dynamic',
                                  dynamicMessage: `Hi, I'm interested in the ${pkg.title} package (${pkg.duration}). Please share details and availability.`,
                                });
                              }}
                            >
                              <FaWhatsapp /> Book
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
