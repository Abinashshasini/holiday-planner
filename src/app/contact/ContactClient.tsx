'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LazyMotion, domMax, m as motion, type Variants } from 'framer-motion';
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import classes from './contact.module.scss';
import Image from 'next/image';

interface FormData {
  name: string;
  number: string;
  message?: string;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } },
};

export default function ContactClient() {
  const [userData, setUserData] = useState<FormData>({
    name: '',
    number: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { name = '', number = '', message = '' } = userData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    const { name: field, value } = e.target;
    if (field === 'number' && value.length > 10) return;
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = async () => {
    const nameRegex = /^[a-zA-Z\s]{3,60}$/;
    if (!nameRegex.test(name)) {
      toast.error('Please enter a valid name.');
      return;
    }
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(number)) {
      toast.error('Enter a valid 10-digit Indian number.');
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        'https://holiday-planner-be.vercel.app/api/v1/leads/submit-lead',
        { name, number, message },
      );
      toast.success("Message sent! We'll be in touch soon 🎉");
      setUserData({ name: '', number: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LazyMotion features={domMax}>

      <div className={classes.page}>
        <Toaster position="bottom-center" />
        {/* Hero */}
        <div className={classes.hero}>
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773410049/odisha-mobile_yhelr2.png"
            alt="Odisha Coastline"
            fill
            style={{ objectFit: 'cover' }}
            className={classes.heroImage}
            priority
            unoptimized
          />
          <div className={classes.heroOverlay} />
          <motion.div
            className={classes.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={classes.heroBadge}>Connect with Us</span>
            <h1 className={classes.heroTitle}>
              Your <span>Journey</span> Begins Here
            </h1>
            <p className={classes.heroSub}>
              Have a destination in mind or need expert advice? Our travel
              planners are ready to craft your perfect Odisha escape.
            </p>
            <nav className={classes.breadcrumb}>
              <Link href="/">Home</Link> <span>/</span> <span>Contact</span>
            </nav>
          </motion.div>
        </div>

        <div className={classes.body}>
          <motion.div
            className={classes.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Info Panel */}
            <motion.div variants={slideLeft} className={classes.infoPanel}>
              <h2 className={classes.infoTitle}>Contact Information</h2>
              <p className={classes.infoSub}>
                Reach us through any of these channels and we&apos;ll get back
                to you within hours.
              </p>

              <div className={classes.contactItem}>
                <div className={classes.contactIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <strong>Office Address</strong>
                  <span>Bhubaneswar, Odisha, India</span>
                </div>
              </div>

              <div className={classes.contactItem}>
                <div className={classes.contactIcon}>
                  <FaPhone />
                </div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <a href="tel:+917978065576">+91 79780 65576</a>
                </div>
              </div>

              <div className={classes.contactItem}>
                <div className={classes.contactIcon}>
                  <FaEnvelope />
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@holidayplanner.in">
                    info@holidayplanner.in
                  </a>
                </div>
              </div>

              <div className={classes.socials}>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://wa.me/917978065576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialWa}
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://www.instagram.com/holidayplannerodisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialIg}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className={classes.socialFb}
                >
                  <FaFacebook />
                </motion.a>
              </div>
            </motion.div>

            {/* Form Panel */}
            <motion.div variants={slideRight} className={classes.formPanel}>
              <h2 className={classes.formTitle}>Send Us a Message</h2>

              <div className={classes.inputGroup}>
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={handleChange}
                  className={classes.input}
                />
              </div>

              <div className={classes.inputGroup}>
                <label>Mobile Number</label>
                <div className={classes.phoneInput}>
                  <span>+91</span>
                  <input
                    type="number"
                    name="number"
                    placeholder="10-digit number"
                    value={number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={classes.inputGroup}>
                <label>Message (optional)</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your travel plans, dates, group size, etc."
                  maxLength={300}
                  value={message}
                  onChange={handleChange}
                  className={classes.textarea}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={classes.submitBtn}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className={classes.mapWrap}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238917.13571684694!2d85.63795!3d20.2960587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Holiday Planner Location - Bhubaneswar"
            />
          </motion.div>
        </div>
      </div>
    </LazyMotion>
  );
}
