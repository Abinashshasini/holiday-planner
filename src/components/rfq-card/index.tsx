'use client';
import React from 'react';
import classes from './rfqCard.module.scss';
import useWhatsApp from '@/hooks/useWhatsApp';

const RFQCard = () => {
  /** Whats app feature hook */
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Dreaming of your next Adventure?</h2>
        <p>Hit us up!</p>
        <button onClick={handleRedirectTheUserToWhatsApp}>
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default RFQCard;
