import logoImage from '/public/images/logo.svg';
import menuImage from '/public/images/menu.svg';
import catOneImage from '/public/images/cat_one.jpeg';

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
    image: 'baklol',
  },
];

export { LogoImage, MenuImage, ourServicesData, popularCitiesData };
