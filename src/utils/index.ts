

/** Icons */
import { 
  FaRegCalendarCheck, 
  FaHotel, 
  FaMapMarkedAlt, 
  FaHandHoldingUsd, 
  FaRegClock, 
  FaCarSide, 
  FaGem 
} from 'react-icons/fa';
import { TbChecklist } from 'react-icons/tb';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdOutlinePriceChange } from 'react-icons/md';
import { CiBookmarkCheck } from 'ci-icons/ci'; // Fixed import if possible, or use standard
import { PiPersonArmsSpread } from 'react-icons/pi';
import { IoCarSportOutline } from 'react-icons/io5';
import { FaFreeCodeCamp } from 'react-icons/fa';

const LogoImage = "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg";
const MenuImage = "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg";
const RfqCardImage = "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg";

const ourServicesData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
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
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
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
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
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
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
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
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
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
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
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
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    name: 'Bhubaneswar',
    slug: 'bhubaneswar',
    history:
      'Known as the "Temple City of India," Bhubaneswar has a unique architectural legacy spanning over 2,500 years. The city once boasted over 2,000 ancient stone temples, showcasing the pinnacle of Kalinga architecture.',
    bestTimeToVisit: 'October to March (Winter)',
    localFood: ['Dahi Bara Aloo Dum', 'Dalma', 'Chhena Poda'],
    travelTips: ['Dress modestly while visiting temples.', 'Try the temple "Prasad".'],
    attractions: [
      { name: 'Lingaraj Temple', desc: '11th-century architectural marvel.', image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg" },
      { name: 'Udayagiri Caves', desc: 'Ancient Jain rock-cut caves.', image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg" },
    ],
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    name: 'Puri',
    slug: 'puri',
    history:
      'Puri is one of the original Char Dham pilgrimage sites for Hindus. Its heartbeat is the 12th-century Jagannath Temple, a marvel of engineering and devotion.',
    bestTimeToVisit: 'October to March for beach weather. June/July for Rath Yatra.',
    localFood: ['Khaja', 'Mahaprasad', 'Fried Seafood'],
    travelTips: ['Visit the beach early morning for sunrise.', 'Be wary of unregulated priests.'],
    attractions: [
      { name: 'Jagannath Temple', desc: 'Colossal 12th-century shrine.', image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg" },
      { name: 'Golden Beach', desc: 'Pristine Blue Flag beach.', image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg" },
    ],
  },
];

const ourPackagesData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Golden Triangle Tour Odisha',
    location: 'Bhubaneswar · Puri · Konark',
    duration: '4 Days / 3 Nights',
    price: '₹5,999',
    category: 'heritage',
    highlights: ['Jagannath Dham', 'Konark Sun Temple', 'Lingaraj Temple'],
    overview: 'Experience the spiritual and architectural heart of Odisha with our signature Golden Triangle package.',
    included: ['Accommodation', 'Private AC Vehicle', 'Breakfast', 'Temple Guide'],
    excluded: ['Entry Fees', 'Lunches', 'Personal Expenses'],
    itinerary: [{ day: 1, title: 'Arrival', description: 'Arrive in BBSR and transfer to Puri.' }],
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Puri Jagannath Ratha Yatra Tour',
    location: 'Puri',
    duration: '3 Days / 2 Nights',
    price: '₹8,999',
    category: 'heritage',
    highlights: ['Ratha Yatra Darshan', 'Gundicha Temple', 'Sea Beach'],
    overview: 'Witness the grandest chariot festival in the world with exclusive arrangements and guide support.',
    included: ['Hotel near Temple', 'VIP Darshan Assist', 'All Meals'],
    excluded: ['Flight Tickets', 'Extra activities'],
    itinerary: [{ day: 1, title: 'Ratha Yatra Day', description: 'Witness the chariots pull.' }],
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Spiritual Tour Odisha',
    location: 'Puri · Jajpur · BBSR',
    duration: '5 Days / 4 Nights',
    price: '₹7,499',
    category: 'heritage',
    highlights: ['Shakti Peeth Jajpur', 'Puri Jagannath', 'Lingaraj Temple'],
    overview: 'A deep dive into the spiritual soul of Odisha, visiting major Shakti Peeths and holy shrines.',
    included: ['Pilgrim Hotels', 'AC Transport', 'Purohit Assist'],
    excluded: ['Donations', 'Prasad charges'],
    itinerary: [{ day: 1, title: 'Temple Visit', description: 'Visit Lingaraj Temple.' }],
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Odisha Family Tour Package',
    location: 'BBSR · Puri · Chilika',
    duration: '6 Days / 5 Nights',
    price: '₹12,999',
    category: 'beach',
    highlights: ['Chilika Lake', 'Nandankanan Zoo', 'Puri Beach'],
    overview: 'The perfect family getaway covering fun, nature, and relaxation for all ages.',
    included: ['Spacious Family Rooms', 'Kid-friendly meals', 'Private Van'],
    excluded: ['Zoo entry', 'Boating charges'],
    itinerary: [{ day: 1, title: 'Zoo Visit', description: 'Day at Nandankanan.' }],
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Puri Gangasagar Tour Package',
    location: 'Puri · Kolkata · Gangasagar',
    duration: '7 Days / 6 Nights',
    price: '₹15,499',
    category: 'heritage',
    highlights: ['Puri Jagannath', 'Kolkata City', 'Gangasagar Sangam'],
    overview: 'A combined pilgrimage covering the holy Jagannath temple and the sacred dip at Gangasagar.',
    included: ['Train/Road Transfers', 'Accommodation', 'Guided Dip'],
    excluded: ['Panda charges', 'Ferry tickets'],
    itinerary: [{ day: 1, title: 'Journey', description: 'Transfer to Kolkata.' }],
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Odisha Adventure Tour',
    location: 'Koraput · Deomali · Duduma',
    duration: '4 Days / 3 Nights',
    price: '₹9,999',
    category: 'nature',
    highlights: ['Trekking Deomali', 'Waterfall Abseiling', 'Camping'],
    overview: 'Thrill-seeking journey to the highest peaks and wildest falls of the Eastern Ghats.',
    included: ['Camping Gear', 'Adventure Guide', 'All Meals'],
    excluded: ['Insurance', 'Camera fees'],
    itinerary: [{ day: 1, title: 'Trek', description: 'Trek to Deomali.' }],
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Satakosia Wildlife Tour',
    location: 'Angul · Satakosia Gorge',
    duration: '3 Days / 2 Nights',
    price: '₹6,999',
    category: 'nature',
    highlights: ['Mahanadi Gorge', 'Crocodile Sighting', 'Tent Stays'],
    overview: 'Explore the majestic gorge of Mahanadi and the dense wilderness of Satakosia Tiger Reserve.',
    included: ['Tent Accommodation', 'Boat Safari', 'Forest Permits'],
    excluded: ['Wildlife safari extra', 'Personal tips'],
    itinerary: [{ day: 1, title: 'Arrival', description: 'Arrive at Satakosia Sands Resort.' }],
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Tribal Tour',
    location: 'Rayagada · Koraput · Desia',
    duration: '5 Days / 4 Nights',
    price: '₹11,499',
    category: 'tribal',
    highlights: ['Bondas & Gadabas', 'Weekly Markets', 'Handicrafts'],
    overview: 'Meet the most primitive tribes of India and witness their unchanged ways of life.',
    included: ['Tribal Guide', 'Rural Stays', 'AC Transport'],
    excluded: ['Market shopping', 'Photography fees'],
    itinerary: [{ day: 1, title: 'Rayagada', description: 'Visit local villages.' }],
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Bhubaneswar City Tour',
    location: 'Bhubaneswar Landmarks',
    duration: '1 Day',
    price: '₹1,499',
    category: 'heritage',
    highlights: ['Ekamra Kshetra', 'State Museum', 'Pathani Samanta'],
    overview: 'A complete guided tour of the capital city covering history, science, and art.',
    included: ['Day Car', 'Local Guide', 'Water & Snacks'],
    excluded: ['Lunches', 'Entry fees'],
    itinerary: [{ day: 1, title: 'BBSR Full Day', description: 'Full day city tour.' }],
  },
  {
    id: 10,
    image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
    title: 'Golden Triangle with Daringbadi',
    location: 'BBSR · Puri · Daringbadi',
    duration: '6 Days / 5 Nights',
    price: '₹13,999',
    category: 'nature',
    highlights: ['Pine Forests', 'Jagannath Temple', 'Sun Temple'],
    overview: 'The ultimate Odisha experience combining the spiritual triangle with the cool hill retreat.',
    included: ['All Accommodations', 'Private AC Transport', 'Breakfast'],
    excluded: ['Entry tickets', 'Extra snacks'],
    itinerary: [{ day: 1, title: 'Start', description: 'Puri visit.' }],
  },
];

const whyChooseUsData = [
  {
    id: 1,
    text: 'Transport and accommodation arranged',
    Icon: FaHotel,
  },
  {
    id: 2,
    text: 'Land of peace & spirituality',
    Icon: FaMapMarkedAlt,
  },
  {
    id: 3,
    text: 'Local knowledge guides arranged',
    Icon: PiPersonArmsSpread,
  },
  {
    id: 4,
    text: 'Value for money',
    Icon: FaHandHoldingUsd,
  },
  {
    id: 5,
    text: 'Easy to plan and book',
    Icon: FaRegClock,
  },
  {
    id: 6,
    text: 'Professional drivers arranged',
    Icon: FaCarSide,
  },
  {
    id: 7,
    text: 'Temple with vip Darshan available',
    Icon: FaGem,
  },
  {
    id: 8,
    text: '24/7 Premium Support',
    Icon: RiCustomerService2Line,
  },
];

const userRatingData = [
  {
    id: 1,
    name: 'Priya jena',
    rating: '5',
    message: 'Absolutely phenomenal experience on the Golden Triangle Tour!',
    time: '1 week ago',
    packageInfo: 'Golden Triangle Tour',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    rating: '5',
    message: 'Booked a luxury Innova Crysta. The driver was incredibly polite.',
    time: '2 weeks ago',
    packageInfo: 'Luxury Car Rental',
  },
];

const serviceDetailsData = {
  carRental: {
    hTextOne: 'Car',
    hTextTwo: 'Rental',
    type: 'table',
    tData: [
      {
        id: 1,
        carName: 'A/C Hyundai Xcent',
        data: [
          { info: '8 Hrs - 80 km', price: '₹1800' },
          { info: '12 Hrs - 120 km', price: '₹2200' },
        ],
      },
    ],
  },
  luxuryCar: {
    hTextOne: 'Luxury',
    hTextTwo: 'Cars',
    type: 'images',
    imageData: [
      {
        id: 2,
        carName: 'Hyundai Elantra',
        capacity: '4 G + 1 D',
        image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
      },
    ],
  },
  tempoTraveler: {
    hTextOne: 'Tempo',
    hTextTwo: 'Traveler',
    type: 'images',
    imageData: [
      {
        id: 1,
        carName: 'Force 17 Seater',
        capacity: '17 G + 1 D',
        image: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
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
