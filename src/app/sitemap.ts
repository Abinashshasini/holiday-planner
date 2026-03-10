import { MetadataRoute } from 'next';
import { popularCitiesData, ourPackagesData } from '@/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.holidayplanner.in'; // Replace with actual domain when ready

  // Base routes
  const routes = [
    '',
    '/packages',
    '/destinations',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic destination routes
  const destinationRoutes = popularCitiesData.map((city) => ({
    url: `${baseUrl}/destinations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic package routes
  const packageRoutes = ourPackagesData.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...destinationRoutes, ...packageRoutes];
}
