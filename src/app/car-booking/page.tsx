import { Metadata } from 'next';
import CarBookingClient from './CarBookingClient';

export const metadata: Metadata = {
  title: 'Car Rental Bhubaneswar — Luxury Cars, Tempo Travellers & Taxis',
  description:
    'Book premium car rentals in Bhubaneswar starting ₹1,499/day. Luxury wedding cars, Innova, Ertiga, tempo travellers for group tours, airport pickups & outstation trips across Odisha. Professional drivers included.',
  keywords: [
    'car rental Bhubaneswar',
    'luxury car rental Odisha',
    'tempo traveller booking Bhubaneswar',
    'wedding car Bhubaneswar',
    'Odisha taxi service',
    'Bhubaneswar airport taxi',
    'Innova rental Odisha',
    'Ertiga rental Bhubaneswar',
    'outstation cab Bhubaneswar',
    'Bhubaneswar to Puri cab',
  ],
  alternates: { canonical: '/car-booking' },
  openGraph: {
    title: 'Car Rental Bhubaneswar — Luxury Cars & Tempo Travellers | Holiday Planner',
    description:
      'Premium car rental service in Bhubaneswar. Luxury cars, tempo travellers, airport pickups & outstation trips at best rates.',
    url: 'https://www.holidayplanner.in/car-booking',
    type: 'website',
  },
};

export default function CarBookingPage() {
  return <CarBookingClient />;
}
