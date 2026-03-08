'use client';
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import classes from './footer.module.scss';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.wave}>
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>

      <div className={classes.container}>
        <motion.div 
          className={classes.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className={classes.brand}>
            <h3 className={classes.brandName}>Holiday Planner</h3>
            <p className={classes.brandTagline}>
              Your gateway to the soul of Odisha — curated journeys, premium cars, and memories that last a lifetime.
            </p>
            <div className={classes.socials}>
              <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://wa.me/917978065576" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </motion.a>
              <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://www.instagram.com/holidayplannerodisha" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ y: -3, scale: 1.1 }} href="#" aria-label="Facebook">
                <FaFacebook />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className={classes.linksCol}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/packages">Tour Packages</Link></li>
              <li><Link href="/car-booking">Car Booking</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className={classes.linksCol}>
            <h4>Services</h4>
            <ul>
              <li><Link href="/car-booking">Car Rental</Link></li>
              <li><Link href="/car-booking">Luxury Cars</Link></li>
              <li><Link href="/car-booking">Tempo Traveller</Link></li>
              <li><Link href="/packages">Cultural Tours</Link></li>
              <li><Link href="/packages">Beach Getaways</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className={classes.contactCol}>
            <h4>Contact Us</h4>
            <div className={classes.contactItem}>
              <FaMapMarkerAlt />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
            <div className={classes.contactItem}>
              <FaPhone />
              <a href="tel:+917978065576">+91 79780 65576</a>
            </div>
            <div className={classes.contactItem}>
              <FaEnvelope />
              <a href="mailto:info@holidayplanner.in">info@holidayplanner.in</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={classes.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>© {currentYear} Holiday Planner. All rights reserved.</p>
          <p className={classes.madeWith}>Crafted with ❤️ for Odisha Tourism</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
