'use client';
import React from 'react';
import { IoCall } from 'react-icons/io5';
import classes from './callbutton.module.scss';

const CallButton = () => {
  /** Function to call Rishi */
  const handleCallVendor = () => {
    window.location.href = `tel:8249262728`;
  };
  return (
    <div className={classes.container} onClick={handleCallVendor}>
      <IoCall />
    </div>
  );
};

export default CallButton;
