"use client";
import dynamic from "next/dynamic";
import type { SanityPackage } from "@/sanity/queries";

const SearchBar = dynamic(() => import("@/components/search-bar"), {
  ssr: false,
});
const OurServices = dynamic(() => import("@/components/our-services"), {
  ssr: false,
});
const RFQCard = dynamic(() => import("@/components/rfq-card"), { ssr: false });
const OurPackages = dynamic(() => import("@/components/our-packages"), {
  ssr: false,
});
const GetInTouch = dynamic(() => import("@/components/get-in-touch"), {
  ssr: false,
});
const WhyChooseUs = dynamic(() => import("@/components/why-choose"), {
  ssr: false,
});
const Ratings = dynamic(() => import("@/components/ratings"), { ssr: false });
const FAQ = dynamic(() => import("@/components/faq"), { ssr: false });

export default function BelowFoldSections({
  packages,
}: {
  packages?: SanityPackage[];
}) {
  return (
    <>
      <SearchBar />
      <OurServices />
      <OurPackages packages={packages} />
      <RFQCard />
      <WhyChooseUs />
      <Ratings />
      <FAQ />
      <GetInTouch />
    </>
  );
}
