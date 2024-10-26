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

const LogoImage = logoImage;
const MenuImage = menuImage;

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

export { LogoImage, MenuImage, ourServicesData, popularCitiesData };
