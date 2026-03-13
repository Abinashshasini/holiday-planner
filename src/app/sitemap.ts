import { MetadataRoute } from 'next';
import { popularCitiesData, ourPackagesData } from '@/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.holidayplanner.in';

  // Static routes with priority tiers
  const staticRoutes = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/packages', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/destinations', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/car-booking', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFreq: 'monthly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));

  // Service detail routes
  const serviceRoutes = [
    'car-rental-and-booking',
    'luxury-car-wedding-car',
    'tempo-traveler-booking',
  ].map((slug) => ({
    url: `${baseUrl}/our-services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic destination routes
  const destinationRoutes = popularCitiesData.map((city) => ({
    url: `${baseUrl}/destinations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic package routes
  const packageRoutes = ourPackagesData.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...destinationRoutes, ...packageRoutes];
}
