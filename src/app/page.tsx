import styles from './page.module.css';
import OurServices from '@/components/our-services';
import PopularCities from '@/components/popular-cities';
import RFQCard from '@/components/rfq-card';
import OurPackages from '@/components/our-packages';
import GetInTouch from '@/components/get-in-touch';
import WhyChooseUs from '@/components/why-choose';
import Ratings from '@/components/ratings';
import ContactDetails from '@/components/contact-details';

export default function Home() {
  return (
    <div className={styles.container__main}>
      <PopularCities />
      <OurServices />
      <OurPackages />
      <GetInTouch />
      <WhyChooseUs />
      <RFQCard />
      <Ratings />
      <ContactDetails />
    </div>
  );
}
