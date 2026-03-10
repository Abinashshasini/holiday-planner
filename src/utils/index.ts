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
import catOneImage from '../images/typeOne.png';
import catTwoImage from '../images/typeTwo.png';
import catThreeImage from '../images/typeThree.png';
import catFourImage from '../images/typeFour.png';
import catFiveImage from '../images/typeFive.png';
import catSixImage from '../images/typeSix.png';
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
    slug: 'bhubaneswar',
    history: 'Known as the "Temple City of India," Bhubaneswar has a unique architectural legacy spanning over 2,500 years. The city once boasted over 2,000 ancient stone temples, showcasing the pinnacle of Kalinga architecture. Today, it stands as a bustling capital city that perfectly bridges ancient heritage with modern urban planning. It is also a significant Buddhist and Jain center, with historical sites like Dhauli and Udayagiri testifying to its diverse spiritual roots.',
    bestTimeToVisit: 'October to March (Winter) - Ideal for sightseeing and attending the Mukteswar Dance Festival in January.',
    localFood: ['Dahi Bara Aloo Dum', 'Dalma', 'Chhena Poda', 'Pakhala Bhata', 'Gupchup'],
    travelTips: [
      'Dress modestly while visiting temples (preferably cotton).',
      'Hire a local guide at the caves to understand the ancient inscriptions.',
      'Try the temple "Prasad" at the Ananta Vasudev Temple.',
      'Use the local "Mo Bus" service for affordable and clean city travel.'
    ],
    attractions: [
      { name: 'Lingaraj Temple', desc: 'An 11th-century architectural marvel dedicated to Lord Shiva, featuring a soaring 54-meter tower and intricate stone carvings.', image: bbsrImage },
      { name: 'Udayagiri & Khandagiri Caves', desc: 'Ancient Jain rock-cut caves from the 1st century BCE filled with ornate carvings and historic inscriptions.', image: bbsrImage },
      { name: 'Dhauli Shanti Stupa', desc: 'The historic site where Emperor Ashoka converted to Buddhism. Features a stunning white peace pagoda with river views.', image: bbsrImage },
      { name: 'Nandankanan Zoological Park', desc: 'A premier zoo and botanical garden, world-famous for its white tiger population and open-air safari.', image: bbsrImage },
      { name: 'Mukteshwar Temple', desc: 'Often called the "Gem of Odia Architecture," known for its exquisite arched gateway and detailed carvings.', image: bbsrImage },
      { name: 'Rajarani Temple', desc: 'Famous for its unique "love temple" moniker and the beautiful sculptures of Dikpalas on its walls.', image: bbsrImage }
    ]
  },
  {
    id: 2,
    image: puriImage,
    name: 'Puri',
    slug: 'puri',
    history: 'Puri is one of the original Char Dham pilgrimage sites for Hindus and has been a center of spiritual awakening for centuries. Its heartbeat is the 12th-century Jagannath Temple, a marvel of engineering and devotion. Beyond the temple walls, Puri’s golden sands and the rhythmic waves of the Bay of Bengal offer a serene retreat. The city is also famous for the annual Rath Yatra (Chariot Festival), which draws millions of devotees from around the globe, making it a place where divinity meets humanity.',
    bestTimeToVisit: 'October to March for pleasant beach weather. June/July for the world-famous Rath Yatra festival.',
    localFood: ['Khaja', 'Mahaprasad (Abadha)', 'Chhena Poda', 'Puri Upma', 'Fried Seafood'],
    travelTips: [
      'Non-Hindus are not allowed inside the Jagannath Temple but can view it from the Raghunandan Library roof.',
      'Always negotiate with rickshaw pullers before starting your journey.',
      'Visit the beach early morning to witness the stunning sunrise.',
      'Be wary of unregulated "Pandas" (priests) around the temple area.'
    ],
    attractions: [
      { name: 'Jagannath Temple', desc: 'A colossal 12th-century shrine and one of the holiest places in India, known for its unique wooden deities and massive kitchen.', image: puriImage },
      { name: 'Golden Beach', desc: 'A pristine, Blue Flag-certified beach known for its cleanliness, safe swimming zones, and vibrant evening sand art.', image: puriImage },
      { name: 'Chilika Lake', desc: 'Asia’s largest brackish water lagoon, located nearby. Famous for migratory birds, Irrawaddy dolphins, and serene boat rides.', image: puriImage },
      { name: 'Gundicha Temple', desc: 'Known as the "Garden House of Jagannath," where the deities reside during the Rath Yatra.', image: puriImage },
      { name: 'Narendra Tank', desc: 'One of the largest holy tanks in Odisha, featuring a small temple in the center and used for Chandan Yatra.', image: puriImage }
    ]
  },
  {
    id: 3,
    image: konarkImage,
    name: 'Konark',
    slug: 'konark',
    history: 'Konark is globally renowned for its 13th-century Sun Temple, a UNESCO World Heritage site built by King Narasimhadeva I. Designed as a massive stone chariot for the Sun God (Surya) with 24 exquisitely carved wheels pulled by seven horses, the temple is a masterpiece of Kalinga architecture. Legend says the temple had a magnetic top that could pull ships toward the shore, earning it the name "Black Pagoda" from ancient sailors.',
    bestTimeToVisit: 'November to February. Don’t miss the Konark Festival and International Sand Art Festival in December.',
    localFood: ['Odia Thali', 'Chhena Poda', 'Pakhala Bhata', 'Gupchup'],
    travelTips: [
      'Visit the temple during sunrise or sunset for the best photography lighting.',
      'Carry an umbrella or hat as there is limited shade in the temple complex.',
      'Avoid high noon as the stone floors can get very hot.',
      'Check out the ASI Museum located nearby for a deeper historical dive.'
    ],
    attractions: [
      { name: 'Sun Temple', desc: 'The iconic "Black Pagoda," a stone-carved chariot with wheels that act as sundials, representing the passage of time.', image: konarkImage },
      { name: 'Chandrabhaga Beach', desc: 'A quiet, spiritual beach just 3km from the temple, believed to have healing properties and famous for the Magha Saptami fair.', image: konarkImage },
      { name: 'ASI Museum', desc: 'Houses various fallen sculptures, intricate carvings, and real architectural fragments collected during the restoration of the Sun Temple.', image: konarkImage },
      { name: 'Ramachandi Temple', desc: 'Located on the banks of a river meeting the sea, it is a popular picnic spot with beautiful scenery and water sports.', image: konarkImage },
      { name: 'Kuruma Buddhist Site', desc: 'An ancient Buddhist site featuring a monastery brick structure and various Buddha statues, located 8km from Konark.', image: konarkImage }
    ]
  },
  {
    id: 4,
    image: cuttackImage,
    name: 'Cuttack',
    slug: 'cuttack',
    history: 'As the former capital and one of the oldest cities in Odisha, Cuttack is known as the "Silver City" due to its world-famous silver filigree work (Tarakasi). Founded in 989 CE by King Nrupa Keshari, the city sits at the apex of the Mahanadi River delta. It is a hub of culture and commerce, famous for its grand celebration of Bali Jatra, the largest open-air trade fair in Asia.',
    bestTimeToVisit: 'October to February. November is particularly special due to the Bali Jatra fair.',
    localFood: ['Cuttack Dahi Bara Aloo Dum', 'Silver Filigree Sweets', 'Thunka Puri', 'Machha Jhola'],
    travelTips: [
      'Dahi Bara Aloo Dum near Barabati Stadium is a legendary street food experience.',
      'Shop for authentic Tarakasi (silver filigree) jewelry in the local markets.',
      'Be prepared for traffic during the Bali Jatra festival—use public transport or walk.',
      'Visit the Netaji Museum early to avoid school tour crowds.'
    ],
    attractions: [
      { name: 'Barabati Fort', desc: 'The ruins of a massive 14th-century fort standing adjacent to the Mahanadi River, symbolizing the city’s medieval power.', image: cuttackImage },
      { name: 'Netaji Birth Place Museum', desc: 'The childhood home of Netaji Subhas Chandra Bose, now converted into a museum displaying his life and legacy.', image: cuttackImage },
      { name: 'Dhabaleswar Island', desc: 'A serene island in the Mahanadi featuring a famous Shiva temple and a thrilling hanging bridge for pedestrians.', image: cuttackImage },
      { name: 'Odisha Maritime Museum', desc: 'Located in the old Jobra Workshop, it showcases Odisha’s ancient maritime history and engineering.', image: cuttackImage },
      { name: 'Cuttack Chandi Temple', desc: 'The presiding deity of the city, a peaceful and powerful temple located in the heart of Cuttack.', image: cuttackImage }
    ]
  },
  {
    id: 5,
    image: balasoreImage,
    name: 'Balasore',
    slug: 'balasore',
    history: 'A strategic coastal district in northern Odisha, Balasore (Baleshwar) boasts a unique blend of maritime history and modern scientific importance. It was a vital trading post for the British, French, and Dutch. Today, it is famous for the Chandipur Beach, where the sea recedes up to 5 kilometers during low tide—a rare natural phenomenon found nowhere else in India. The city is also a major industrial hub and the gateway to the breathtaking Kuldiha Wildlife Sanctuary.',
    bestTimeToVisit: 'October to March. Perfect for witnessing the unique tidal movements at Chandipur.',
    localFood: ['Fresh Seafood Thali', 'Hot Rasgullas', 'Machha Ghanta', 'Badi Chura'],
    travelTips: [
      'Check the tide timings before heading into the sea floor at Chandipur Beach.',
      'Kuldiha Sanctuary requires prior permission—arrange this via a local tour operator.',
      'The morning fish market near the coast is a great place to see the local catch.',
      'Visit the ancient Emami Jagannath Temple for its beautiful modern architecture.'
    ],
    attractions: [
      { name: 'Chandipur Beach', desc: 'The world-famous "vanishing sea," where the water disappears twice a day, allowing you to walk miles into the sea bed.', image: balasoreImage },
      { name: 'Panchalingeswar', desc: 'A scenic shrine where five Shiva lingams are enshrined beneath a perennial waterfall, accessible via a short hill trek.', image: balasoreImage },
      { name: 'Khirachora Gopinath Temple', desc: 'Located in Remuna, this 13th-century temple is famous for its delicious "Khira" (condensed milk) offering.', image: balasoreImage },
      { name: 'Talsari Beach', desc: 'A serene and secluded beach lined with casuarina trees, offering a peaceful retreat near the Bengal-Odisha border.', image: balasoreImage },
      { name: 'Kuldiha Wildlife Sanctuary', desc: 'A lush forest home to elephants, bisons, and diverse bird species. Great for nature lovers and trekkers.', image: balasoreImage }
    ]
  },
  {
    id: 6,
    image: rourkelaImage,
    name: 'Rourkela',
    slug: 'rourkela',
    history: 'Surrounded by hills and rivers in the tribal heartland of Sundargarh, Rourkela is known as the "Steel City of Odisha." It is home to India’s first integrated steel plant built with German collaboration. The city is a beautiful blend of industrial prowess and lush natural beauty, with monuments like Hanuman Vatika and the sacred Vedvyas temple standing as testaments to its cultural depth.',
    bestTimeToVisit: 'October to March. The weather is cool and pleasant for exploring the surrounding waterfalls.',
    localFood: ['Aloo Chop', 'Samosa Chaat', 'Mutton Jhola', 'Chhena Poda'],
    travelTips: [
      'Rourkela is very well connected by rail—it is a major junction on the Howrah-Mumbai line.',
      'Be sure to visit the Vedvyas confluence where the river Brahmani begins.',
      'The Khandadhar waterfall is about 100km away—plan a full day for this trip.',
      'Check if the Steel Plant allows industrial tours during your visit for a unique experience.'
    ],
    attractions: [
      { name: 'Hanuman Vatika', desc: 'A sprawling garden featuring a massive 75-foot tall statue of Lord Hanuman, surrounded by several other beautiful temples.', image: rourkelaImage },
      { name: 'Khandadhar Waterfall', desc: 'One of the tallest and most beautiful waterfalls in India, cascading down in a sword-like shape amidst dense forests.', image: rourkelaImage },
      { name: 'Vedvyas Temple', desc: 'A sacred spot where the rivers Sankha and Koel meet. Legend says Sage Vyasa composed the Mahabharata here.', image: rourkelaImage },
      { name: 'Indira Gandhi Park', desc: 'A lush green park with a musical fountain, small zoo, and a library—perfect for a relaxing family evening.', image: rourkelaImage },
      { name: 'Mandira Dam', desc: 'Located about 25km away, it offers majestic views of the reservoir and is a popular spot for picnics.', image: rourkelaImage }
    ]
  },
  {
    id: 7,
    image: brahmapurImage,
    name: 'Berhampur',
    slug: 'berhampur',
    history: 'Berhampur (Brahmapur), known as the "Silk City," is famous worldwide for its intricate Odissi silk sarees (Berhampuri Patta). It is the gateway to southern Odisha’s stunning beaches and spiritual sites. The city boasts a rich history of trade and culture, particularly influenced by the nearby port of Gopalpur. From the hill shrines of Tara Tarini to the golden sands of Gopalpur-on-Sea, Berhampur offers a diverse travel experience.',
    bestTimeToVisit: 'Winter months (November to February) are best for beach activities and hill trekking.',
    localFood: ['Berhampuri Puri Upma', 'Chicken Pakora', 'Pickles & Papad', 'Badam Halwa'],
    travelTips: [
      'Gopalpur beach is perfect for early morning walks and seeing the old lighthouse.',
      'Shop for Berhampuri Silk Sarees at the local handloom cooperatives for authentic quality.',
      'Check the bus schedules—Berhampur is the main hub for traveling to Daringibadi.',
      'Try the signature pickles of Berhampur, which come in hundreds of varieties.'
    ],
    attractions: [
      { name: 'Gopalpur-on-Sea', desc: 'A quiet, pristine beach resort that was once a bustling seaport. Famous for its old lighthouse and crumbling colonial ruins.', image: brahmapurImage },
      { name: 'Tara Tarini Temple', desc: 'One of the oldest Shakti Peethas in India, located atop a hill near the Rushikulya river with panoramic views.', image: brahmapurImage },
      { name: 'Aryapalli Beach', desc: 'A secluded and tranquil beach known for its golden sands and the nearby sand mineral plant—great for solitude.', image: brahmapurImage },
      { name: 'Mahuri Kalua Temple', desc: 'A popular religious site surrounded by hills and dense forests, offering a peaceful atmosphere for devotees.', image: brahmapurImage },
      { name: 'Taptapani Hot Springs', desc: 'Located about 50km away, these natural sulfur springs are believed to have medicinal properties, set in a scenic forest.', image: brahmapurImage }
    ]
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
    name: 'Priya Sharma',
    rating: '5',
    message: 'Absolutely phenomenal experience on the Golden Triangle Tour! The guide was extremely knowledgeable, and the hotel near Jagannath Temple was top-notch.',
    time: '1 week ago',
    packageInfo: 'Golden Triangle Tour',
  },
  {
    id: 2,
    name: 'Rahul Desai',
    rating: '5',
    message: 'Booked a luxury Innova Crysta for our family trip. The driver was incredibly polite, the car was spotless, and the riding experience was super smooth. Highly recommended!',
    time: '2 weeks ago',
    packageInfo: 'Luxury Car Rental',
  },
  {
    id: 3,
    name: 'Anjali Verma',
    rating: '5',
    message: 'The Daringibadi Hill Retreat felt like a dream. We loved the mist, the coffee plantations, and the seamless booking process from Holiday Planner. We will be back!',
    time: '1 month ago',
    packageInfo: 'Daringibadi Retreat',
  },
  {
    id: 4,
    name: 'Vikas Nandi',
    rating: '5',
    message: 'Excellent coordination for the Bhitarkanika Wildlife Tour. They handled the permits, the eco-resort, and the boat safari perfectly. Spotted 5 massive crocodiles!',
    time: '3 weeks ago',
    packageInfo: 'Bhitarkanika Tour',
  },
  {
    id: 5,
    name: 'Aditya Nath',
    rating: '5',
    message: 'Best holiday planner in Bhubaneswar. Transparent pricing, no hidden fees, and absolute peace of mind. Thank you for a memorable tribal heritage trip.',
    time: '2 months ago',
    packageInfo: 'Tribal Expedition',
  },
  {
    id: 6,
    name: 'Sneha Patel',
    rating: '5',
    message: 'We customized our entire 7-day Odisha itinerary with them. From the Buddhist circuit to the beaches of Gopalpur, everything was flawless.',
    time: '2 weeks ago',
    packageInfo: 'Custom Itinerary',
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
