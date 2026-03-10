'use client'
import React from 'react';
import { Metadata } from 'next';
import DestinationsClient from './DestinationsClient';

// export const metadata: Metadata = {
//   title: 'Top Destinations in Odisha | Explore History & Nature | Holiday Planner',
//   description: 'Discover the best places to visit in Odisha. From Temple City Bhubaneswar to the beaches of Puri and Konark, plan your perfect trip with our interactive destination guide.',
//   keywords: 'Odisha destinations, Bhubaneswar travel, Puri tourism, Konark Sun Temple, Odisha heritage sites, Odisha beaches',
// };

export default function DestinationsPage() {
  return (
    <DestinationsClient />
  );
}
