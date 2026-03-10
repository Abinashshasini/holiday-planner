import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { popularCitiesData } from '@/utils';
import DestinationDetailsClient from './DestinationDetailsClient';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city;
  const cityInfo = popularCitiesData.find((c) => c.slug === citySlug);

  if (!cityInfo) {
    return {
      title: 'Destination Not Found | Holiday Planner',
    };
  }

  return {
    title: `${cityInfo.name} | Places to Explore & Rich History | Odisha Tourism`,
    description: cityInfo.history ? cityInfo.history.slice(0, 160) : `Discover the rich history and top attractions of ${cityInfo.name} with Holiday Planner.`,
    openGraph: {
      title: `${cityInfo.name} Travel Guide | Holiday Planner`,
      description: cityInfo.history ? cityInfo.history.slice(0, 160) : `Explore ${cityInfo.name}`,
      images: [cityInfo.image.src],
    },
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city;
  const cityInfo = popularCitiesData.find((c) => c.slug === citySlug);

  if (!cityInfo) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1>Destination Not Found</h1>
        <p>Attempted slug: <strong>{citySlug}</strong></p>
        <Link href="/">Go Home</Link>
      </div>
    );
  }

  return <DestinationDetailsClient cityInfo={cityInfo} />;
}



