'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import RFQCard from '@/components/rfq-card';
import WhyChooseUs from '@/components/why-choose';
import GetInTouch from '@/components/get-in-touch';
import classes from './style.module.scss';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import useWhatsApp from '@/hooks/useWhatsApp';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const ServiceDetailsClient = ({ data }: { data: any }) => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  return (
    <>
      <Navbar />
      <div className={classes.page}>
        {/* Hero Section */}
        <div className={classes.hero}>
          <Image 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop" 
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
            <Link href="/" className={classes.backLink}>
              <FaArrowLeft /> Home
            </Link>
            <span className={classes.badge}>Our Services</span>
            <h1 className={classes.heroTitle}>{data.hTextOne} <span>{data.hTextTwo}</span></h1>
          </motion.div>
        </div>

        <div className={classes.container}>
          <div className={classes.body}>
            
            {/* Table layout handling */}
            {data.type === 'table' && (
              <motion.div 
                className={classes.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {data.tData?.map((element: any) => (
                  <motion.div key={element.id} variants={itemVariants} className={classes.pricingCard}>
                    <div className={classes.cardHeader}>
                      <h3>{element.carName}</h3>
                    </div>
                    <div className={classes.priceList}>
                      {element.data.map((carDetails: any, index: number) => (
                        <div className={classes.priceItem} key={`${index}-${carDetails.info}`}>
                          <span className={classes.infoLabel}>{carDetails.info}</span>
                          <span className={classes.priceValue}>{carDetails.price}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      className={classes.bookBtn}
                      onClick={() => handleRedirectTheUserToWhatsApp({
                        messageType: 'dynamic',
                        dynamicMessage: `Hi, I want to book ${element.carName}. Please share details.`
                      })}
                    >
                      <FaWhatsapp /> Book Now
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Images layout handling */}
            {data.type === 'images' && (
              <motion.div 
                className={classes.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {data.imageData?.map((element: any) => (
                  <motion.div key={element.id} variants={itemVariants} className={classes.imgCard}>
                    <div className={classes.imgWrap}>
                      <img src={element.image.src} alt={element.carName} />
                    </div>
                    <div className={classes.cardBody}>
                      <div className={classes.cardTitleBox}>
                        <h3>{element.carName}</h3>
                        <span className={classes.capacity}>{element.capacity}</span>
                      </div>
                      <button 
                        className={classes.bookBtn}
                        onClick={() => handleRedirectTheUserToWhatsApp({
                          messageType: 'dynamic',
                          dynamicMessage: `Hi, I'm interested in ${element.carName}. Please share details.`
                        })}
                      >
                        <FaWhatsapp /> Enquire
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <WhyChooseUs />
        <RFQCard />
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetailsClient;
