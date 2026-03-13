import React from 'react';
import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us — Odisha\'s Most Trusted Travel Agency',
  description:
    'Holiday Planner is Bhubaneswar\'s leading travel agency with 500+ happy customers, specializing in authentic Odisha tour packages, car rentals, and luxury vehicles. Discover our mission, team, and why travelers trust us.',
  keywords: [
    'About Holiday Planner',
    'Odisha travel agency',
    'Bhubaneswar tour operator',
    'authentic Odisha tours',
    'trusted travel partner Odisha',
    'best travel agency Bhubaneswar',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Holiday Planner — Odisha\'s Most Trusted Travel Agency',
    description:
      'Learn about Holiday Planner\'s mission, values, and why we are Bhubaneswar\'s top-rated travel partner.',
    url: 'https://www.holidayplanner.in/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
