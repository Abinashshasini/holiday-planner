/** Icons */
import {
  FaRegCalendarCheck,
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
const MenuImage =
  "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg";
const RfqCardImage =
  "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg";

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
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410044/typeTwo_lz0bwa.png",
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
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410044/typeTwo_lz0bwa.png",
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
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414462/1000_F_41903507_uGaLJngjaMPZqGutTLnypQitDW7O3eUn_zckv9r.jpg",
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
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414461/shri-NcP5gng2uVg-unsplash_tchk6u.jpg",
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

const ourPackagesData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414462/1000_F_41903507_uGaLJngjaMPZqGutTLnypQitDW7O3eUn_zckv9r.jpg",
    title: "Golden Triangel Tour Odisha",
    location: "Puri & Konark - Chilika Lake - Bhubaneswar",
    duration: "3 Nights / 4 Days",
    price: "₹11,999",
    category: "heritage",
    highlights: ["Jagannath Dham", "Konark Sun Temple", "Lingaraj Temple"],
    overview:
      "Experience the spiritual and architectural heart of Odisha with our signature Golden Triangle package.",
    included: [
      "Accommodation Options",
      "Private AC Vehicle",
      "Breakfast",
      "Temple Guide",
      "VIP Darshan Available",
    ],
    excluded: ["Entry Fees", "Lunches", "Personal Expenses"],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description:
          "Arrival at Bhubaneswar – Transfer to Puri (Beach Fun & Temple Visit)",
      },

      {
        day: 2,
        title: "Chilika",
        description:
          "Puri – Chilika Lake Excursion – Puri (Dolphins & Boating Fun)",
      },
      {
        day: 3,
        title: "Konark & Dhauli",
        description:
          "Puri – Konark – Dhauli – Bhubaneswar (Heritage & Group Explorations)",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Bhubaneswar Local Sightseeing – Departure",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414461/shri-NcP5gng2uVg-unsplash_tchk6u.jpg",
    title: "Puri Jagannath Ratha Yatra Tour",
    location: "Puri",
    duration: "3 Days / 2 Nights",
    price: "₹8,999",
    category: "heritage",
    highlights: ["Ratha Yatra Darshan", "Gundicha Temple", "Sea Beach"],
    overview:
      "Witness Puri at its most electrifying during the world-famous Ratha Yatra, when the deities travel in massive wooden chariots along the Badadanda to Gundicha Temple. This short festival break is designed for devotees who want a comfortable stay near the main action with local coordination and guided assistance.",
    included: [
      "Hotel stay near the temple zone",
      "Private local transfers",
      "Breakfast and dinner",
      "Festival assistance and crowd guidance",
      "Local temple guide support",
    ],
    excluded: [
      "Train or flight tickets",
      "Special darshan or donations",
      "Personal shopping and prasad",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Puri",
        description:
          "Arrive in Puri, check in, and spend the evening getting oriented around Badadanda and the outer temple area before the main festival rush.",
      },
      {
        day: 2,
        title: "Ratha Yatra Darshan",
        description:
          "Early start for the grand Ratha Yatra experience as Lord Jagannath, Balabhadra, and Subhadra are pulled toward Gundicha Temple amid devotional chants and processions.",
      },
      {
        day: 3,
        title: "Gundicha Visit and Departure",
        description:
          "Visit the Gundicha Temple area or sea beach depending on crowd flow, then transfer onward for your return journey with memories of Odisha's biggest festival.",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410023/ganjam_c724fj.jpg",
    title: "Spiritual Tour Odisha",
    location: "Puri · Jajpur · BBSR",
    duration: "5 Days / 4 Nights",
    price: "₹7,499",
    category: "heritage",
    highlights: ["Shakti Peeth Jajpur", "Puri Jagannath", "Lingaraj Temple"],
    overview:
      "A serene pilgrimage through Odisha's most revered shrines, blending Shakti worship, Shaiva heritage, and the timeless devotion of Jagannath culture. This route is curated for travelers who want a balanced spiritual circuit without rushing through the major temple towns.",
    included: [
      "Pilgrim-friendly hotel stays",
      "Private AC vehicle for the full circuit",
      "Breakfast",
      "Temple visit coordination",
      "Driver allowance and parking",
    ],
    excluded: [
      "Temple donations and puja charges",
      "Lunch and dinner",
      "Personal offerings and shopping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Bhubaneswar Temple Trail",
        description:
          "Arrive in Bhubaneswar and visit Lingaraj Temple, Mukteswar Temple, and Rajarani Temple for a classical introduction to Odisha's sacred architecture.",
      },
      {
        day: 2,
        title: "Jajpur Shakti Peeth",
        description:
          "Drive to Jajpur to seek blessings at Maa Biraja Temple and other important shrines in the old spiritual capital before returning for an overnight stay.",
      },
      {
        day: 3,
        title: "Puri Jagannath Darshan",
        description:
          "Proceed to Puri, check in, and experience Jagannath Temple rituals with time for evening prayers and a peaceful walk along the beach.",
      },
      {
        day: 4,
        title: "Konark and Alarnath",
        description:
          "Visit the Sun Temple at Konark and continue to Alarnath Temple or nearby sacred stops before returning to Puri or Bhubaneswar for the night.",
      },
      {
        day: 5,
        title: "Final Blessings and Departure",
        description:
          "Offer final prayers, enjoy a relaxed morning, and depart with a complete spiritual circuit covering Odisha's major devotional centers.",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414461/dilip-poddar-KGhUnyOrrG0-unsplash_gg9m4a.jpg",
    title: "Odisha Family Tour Package",
    location: "BBSR · Puri · Chilika",
    duration: "6 Days / 5 Nights",
    price: "₹12,999",
    category: "beach",
    highlights: ["Chilika Lake", "Nandankanan Zoo", "Puri Beach"],
    overview:
      "A relaxed family holiday that combines city attractions, beach time, wildlife, and a lake excursion without exhausting road hours. The itinerary is paced for parents, children, and seniors who want Odisha's highlights with enough downtime in between.",
    included: [
      "Family room accommodation",
      "Private AC cab or van",
      "Breakfast",
      "Pickup and drop assistance",
      "Sightseeing as per itinerary",
    ],
    excluded: [
      "Zoo and monument entry tickets",
      "Boating charges at Chilika",
      "Lunch, dinner, and personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Leisure",
        description:
          "Arrive in Bhubaneswar, check in, and enjoy a light evening outing to Ekamra Haat or a local market depending on arrival time.",
      },
      {
        day: 2,
        title: "Bhubaneswar Family Day",
        description:
          "Spend the day at Nandankanan Zoological Park and nearby city attractions with a comfortable pace suitable for children and elders.",
      },
      {
        day: 3,
        title: "Transfer to Puri",
        description:
          "Drive to Puri via Pipili, visit Jagannath Temple from outside or with darshan arrangements, and unwind at Puri Beach in the evening.",
      },
      {
        day: 4,
        title: "Konark and Chandrabhaga",
        description:
          "Explore Konark Sun Temple, Chandrabhaga Beach, and local craft stalls before returning to Puri for a relaxed night.",
      },
      {
        day: 5,
        title: "Chilika Excursion",
        description:
          "Take a family-friendly day trip to Satapada at Chilika Lake for boating, dolphin spotting, and scenic lake views before driving back to Puri.",
      },
      {
        day: 6,
        title: "Return Departure",
        description:
          "Travel back to Bhubaneswar for your onward train or flight after a smooth and well-paced family holiday.",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410028/balasore_z9ut4g.webp",
    title: "Puri Gangasagar Tour Package",
    location: "Puri · Kolkata · Gangasagar",
    duration: "7 Days / 6 Nights",
    price: "₹15,499",
    category: "heritage",
    highlights: ["Puri Jagannath", "Kolkata City", "Gangasagar Sangam"],
    overview:
      "A longer eastern pilgrimage connecting the blessings of Jagannath in Puri with the sacred confluence at Gangasagar near Kapil Muni Temple. This journey is curated around practical travel time so devotees can cover both major tirthas comfortably.",
    included: [
      "Hotel accommodation throughout the journey",
      "Road or rail transfers as per itinerary",
      "Breakfast",
      "Local assistance at Gangasagar sector",
      "Temple town sightseeing support",
    ],
    excluded: [
      "Special temple rituals or panda charges",
      "Ferry or local queue-management surcharges",
      "Lunch, dinner, and personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Puri",
        description:
          "Arrive in Puri, settle into your hotel, and spend the evening near the Jagannath Temple area and sea beach.",
      },
      {
        day: 2,
        title: "Jagannath and Konark Circuit",
        description:
          "Attend darshan and continue for a half-day visit covering Konark and Chandrabhaga before returning to Puri.",
      },
      {
        day: 3,
        title: "Transfer to Kolkata",
        description:
          "Depart for Kolkata by train or road, check in on arrival, and enjoy a calm evening in the city.",
      },
      {
        day: 4,
        title: "Kolkata Pilgrim Trail",
        description:
          "Visit important city shrines such as Kalighat and Dakshineswar with time for the riverfront and local devotional markets.",
      },
      {
        day: 5,
        title: "Reach Gangasagar Sector",
        description:
          "Travel toward Sagar Island transit points, complete the ferry and road connections, and prepare for the next day's holy visit.",
      },
      {
        day: 6,
        title: "Gangasagar Darshan",
        description:
          "Take the sacred dip at the confluence, visit Kapil Muni Temple, and return to Kolkata after completing the rituals.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Check out after breakfast and proceed for your onward journey with both major pilgrimage circuits completed.",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414462/8c7a55735310a79f94101265e9464578_qxh7wc.jpg",
    title: "Odisha Adventure Tour",
    location: "Koraput · Deomali · Duduma",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    category: "nature",
    highlights: ["Trekking Deomali", "Waterfall Abseiling", "Camping"],
    overview:
      "An active South Odisha escape built around highland landscapes, sunrise viewpoints, forest roads, and one of the state's most dramatic waterfalls. Ideal for young groups and adventure lovers who want a compact trip with real outdoor energy.",
    included: [
      "Accommodation or camp stay",
      "Private transport for the route",
      "Breakfast and dinner",
      "Local trek support",
      "Basic camping arrangements where applicable",
    ],
    excluded: [
      "Adventure insurance",
      "Lunches and snacks on trail",
      "Camera, activity, or entry fees",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Koraput",
        description:
          "Reach Koraput or Jeypore, check in, and acclimatize with a relaxed evening amid the highland weather and local market atmosphere.",
      },
      {
        day: 2,
        title: "Deomali Sunrise Trek",
        description:
          "Start early for Deomali, Odisha's highest peak, enjoy trekking and panoramic ridge views, and spend time soaking in the cool hill landscape.",
      },
      {
        day: 3,
        title: "Duduma Adventure Day",
        description:
          "Visit Duduma Waterfall and the surrounding valley for photography, light adventure activities, and scenic stops through the Eastern Ghats.",
      },
      {
        day: 4,
        title: "Nature Stop and Departure",
        description:
          "Enjoy a final local nature halt such as Kolab reservoir viewpoints before beginning your return journey.",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414461/ee2f36c5a5f5f064ea66a85993a5ab99_skdonc.jpg",
    title: "Satakosia Wildlife Tour",
    location: "Angul · Satakosia Gorge",
    duration: "3 Days / 2 Nights",
    price: "₹6,999",
    category: "nature",
    highlights: ["Mahanadi Gorge", "Crocodile Sighting", "Tent Stays"],
    overview:
      "Experience one of Odisha's most scenic river-and-forest landscapes with eco-camp stays, boat rides through the gorge, and chances to spot crocodiles and birdlife. The itinerary is compact but gives enough time to enjoy Satakosia without rushing.",
    included: [
      "Eco camp or tented accommodation",
      "Breakfast and dinner",
      "Boat ride in the gorge",
      "Forest entry and basic permit assistance",
      "Private transfers from pickup point",
    ],
    excluded: [
      "Additional safari activities",
      "Lunch and personal purchases",
      "Guide gratuities and camera charges",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description:
          "Arrive at the Satakosia eco-camp zone, check in, and enjoy the first views of the Mahanadi gorge with a sunset by the riverbank.",
      },
      {
        day: 2,
        title: "Boat Safari and Nature Trail",
        description:
          "Take a boat ride through the gorge, visit crocodile conservation areas if operational, and enjoy a guided nature walk or birding session.",
      },
      {
        day: 3,
        title: "Morning Wilderness and Departure",
        description:
          "Spend a slow morning in the forest landscape, then check out and depart after breakfast.",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/tribal_ffh2k7.webp",
    title: "Tribal Tour",
    location: "Rayagada · Koraput · Desia",
    duration: "5 Days / 4 Nights",
    price: "₹11,499",
    category: "tribal",
    highlights: ["Bondas & Gadabas", "Weekly Markets", "Handicrafts"],
    overview:
      "A culturally focused circuit through the tribal belts of southern Odisha, combining weekly haats, village visits, and artisan traditions with respectful local guidance. This tour is designed for travelers who want meaningful exposure to community life, landscapes, and regional craft traditions.",
    included: [
      "Local cultural guide",
      "Hotel or heritage stays",
      "Private AC transport",
      "Breakfast",
      "Village visit coordination where permitted",
    ],
    excluded: [
      "Handicraft shopping and personal purchases",
      "Photography fees where applicable",
      "Lunch, dinner, and donations",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Rayagada",
        description:
          "Reach Rayagada, check in, and receive a briefing on the tribal regions, market days, and cultural etiquette for the journey ahead.",
      },
      {
        day: 2,
        title: "Weekly Market Experience",
        description:
          "Visit a regional weekly market to observe the lively exchange of produce, jewelry, textiles, and handmade tribal goods.",
      },
      {
        day: 3,
        title: "Koraput Tribal Belt",
        description:
          "Drive toward Koraput for guided visits through selected villages and landscapes associated with Gadaba and other tribal communities.",
      },
      {
        day: 4,
        title: "Crafts and Desia Region",
        description:
          "Explore artisan settlements, local food traditions, and the Desia cultural belt with time for handicrafts and regional interactions.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "After breakfast, transfer onward with a richer understanding of Odisha's tribal heritage and highland culture.",
      },
    ],
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414461/dilip-poddar-KGhUnyOrrG0-unsplash_gg9m4a.jpg",
    title: "Bhubaneswar City Tour",
    location: "Bhubaneswar Landmarks",
    duration: "1 Day",
    price: "₹1,499",
    category: "heritage",
    highlights: ["Ekamra Kshetra", "State Museum", "Pathani Samanta"],
    overview:
      "A full-day introduction to Bhubaneswar covering its sacred old town, signature Kalinga temples, museums, and select modern city landmarks. It works well for first-time visitors, pilgrims, and transit travelers with one free day in the capital.",
    included: [
      "Private cab for 8 hours",
      "Local sightseeing assistance",
      "Water bottles",
      "Pickup and drop within city limits",
    ],
    excluded: [
      "Monument and museum entry tickets",
      "Meals and shopping",
      "Extended vehicle usage beyond package timing",
    ],
    itinerary: [
      {
        day: 1,
        title: "BBSR Full Day",
        description:
          "Cover Lingaraj Temple area, Mukteswar and Rajarani temples, Khandagiri-Udayagiri caves, State Museum or science attractions, and finish with local shopping or Ekamra Haat.",
      },
    ],
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773414461/ee2f36c5a5f5f064ea66a85993a5ab99_skdonc.jpg",
    title: "Golden Triangle with Daringbadi",
    location: "BBSR · Puri · Daringbadi",
    duration: "6 Days / 5 Nights",
    price: "₹13,999",
    category: "nature",
    highlights: ["Pine Forests", "Jagannath Temple", "Sun Temple"],
    overview:
      "This extended route pairs Odisha's classic Golden Triangle with the cool pine-clad heights of Daringbadi, giving travelers both heritage landmarks and a refreshing hill-station finish. It is ideal for couples, families, and mixed-interest groups who want temples, beaches, and mountain air in one trip.",
    included: [
      "Hotel accommodation for 5 nights",
      "Private AC transport for the complete tour",
      "Breakfast",
      "Driver allowance, tolls, and parking",
      "Sightseeing as per itinerary",
    ],
    excluded: [
      "Entry tickets and boating charges",
      "Lunch, dinner, and extra snacks",
      "Personal expenses and optional activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bhubaneswar",
        description:
          "Arrive in Bhubaneswar and explore key temple and heritage sites before resting for the start of your Odisha circuit.",
      },
      {
        day: 2,
        title: "Puri Transfer",
        description:
          "Travel to Puri via Pipili, enjoy Jagannath Temple area visits, and spend the evening at the beach.",
      },
      {
        day: 3,
        title: "Konark and Coastal Circuit",
        description:
          "Visit Konark Sun Temple, Chandrabhaga Beach, and nearby coastal attractions before returning to Puri.",
      },
      {
        day: 4,
        title: "Drive to Daringbadi",
        description:
          "Begin the scenic drive into Kandhamal's hills and reach Daringbadi, Odisha's well-known hill station, by evening.",
      },
      {
        day: 5,
        title: "Daringbadi Sightseeing",
        description:
          "Explore pine forest viewpoints, coffee and spice surroundings, waterfalls, and hill-station landscapes across Daringbadi.",
      },
      {
        day: 6,
        title: "Return and Departure",
        description:
          "Return toward Bhubaneswar or Berhampur for your onward departure after completing a balanced heritage-and-nature holiday.",
      },
    ],
  },
];

const whyChooseUsData = [
  {
    id: 1,
    text: "Transport and accommodation arranged",
    Icon: FaHotel,
  },
  {
    id: 2,
    text: "Land of peace & spirituality",
    Icon: FaMapMarkedAlt,
  },
  {
    id: 3,
    text: "Local knowledge guides arranged",
    Icon: PiPersonArmsSpread,
  },
  {
    id: 4,
    text: "Value for money",
    Icon: FaHandHoldingUsd,
  },
  {
    id: 5,
    text: "Easy to plan and book",
    Icon: FaRegClock,
  },
  {
    id: 6,
    text: "Professional drivers arranged",
    Icon: FaCarSide,
  },
  {
    id: 7,
    text: "Temple with vip Darshan available",
    Icon: FaGem,
  },
  {
    id: 8,
    text: "24/7 Premium Support",
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
    message: "Gangasagar logistics were smooth though ferry timings were tight. but had a very good experience",
    time: "2 weeks ago",
    packageInfo: "Puri Gangasagar Tour Package",
  },
];

const serviceDetailsData = {
  carRental: {
    hTextOne: 'Car Rental',
    hTextTwo: 'Price List',
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
    hTextOne: 'Luxury & Wedding',
    hTextTwo: 'Car Fleet',
    type: 'images',
    imageData: [
      {
        id: 2,
        carName: 'Hyundai Elantra',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410023/hyundai-elantra_qf0zht.webp',
      },
      {
        id: 3,
        carName: 'Audi A4',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410029/audi-a4_heh37a.jpg',
      },
      {
        id: 4,
        carName: 'Audi A6',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410028/audi-a6_anxokx.jpg',
      },
      {
        id: 5,
        carName: 'Honda City',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410022/honda-cty_kkq4na.jpg',
      },
      {
        id: 5,
        carName: 'Hyundai Verna',
        capacity: 'Max Seating Capacity - 4 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410024/hyundai-verna_xsp2wl.jpg',
      },
      {
        id: 1,
        carName: 'Toyota Innova Crysta',
        capacity: 'Max Seating Capacity - 7 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/inova-crysta_pi91nq.jpg',
      },
    ],
  },
  tempoTraveler: {
    hTextOne: 'Tempo Traveller',
    hTextTwo: 'Fleet',
    type: 'images',
    imageData: [
      {
        id: 1,
        carName: 'Force 12 Seater',
        capacity: 'Max Seating Capacity - 12 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg',
      },
      {
        id: 1,
        carName: 'Force 17 Seater',
        capacity: 'Max Seating Capacity - 17 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg',
      },
      {
        id: 3,
        carName: 'Tata Winger 26 Seater',
        capacity: 'Max Seating Capacity - 26 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410028/tata-winger_xi5pni.jpg',
      },
      {
        id: 4,
        carName: 'Force 30 Seater',
        capacity: 'Max Seating Capacity - 30 G + 1 D',
        image: 'https://res.cloudinary.com/dcudnuu04/image/upload/v1773410027/17-force_lfiihk.jpg',
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
