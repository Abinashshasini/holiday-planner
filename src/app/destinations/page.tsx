'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import classes from './destinations.module.scss';

// Mock images (using standard Unsplash or placeholder for now, you should replace with actual assets from your project)
const destinations = [
  {
    id: 'puri',
    name: 'Puri',
    tagline: 'The Spiritual Capital',
    description: 'Home to the sacred Jagannath Temple and pristine Golden Beach. Experience deep spirituality and serene coastal beauty.',
    spots: ['Jagannath Temple', 'Golden Beach', 'Chilika Lake'],
    image: 'https://images.unsplash.com/photo-1600028292864-42cb04b6b236?q=80&w=800&auto=format&fit=crop',
    packageUrl: '/packages?category=beach'
  },
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar',
    tagline: 'The Temple City',
    description: 'A perfect blend of ancient heritage and modern infrastructure. Explore 11th-century temples and ancient Jain rock-cut caves.',
    spots: ['Lingaraj Temple', 'Udayagiri Caves', 'Nandankanan'],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
    packageUrl: '/packages?category=heritage'
  },
  {
    id: 'konark',
    name: 'Konark',
    tagline: 'The Architectural Marvel',
    description: 'Witness the breathtaking 13th-century Sun Temple built as a colossal chariot, and watch the sunrise at Chandrabhaga.',
    spots: ['Sun Temple', 'Chandrabhaga Beach', 'Ramchandi'],
    image: 'https://images.unsplash.com/photo-1621217649514-912f2759e9df?q=80&w=800&auto=format&fit=crop', // Substitute with real konark
    packageUrl: '/packages?category=heritage'
  },
  {
    id: 'daringbadi',
    name: 'Daringbadi',
    tagline: 'The Kashmir of Odisha',
    description: 'Escape the heat in this beautiful hill station featuring pine forests, sprawling coffee gardens, and majestic waterfalls.',
    spots: ['Pine Forest', 'Lovers Point', 'Coffee Plantations'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop', // Substitute with hills
    packageUrl: '/packages?category=nature'
  },
  {
    id: 'bhitarkanika',
    name: 'Bhitarkanika',
    tagline: 'The Mangrove Kingdom',
    description: 'Navigate through winding mangrove creeks, spot giant saltwater crocodiles, and witness exotic bird species.',
    spots: ['Mangrove Forest', 'Crocodile Sanctuary', 'Bird Tower'],
    image: 'https://images.unsplash.com/photo-1521404481005-5daee37b77ab?q=80&w=800&auto=format&fit=crop',
    packageUrl: '/packages?category=nature'
  },
  {
    id: 'koraput',
    name: 'Koraput',
    tagline: 'Tribal Heartland',
    description: 'Discover the mystical Gupteshwar caves surrounded by dense Sal forests, intermingled with rich tribal heritage.',
    spots: ['Gupteshwar Caves', 'Tribal Museum', 'Duduma Falls'],
    image: 'https://images.unsplash.com/photo-1542382103-6edbe2ce82eb?q=80&w=800&auto=format&fit=crop',
    packageUrl: '/packages?category=tribal'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function DestinationsPage() {
  return (
    <div className={classes.page}>
      
      {/* Hero */}
      <div className={classes.hero}>
        <div className={classes.heroOverlay} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1526685472855-6b6fb0b79fd1?q=80&w=1920&auto=format&fit=crop" 
          alt="Odisha Destinations" 
          className={classes.heroImage} 
        />
        <motion.div 
          className={classes.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={classes.heroBadge}>Interactive Guide</span>
          <h1 className={classes.heroTitle}>Discover Odisha</h1>
          <p className={classes.heroSubtitle}>
            From the roaring waves of the Bay of Bengal to the silent, majestic peaks of the Eastern Ghats.
          </p>
        </motion.div>
      </div>

      <div className={classes.body}>
        <motion.div 
          className={classes.grid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {destinations.map((dest) => (
            <motion.div 
              key={dest.id} 
              className={classes.card}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className={classes.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dest.image} alt={dest.name} className={classes.cardImage} />
                <div className={classes.cardOverlay} />
                <div className={classes.cardTitleBox}>
                  <h3>{dest.name}</h3>
                  <span>{dest.tagline}</span>
                </div>
              </div>
              
              <div className={classes.cardBody}>
                <p className={classes.description}>{dest.description}</p>
                
                <div className={classes.spotsList}>
                  <FaMapMarkerAlt className={classes.icon} />
                  <span>{dest.spots.join(' • ')}</span>
                </div>
                
                <Link href={dest.packageUrl} className={classes.exploreBtn}>
                  View Packages <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
