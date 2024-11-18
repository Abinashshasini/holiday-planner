'use client';
import React from 'react';
import { IoIosCall } from 'react-icons/io';

const CallButton = () => {
  /** Function to call Rishi */
  const handleCallVendor = () => {
    window.location.href = `tel:8249262728`;
  };

  return (
    <button onClick={handleCallVendor}>
      <IoIosCall />
      Book Now <span />
    </button>
  );
};

export default CallButton;
