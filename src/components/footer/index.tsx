"use client";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import classes from "./footer.module.scss";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      {/* Top gradient accent line */}
      <div className={classes.topAccent} />

      <div className={classes.container}>
        <motion.div
          className={classes.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* ── Brand Column ── */}
          <motion.div variants={itemVariants} className={classes.brand}>
            <div className={classes.logoMark}>
              <div className={classes.logoIcon}>🏯</div>
              <div>
                <div className={classes.brandName}>Holiday Planner</div>
                <div className={classes.brandSub}>Odisha — Since 2015</div>
              </div>
            </div>

            <div className={classes.dividerLine} />

            <p className={classes.brandTagline}>
              Your gateway to the soul of Odisha — curated journeys, premium
              cars, and memories that last a lifetime.
            </p>

            <div className={classes.socials}>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://wa.me/917978065576"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/holidayplannerodisha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" aria-label="Facebook">
                <FaFacebook />
              </motion.a>
            </div>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div variants={itemVariants} className={classes.linksCol}>
            <div className={classes.colHeading}>
              <h4>Explore</h4>
            </div>
            <ul>
              {[
                { href: "/", label: "Home" },
                { href: "/packages", label: "Tour Packages" },
                { href: "/car-booking", label: "Car Booking" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Services ── */}
          <motion.div variants={itemVariants} className={classes.linksCol}>
            <div className={classes.colHeading}>
              <h4>Services</h4>
            </div>
            <ul>
              {[
                { href: "/car-booking", label: "Car Rental" },
                { href: "/car-booking", label: "Luxury Cars" },
                { href: "/car-booking", label: "Tempo Traveller" },
                { href: "/packages", label: "Cultural Tours" },
                { href: "/packages", label: "Beach Getaways" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact ── */}
          <motion.div variants={itemVariants} className={classes.contactCol}>
            <div className={classes.colHeading}>
              <h4>Get in Touch</h4>
            </div>

            <div className={classes.contactItem}>
              <div className={classes.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={classes.contactText}>
                <span className={classes.contactLabel}>Location</span>
                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>

            <div className={classes.contactItem}>
              <div className={classes.contactIcon}>
                <FaPhone />
              </div>
              <div className={classes.contactText}>
                <span className={classes.contactLabel}>Phone</span>
                <a href="tel:+917978065576">+91 79780 65576</a>
              </div>
            </div>

            <div className={classes.contactItem}>
              <div className={classes.contactIcon}>
                <FaEnvelope />
              </div>
              <div className={classes.contactText}>
                <span className={classes.contactLabel}>Email</span>
                <a href="mailto:holidayplannertravel@gmail.com">
                  holidayplannertravel@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Bottom Bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className={classes.bottomDivider} />
          <div className={classes.bottom}>
            <p>© {currentYear} Holiday Planner. All rights reserved.</p>

            <div className={classes.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>

            <p className={classes.madeWith}>
              Crafted with <span>♥</span> for Odisha Tourism
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
