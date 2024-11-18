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
import innovaPhoto from '../images/inova-crysta.jpg';
import audiA4Photo from '../images/audi-a4.jpg';
import audiA6Photo from '../images/audi-a6.jpg';
import hyundaiElantraPhoto from '../images/hyundai-elantra.webp';
import hondaCityPhoto from '../images/honda-cty.jpeg';
import hyundaiVernaPhoto from '../images/hyundai-verna.jpg';

/** Car Images */

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
    buttonText: 'Know More',
    Icon: null,
    showIcon: false,
    message: '',
    URL: 'our-services/car-rental-and-booking',
    action: 'redirect',
  },
  {
    id: 2,
    image: catOneImage,
    title: 'Luxury Car Wedding Car',
    buttonText: 'Know More',
    Icon: null,
    showIcon: false,
    message: '',
    URL: 'our-services/luxury-car-wedding-car',
    action: 'redirect',
  },
  {
    id: 3,
    image: catThreeImage,
    title: 'Tempo Traveler Booking',
    buttonText: 'Know More',
    Icon: null,
    showIcon: false,
    message: '',
    URL: 'our-services/tempo-traveler-booking',
    action: 'redirect',
  },
  {
    id: 4,
    image: catFourImage,
    title: 'Bus Travel Rental',
    buttonText: 'Contact Us',
    Icon: 'FaWhatsapp',
    showIcon: true,
    message: `Hi, I got to know about Holiday Planner, I'm interested to know more about Bus Travel Rental bookings`,
    URL: 'our-services/bus-travel-rental',
    action: 'whatsapp',
  },
  {
    id: 5,
    image: catFiveImage,
    title: 'Package Service / Duty',
    buttonText: 'Contact Us',
    Icon: 'FaWhatsapp',
    showIcon: true,
    message: `Hi, I got to know about Holiday Planner, I'm interested to know more about Package Service / Duty bookings`,
    action: 'whatsapp',
    URL: 'our-services/package-service-duty',
  },
  {
    id: 6,
    image: catSixImage,
    title: 'Resort Booking',
    buttonText: 'Contact Us',
    Icon: 'FaWhatsapp',
    showIcon: true,
    message: `Hi, I got to know about Holiday Planner, I'm interested to know more about Resort Booking bookings`,
    action: 'whatsapp',
    URL: 'our-services/resort-booking',
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

const userRatingData = [
  {
    id: 1,
    name: 'Khirod Das',
    rating: '5',
    message:
      'Very good deals and package in odiaha ..... Thank you holiday planner team...',
    time: '3 weeks ago',
  },
  {
    id: 2,
    name: 'Asis kumar Pati',
    rating: '5',
    message: 'Very good service and with a great price...',
    time: '2 weeks ago',
  },
  {
    id: 3,
    name: 'Bunu Nayak',
    rating: '5',
    message: 'Such a nice travel agent in Bhubaneswar.',
    time: '5 weeks ago',
  },
  {
    id: 4,
    name: 'Subrat nandi',
    rating: '5',
    message: 'Best experience and reasonable price.',
    time: '3 weeks ago',
  },
  {
    id: 5,
    name: 'Aditya Nath',
    rating: '5',
    message: 'Best holiday planner',
    time: '2 weeks ago',
  },
];

const serviceDetailsData = {
  'car-rental-and-booking': {
    hTextOne: '',
    hTextTwo: '',
    type: 'table',
    tData: [
      {
        id: 1,
        carName: 'A/C Hyundai Xcent',
        data: [
          {
            info: '8 Hrs - 80 km',
            price: '₹1800',
          },
          {
            info: '12 Hrs - 120 km',
            price: '₹2200',
          },
          {
            info: 'Extra Kilometer',
            price: '₹11 / Km',
          },
          {
            info: 'Extra Hours',
            price: '₹100 / Hr',
          },
          {
            info: 'Night Charges',
            price: '₹250',
          },
        ],
      },
      {
        id: 2,
        carName: 'A/C Swift Dzire',
        data: [
          {
            info: '8 Hrs - 80 km',
            price: '₹1900',
          },
          {
            info: '12 Hrs - 120 km',
            price: '₹2300',
          },
          {
            info: 'Extra Kilometer',
            price: '₹12 / Km',
          },
          {
            info: 'Extra Hours',
            price: '₹150 / Hr',
          },
          {
            info: 'Night Charges',
            price: '₹250',
          },
        ],
      },
      {
        id: 3,
        carName: 'A/C Honda Amaze',
        data: [
          {
            info: '8 Hrs - 80 km',
            price: '₹2000',
          },
          {
            info: '12 Hrs - 120 km',
            price: '₹2500',
          },
          {
            info: 'Extra Kilometer',
            price: '₹13 / Km',
          },
          {
            info: 'Extra Hours',
            price: '₹150 / Hr',
          },
          {
            info: 'Night Charges',
            price: '₹250',
          },
        ],
      },
      {
        id: 4,
        carName: 'A/C Tyota Etios',
        data: [
          {
            info: '8 Hrs - 80 km',
            price: '₹2100',
          },
          {
            info: '12 Hrs - 120 km',
            price: '₹2600',
          },
          {
            info: 'Extra Kilometer',
            price: '₹12 / Km',
          },
          {
            info: 'Extra Hours',
            price: '₹150 / Hr',
          },
          {
            info: 'Night Charges',
            price: '₹250',
          },
        ],
      },
      {
        id: 5,
        carName: 'A/C Tyota Innova Crysta',
        data: [
          {
            info: '8 Hrs - 80 km',
            price: '₹3200',
          },
          {
            info: '12 Hrs - 120 km',
            price: '₹4100',
          },
          {
            info: 'Extra Kilometer',
            price: '₹18 / Km',
          },
          {
            info: 'Extra Hours',
            price: '₹200 / Hr',
          },
          {
            info: 'Night Charges',
            price: '₹400',
          },
        ],
      },
      {
        id: 5,
        carName: 'AUDI A6',
        data: [
          {
            info: '8 Hrs - 80 km',
            price: '₹11000',
          },
          {
            info: '12 Hrs - 120 km',
            price: '₹13000',
          },
          {
            info: 'Extra Kilometer',
            price: '₹90 / Km',
          },
          {
            info: 'Extra Hours',
            price: '₹300 / Hr',
          },
          {
            info: 'Night Charges',
            price: '₹500',
          },
        ],
      },
    ],
  },
  'luxury-car-wedding-car': {
    hTextOne: '',
    hTextTwo: '',
    type: 'images',
    imageData: [
      {
        id: 2,
        carName: 'Hyundai Elantra',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: hyundaiElantraPhoto,
      },
      {
        id: 3,
        carName: 'Audi A4',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: audiA4Photo,
      },
      {
        id: 4,
        carName: 'Audi A6',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: audiA6Photo,
      },
      {
        id: 5,
        carName: 'Honda City',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: hondaCityPhoto,
      },
      {
        id: 5,
        carName: 'Hyundai Verna',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: hyundaiVernaPhoto,
      },
      {
        id: 1,
        carName: 'Toyota Innova Crysta',
        capacity: 'Max Seating Capacity - 7 G + 1 D',
        image: innovaPhoto,
      },
    ],
  },
};

export {
  LogoImage,
  MenuImage,
  ourServicesData,
  popularCitiesData,
  RfqCardImage,
  ourPackagesData,
  whyChooseUsData,
  userRatingData,
  serviceDetailsData,
};
