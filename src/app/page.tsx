import Hero from '@/components/hero';
import OurServices from '@/components/our-services';
import RFQCard from '@/components/rfq-card';
import OurPackages from '@/components/our-packages';
import SearchBar from '@/components/search-bar';
import TrustRibbon from '@/components/trust-ribbon';
import GetInTouch from '@/components/get-in-touch';
import WhyChooseUs from '@/components/why-choose';
import Ratings from '@/components/ratings';
import FAQ from '@/components/faq';

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <TrustRibbon />
      <OurServices />
      <OurPackages />
      <WhyChooseUs />
      <RFQCard />
      <Ratings />
      <FAQ />
      <GetInTouch />
    </div>
  );
}

