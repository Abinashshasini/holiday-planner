import logoImage from '/public/images/logo.svg';
import menuImage from '/public/images/menu.svg';
import bbsrImage from '/public/images/bbsr.jpg';
import puriImage from '/public/images/puri.jpg';
import konarkImage from '/public/images/konark.jpg';
import cuttackImage from '/public/images/cuttack.jpg';
import balasoreImage from '/public/images/balasore.webp';
import rourkelaImage from '/public/images/rourkela.webp';
import catOneImage from '/public/images/cat_one.jpeg';
import brahmapurImage from '/public/images/brahmapur.jpg';
import rfqCardPhoto from '/public/images/rfqBg.jpeg';

/** Icons */
import { FaRegCalendarCheck } from 'react-icons/fa';
import { TbChecklist } from 'react-icons/tb';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdOutlinePriceChange } from 'react-icons/md';
import { CiBookmarkCheck } from 'react-icons/ci';
import { PiPersonArmsSpread } from 'react-icons/pi';
import { IoCarSportOutline } from 'react-icons/io5';
import { FaFreeCodeCamp } from 'react-icons/fa';

const LogoImage = logoImage;
const MenuImage = menuImage;
const RfqCardImage = rfqCardPhoto;

const ourServicesData = [
  {
    id: 1,
    image: catOneImage,
    title: 'Luxury Car Wedding Car',
    buttonText: 'View More',
  },
  {
    id: 2,
    image: catOneImage,
    title: 'Car Rental And Booking',
    buttonText: 'View More',
  },
  {
    id: 3,
    image: catOneImage,
    title: 'Tempo Traveler Booking',
    buttonText: 'View More',
  },
  {
    id: 4,
    image: catOneImage,
    title: 'Bus Travel Rental',
    buttonText: 'View More',
  },
  {
    id: 5,
    image: catOneImage,
    title: 'Package Service / Duty',
    buttonText: 'View More',
  },
  {
    id: 6,
    image: catOneImage,
    title: 'Resort Booking',
    buttonText: 'View More',
  },
];

const popularCitiesData = [
  {
    id: 1,
    image: bbsrImage,
    name: 'Bhubaneswar',
  },
  {
    id: 2,
    image: puriImage,
    name: 'Puri',
  },
  {
    id: 3,
    image: konarkImage,
    name: 'Konark',
  },
  {
    id: 4,
    image: cuttackImage,
    name: 'Cuttack',
  },
  {
    id: 5,
    image: balasoreImage,
    name: 'Balasore',
  },
  {
    id: 6,
    image: rourkelaImage,
    name: 'Rourkela',
  },
  {
    id: 7,
    image: brahmapurImage,
    name: 'Berhampur',
  },
];

const ourPackagesData = [
  {
    id: 1,
    image: puriImage,
    title: 'BBSR to Puri',
    timing: '2D / 1N',
    location: 'Puri Jagannath Temple',
    price: '11999',
  },
  {
    id: 2,
    image: bbsrImage,
    title: 'BBSR to Daringbadi',
    timing: '2D / 1N',
    location: 'Daringbadi',
    price: '9999',
  },
  {
    id: 2,
    image: konarkImage,
    title: 'BBSR to Konark',
    timing: '2D / 1N',
    location: 'Konark Sun temple',
    price: '7999',
  },
];

const whyChooseUsData = [
  {
    id: 1,
    text: 'Unmatched Expertise.',
    Icon: FaRegCalendarCheck,
  },
  {
    id: 2,
    text: 'Personalized Travel Plans.',
    Icon: TbChecklist,
  },
  {
    id: 3,
    text: '24/7 Customer Support.',
    Icon: RiCustomerService2Line,
  },
  {
    id: 4,
    text: 'Best Price Guarantee.',
    Icon: MdOutlinePriceChange,
  },
  {
    id: 5,
    text: 'Best Sevicess.',
    Icon: CiBookmarkCheck,
  },
  {
    id: 6,
    text: 'Sustainable Tourism.',
    Icon: PiPersonArmsSpread,
  },
  {
    id: 7,
    text: 'Best Vechiles.',
    Icon: IoCarSportOutline,
  },
  {
    id: 8,
    text: 'Hassle Free Bookings.',
    Icon: FaFreeCodeCamp,
  },
];

export {
  LogoImage,
  MenuImage,
  ourServicesData,
  popularCitiesData,
  RfqCardImage,
  ourPackagesData,
  whyChooseUsData,
};
