import React from 'react';
import { notFound } from 'next/navigation';
import { serviceDetailsData } from '@/utils';
import ServiceDetailsClient from './ServiceDetailsClient';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  let data;
  if (id === 'car-rental-and-booking') data = serviceDetailsData.carRental;
  else if (id === 'luxury-car-wedding-car') data = serviceDetailsData.luxuryCar;
  else if (id === 'tempo-traveler-booking') data = serviceDetailsData.tempoTraveler;

  if (!data) return { title: 'Service Not Found | Holiday Planner' };

  return {
    title: `${data.hTextOne} ${data.hTextTwo} | Holiday Planner`,
    description: `Professional ${data.hTextOne} ${data.hTextTwo} services in Bhubaneswar, Odisha. Book your ride today.`,
  };
}

export default async function OurServicesPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  let data;
  if (id === 'car-rental-and-booking') data = serviceDetailsData.carRental;
  else if (id === 'luxury-car-wedding-car') data = serviceDetailsData.luxuryCar;
  else if (id === 'tempo-traveler-booking') data = serviceDetailsData.tempoTraveler;
  else return notFound();

  return <ServiceDetailsClient data={data} />;
}
