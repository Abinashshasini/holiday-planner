'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import useWhatsApp from '@/hooks/useWhatsApp';
import classes from './whatsApp.module.scss';

const WhatsAppButton = () => {
  /** Whats app feature hook */
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  return (
    <div
      onClick={() =>
        handleRedirectTheUserToWhatsApp({ messageType: 'generic' })
      }
      className={classes.container}
    >
      <div className={classes.iconCnt}>
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default WhatsAppButton;
