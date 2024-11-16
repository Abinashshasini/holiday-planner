import Header from '@/components/header';
import styles from './page.module.css';
import OurServices from '@/components/our-services';
import PopularCities from '@/components/popular-cities';
import RFQCard from '@/components/rfq-card';
import OurPackages from '@/components/our-packages';
import GetInTouch from '@/components/get-in-touch';
import WhyChooseUs from '@/components/why-choose';
import Ratings from '@/components/ratings';
import WhatsAppButton from '@/components/whatsapp';
import CallButton from '@/components/call-button';

export default function Home() {
  return (
    <div className={styles.container__main}>
      <Header />
      <PopularCities />
      <OurServices />
      <OurPackages />
      <GetInTouch />
      <WhyChooseUs />
      <RFQCard />
      <Ratings />
      <WhatsAppButton />
      <CallButton />
    </div>
  );
}
