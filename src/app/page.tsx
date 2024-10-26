import Header from '@/components/header';
import styles from './page.module.css';
import OurServices from '@/components/our-services';

export default function Home() {
  return (
    <div className={styles.container__main}>
      <Header />
      <OurServices />
    </div>
  );
}
