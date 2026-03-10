import React from 'react';
import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Holiday Planner | Your Trusted Travel Partner in Odisha',
  description: 'Holiday Planner is Bhubaneswar\'s leading travel agency, specializing in authentic Odisha experiences. Learn about our mission, values, and why we are the best choice for your next journey.',
  keywords: 'About Holiday Planner, Odisha travel agency, Bhubaneswar tour operator, authentic Odisha tours, trusted travel partner Odisha',
};

export default function AboutPage() {
  return <AboutClient />;
}
