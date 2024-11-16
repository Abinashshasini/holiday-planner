import logoImage from '../images/logo.svg';
import menuImage from '../images/menu.svg';
import bbsrImage from '../images/bbsr.jpg';
import puriImage from '../images/puri.jpg';
import konarkImage from '../images/konark.jpg';
import cuttackImage from '../images/cuttack.jpg';
import balasoreImage from '../images/balasore.webp';
import bhitarkanikaImage from '../images/bhitarkanika.jpg';
import rourkelaImage from '../images/rourkela.webp';
import tribalImage from '../images/tribal.webp';
import ganjamImage from '../images/ganjam.jpg';
import birajaImage from '../images/biraja.jpg';
import deomaliImage from '../images/deomali.webp';
import koraputImage from '../images/koraput.jpg';
import catOneImage from '../images/typeOne.webp';
import catTwoImage from '../images/typeTwo.jpg';
import catThreeImage from '../images/typeThree.jpeg';
import catFourImage from '../images/typeFour.avif';
import catFiveImage from '../images/typeFive.jpeg';
import catSixImage from '../images/typeSix.webp';
import brahmapurImage from '../images/brahmapur.jpg';
import daringhbadiImage from '../images/daringhibadi.jpg';
import rfqCardPhoto from '../images/rfqBg.jpg';

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
    image: catTwoImage,
    title: 'Car Rental And Booking',
    buttonText: 'View More',
  },
  {
    id: 2,
    image: catOneImage,
    title: 'Luxury Car Wedding Car',
    buttonText: 'View More',
  },
  {
    id: 3,
    image: catThreeImage,
    title: 'Tempo Traveler Booking',
    buttonText: 'View More',
  },
  {
    id: 4,
    image: catFourImage,
    title: 'Bus Travel Rental',
    buttonText: 'View More',
  },
  {
    id: 5,
    image: catFiveImage,
    title: 'Package Service / Duty',
    buttonText: 'View More',
  },
  {
    id: 6,
    image: catSixImage,
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
    title: 'Golden triangle tour',
    location:
      'Shree jagannath dham Puri, Golden seabeach,Konark sun temple, Chandra bhaga sea beach',
  },
  {
    id: 2,
    image: bbsrImage,
    title: 'Bhubaneswar local site',
    location:
      'Shree Lingaraj temple, Rajarani temple, Ananta basudev temple, Dhauli Santi stupa, Nandan Kanan etc.',
  },
  {
    id: 3,
    image: daringhbadiImage,
    title: 'Daringi badi tour',
    location:
      'Daringibadi town, Hill view park, Hill top view point, Butterfly Garden, Daringbadi Nature Camp.',
  },
  {
    id: 4,
    image: bhitarkanikaImage,
    title: 'Bhitara Kanika tour',
    location:
      'Shiva Temple, Kanika King Palace, Silted Lotus Pond, Shooting Tower, Meadow Tower etc.',
  },
  {
    id: 5,
    image: tribalImage,
    title: 'Tribal tour',
    location:
      'Rayagada semi Saura Tribes, Chatikana Tribal Market, Unakadeli Market. Most primitive tribe in Odisha.',
  },
  {
    id: 5,
    image: ganjamImage,
    title: 'Ganjam tour',
    location:
      'Gopalpur Sea Beach, Bariapathara Waterfall, Dasapalla Elephant Reserve, Tara Tarini Temple etc.',
  },
  {
    id: 5,
    image: birajaImage,
    title: 'Buddhist tour',
    location:
      'Including Jajpur local side biraja temple, kusuma water park (odisha biggest water park ).',
  },
  {
    id: 5,
    image: deomaliImage,
    title: 'Deomali tour',
    location:
      'Deomali Hill, Kolab Dam, Duduma Waterfall, Bagra Waterfall, Shree Gupteswara Temple, Kokalaba.',
  },
  {
    id: 5,
    image: koraputImage,
    title: 'Koraput tour',
    location:
      'Rani Duduma Waterfalls, Jagannath Temple, Gupteshwar Caves, Tribal Museum, Deomali.',
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
