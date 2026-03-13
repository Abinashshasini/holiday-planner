import { Metadata } from 'next';
import DestinationsClient from './DestinationsClient';

export const metadata: Metadata = {
  title: 'Top Destinations in Odisha — Temples, Beaches & Wildlife',
  description:
    'Explore the best places to visit in Odisha: Bhubaneswar temples, Puri beaches, Konark Sun Temple, Chilika Lake, Bhitarkanika mangrove forests, Daringbadi hill station & more. Plan your trip with Holiday Planner.',
  keywords: [
    'Odisha destinations',
    'best places to visit in Odisha',
    'Bhubaneswar travel',
    'Puri tourism',
    'Konark Sun Temple visit',
    'Chilika Lake trip',
    'Odisha heritage sites',
    'Odisha beaches',
    'Bhitarkanika wildlife',
    'Daringbadi hill station',
  ],
  alternates: { canonical: '/destinations' },
  openGraph: {
    title: 'Top Destinations in Odisha — Temples, Beaches & Wildlife',
    description:
      'Discover the must-visit destinations in Odisha from ancient temples to pristine beaches. Interactive travel guide by Holiday Planner.',
    url: 'https://www.holidayplanner.in/destinations',
    type: 'website',
  },
};

export default function DestinationsPage() {
  return <DestinationsClient />;
}
