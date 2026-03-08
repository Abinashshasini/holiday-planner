'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import classes from './searchBar.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';

const SearchBar = () => {
  const router = useRouter();
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    // If they typed something specific or selected options, we can route them or open WhatsApp.
    // For extreme conversion, a highly tailored WhatsApp message based on their search is great!
    if (destination || duration || category) {
      handleRedirectTheUserToWhatsApp({
        messageType: 'dynamic',
        dynamicMessage: `Hi, I'm looking for a tour. Destination: ${destination || 'Any'}, Duration: ${duration || 'Any'}, Category: ${category || 'Any'}. Please help me find the best package!`
      });
    } else {
      router.push('/packages');
    }
  };

  return (
    <motion.div 
      className={classes.searchContainer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
    >
      <div className={classes.searchWrapper}>
        <div className={classes.inputGroup}>
          <FaMapMarkerAlt className={classes.icon} />
          <div className={classes.inputArea}>
            <label>Where to?</label>
            <input 
              type="text" 
              placeholder="e.g. Puri, Konark..." 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.inputGroup}>
          <FaCalendarAlt className={classes.icon} />
          <div className={classes.inputArea}>
            <label>Duration</label>
            <select value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="">Any</option>
              <option value="1-2 Days">1-2 Days</option>
              <option value="3-4 Days">3-4 Days</option>
              <option value="5+ Days">5+ Days</option>
            </select>
          </div>
        </div>

        <div className={classes.divider} />

        <div className={classes.inputGroup}>
          <FaStar className={classes.icon} />
          <div className={classes.inputArea}>
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Types</option>
              <option value="beach">Beach</option>
              <option value="heritage">Heritage</option>
              <option value="nature">Nature</option>
              <option value="tribal">Tribal</option>
            </select>
          </div>
        </div>

        <motion.button 
          className={classes.searchBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
        >
          <FaSearch /> <span className={classes.btnText}>Search</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
