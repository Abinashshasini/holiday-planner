'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { popularCitiesData } from '@/utils';
import classes from './popularCities.module.scss';
import { FaLocationArrow } from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const PopularCities = () => {
  console.log('PopularCities data:', popularCitiesData);

  if (!popularCitiesData || popularCitiesData.length === 0) {
    return (
      <section className={classes.section}>
        <div className={classes.container}>
          <p>No destinations found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.header}>
          <span className={classes.subtitle}>Explore</span>
          <h2 className={classes.title}>Popular <span>Destinations</span></h2>
          <p className={classes.desc}>Discover the hidden gems and iconic landmarks of Odisha.</p>
        </div>

        <div className={classes.bentoGrid} style={{ minHeight: '400px' }}>
          {popularCitiesData.slice(0, 6).map((city, i) => {
            const isFeatured = i === 0 || i === 3;
            return (
              <Link 
                href={`/destinations/${city.slug}`} 
                key={city.id} 
                className={`${classes.bentoItem} ${isFeatured ? classes.featured : ''}`}
                style={{ textDecoration: 'none', position: 'relative', display: 'block' }}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image 
                    src={city.image} 
                    alt={city.name} 
                    className={classes.bgImage} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={i === 0}
                  />
                  <div className={classes.overlay} />
                  
                  <div className={classes.content}>
                    <div className={classes.iconBox}>
                      <FaLocationArrow />
                    </div>
                    <h3 className={classes.cityName}>{city.name}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCities;

