import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/leads-dashboard/", "/studio/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/leads-dashboard/", "/studio/"],
      },
    ],
    sitemap: "https://www.holidayplanners.co/sitemap.xml",
    host: "https://www.holidayplanners.co",
  };
}
