import React from 'react';
import { Metadata } from 'next';
import CarBookingClient from './CarBookingClient';

export const metadata: Metadata = {
  title: 'Premium Car Rental Bhubaneswar | Luxury Cars & Tempo Travellers | Holiday Planner',
  description: 'Book premium car rentals in Bhubaneswar. From luxury wedding cars to tempo travellers for group tours, we offer the best rates and professional service in Odisha.',
  keywords: 'car rental Bhubaneswar, luxury car rental Odisha, tempo traveller booking, wedding car Bhubaneswar, Odisha taxi service, Bhubaneswar airport taxi',
};

export default function CarBookingPage() {
  return <CarBookingClient />;
}
