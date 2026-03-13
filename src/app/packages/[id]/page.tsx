import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ourPackagesData } from '@/utils';
import PackageDetailsClient from './PackageDetailsClient';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const pkg = ourPackagesData.find((p) => p.id === id);

  if (!pkg) {
    return {
      title: 'Package Not Found | Holiday Planner',
    };
  }

  return {
    title: `${pkg.title} | ${pkg.duration} Tour in Odisha`,
    description: pkg.overview || `Explore ${pkg.title} in ${pkg.location}. Book this ${pkg.duration} package with Holiday Planner, Odisha's most trusted travel agency.`,
    openGraph: {
      title: `${pkg.title} | Holiday Planner`,
      description: pkg.overview,
      images: [pkg.image],
    },
  };
}

export default async function PackageDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const pkg = ourPackagesData.find((p) => p.id === id);

  if (!pkg) {
    return notFound();
  }

  return <PackageDetailsClient pkg={pkg} />;
}
