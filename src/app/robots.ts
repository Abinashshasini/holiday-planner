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
    sitemap: "https://www.holidayplanner.in/sitemap.xml",
    host: "https://www.holidayplanner.in",
  };
}
