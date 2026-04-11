import { MetadataRoute } from "next";
import { popularCitiesData } from "@/utils";
import { getAllPackages } from "@/sanity/queries";
import { getBlogSlugs } from "@/utils/blogPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.holidayplanner.in";

  // Static routes with priority tiers
  const staticRoutes = [
    { path: "", priority: 1.0, changeFreq: "daily" as const },
    { path: "/packages", priority: 0.9, changeFreq: "weekly" as const },
    {
      path: "/packages/puri-tour-packages",
      priority: 0.85,
      changeFreq: "weekly" as const,
    },
    {
      path: "/packages/family-tour-packages",
      priority: 0.85,
      changeFreq: "weekly" as const,
    },
    {
      path: "/packages/couple-tour-packages",
      priority: 0.85,
      changeFreq: "weekly" as const,
    },
    {
      path: "/packages/weekend-getaways-odisha",
      priority: 0.85,
      changeFreq: "weekly" as const,
    },
    { path: "/destinations", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/car-booking", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/about", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));

  // Service detail routes
  const serviceRoutes = [
    "car-rental-and-booking",
    "luxury-car-wedding-car",
    "tempo-traveler-booking",
  ].map((slug) => ({
    url: `${baseUrl}/our-services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic destination routes
  const destinationRoutes = popularCitiesData.map((city) => ({
    url: `${baseUrl}/destinations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic package routes — sourced from Sanity CMS
  const sanityPackages = await getAllPackages().catch(() => []);
  const packageRoutes = sanityPackages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug.current}`,
    lastModified: pkg._updatedAt ? new Date(pkg._updatedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Static blog post routes
  const blogRoutes = getBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...destinationRoutes,
    ...packageRoutes,
    ...blogRoutes,
  ];
}
