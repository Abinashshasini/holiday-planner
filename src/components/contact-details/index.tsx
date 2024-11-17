'use client';
import React from 'react';
import Heading from '../heading';
import { MdPhoneCallback } from 'react-icons/md';
import classes from './contact-details.module.scss';

const ContactDetails = () => {
  const handleCallVendor = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <footer className={classes.container}>
      <Heading textOne="Contact" textTwo="Details" />
      <address>
        <h3>
          Address: Plot number 1692, rath Rode, old town, Bhubaneswar, Odisha
          751009
        </h3>
        <div className={classes.contactNumberCnt}>
          <MdPhoneCallback />
          <p onClick={() => handleCallVendor('8249262728')}>+91 8249262728</p>
          <p onClick={() => handleCallVendor('7008345662')}>+91 7008345662</p>
        </div>
      </address>
      <div className={classes.policyCnt}>
        <p>Booking Policy</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default ContactDetails;
