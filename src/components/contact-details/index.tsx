'use client';
import React from 'react';
import Heading from '../heading';
import { MdPhoneCallback } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import classes from './contact-details.module.scss';

const ContactDetails = () => {
  /** Function to call owner */
  const handleCallVendor = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  /** Function to mail owner */
  const handleMailOwner = () => {
    const email = 'holidayplannertravel@gmail.com';
    const subject = encodeURIComponent('Inquiry About Holiday planner');
    const body = encodeURIComponent(
      "Hello,\n\nI got to know about Holiday Planner, I'm interested to know more about services.\n\nThank you!"
    );

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <footer className={classes.container}>
      <Heading textOne="Contact" textTwo="Details" />
      <address>
        <h3>
          Address: Plot number 1692, Rath Rode, Old town, Bhubaneswar, Odisha
          751009
        </h3>
        <div className={classes.contactNumberCnt}>
          <MdPhoneCallback />
          <p onClick={() => handleCallVendor('8249262728')}>+918249262728</p>
          <p onClick={() => handleCallVendor('7008345662')}>+917008345662</p>
        </div>
        <div className={classes.contactNumberCnt} onClick={handleMailOwner}>
          <IoIosMail />
          <p>holidayplannertravel@gmail.com</p>
        </div>
      </address>

      <h3 className={classes.copyRight}>
        © {new Date().getFullYear()} All Rights Reserved. Designed and Developed
        by <a href="https://abinashshasini.vercel.app/">Abinash Shasini</a>
      </h3>
      <div className={classes.policyCnt}>
        <p>Booking Policy</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default ContactDetails;
