import React from "react";
import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — The Story Behind Odisha's Most Trusted Travel Partner",
  description:
    "Since 2016, Holiday Planner has been crafting unforgettable Odisha experiences for 500+ travelers. Government-recognized guides, a premium fleet, and a 4.8★ Google rating — discover why families, adventurers, and pilgrims trust us with their most cherished journeys.",
  keywords: [
    "About Holiday Planner",
    "Odisha travel agency",
    "Bhubaneswar tour operator",
    "authentic Odisha tours",
    "trusted travel partner Odisha",
    "best travel agency Bhubaneswar",
    "Odisha tourism experts",
    "premium car rental Odisha",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title:
      "About Holiday Planner — The Story Behind Odisha's #1 Travel Partner",
    description:
      "Since 2016, we've turned Odisha vacations into stories worth retelling. 500+ happy travelers, 4.8★ rated, government-recognized guides.",
    url: "https://www.holidayplanner.in/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
