'use client';
import React from 'react';
import { OurServices } from '@/utils/types';
import useWhatsApp from '@/hooks/useWhatsApp';
import { FaWhatsapp } from 'react-icons/fa6';

const OurServiceButton = ({ data }: { data: OurServices }) => {
  /** Whats app feature hook */
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  /** Function to handle click on button or card */
  const handleClickOnButton = () => {
    if (data.showIcon) {
      handleRedirectTheUserToWhatsApp({
        messageType: 'dynamic',
        dynamicMessage: data.message,
      });
    }
  };

  /** Function to render icon */
  const handleRenderIcon = (iconType: string | null) => {
    if (iconType === 'FaWhatsapp') return <FaWhatsapp />;
    return null;
  };

  return (
    <button onClick={handleClickOnButton}>
      {data.showIcon && handleRenderIcon(data.Icon)}
      {data.buttonText}
    </button>
  );
};

export default OurServiceButton;
