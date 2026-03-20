/** Icons */
import {
  FaHotel,
  FaMapMarkedAlt,
  FaHandHoldingUsd,
  FaRegClock,
  FaCarSide,
  FaGem,
} from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiPersonArmsSpread } from "react-icons/pi";

const LogoImage =
  "https://res.cloudinary.com/dcudnuu04/image/upload/v1773411036/logo.5df95dcd_btfbqr.svg";
const DesktopBg =
  "https://res.cloudinary.com/dcudnuu04/image/upload/v1773506046/odisha-desktop_s0n0fu.webp";
const MobileBg =
  "https://res.cloudinary.com/dcudnuu04/image/upload/v1773506504/odisha-mobile_yhelr2.webp";

const ourServicesData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410044/typeTwo_lz0bwa.png",
    title: "Car Rental And Booking",
    buttonText: "Know More",
    Icon: null,
    showIcon: false,
    message: "",
    URL: "our-services/car-rental-and-booking",
    action: "redirect",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773502242/typeOne_tdgdcp.png",
    title: "Luxury Car Wedding Car",
    buttonText: "Know More",
    Icon: null,
    showIcon: false,
    message: "",
    URL: "our-services/luxury-car-wedding-car",
    action: "redirect",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773502271/typeThree_dgj3ja.png",
    title: "Tempo Traveler Booking",
    buttonText: "Know More",
    Icon: null,
    showIcon: false,
    message: "",
    URL: "our-services/tempo-traveler-booking",
    action: "redirect",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410039/typeFour_kdomeb.png",
    title: "Bus Travel Rental",
    buttonText: "Contact Us",
    Icon: "FaWhatsapp",
    showIcon: true,
    message: `Hi, I got to know about Holiday Planner, I'm interested to know more about Bus Travel Rental bookings`,
    URL: "our-services/bus-travel-rental",
    action: "whatsapp",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410036/typeFive_rk1alg.png",
    title: "Package Service / Duty",
    buttonText: "Contact Us",
    Icon: "FaWhatsapp",
    showIcon: true,
    message: `Hi, I got to know about Holiday Planner, I'm interested to know more about Package Service / Duty bookings`,
    action: "whatsapp",
    URL: "our-services/package-service-duty",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410037/typeSix_dpdlrq.png",
    title: "Resort Booking",
    buttonText: "Contact Us",
    Icon: "FaWhatsapp",
    showIcon: true,
    message: `Hi, I got to know about Holiday Planner, I'm interested to know more about Resort Booking bookings`,
    action: "whatsapp",
    URL: "our-services/resort-booking",
  },
];

const popularCitiesData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773502338/Gemini_Generated_Image_c98ondc98ondc98o_iw3atg.png",
    name: "Bhubaneswar",
    slug: "bhubaneswar",
    history:
      'Known as the "Temple City of India," Bhubaneswar has a unique architectural legacy spanning over 2,500 years. The city once boasted over 2,000 ancient stone temples, showcasing the pinnacle of Kalinga architecture.',
    bestTimeToVisit: "October to March (Winter)",
    localFood: ["Dahi Bara Aloo Dum", "Dalma", "Chhena Poda"],
    travelTips: [
      "Dress modestly while visiting temples.",
      'Try the temple "Prasad".',
    ],
    attractions: [
      {
        name: "Lingaraj Temple",
        desc: "11th-century architectural marvel.",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414461/dilip-poddar-KGhUnyOrrG0-unsplash_gg9m4a.jpg",
      },
      {
        name: "Udayagiri Caves",
        desc: "Ancient Jain rock-cut caves.",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773416147/cb0defbfac2c62b5a30851963461ee31_dk0oyy.jpg",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773502340/Gemini_Generated_Image_754xh8754xh8754x_1_mxlrmz.png",
    name: "Puri",
    slug: "puri",
    history:
      "Puri is one of the original Char Dham pilgrimage sites for Hindus. Its heartbeat is the 12th-century Jagannath Temple, a marvel of engineering and devotion.",
    bestTimeToVisit:
      "October to March for beach weather. June/July for Rath Yatra.",
    localFood: ["Khaja", "Mahaprasad", "Fried Seafood"],
    travelTips: [
      "Visit the beach early morning for sunrise.",
      "Be wary of unregulated priests.",
    ],
    attractions: [
      {
        name: "Jagannath Temple",
        desc: "Colossal 12th-century shrine.",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414461/shri-NcP5gng2uVg-unsplash_tchk6u.jpg",
      },
      {
        name: "Golden Beach",
        desc: "Pristine Blue Flag beach.",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410026/rfqBg_m9ug8n.jpg",
      },
    ],
  },
];

const whyChooseUsData = [
  {
    id: 1,
    text: "Stay & Transport Sorted",
    desc: "Handpicked hotels and sanitized fleet — comfort at every stop.",
    Icon: FaHotel,
  },
  {
    id: 2,
    text: "Spiritual Heartland",
    desc: "Jagannath Puri, Lingaraj, Konark — sacred journeys with VIP access.",
    Icon: FaMapMarkedAlt,
  },
  {
    id: 3,
    text: "Expert Local Guides",
    desc: "Government-certified guides who bring legends and history alive.",
    Icon: PiPersonArmsSpread,
  },
  {
    id: 4,
    text: "Best Price Guarantee",
    desc: "Premium experiences at honest prices — no hidden charges, ever.",
    Icon: FaHandHoldingUsd,
  },
  {
    id: 5,
    text: "Book in 2 Minutes",
    desc: "WhatsApp us, pick your dates, and you're done. That simple.",
    Icon: FaRegClock,
  },
  {
    id: 6,
    text: "Trained Pro Drivers",
    desc: "Courteous, punctual, and road-tested across every Odisha highway.",
    Icon: FaCarSide,
  },
  {
    id: 7,
    text: "VIP Temple Darshan",
    desc: "Skip the queues — special darshan arranged at major temples.",
    Icon: FaGem,
  },
  {
    id: 8,
    text: "24/7 Travel Concierge",
    desc: "Day or night, our team is one call away throughout your trip.",
    Icon: RiCustomerService2Line,
  },
];

const userRatingData = [
  {
    id: 1,
    name: "Priya Jena",
    rating: "5",
    message:
      "Absolutely phenomenal experience on the Golden Triangle Tour! The hotels were comfortable, the guide provided excellent historical context, and the pace suited our family — highly recommended.",
    time: "1 week ago",
    packageInfo: "Golden Triangle Tour",
  },
  {
    id: 2,
    name: "Rahul Patiyari",
    rating: "5",
    message:
      "Booked a luxury Innova Crysta. The vehicle was spotless and comfortable, the driver was professional and punctual, and the booking process was smooth — great value for a city transfer.",
    time: "2 weeks ago",
    packageInfo: "Luxury Car Rental",
  },
  {
    id: 3,
    name: "Anita Das",
    rating: "5",
    message:
      "Our family trip was flawless — children enjoyed the activities, accommodations were family-friendly, and the driver was attentive and patient. The itinerary balanced rest and sightseeing perfectly.",
    time: "3 weeks ago",
    packageInfo: "Odisha Family Tour Package",
  },
  {
    id: 4,
    name: "Suresh Padhi",
    rating: "4",
    message:
      "The Chilika Lake cruise was unforgettable — we spotted dolphins and abundant birdlife. The itinerary was well-paced with excellent local guides and comfortable transfers throughout.",
    time: "1 month ago",
    packageInfo: "Golden Triangel Tour Odisha",
  },
  {
    id: 5,
    name: "Madhabi Lata",
    rating: "5",
    message:
      "Satakosia eco-camp felt authentic and responsibly run. Staff were warm and helpful, meals were hearty, and the naturalist-led walks made the wildlife sightings much richer.",
    time: "2 months ago",
    packageInfo: "Satakosia Wildlife Tour",
  },
  {
    id: 6,
    name: "Arjun Singh",
    rating: "4",
    message:
      "The Gangasagar pilgrimage was spiritually moving; logistics were managed professionally though ferry timings were tight on the day we visited. Recommend confirming boat timings in advance.",
    time: "2 weeks ago",
    packageInfo: "Puri Gangasagar Tour Package",
  },

  {
    id: 7,
    name: "Abinash Shasini",
    rating: "4",
    message:
      "Gangasagar logistics were smooth though ferry timings were tight. but had a very good experience",
    time: "2 weeks ago",
    packageInfo: "Puri Gangasagar Tour Package",
  },
];

const serviceDetailsData = {
  carRental: {
    hTextOne: "Car Rental",
    hTextTwo: "Price List",
    type: "table",
    tData: [
      {
        id: 1,
        carName: "A/C Hyundai Xcent",
        data: [
          {
            info: "8 Hrs - 80 km",
            price: "₹1800",
          },
          {
            info: "12 Hrs - 120 km",
            price: "₹2200",
          },
          {
            info: "Extra Kilometer",
            price: "₹11 / Km",
          },
          {
            info: "Extra Hours",
            price: "₹100 / Hr",
          },
          {
            info: "Night Charges",
            price: "₹250",
          },
        ],
      },
      {
        id: 2,
        carName: "A/C Swift Dzire",
        data: [
          {
            info: "8 Hrs - 80 km",
            price: "₹1900",
          },
          {
            info: "12 Hrs - 120 km",
            price: "₹2300",
          },
          {
            info: "Extra Kilometer",
            price: "₹12 / Km",
          },
          {
            info: "Extra Hours",
            price: "₹150 / Hr",
          },
          {
            info: "Night Charges",
            price: "₹250",
          },
        ],
      },
      {
        id: 3,
        carName: "A/C Honda Amaze",
        data: [
          {
            info: "8 Hrs - 80 km",
            price: "₹2000",
          },
          {
            info: "12 Hrs - 120 km",
            price: "₹2500",
          },
          {
            info: "Extra Kilometer",
            price: "₹13 / Km",
          },
          {
            info: "Extra Hours",
            price: "₹150 / Hr",
          },
          {
            info: "Night Charges",
            price: "₹250",
          },
        ],
      },
      {
        id: 4,
        carName: "A/C Tyota Etios",
        data: [
          {
            info: "8 Hrs - 80 km",
            price: "₹2100",
          },
          {
            info: "12 Hrs - 120 km",
            price: "₹2600",
          },
          {
            info: "Extra Kilometer",
            price: "₹12 / Km",
          },
          {
            info: "Extra Hours",
            price: "₹150 / Hr",
          },
          {
            info: "Night Charges",
            price: "₹250",
          },
        ],
      },
      {
        id: 5,
        carName: "A/C Tyota Innova Crysta",
        data: [
          {
            info: "8 Hrs - 80 km",
            price: "₹3200",
          },
          {
            info: "12 Hrs - 120 km",
            price: "₹4100",
          },
          {
            info: "Extra Kilometer",
            price: "₹18 / Km",
          },
          {
            info: "Extra Hours",
            price: "₹200 / Hr",
          },
          {
            info: "Night Charges",
            price: "₹400",
          },
        ],
      },
      {
        id: 5,
        carName: "AUDI A6",
        data: [
          {
            info: "8 Hrs - 80 km",
            price: "₹11000",
          },
          {
            info: "12 Hrs - 120 km",
            price: "₹13000",
          },
          {
            info: "Extra Kilometer",
            price: "₹90 / Km",
          },
          {
            info: "Extra Hours",
            price: "₹300 / Hr",
          },
          {
            info: "Night Charges",
            price: "₹500",
          },
        ],
      },
    ],
  },
  luxuryCar: {
    hTextOne: "Luxury & Wedding",
    hTextTwo: "Car Fleet",
    type: "images",
    imageData: [
      {
        id: 2,
        carName: "Hyundai Elantra",
        capacity: "Max Seating Capacity - 4 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410023/hyundai-elantra_qf0zht.webp",
      },
      {
        id: 3,
        carName: "Audi A4",
        capacity: "Max Seating Capacity - 4 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410029/audi-a4_heh37a.jpg",
      },
      {
        id: 4,
        carName: "Audi A6",
        capacity: "Max Seating Capacity - 4 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410028/audi-a6_anxokx.jpg",
      },
      {
        id: 5,
        carName: "Honda City",
        capacity: "Max Seating Capacity - 4 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410022/honda-cty_kkq4na.jpg",
      },
      {
        id: 5,
        carName: "Hyundai Verna",
        capacity: "Max Seating Capacity - 4 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410024/hyundai-verna_xsp2wl.jpg",
      },
      {
        id: 1,
        carName: "Toyota Innova Crysta",
        capacity: "Max Seating Capacity - 7 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/inova-crysta_pi91nq.jpg",
      },
    ],
  },
  tempoTraveler: {
    hTextOne: "Tempo Traveller",
    hTextTwo: "Fleet",
    type: "images",
    imageData: [
      {
        id: 1,
        carName: "Force 12 Seater",
        capacity: "Max Seating Capacity - 12 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
      },
      {
        id: 1,
        carName: "Force 17 Seater",
        capacity: "Max Seating Capacity - 17 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
      },
      {
        id: 3,
        carName: "Tata Winger 26 Seater",
        capacity: "Max Seating Capacity - 26 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410028/tata-winger_xi5pni.jpg",
      },
      {
        id: 4,
        carName: "Force 30 Seater",
        capacity: "Max Seating Capacity - 30 G + 1 D",
        image:
          "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg",
      },
    ],
  },
};

/** Static fallback package list — kept as empty array since Sanity is now the
 * source of truth. The explicit type satisfies all (typeof ourPackagesData)[number]
 * references across the codebase. */
export const ourPackagesData: {
  id: number;
  image: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  category: string;
  highlights: string[];
  overview: string;
  included: string[];
  excluded: string[];
  itinerary: { day: number; title: string; description: string }[];
}[] = [];

export {
  LogoImage,
  DesktopBg,
  MobileBg,
  ourServicesData,
  popularCitiesData,
  whyChooseUsData,
  userRatingData,
  serviceDetailsData,
};
