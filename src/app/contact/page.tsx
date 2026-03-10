import React from 'react';
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Holiday Planner | Plan Your Dream Trip to Odisha',
  description: 'Reach out to Holiday Planner for customized tour packages, car rentals, and travel assistance in Odisha. Our team is available 24/7 to help you plan your perfect journey.',
  keywords: 'Contact Holiday Planner, Odisha travel contact, Bhubaneswar travel agency phone, book Odisha tour, travel inquiry Odisha',
};

export default function ContactPage() {
  return <ContactClient />;
}
