'use client';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { ourPackagesData } from '@/utils';
import classes from './ourPackages.module.scss';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
};

const OurPackagesClient = () => {
  const featured = ourPackagesData.slice(0, 6);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className={classes.header}
        >
          <div className={classes.titleWrapper}>
            <span className={classes.subtitle}>Curated For You</span>
            <Link href="/packages">
              <h2 className={classes.title}>
                Featured <span>Packages</span>
              </h2>
            </Link>
          </div>
          <motion.div whileHover={{ x: 5 }} className="">
            <Link href="/packages" className={classes.viewAll}>
              View All <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={classes.carouselWrapper}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className={classes.carouselInner}>
          {featured.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={classes.carouselItem}
              variants={cardVariants}
            >
              <div className={classes.card}>
                <img
                  src={pkg.image.src}
                  alt={pkg.title}
                  className={classes.cardImgBackground}
                />
                <div className={classes.cardOverlayFull} />

                <div className={classes.badges}>
                  <span className={classes.durationBadge}>
                    {pkg.duration}
                  </span>
                  <span className={classes.categoryBadge}>
                    {pkg.category}
                  </span>
                </div>

                <div className={classes.cardContentOverlay}>
                  <div className={classes.cardHeaderMain}>
                    <Link
                      href={`/packages/${pkg.id}`}
                      className={classes.linkReset}
                    >
                      <h3 className={classes.cardTitleWhite}>{pkg.title}</h3>
                    </Link>
                    <div className={classes.locationWhite}>
                      <CiLocationOn />
                      <span>{pkg.location}</span>
                    </div>
                  </div>

                  <div className={classes.cardFooterWhite}>
                    <div className={classes.priceBox}>
                      <span className={classes.fromLabelWhite}>
                        Starting from
                      </span>
                      <span className={classes.priceWhite}>{pkg.price}</span>
                    </div>
                    <Link
                      href={`/packages/${pkg.id}`}
                      className={classes.viewBtn}
                    >
                      Explore <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurPackagesClient;
