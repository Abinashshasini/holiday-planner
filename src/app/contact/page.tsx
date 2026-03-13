import React from 'react';
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch for Odisha Tours & Car Bookings',
  description:
    'Reach out to Holiday Planner for customized Odisha tour packages, car rentals, and travel assistance. Available 24/7 via WhatsApp, phone, or email. Plan your perfect journey today.',
  keywords: [
    'Contact Holiday Planner',
    'Odisha travel contact',
    'Bhubaneswar travel agency phone',
    'book Odisha tour',
    'travel inquiry Odisha',
    'holiday planner WhatsApp',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Holiday Planner — Plan Your Dream Odisha Trip',
    description:
      'Call, WhatsApp, or email Holiday Planner for personalized tour packages and car rentals across Odisha.',
    url: 'https://www.holidayplanner.in/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
