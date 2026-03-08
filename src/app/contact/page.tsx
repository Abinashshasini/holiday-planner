'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import classes from './contact.module.scss';

interface FormData {
  name: string;
  number: string;
  message?: string;
}

export default function ContactPage() {
  const [userData, setUserData] = useState<FormData>({ name: '', number: '', message: '' });
  const [loading, setLoading] = useState(false);
  const { name = '', number = '', message = '' } = userData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name: field, value } = e.target;
    if (field === 'number' && value.length > 10) return;
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = async () => {
    const nameRegex = /^[a-zA-Z\s]{3,60}$/;
    if (!nameRegex.test(name)) { toast.error('Please enter a valid name.'); return; }
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(number)) { toast.error('Enter a valid 10-digit Indian number.'); return; }

    setLoading(true);
    try {
      await axios.post('https://holiday-planner-be.vercel.app/api/v1/leads/submit-lead', { name, number, message });
      toast.success('Message sent! We\'ll be in touch soon 🎉');
      setUserData({ name: '', number: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.page}>
      <Toaster position="bottom-center" />
      {/* Hero */}
      <div className={classes.hero}>
        <div className={classes.heroOverlay} />
        <div className={classes.heroContent}>
          <span className={classes.heroBadge}>Get In Touch</span>
          <h1 className={classes.heroTitle}>Let&apos;s Plan Your Trip</h1>
          <p className={classes.heroSub}>
            Have questions or ready to book? Our friendly team is here to help you plan the perfect journey.
          </p>
          <nav className={classes.breadcrumb}>
            <Link href="/">Home</Link> <span>/</span> <span>Contact</span>
          </nav>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.grid}>

          {/* Info Panel */}
          <div className={classes.infoPanel}>
            <h2 className={classes.infoTitle}>Contact Information</h2>
            <p className={classes.infoSub}>Reach us through any of these channels and we'll get back to you within hours.</p>

            <div className={classes.contactItem}>
              <div className={classes.contactIcon}><FaMapMarkerAlt /></div>
              <div>
                <strong>Office Address</strong>
                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>

            <div className={classes.contactItem}>
              <div className={classes.contactIcon}><FaPhone /></div>
              <div>
                <strong>Phone / WhatsApp</strong>
                <a href="tel:+917978065576">+91 79780 65576</a>
              </div>
            </div>

            <div className={classes.contactItem}>
              <div className={classes.contactIcon}><FaEnvelope /></div>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@holidayplanner.in">info@holidayplanner.in</a>
              </div>
            </div>

            <div className={classes.socials}>
              <a href="https://wa.me/917978065576" target="_blank" rel="noopener noreferrer" className={classes.socialWa}><FaWhatsapp /></a>
              <a href="https://www.instagram.com/holidayplannerodisha" target="_blank" rel="noopener noreferrer" className={classes.socialIg}><FaInstagram /></a>
              <a href="#" className={classes.socialFb}><FaFacebook /></a>
            </div>
          </div>

          {/* Form Panel */}
          <div className={classes.formPanel}>
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

            <button
              className={classes.submitBtn}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>

        {/* Map */}
        <div className={classes.mapWrap}>
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
        </div>
      </div>
    </div>
  );
}
