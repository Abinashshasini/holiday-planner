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
import tataWingerPhoto from '../images/tata-winger.jpg';
import forcePhoto from '../images/17-force.jpg';

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
    title: 'Golden Triangle Tour',
    location: 'Puri · Konark · Golden Beach · Chandrabhaga',
    duration: '3 Days / 2 Nights',
    price: '₹4,999',
    category: 'beach',
    highlights: ['Jagannath Dham', 'Konark Sun Temple', 'Golden Sea Beach'],
    overview: 'Experience the mystical charm of Odisha. This journey takes you through the sacred temples of Puri, the architectural marvel of Konark, and the serene beaches of the Bay of Bengal.',
    included: ['Premium Accommodation', 'Breakfast & Dinner', 'Private AC Vehicle', 'Local Guide'],
    excluded: ['Flight/Train Tickets', 'Monument Entry Fees', 'Personal Expenses'],
    itinerary: [
      { day: 1, title: 'Arrival in Puri & Blessings', description: 'Arrive in Puri, check-in to your premium seaside hotel. Visit the world-famous Jagannath Temple in the afternoon to seek blessings. Evening at leisure on the Golden Beach enjoying local delicacies.' },
      { day: 2, title: 'Konark Sun Temple & Marine Drive', description: 'After breakfast, take the scenic marine drive to Konark. Explore the 13th-century architectural marvel, the Sun Temple (Black Pagoda). Visit the pristine Chandrabhaga beach and return to Puri.' },
      { day: 3, title: 'Chilika Lake & Departure', description: 'Morning boat ride in the breathtaking Chilika Lake to spot Irrawaddy dolphins. Later, transfer to Bhubaneswar airport/railway station for your onward journey.' }
    ]
  },
  {
    id: 2,
    image: bbsrImage,
    title: 'Bhubaneswar Heritage Tour',
    location: 'Lingaraj Temple · Rajarani · Dhauli',
    duration: '2 Days / 1 Night',
    price: '₹2,999',
    category: 'heritage',
    highlights: ['Lingaraj Temple', 'Dhauli Shanti Stupa', 'Udayagiri Caves'],
    overview: 'Dive deep into the rich history of the Temple City. Explore ancient rock-cut caves, beautifully sculpted temples, and serene Buddhist peace pagodas.',
    included: ['Accommodation', 'Breakfast', 'AC Transport'],
    excluded: ['Entry Fees', 'Lunches', 'Flights'],
    itinerary: [
      { day: 1, title: 'Temple Trail & Caves', description: 'Start your day with the magnificent Lingaraj and Rajarani temples. Post lunch, explore the ancient Jain rock-cut caves of Udayagiri and Khandagiri.' },
      { day: 2, title: 'Peace Pagoda & Departure', description: 'Visit the Dhauli Shanti Stupa, the site of the historic Kalinga War. Enjoy panoramic views of the Daya river before departing.' }
    ]
  },
  {
    id: 3,
    image: daringhbadiImage,
    title: 'Daringibadi Hill Retreat',
    location: 'Daringibadi · Hill View Park',
    duration: '3 Days / 2 Nights',
    price: '₹5,499',
    category: 'nature',
    highlights: ['Kashmir of Odisha', 'Pine Forest', 'Coffee Plantations'],
    overview: 'Escape to the Kashmir of Odisha. Daringibadi offers pine forests, majestic waterfalls, sprawling coffee gardens, and year-round cool weather.',
    included: ['Hill Resort Stay', 'All Meals', 'Sightseeing'],
    excluded: ['Personal Expenses', 'Travel to Daringibadi'],
    itinerary: [
      { day: 1, title: 'Arrival & Pine Forests', description: 'Arrive and check in. Stroll through the lush pine forests and enjoy the cool, misty evening at the hill view park.' },
      { day: 2, title: 'Waterfalls & Coffee Gardens', description: 'Visit the Midubanda Waterfall, lovers point, and explore the sprawling organic coffee and black pepper plantations.' },
      { day: 3, title: 'Silent Valley & Return', description: 'Explore the Silent Valley and Emu bird sanctuary before starting your scenic journey back home.' }
    ]
  },
  {
    id: 4,
    image: bhitarkanikaImage,
    title: 'Bhitarkanika Wildlife Tour',
    location: 'Bhitarkanika · Kanika King Palace',
    duration: '2 Days / 1 Night',
    price: '₹3,999',
    category: 'nature',
    highlights: ['Mangrove Forest', 'Saltwater Crocodiles', 'Bird Sanctuary'],
    overview: 'Navigate through winding mangrove creeks, spot giant saltwater crocodiles, and witness exotic bird species in this mini-Amazon of India.',
    included: ['Eco-resort Stay', 'Boat Safari', 'All Meals', 'Forest Permits'],
    excluded: ['Camera Fees', 'Extra Rides'],
    itinerary: [
      { day: 1, title: 'Mangrove Safari', description: 'Check into the eco-resort. Head out for a thrilling boat safari through dense mangroves to spot massive saltwater crocodiles.' },
      { day: 2, title: 'Bird Watching & Trek', description: 'Early morning nature trek to the bird sanctuary tower. Visit the hunting tower of ancient kings before checking out.' }
    ]
  },
  {
    id: 5,
    image: tribalImage,
    title: 'Tribal Heritage Experience',
    location: 'Rayagada · Tribal Markets · Saura Tribes',
    duration: '4 Days / 3 Nights',
    price: '₹7,999',
    category: 'tribal',
    highlights: ['Saura Tribe Village', 'Chatikana Market', 'Tribal Crafts'],
    overview: 'An immersive cultural expedition into the heartland of Odisha. Witness ancient tribal customs, vibrant weekly markets, and unique indigenous crafts.',
    included: ['Hotel Stay', 'Dedicated Guide', 'All Meals', 'Transport'],
    excluded: ['Photography Fees', 'Tips'],
    itinerary: [
      { day: 1, title: 'Arrival in Rayagada', description: 'Arrive in Rayagada. Rest and prepare for the tribal expedition with a briefing from your specialized guide.' },
      { day: 2, title: 'Dongria Kondh Weekly Market', description: 'Visit the vivid Chatikana weekly market to see the Dongria Kondh tribes trading local produce.' },
      { day: 3, title: 'Saura Tribes & Art', description: 'Visit traditional Saura villages. Learn about their unique Idital paintings and witness their daily way of life.' },
      { day: 4, title: 'Departure', description: 'Collect tribal souvenirs and depart with unforgettable cultural memories.' }
    ]
  },
  {
    id: 6,
    image: ganjamImage,
    title: 'Ganjam Coastal Tour',
    location: 'Gopalpur Sea Beach · Tara Tarini',
    duration: '3 Days / 2 Nights',
    price: '₹4,499',
    category: 'beach',
    highlights: ['Gopalpur Beach', 'Tara Tarini Temple', 'Chilika Lake'],
    overview: 'A perfect blend of serene beaches, powerful spiritual sites, and nature. Gopalpur offers some of the quietest and cleanest beaches on the eastern coast.',
    included: ['Beach Resort Stay', 'Breakfast', 'AC Transport'],
    excluded: ['Water Sports', 'Lunches'],
    itinerary: [
      { day: 1, title: 'Gopalpur Beach', description: 'Arrive in Gopalpur-on-sea. Spend the day relaxing by the pristine, quiet beach and enjoy fresh coastal seafood.' },
      { day: 2, title: 'Tara Tarini Hill Shrine', description: 'Take a scenic drive and climb the 999 steps (or take the ropeway) to the ancient Tara Tarini hill shrine.' },
      { day: 3, title: 'Rambha Bay & Departure', description: 'Visit Rambha, the tranquil southern tip of Chilika Lake, before departing to your next destination.' }
    ]
  },
  {
    id: 7,
    image: birajaImage,
    title: 'Buddhist Circuit Tour',
    location: 'Jajpur · Ratnagiri · Lalitgiri',
    duration: '2 Days / 1 Night',
    price: '₹2,799',
    category: 'heritage',
    highlights: ['Diamond Triangle', 'Ancient Monasteries', 'Biraja Temple'],
    overview: 'Unearth the forgotten Buddhist legacy of ancient Kalinga. Visit perfectly preserved stupas, colossal Buddha statues, and historic university ruins.',
    included: ['Accommodation', 'Breakfast', 'AC Vehicle', 'Guide'],
    excluded: ['Museum Entry', 'Personal Expenses'],
    itinerary: [
      { day: 1, title: 'Ratnagiri & Udayagiri', description: 'Explore the extensive ruins of the Ratnagiri and Udayagiri Buddhist complexes. Marvel at the intricately carved doorways and stupas.' },
      { day: 2, title: 'Lalitgiri Relics & Departure', description: 'Visit Lalitgiri to see the ancient casket believed to contain relics of Buddha. Pray at the Biraja Shakti Peeth before departing.' }
    ]
  },
  {
    id: 8,
    image: deomaliImage,
    title: 'Deomali Peak Adventure',
    location: 'Deomali Hill · Duduma Waterfall',
    duration: '4 Days / 3 Nights',
    price: '₹8,499',
    category: 'nature',
    highlights: ['Highest Peak in Odisha', 'Duduma Waterfall', 'Camping'],
    overview: 'A thrilling escapade to the highest peak in the Eastern Ghats. Experience breathtaking vistas, majestic 175m waterfalls, and pristine natural beauty.',
    included: ['Resort/Camp Stay', 'All Meals', 'Trek Guide', 'Transport'],
    excluded: ['Trekking Gear', 'Personal Expenses'],
    itinerary: [
      { day: 1, title: 'Arrival at Koraput', description: 'Arrive in Koraput. Enjoy the mild climate and check into your stay. Briefing for the Deomali trek.' },
      { day: 2, title: 'Summiting Deomali', description: 'Early morning drive to Deomali base. Trek to the peak to catch a mesmerizing sunrise above the clouds.' },
      { day: 3, title: 'Duduma Waterfall', description: 'Drive to the spectacular Duduma waterfall on the Machkund river. Enjoy a picnic lunch in the wilderness.' },
      { day: 4, title: 'Departure', description: 'Visit the local Sabara Srikhetra Jagannath temple before your departure.' }
    ]
  },
  {
    id: 9,
    image: koraputImage,
    title: 'Koraput Tribal & Nature',
    location: 'Koraput · Gupteshwar · Tribal Museum',
    duration: '3 Days / 2 Nights',
    price: '₹5,999',
    category: 'tribal',
    highlights: ['Gupteshwar Caves', 'Tribal Museum', 'Coffee Plantations'],
    overview: 'Discover the mystical Gupteshwar limestone caves surrounded by dense Sal forests, intermingled with the rich heritage of Koraput tribes.',
    included: ['Accommodation', 'Breakfast & Dinner', 'Transport'],
    excluded: ['Cave Entry Fees', 'Lunches'],
    itinerary: [
      { day: 1, title: 'Tribal Museum & Coffee', description: 'Arrive in Koraput. Visit the excellent Tribal Museum to understand local anthropology, followed by a tour of local coffee estates.' },
      { day: 2, title: 'Gupteshwar Caves', description: 'Drive through thick forests to reach the Gupteshwar Shiva shrine inside a massive limestone cave system.' },
      { day: 3, title: 'Kolab Dam & Return', description: 'Visit the scenic Kolab Dam and botanical gardens. Enjoy a peaceful boat ride before heading back.' }
    ]
  }
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
  carRental: {
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
  luxuryCar: {
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
  tempoTraveler: {
    hTextOne: '',
    hTextTwo: '',
    type: 'images',
    imageData: [
      {
        id: 1,
        carName: 'Force 12 Seater',
        capacity: 'Max Seating Capacity - 12 G + 1 D',
        image: forcePhoto,
      },
      {
        id: 1,
        carName: 'Force 17 Seater',
        capacity: 'Max Seating Capacity - 17 G + 1 D',
        image: forcePhoto,
      },
      {
        id: 3,
        carName: 'Tata Winger 26 Seater',
        capacity: 'Max Seating Capacity - 26 G + 1 D',
        image: tataWingerPhoto,
      },
      {
        id: 4,
        carName: 'Force 30 Seater',
        capacity: 'Max Seating Capacity - 30 G + 1 D',
        image: forcePhoto,
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
