import React from "react";
import { Metadata } from "next";
import PackagesClient from "./PackagesClient";
import { getAllPackages } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Best Odisha Tour Packages 2026 — Budget & Luxury Trips",
  description:
    "Choose from 10+ curated Odisha tour packages — Puri–Konark, Golden Triangle, Tribal Odisha, Chilika Lake, Daringbadi hills & more. Budget-friendly to luxury options starting ₹4,999. Book with Holiday Planner today.",
  keywords: [
    "Odisha tour packages",
    "Puri tour package",
    "Konark Sun Temple package",
    "Daringbadi tour",
    "Bhubaneswar city tour",
    "Odisha tribal tours",
    "Chilika Lake tour",
    "budget Odisha trip",
    "luxury Odisha tour",
    "Golden Triangle Odisha",
  ],
  alternates: { canonical: "/packages" },
  openGraph: {
    title:
      "Best Odisha Tour Packages 2026 — Budget & Luxury Trips | Holiday Planner",
    description:
      "Curated Odisha tour packages with flexible itineraries from ₹4,999. Explore temples, beaches, wildlife & tribal culture.",
    url: "https://www.holidayplanner.in/packages",
    type: "website",
  },
};

export default async function PackagesPage() {
  const packages = await getAllPackages().catch(() => []);
  return <PackagesClient packages={packages} />;
}
