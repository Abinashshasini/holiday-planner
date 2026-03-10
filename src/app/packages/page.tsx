import React from 'react';
import { Metadata } from 'next';
import PackagesClient from './PackagesClient';

export const metadata: Metadata = {
  title: 'Best Odisha Tour Packages | Budget & Luxury Travel Guides | Holiday Planner',
  description: 'Choose from our curated collection of Odisha tour packages. From spiritual journeys in Puri to nature retreats in Daringibadi, find your perfect escape with Holiday Planner.',
  keywords: 'Odisha tour packages, Puri tour, Konark Sun Temple package, Daringibadi tour, Bhubaneswar city tour, Odisha tribal tours',
};

export default function PackagesPage() {
  return <PackagesClient />;
}
