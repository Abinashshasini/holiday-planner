'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaWhatsapp, FaUsers, FaTags } from 'react-icons/fa';
import RFQCard from '@/components/rfq-card';
import WhyChooseUs from '@/components/why-choose';
import GetInTouch from '@/components/get-in-touch';
import classes from './style.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const ServiceDetailsClient = ({ data }: { data: any }) => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  // Gather all unique row labels from the first car entry
  const rowLabels: string[] =
    data.type === 'table' && data.tData?.length
      ? data.tData[0].data.map((d: any) => d.info)
      : [];

  return (
    <>
      <div className={classes.page}>
        {/* ── Hero ── */}
        <div className={classes.hero}>
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773410049/odisha-mobile_yhelr2.png"
            alt="Service Hero"
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
            transition={{ duration: 0.8 }}
          >
            <span className={classes.badge}>Our Services</span>
            <h1 className={classes.heroTitle}>
              {data.hTextOne} <span>{data.hTextTwo}</span>
            </h1>
          </motion.div>
        </div>

        <div className={classes.container}>

          {/* ── Comparison Table (car rental pricing) ── */}
          {data.type === 'table' && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className={classes.sectionHeader}>
                <span className={classes.sectionBadge}><FaTags /> Transparent Pricing</span>
                <h2 className={classes.sectionTitle}>Compare Our Rates</h2>
                <p className={classes.sectionDesc}>
                  All prices are inclusive of driver allowance. Extra km / hr charges apply beyond the package limit.
                </p>
              </div>

              <div className={classes.tableWrap}>
                <table className={classes.table}>
                  <thead>
                    <tr>
                      <th className={classes.thLabel}>Package / Rate</th>
                      {data.tData.map((car: any) => (
                        <th key={car.id} className={classes.thCar}>
                          {car.carName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rowLabels.map((label: string, rIdx: number) => (
                      <tr key={label} className={rIdx % 2 === 0 ? classes.rowEven : classes.rowOdd}>
                        <td className={classes.tdLabel}>{label}</td>
                        {data.tData.map((car: any) => (
                          <td key={car.id} className={classes.tdPrice}>
                            {car.data[rIdx]?.price ?? '—'}
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* Book row */}
                    <tr className={classes.rowBook}>
                      <td className={classes.tdLabel}>Book</td>
                      {data.tData.map((car: any) => (
                        <td key={car.id} className={classes.tdBookCell}>
                          <button
                            className={classes.bookBtnSm}
                            onClick={() =>
                              handleRedirectTheUserToWhatsApp({
                                messageType: 'dynamic',
                                dynamicMessage: `Hi, I want to book ${car.carName}. Please share details.`,
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
              </div>

              <p className={classes.tableNote}>
                * Prices may vary during peak season. Contact us for outstation / overnight rates.
              </p>
            </motion.div>
          )}

          {/* ── Image Fleet Grid ── */}
          {data.type === 'images' && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className={classes.sectionHeader}>
                <span className={classes.sectionBadge}><FaUsers /> Available Fleet</span>
                <h2 className={classes.sectionTitle}>Our Vehicles</h2>
                <p className={classes.sectionDesc}>
                  Well-maintained, air-conditioned vehicles with professional drivers across Odisha.
                </p>
              </div>

              <motion.div
                className={classes.fleetGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {data.imageData?.map((element: any, idx: number) => (
                  <motion.div key={`${element.id}-${idx}`} variants={fadeUp} className={classes.fleetCard}>
                    <div className={classes.fleetImgWrap}>
                      <img src={element.image} alt={element.carName} />
                      <div className={classes.fleetImgOverlay} />
                    </div>
                    <div className={classes.fleetBody}>
                      <h3 className={classes.fleetName}>{element.carName}</h3>
                      <p className={classes.fleetCapacity}>
                        <FaUsers /> {element.capacity}
                      </p>
                      <button
                        className={classes.bookBtnFull}
                        onClick={() =>
                          handleRedirectTheUserToWhatsApp({
                            messageType: 'dynamic',
                            dynamicMessage: `Hi, I'm interested in the ${element.carName}. Please share booking details.`,
                          })
                        }
                      >
                        <FaWhatsapp /> Enquire via WhatsApp
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>

        <WhyChooseUs />
        <RFQCard />
        <GetInTouch />
      </div>
    </>
  );
};

export default ServiceDetailsClient;
