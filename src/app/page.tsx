import Header from '@/components/header';
import styles from './page.module.css';
import OurServices from '@/components/our-services';
import PopularCities from '@/components/popular-cities';
import RFQCard from '@/components/rfq-card';
import OurPackages from '@/components/our-packages';
import GetInTouch from '@/components/get-in-touch';

export default function Home() {
  return (
    <div className={styles.container__main}>
      <Header />
      <PopularCities />
      <OurServices />
      <OurPackages />
      <GetInTouch />
      <RFQCard />
    </div>
  );
}
