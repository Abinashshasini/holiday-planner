'use client';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { ourPackagesData } from '@/utils';
import classes from './ourPackages.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
};

const OurPackages = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const featured = ourPackagesData.slice(0, 6);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={classes.header}
        >
          <div className={classes.titleWrapper}>
            <span className={classes.subtitle}>Curated For You</span>
            <Link href="/packages">
              <h2 className={classes.title}>Featured <span>Packages</span></h2>
            </Link>

          </div>
          <motion.div whileHover={{ x: 5 }} className=''>
            <span className={classes.viewAll}>
              View All <FaArrowRight />
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className={classes.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featured.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={classes.card}
              variants={cardVariants}
            >
              <img src={pkg.image.src} alt={pkg.title} className={classes.cardImgBackground} />
              <div className={classes.cardOverlayFull} />

              <div className={classes.badges}>
                <span className={classes.durationBadge}>{pkg.duration}</span>
                <span className={classes.categoryBadge}>{pkg.category}</span>
              </div>

              <div className={classes.cardContentOverlay}>
                <div className={classes.cardHeaderMain}>
                  <Link href={`/packages/${pkg.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className={classes.cardTitleWhite}>{pkg.title}</h3>
                  </Link>
                  <div className={classes.locationWhite}>
                    <CiLocationOn />
                    <span>{pkg.location}</span>
                  </div>
                </div>

                <div className={classes.hoverReveal}>
                  <ul className={classes.highlightsWhite}>
                    {pkg.highlights.slice(0, 3).map((h) => (
                      <li key={h}><FaArrowRight /> {h}</li>
                    ))}
                  </ul>

                  <div className={classes.cardFooterWhite}>
                    <div className={classes.priceBox}>
                      <span className={classes.fromLabelWhite}>Starting from</span>
                      <span className={classes.priceWhite}>{pkg.price}</span>
                    </div>
                    <div className={classes.btnGroup}>
                      <Link href={`/packages/${pkg.id}`} className={classes.viewBtn}>
                        View Detail
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPackages;

