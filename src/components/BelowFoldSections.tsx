import type { SanityPackage } from "@/sanity/queries";

import SearchBar from "@/components/search-bar";
import OurServices from "@/components/our-services";
import SignatureExperiences from "@/components/signature-experiences";
import RFQCard from "@/components/rfq-card";
import OurPackages from "@/components/our-packages";
import GetInTouch from "@/components/get-in-touch";
import WhyChooseUs from "@/components/why-choose";
import Ratings from "@/components/ratings";
import FAQ from "@/components/faq";

export default function BelowFoldSections({
  packages,
}: {
  packages?: SanityPackage[];
}) {
  return (
    <>
      <SearchBar />
      <OurServices />
      <SignatureExperiences />
      <OurPackages packages={packages} />
      <RFQCard />
      <WhyChooseUs />
      <Ratings />
      <FAQ />
      <GetInTouch />
    </>
  );
}
