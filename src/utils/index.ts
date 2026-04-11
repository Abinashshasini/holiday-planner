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
    buttonText: "View Details →",
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
    buttonText: "View Details →",
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
    buttonText: "View Details →",
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
    buttonText: "Get Free Quote",
    Icon: "FaWhatsapp",
    showIcon: true,
    message: `Hi! I need a bus for group travel. Can you share seating options, availability, and pricing?`,
    URL: "our-services/bus-travel-rental",
    action: "whatsapp",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410036/typeFive_rk1alg.png",
    title: "Package Service / Duty",
    buttonText: "Get Free Quote",
    Icon: "FaWhatsapp",
    showIcon: true,
    message: `Hi! I'm interested in a package tour. Could you share itinerary options and pricing for my travel dates?`,
    action: "whatsapp",
    URL: "our-services/package-service-duty",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773410037/typeSix_dpdlrq.png",
    title: "Resort Booking",
    buttonText: "Get Free Quote",
    Icon: "FaWhatsapp",
    showIcon: true,
    message: `Hi! I'd like to book a resort stay in Odisha. Can you share available properties and rates?`,
    action: "whatsapp",
    URL: "our-services/resort-booking",
  },
];

const popularCitiesData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1775908472/vtlbzqgiikj3gfsjnjob_s4yibt.webp",
    name: "Bhubaneswar",
    slug: "bhubaneswar",
    history:
      "Known as the \"Temple City of India,\" Bhubaneswar is one of the oldest continuously inhabited cities in the subcontinent, with a documented history stretching back over 2,500 years. At its peak the city was home to more than 2,000 stone temples built during the Kalinga dynasty era, showcasing an unbroken evolution from the 7th-century Parasurameswara Temple to the soaring 11th-century Lingaraj — widely regarded as the finest example of Kalinga Nagara-style architecture on earth. Emperor Ashoka's devastating Kalinga War (261 BCE) was fought on the outskirts of today's Bhubaneswar near Dhauli hill; the bloodshed profoundly changed him and led to the famous Dhauli rock edicts — some of the earliest written proclamations of non-violence in human history. Modern Bhubaneswar blends this ancient legacy with tree-lined boulevards, buzzing startup hubs, and world-class institutions, earning it a Smart City designation while preserving its spiritual soul.",
    bestTimeToVisit: "October to March (Winter)",
    localFood: [
      "Dahi Bara Aloo Dum",
      "Dalma",
      "Chhena Poda",
      "Pakhala Bhata",
      "Rasagola",
      "Chhena Gaja",
      "Mudhi Mansa",
      "Santula",
    ],
    travelTips: [
      "Dress modestly with covered shoulders and knees when visiting temples — many enforce traditional dress codes at the entrance.",
      "Try the sacred temple Prasad at Lingaraj and Ananta Vasudeva — it is a unique culinary ritual you won't find elsewhere.",
      "Hire an auto-rickshaw for half-day temple-hopping circuits; drivers know the best sequence to avoid crowds.",
      "Visit Ekamra Haat (open-air craft market) in the evening for authentic Odisha handloom, tribal jewellery, and Pattachitra paintings.",
      "Carry a water bottle and sunscreen — midday temple walks between October and December can still be warm and sunny.",
    ],
    attractions: [
      {
        name: "Lingaraj Temple",
        desc: "The crown jewel of Kalinga architecture, this 11th-century Shiva temple rises 55 metres and features exquisite carvings depicting dancers, musicians, and mythological scenes across its towering deul spire.",
      },
      {
        name: "Udayagiri & Khandagiri Caves",
        desc: "A pair of hillocks containing 33 rock-cut caves dating to the 2nd century BCE, adorned with intricate Jain reliefs — including the famous Hathi Gumpha inscription of King Kharavela.",
      },
      {
        name: "Dhauli Shanti Stupa",
        desc: "A gleaming white peace pagoda built atop the hill where Emperor Ashoka's Kalinga War was fought in 261 BCE. The adjacent rock edicts are among India's oldest historical inscriptions.",
      },
      {
        name: "Nandankanan Zoological Park",
        desc: "A 400-hectare zoo-cum-botanical garden set inside Chandaka forest, famous for its white tiger breeding programme and the country's first open-air butterfly enclosure.",
      },
      {
        name: "Rajarani Temple",
        desc: "An ornate 11th-century sandstone temple celebrated for its sensuous sculpted figurines of the Ashta-Dikpalas (eight directional guardians) — an open-air museum of Odishan stone carving mastery.",
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
      "Puri is one of the four sacred Char Dham pilgrimage sites and has been a spiritual epicentre for over 800 years. The 12th-century Jagannath Temple — towering at 65 metres — is an architectural marvel that employs a kitchen feeding 100,000 devotees daily, making it the largest community kitchen on the planet. Every summer, the legendary Rath Yatra sees three colossal wooden chariots carrying Lord Jagannath, Balabhadra, and Subhadra through thronging streets — a spectacle that gave English the word 'juggernaut.' Beyond the temple, Puri's Golden Beach holds India's coveted Blue Flag certification, while the nearby heritage village of Raghurajpur keeps alive Odisha's centuries-old Pattachitra painting and Gotipua dance traditions. From the sunrise surf to the sanctity of Mahaprasad, Puri offers a rare blend of coastal relaxation and deep devotional culture that few Indian cities can rival.",
    bestTimeToVisit:
      "October to March for beach weather. June/July for Rath Yatra.",
    localFood: [
      "Mahaprasad (Abadha)",
      "Khaja",
      "Chuda Ghasa",
      "Dalma",
      "Fried Pomfret",
      "Chhena Poda",
      "Kanji (Fermented Rice Drink)",
      "Prawn Malai Curry",
    ],
    travelTips: [
      "Non-Hindus are not permitted inside the Jagannath Temple, but the rooftop of the Raghunandan Library offers a panoramic view of the temple complex.",
      "Golden Beach currents are deceptively strong — swim only in lifeguard-patrolled zones and avoid the water after sunset.",
      "Book your Rath Yatra trip at least two months in advance; the entire city sells out and prices triple during the festival week.",
      "Ride a cycle-rickshaw through the old town lanes at dusk — it's the best way to absorb the evening aarti atmosphere and street food culture.",
      "Visit Raghurajpur Artist Village (15 min drive) to see Pattachitra painters at work and buy authentic pieces directly from the families who create them.",
    ],
    attractions: [
      {
        name: "Jagannath Temple",
        desc: "A colossal 12th-century shrine dedicated to Lord Jagannath, famous for its 65-metre spire, Nila Chakra (blue wheel) atop the dome, and the world's largest communal kitchen serving Mahaprasad to over 100,000 devotees daily.",
      },
      {
        name: "Golden Beach (Puri Beach)",
        desc: "A sweeping Blue Flag-certified beach stretching 6 km along the Bay of Bengal — perfect for sunrise walks, sand art festivals, and watching traditional fishermen haul in the morning catch.",
      },
      {
        name: "Raghurajpur Artist Village",
        desc: "India's only heritage craft village where every household practises Pattachitra painting, palm-leaf etching, stone carving, or Gotipua dance — a living museum of Odishan folk art recognised by the Government of India.",
      },
      {
        name: "Chilika Mouth & Satapada",
        desc: "Just 50 km from Puri, the southern tip of Chilika Lake meets the sea — offering dolphin boat rides, mangrove creeks, and spectacular sunset views over the lagoon.",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1775908472/kwrdyrrkfanxdobdqibj_heg7i3.webp",
    name: "Konark",
    slug: "konark",
    history:
      "The Konark Sun Temple, a UNESCO World Heritage Site built in the 13th century by King Narasimhadeva I of the Eastern Ganga dynasty, is one of the most ambitious architectural undertakings in Indian history. Engineered as a colossal stone chariot of the Sun God Surya, it features 24 intricately carved wheels — each 3 metres in diameter and accurate enough to function as sundials — drawn by seven galloping stone horses representing the days of the week. The temple's walls are adorned with over 1,200 sculptures depicting celestial musicians, amorous couples, and mythological narratives, representing the zenith of Kalinga sculptural art. Although the main sanctum collapsed centuries ago (legends attribute it to Portuguese looters removing its magnetic lodestone), the surviving Jagamohana (audience hall) and the iconic Natya Mandapa (dance hall) remain breathtaking. Every December, the Konark Dance Festival brings India's finest classical dancers to perform against this monumental backdrop, blending living art with ancient stone.",
    bestTimeToVisit: "November to February",
    localFood: [
      "Fresh Grilled Seafood",
      "Coconut Water",
      "Mahura (Rice Beer)",
      "Prawn Ghanto",
      "Sand Crab Curry",
      "Kanika (Sweet Rice)",
    ],
    travelTips: [
      "Hire an ASI-certified guide at the temple entrance — the symbolism in the carvings is layered and a guide transforms the experience from sightseeing to storytelling.",
      "Arrive at sunrise when the first rays illuminate the temple's eastern facade exactly as the original architects intended.",
      "The Sound & Light show runs every evening (except Monday) and brings the temple's history alive — book seats early in peak season.",
      "Combine Konark with a drive along the Marine Drive coastal road to Chandrabhaga Beach for a quieter, less crowded shoreline experience.",
      "Visit the ASI Archaeological Museum near the temple to see original sculptures, inscriptions, and scale models of the temple in its original glory.",
    ],
    attractions: [
      {
        name: "Konark Sun Temple",
        desc: "A 13th-century UNESCO World Heritage masterpiece shaped as a monumental stone chariot with 24 functioning sundial wheels, seven horses, and over 1,200 exquisitely carved sculptures — the pinnacle of Kalinga temple architecture.",
      },
      {
        name: "Chandrabhaga Beach",
        desc: "A pristine crescent beach 3 km from the temple, famous for its golden sunrise views and the annual Chandrabhaga Mela where thousands gather for a sacred dip and cultural festivities.",
      },
      {
        name: "ASI Archaeological Museum",
        desc: "Houses an impressive collection of original sculptures, fallen temple fragments, and detailed scale models showing how the Sun Temple looked in its full 70-metre glory before the sanctum collapsed.",
      },
      {
        name: "Ramachandi Temple & Beach",
        desc: "A serene riverside temple at the confluence of the Kusabhadra River and the Bay of Bengal — a perfect half-day escape with fewer crowds and excellent sunset photography spots.",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773503526/Gemini_Generated_Image_rac3l0rac3l0rac3_ztsxhq.webp",
    name: "Chilika Lake",
    slug: "chilika",
    history:
      "Chilika Lake, spread across 1,100 sq km between the Eastern Ghats and the Bay of Bengal, is Asia's largest coastal lagoon and a Ramsar Wetland of International Importance. Its brackish waters sustain a staggering ecosystem: over 230 fish species support 150,000 fisherfolk from 132 villages, while every winter more than one million migratory birds — including rare bar-headed geese, flamingos, and white-bellied sea eagles — descend on the lake from as far as Central Asia, Siberia, and the Caspian Sea. The lagoon is also the last refuge of a thriving population of endangered Irrawaddy dolphins, best spotted near the Satapada channel where the lake narrows before meeting the ocean. Ancient texts mention Chilika as a major port on the maritime spice route to Southeast Asia; today, scattered islands like Kalijai (home to a revered temple) and Nalabana (a dedicated bird sanctuary) make every boat ride an exploration of both natural wonder and cultural memory.",
    bestTimeToVisit: "November to March",
    localFood: [
      "Chingudi Jhola (Prawn Curry)",
      "Fresh Mud Crab Masala",
      "Chilika Fish Fry",
      "Dahi Machha (Yoghurt Fish)",
      "Kakada Jhola (Crab Soup)",
      "Steamed Hilsa with Mustard",
    ],
    travelTips: [
      "Book a morning boat from Satapada jetty by 7 AM for the best chance of Irrawaddy dolphin sightings — they surface frequently in cool, calm waters.",
      "Carry binoculars and a telephoto lens — Nalabana Bird Sanctuary restricts boat-to-shore distance, so optics make or break the birding experience.",
      "Stay overnight at Barkul or Rambha for a quieter, more immersive lakeside experience compared to day-tripping from Puri.",
      "Visit the Chilika fishing villages early morning to witness the traditional net-hauling practice and buy the freshest catch of the day.",
      "Plan your visit in December–January for peak migratory bird season when over a million birds create a visual spectacle across the lake.",
    ],
    attractions: [
      {
        name: "Irrawaddy Dolphin Spotting",
        desc: "The shallow channel near Satapada is home to around 150 Irrawaddy dolphins — a critically endangered species found in very few locations worldwide. Watching them surface in the golden morning light is a bucket-list wildlife encounter.",
      },
      {
        name: "Kalijai Island Temple",
        desc: "A sacred island shrine in the heart of the lake, accessible by boat — dedicated to Goddess Kalijai and steeped in local folklore about a drowned bride whose spirit protects fishermen.",
      },
      {
        name: "Nalabana Bird Sanctuary",
        desc: "A 16 sq km island sanctuary that hosts over 1 million migratory birds each winter — including flamingos, brahminy kites, and bar-headed geese from Siberia, Mongolia, and the Caspian region.",
      },
      {
        name: "Rajhans Island (Breakfast Island)",
        desc: "A sandbar island in the lake where boatmen serve fresh fish cooked on the spot for a unique 'breakfast on the water' experience surrounded by panoramic lagoon views.",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1775908432/jrc3niu3korvggd6bjtm_q8jeih.webp",
    name: "Daringbadi",
    slug: "daringbadi",
    history:
      "Nestled in the Eastern Ghats at over 900 metres above sea level, Daringbadi is Odisha's only hill station and is affectionately called the \"Kashmir of Odisha\" for its misty valleys, rolling pine forests, and rare December–January snowfall that blankets the highland meadows. The region was first developed as a retreat by the British, who established coffee and pepper plantations in the fertile laterite soil — many of which still operate today, producing some of eastern India's finest shade-grown coffee. Beyond the plantations, Daringbadi is home to the Kutia Kondh, Dongria Kondh, and other indigenous tribal communities whose vibrant weekly haats (markets), animist rituals, and distinctive jewellery offer a rare window into Odisha's living tribal heritage. The landscape is dotted with waterfalls, botanical gardens, and dense sal forests that harbour langurs, barking deer, and over 120 species of birds — making it a paradise for trekkers, nature photographers, and anyone seeking a cool escape from the coastal plains.",
    bestTimeToVisit: "October to February",
    localFood: [
      "Fresh Estate Black Coffee",
      "Bamboo Shoot Curry",
      "Forest Honey",
      "Mandia Pitha (Ragi Cake)",
      "Wild Mushroom Stir-Fry",
      "Tribal Turmeric Rice",
    ],
    travelTips: [
      "Carry warm layers even in October — temperatures drop sharply after sunset at this altitude, often reaching 5–8 °C at night.",
      "Hill roads can be foggy, especially in early morning; drive slowly, use fog lights, and avoid night travel on winding routes.",
      "Visit the weekly tribal haat (market) in nearby Belghar for authentic handicrafts, organic spices, and a genuine cultural exchange with Kondh communities.",
      "Hire a local guide for waterfall treks — trails are unmarked and can be slippery during the post-monsoon months.",
      "Stock up on fresh pepper, turmeric, and coffee beans directly from plantation shops — they are a fraction of city prices and far superior in quality.",
    ],
    attractions: [
      {
        name: "Coffee & Pepper Plantations",
        desc: "Walk through fragrant shade-grown estates that have been producing premium Arabica coffee and black pepper since the British era — guided plantation tours include tastings of freshly roasted beans.",
      },
      {
        name: "Hill View Point",
        desc: "A panoramic vantage point at 915 metres offering 360-degree views of mist-draped valleys, cascading pine ridgelines, and on clear days, distant glimpses of the Bay of Bengal coastline.",
      },
      {
        name: "Mandasaru Waterfall",
        desc: "A multi-tiered waterfall cascading through dense sal forest — a moderate 2 km trek through tribal paths leads to a pristine pool perfect for a refreshing dip.",
      },
      {
        name: "Lover's Point & Nature Park",
        desc: "A beautifully maintained botanical park with pine groves, flower beds, and a viewpoint popular for its sunset panoramas over the Eastern Ghats — ideal for evening walks.",
      },
      {
        name: "Belghar Wildlife Sanctuary",
        desc: "A 148 sq km protected forest bordering Daringbadi, sheltering leopards, sambar deer, giant squirrels, and a rich birdlife — accessible via a scenic drive through tribal hamlets.",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1775908432/apanhhp7fzvstim4r8mb_nctd73.webp",
    name: "Bhitarkanika",
    slug: "bhitarkanika",
    history:
      "Bhitarkanika National Park, covering 672 sq km of dense mangrove forests at the delta of the Brahmani, Baitarani, and Dhamra rivers, is India's second-largest mangrove ecosystem and one of the most biodiverse wetlands in Asia. The park holds the Guinness World Record for housing the world's largest known saltwater crocodile population — over 1,700 individuals, some exceeding 6 metres in length. Designated a Ramsar Wetland of International Importance, its labyrinthine tidal creeks and mudflats support 215 bird species, king cobras, water monitors, and fishing cats. Just offshore lies Gahirmatha Beach, the world's largest mass nesting site for Olive Ridley sea turtles — every January through March, hundreds of thousands of turtles crawl ashore under moonlight to lay eggs in a spectacle that draws marine biologists and wildlife photographers from around the globe. The surrounding villages practice traditional fishing and crab harvesting, and a boat safari through the mangrove channels at dawn remains one of eastern India's most unforgettable wildlife experiences.",
    bestTimeToVisit: "October to March",
    localFood: [
      "King Prawn Curry",
      "Mud Crab Masala",
      "Steamed Rice with Forest Greens",
      "Dried Fish Bharta",
      "Mangrove Honey",
      "River Shrimp Fry",
    ],
    travelTips: [
      "Entry permits are mandatory — arrange them through a registered tour operator or at the Rajnagar Forest Office at least a day in advance.",
      "Book early morning boat safaris (6–7 AM departure) for the best crocodile basking sightings and birdlife activity along the tidal creeks.",
      "Carry insect repellent — the mangrove environment means mosquitoes are abundant, especially during dusk hours.",
      "Visit between January and March to witness the Olive Ridley turtle mass nesting at Gahirmatha — a once-in-a-lifetime wildlife spectacle.",
      "Wear earth-toned clothing and speak softly during safaris — wildlife is more visible when you blend into the environment.",
    ],
    attractions: [
      {
        name: "Saltwater Crocodile Safari",
        desc: "A boat safari through narrow mangrove creeks where massive saltwater crocodiles bask on mudbanks — Bhitarkanika holds the world's densest population, with some individuals over 6 metres long.",
      },
      {
        name: "Gahirmatha Beach",
        desc: "The world's largest Olive Ridley sea turtle mass nesting beach — between January and March, hundreds of thousands of turtles arrive to lay eggs in a synchronised spectacle visible from sanctioned viewpoints.",
      },
      {
        name: "Dangmal — Heronry & Nature Trail",
        desc: "An eco-trail starting from the Dangmal base camp that passes through a vibrant heronry where thousands of herons, egrets, and cormorants nest in the canopy — an extraordinary birdwatching experience.",
      },
      {
        name: "Habalikhati Island",
        desc: "A remote island formed by silt deposits, known for turtle conservation camps and pristine, untouched beaches where casuarina trees line the shore — accessible only by boat.",
      },
    ],
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1775908432/te1hxnlhiemvplpi5hp3_ktalrz.webp",
    name: "Cuttack",
    slug: "cuttack",
    history:
      "Cuttack, fondly called the 'Millennium City' and the 'Silver City of India,' served as the capital of Odisha for nearly a thousand years before the seat shifted to Bhubaneswar in 1948. Built on a narrow spit between the Mahanadi and Kathajodi rivers, its strategic riverine position made it a fortress city — the imposing 11th-century Barabati Fort once housed the Eastern Ganga and Surya dynasties and later repelled Mughal invasions. Cuttack's most celebrated heritage is Tarakasi — the painstaking silver filigree craft where artisans in the Naya Sarak quarter transform fine silver wire into breathtaking jewellery, decorative pieces, and miniature sculptures, a tradition recognised by UNESCO as an Intangible Cultural Heritage. Every November, the Baliyatra fair on the Mahanadi riverbank commemorates the ancient maritime trade between Odisha and Southeast Asia, drawing lakhs of visitors with folk performances, street food, and boat races. The city's street food culture is legendary — Cuttack's Dahi Bara and Chhena Jhili stalls are pilgrimage destinations for food lovers across eastern India.",
    bestTimeToVisit: "October to March",
    localFood: [
      "Dahi Bara Aloo Dum",
      "Chhena Jhili",
      "Bara Ghuguni",
      "Dahibara Aloodam at Balu Bazar",
      "Cuttack Chaat",
      "Thekua",
      "Mudhi Mansa",
      "Chhena Gaja",
    ],
    travelTips: [
      "Visit the Tarakasi workshops in Naya Sarak to watch master artisans shape silver wire into intricate filigree — many studios welcome visitors and offer competitive direct prices.",
      "Time your visit for Baliyatra (November) — it's one of Asia's largest open-air trade fairs and the best window into Cuttack's maritime legacy and folk culture.",
      "Explore the Balu Bazar and Netaji Subhash Chandra Bose Road food belt in the evening for the city's legendary street food — a guided food walk is highly recommended.",
      "Hire a boat at the Jobra barrage for a sunset ride on the Mahanadi — the view of the Barabati Fort ruins from the water is unforgettable.",
      "Visit Cuttack Chandi Temple early morning to avoid crowds — the 9th-century shrine is the city's spiritual anchor and the goddess is the presiding deity of Cuttack.",
    ],
    attractions: [
      {
        name: "Silver Filigree Market (Tarakasi)",
        desc: "A thousand-year-old silver filigree tradition thrives in Naya Sarak — UNESCO-recognised artisans twist fine silver wire into jewellery, miniature chariots, and decorative elephants in mesmerising workshops open to visitors.",
      },
      {
        name: "Barabati Fort",
        desc: "An 11th-century fortification of the Eastern Ganga dynasty on the Mahanadi bank — though largely in ruins, its massive moat, stone gateway, and the adjacent stadium hosting cultural events evoke a millennium of royal Odishan history.",
      },
      {
        name: "Netaji Birthplace Museum",
        desc: "The ancestral home of Netaji Subhash Chandra Bose, now a museum preserving personal artefacts, letters, and photographs of India's iconic freedom fighter — a must-visit for history enthusiasts.",
      },
      {
        name: "Cuttack Chandi Temple",
        desc: "A revered 9th-century shrine dedicated to Goddess Chandi, the presiding deity of Cuttack — its annual Durga Puja celebrations rival those of Kolkata in scale and artistic grandeur.",
      },
      {
        name: "Stone Revetment (Kathjori Riverbank)",
        desc: "A 19th-century British-built stone embankment along the Kathajodi River — now a popular evening promenade with river views, food stalls, and a cool breeze that makes it Cuttack's favourite sunset hangout.",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1775908433/mig7sifpkw29kptsvmgg_j8y1xk.webp",
    name: "Sambalpur",
    slug: "sambalpur",
    history:
      "Sambalpur, the cultural capital of western Odisha, sits on the banks of the Mahanadi River and is dominated by the monumental Hirakud Dam — Asia's longest earthen dam, stretching 26 km across the river and creating a reservoir so vast it is visible from space. Built in 1957, the dam transformed the region's economy and created a scenic freshwater sea surrounded by forested hills. Sambalpur is equally renowned as the birthplace of the iconic Sambalpuri ikat saree — a centuries-old tie-dye weaving tradition where artisans in villages like Barpali and Sonepur create intricate geometric patterns by hand-tying thousands of warp and weft threads before dyeing, a process so laborious that a single saree can take weeks to complete. The region's tribal Kosli culture infuses everything from the thunderous Sambalpuri folk dance (performed during the Sital Sasthi festival) to the earthy cuisine of western Odisha. Nearby, the Debrigarh Wildlife Sanctuary offers leopard-tracking safaris, ancient cave paintings, and birdwatching along the Hirakud backwaters — making Sambalpur an ideal destination for travellers who want heritage, nature, and living tradition in one itinerary.",
    bestTimeToVisit: "October to February",
    localFood: [
      "Sambalpuri Pitha",
      "Manda Pitha",
      "Bamboo Chicken",
      "Laal Maas (Red Mutton Curry)",
      "Rakhia Badi (Sun-Dried Lentil Dumplings)",
      "Kakara Pitha (Fried Coconut Cake)",
    ],
    travelTips: [
      "Visit the Hirakud Dam Gandhi Minar and Nehru Minar viewpoints at sunset — the panoramic reservoir views with forested islands are spectacular.",
      "Shop for authentic Sambalpuri sarees directly from weavers' cooperatives in Barpali (30 min drive) — you'll get the best prices and can watch the ikat process live.",
      "Time your visit for Sital Sasthi (June) to witness the grand Shiva-Parvati wedding procession through Sambalpur — it's western Odisha's biggest cultural spectacle.",
      "Book a morning jeep safari at Debrigarh Sanctuary for leopard and sloth bear sightings — the forest wakes up early and guides know the best tracking routes.",
      "Try the local Bamboo Chicken at roadside joints near Debrigarh — it's a tribal delicacy where chicken is slow-roasted inside bamboo over an open fire.",
    ],
    attractions: [
      {
        name: "Hirakud Dam",
        desc: "Asia's longest earthen dam stretching 26 km across the Mahanadi, creating a vast reservoir with forested islands — the twin viewpoints (Gandhi Minar and Nehru Minar) offer breathtaking sunset panoramas.",
      },
      {
        name: "Debrigarh Wildlife Sanctuary",
        desc: "A 347 sq km wildlife reserve on the banks of the Hirakud reservoir, sheltering leopards, sloth bears, Indian bison, giant squirrels, and over 200 bird species — also home to ancient cave paintings in the Ushakothi gorge.",
      },
      {
        name: "Huma Leaning Temple",
        desc: "A unique Shiva temple on the Mahanadi bank that tilts visibly to one side — the only leaning temple in India. Sacred fish in the temple pond are fed by devotees and are believed to grant wishes.",
      },
      {
        name: "Cattle Island (Ghodahada)",
        desc: "An island in the Hirakud reservoir inhabited by feral cattle descended from herds stranded when the dam was built in the 1950s — accessible by boat, it offers a surreal, untouched landscape.",
      },
      {
        name: "Sambalpuri Textile Heritage Trail",
        desc: "Visit the weaving villages of Barpali and Sonepur, where families have practised the ikat tie-dye technique for generations — watch artisans hand-tie thousands of threads before dyeing and buy directly from the loom.",
      },
    ],
  },
];

const whyChooseUsData = [
  {
    id: 1,
    text: "Stay & Transport Sorted",
    desc: "Handpicked 3★–5★ hotels and a sanitized, GPS-tracked fleet — comfort guaranteed at every stop.",
    Icon: FaHotel,
  },
  {
    id: 2,
    text: "VIP Temple Darshan",
    desc: "Skip 3-hour queues — guaranteed VIP entry at Jagannath Temple included in every Puri package.",
    Icon: FaGem,
  },
  {
    id: 3,
    text: "Expert Local Guides",
    desc: "Government-licensed guides with 8+ years average experience — they bring legends alive.",
    Icon: PiPersonArmsSpread,
  },
  {
    id: 4,
    text: "Best Price Guarantee",
    desc: "We price-match any licensed Odisha operator. Found cheaper? We'll beat it by 5%.",
    Icon: FaHandHoldingUsd,
  },
  {
    id: 5,
    text: "Confirmed in 10 Minutes",
    desc: "WhatsApp us your dates, pick your package, and you're booked. No forms, no waitlists.",
    Icon: FaRegClock,
  },
  {
    id: 6,
    text: "Trained Pro Drivers",
    desc: "Background-verified, hospitality-trained chauffeurs — travel companions, not just drivers.",
    Icon: FaCarSide,
  },
  {
    id: 7,
    text: "₹0 Hidden Charges",
    desc: "Every cost is disclosed upfront. No surprise fees — transparent pricing, always.",
    Icon: FaMapMarkedAlt,
  },
  {
    id: 8,
    text: "24/7 Trip Concierge",
    desc: "A real human on WhatsApp in under 5 minutes, any time of day or night. Not a chatbot.",
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
    packageInfo: "Golden Triangle Tour Odisha",
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
