'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { OurServices } from '@/utils/types';
import useWhatsApp from '@/hooks/useWhatsApp';
import { FaWhatsapp } from 'react-icons/fa6';

const OurServiceButton = ({ data }: { data: OurServices }) => {
  const router = useRouter();
  /** Whats app feature hook */
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  /** Function to handle click on button or card */
  const handleClickOnButton = (
    e: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    e.preventDefault();
    if (data.action === 'whatsapp') {
      handleRedirectTheUserToWhatsApp({
        messageType: 'dynamic',
        dynamicMessage: data.message,
      });
    } else {
      router.push(data.URL);
    }
  };

  /** Function to render icon */
  const handleRenderIcon = (iconType: string | null) => {
    if (iconType === 'FaWhatsapp') return <FaWhatsapp />;
    return null;
  };

  return (
    <a href={data.URL} onClick={(e) => handleClickOnButton(e)}>
      <button>
        {data.showIcon && handleRenderIcon(data.Icon)}
        {data.buttonText}
      </button>
    </a>
  );
};

export default OurServiceButton;
