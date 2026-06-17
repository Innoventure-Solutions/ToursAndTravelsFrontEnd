import { memo, useState } from "react";
import { Helmet } from "react-helmet-async";

import Carousel from "../Components/carousel";
import Card from "../Components/card";
import PackageBooking from "../Components/package-booking";
import PackageDetails, { type PackageDetailsData } from "../Components/package-details";

type TourPackage = {
  name: string;
  duration: string;
  destinations: string;
  threeStarPrice: string;
  fourStarPrice: string;
  fiveStarPrice: string;
  sheet: string;
  details: PackageDetailsData;
};

type ActiveBooking = {
  details: PackageDetailsData;
  hotelClass: string;
};

const packageOneDetails: PackageDetailsData = {
  title: "North Vietnam Classic",
  duration: "5 Days / 4 Nights",
  destinations: "Hanoi - Ha Long Bay - Ninh Binh",
  pricing: [
    { label: "3-Star Hotel", price: "₹33,500" },
    { label: "4-Star Hotel", price: "₹49,500" },
    { label: "5-Star Hotel", price: "₹68,000" },
  ],
  included: [
    "Airport transfers (arrival & departure)",
    "Hotel accommodation (3/4/5-star as selected)",
    "Ha Long Bay (3-star: day trip - 4/5-star: overnight cruise)",
    "Ninh Binh full-day (Hoa Lu + Trang An boat + Mua Cave)",
    "Hanoi city tour + Water Puppet Show",
    "All AC road transfers",
    "All entrance fees",
    "English-speaking coordinator 24/7",
    "Basic travel insurance",
  ],
  excluded: [
    "International flights",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "Personal expenses & beverages",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Hanoi",
      meals: "-/-/-",
      activities: [
        "Arrive Noi Bai Airport; private AC transfer to Old Quarter hotel (~45 min).",
        "Check-in from 14:00; coordinator WhatsApp contact shared.",
        "Free afternoon: Hoan Kiem Lake, Train Street, Coffee Street at leisure.",
      ],
    },
    {
      day: "Day 2",
      title: "Ha Long Bay (Day Trip or Overnight Cruise)",
      meals: "B/L/D",
      activities: [
        "Breakfast at hotel; 08:20-08:50 pick up Hanoi Old Quarter / Opera House; drive Tuan Chau Highway (~2.5 hrs).",
        "12:00 - Arrive Tuan Chau Harbor; board boat.",
        "12:30 - Set-menu lunch on boat; Fighting Chicken & Incense Burner Islets views.",
        "14:00 - Bo Hon Island: Sung Sot Cave (largest cave in Ha Long Bay).",
        "14:45 - Kayaking or bamboo boat through Luon Cave lagoon.",
        "15:15 - TiTop Island: swim or climb summit for panoramic bay views.",
        "16:00 - Sunset party on boat (wine, fruits, biscuits) while cruising back.",
        "[3-star Day Trip] 17:45 - Return harbor; bus to Hanoi | 20:30 - Hotel drop-off.",
        "[4/5-star Overnight] 18:00 - Cooking class; 19:00 - Dinner on board; 21:00 - Squid fishing.",
      ],
    },
    {
      day: "Day 3",
      title: "Ha Long Bay Morning - Ninh Binh",
      meals: "B/L/-",
      activities: [
        "[Overnight guests] 07:00 - Breakfast on cruise; 08:00 - Dark & Bright Cave by kayak or bamboo boat.",
        "[Overnight guests] 09:30 - Check-out; 10:00 - Last lunch; 11:30 - Dock; bus to Hanoi (arr. 15:30).",
        "[3-star guests] Depart Hanoi hotel 07:30 directly for Ninh Binh.",
        "09:15 - Rest stop (15-20 min).",
        "10:30 - Hoa Lu Ancient Capital (968-1010 AD): King Dinh & King Le temples.",
        "11:45 - Buffet lunch (goat meat, fish, fried rice; vegetarian options available).",
        "13:00 - Trang An UNESCO boat trip through tunnel caves (2 hrs).",
        "15:00 - 45-min cycling around local village.",
        "15:30 - Optional: Mua Cave (500 steps, panoramic views - skip if tired).",
        "17:00 - Bus departs Ninh Binh; 19:00 - Drop-off Hanoi hotel.",
      ],
    },
    {
      day: "Day 4",
      title: "Airport Transfer - Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast at hotel; check-out.",
        "Private AC car transfer to Noi Bai Airport.",
        "Tour ends - safe travels!",
      ],
    },
  ],
};

const packageTwoDetails: PackageDetailsData = {
  title: "North Vietnam Explorer",
  duration: "8 Days / 7 Nights",
  destinations: "Hanoi - Ha Long Bay (2D1N) - Ninh Binh - Sapa - Mai Chau",
  pricing: [
    { label: "3-Star Hotel", price: "₹50,500" },
    { label: "4-Star Hotel", price: "₹73,000" },
    { label: "5-Star Hotel", price: "₹1,09,000" },
  ],
  included: [
    "All airport transfers",
    "Hotel accommodation (3/4/5-star)",
    "Ha Long Bay 2D/1N overnight cruise",
    "Ninh Binh 2-day tour",
    "Sapa overnight sleeper bus + Cat Cat Village trek",
    "Mai Chau cultural homestay + Thai dinner & dance",
    "Hanoi 2-day city tour",
    "All meals as per itinerary",
    "All entrance fees",
    "English-speaking coordinator 24/7",
  ],
  excluded: [
    "International flights",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "Optional: Fansipan cable car",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Hanoi",
      meals: "-/-/-",
      activities: [
        "Arrive Noi Bai Airport; AC limousine to Old Quarter (~45 min).",
        "Check-in from 14:00; evening: Hoan Kiem Lake, Train Street, Egg Coffee.",
      ],
    },
    {
      day: "Day 2",
      title: "Hanoi City Tour",
      meals: "B/L/-",
      activities: [
        "Breakfast at hotel.",
        "Private city tour: Ho Chi Minh Mausoleum, Presidential Palace, One Pillar Pagoda.",
        "Temple of Literature (1070 AD); Hoan Kiem Lake; Ngoc Son Temple.",
        "Lunch at local restaurant (vegetarian options available).",
        "Old Quarter rickshaw ride through 36 guild streets.",
        "Evening: Thang Long Water Puppet Show.",
      ],
    },
    {
      day: "Day 3",
      title: "Ha Long Bay Overnight Cruise",
      meals: "B/L/D",
      activities: [
        "Breakfast at hotel; 08:00-08:30 - Pick up Old Quarter.",
        "11:30-11:45 - Arrive Tuan Chau Marina.",
        "12:00-12:30 - Board cruise; welcome drink; captain briefing; cabin check-in.",
        "12:45 - Lunch while cruising; Con Vit Islet, Lan Ha Bay lagoon.",
        "Afternoon - Kayaking & swimming at Ba Trai Dao Beach / Tra Bau area.",
        "17:30 - Sunset party on deck (fruit, cake, tea).",
        "18:00-18:15 - Cooking class with chef: spring rolls & traditional dishes.",
        "19:00 - Dinner; 21:00 - Squid fishing, cards, music; overnight on cruise.",
      ],
    },
    {
      day: "Day 4",
      title: "Ha Long Bay Morning - Hanoi",
      meals: "B/L/-",
      activities: [
        "07:00-07:45 - Breakfast.",
        "08:00 - Dark & Bright Cave (kayak or bamboo boat).",
        "09:30 - Check-out; 10:00 - Last lunch on cruise.",
        "11:30-12:00 - Dock; limo bus to Hanoi Old Quarter (arr. 15:30).",
        "Evening free: shopping, street food.",
      ],
    },
    {
      day: "Day 5",
      title: "Ninh Binh Full Day - Ninh Binh Hotel",
      meals: "B/L/D",
      activities: [
        "Breakfast; 07:30-08:00 - Depart for Ninh Binh (2 hrs); 09:15 - Rest stop.",
        "10:30 - Hoa Lu Ancient Capital; 11:45 - Buffet lunch.",
        "13:00 - Trang An UNESCO boat trip (2 hrs); 15:00 - Village cycling (45 min).",
        "15:45 - Mua Cave summit (~500 steps); check-in Ninh Binh resort; dinner.",
      ],
    },
    {
      day: "Day 6",
      title: "Ninh Binh - Overnight Bus to Sapa",
      meals: "B/L/-",
      activities: [
        "Breakfast at resort; morning: Bich Dong Pagoda (15th century 3-cave pagoda).",
        "Lunch in Ninh Binh; afternoon drive back to Hanoi; evening free.",
        "21:00-21:30 - Mini-van to bus station; board overnight sleeper bus Hanoi - Sapa (~5.5-6 hrs).",
      ],
    },
    {
      day: "Day 7",
      title: "Sapa Cat Cat Village + Mai Chau Homestay",
      meals: "B/L/D",
      activities: [
        "05:30 - Arrive Sapa; freshen up at cafe; 06:30 - Breakfast at local restaurant.",
        "09:00 - Walk to Cat Cat Village gate (H'mong ethnic village near Fansipan).",
        "Trek ~2 km / ~1.5 hrs: daily life, waterfall bridge (easy pace).",
        "12:00 - Lunch at local Sapa restaurant; rest at cafe.",
        "Drive to Mai Chau via scenic mountain road (~3.5 hrs); check-in Thai stilt homestay.",
        "19:00 - Traditional Thai dinner with host family; 20:30 - Optional: Cultural dance show.",
      ],
    },
    {
      day: "Day 8",
      title: "Mai Chau Morning - Hanoi - Airport",
      meals: "B/-/-",
      activities: [
        "Breakfast at homestay; cycling through Mai Chau valley rice fields (1.5 hrs).",
        "Depart - Hanoi (~3.5 hrs); luggage pick-up; transfer to Noi Bai Airport.",
        "Tour ends - safe travels!",
      ],
    },
  ],
};

const packageThreeDetails: PackageDetailsData = {
  title: "Central Vietnam Complete",
  duration: "7 Days / 6 Nights",
  destinations: "Da Nang - Ba Na Hills - Hoi An - My Son - Hue",
  pricing: [
    { label: "3-Star Hotel", price: "₹46,500" },
    { label: "4-Star Hotel", price: "₹66,000" },
    { label: "5-Star Hotel", price: "₹1,07,500" },
  ],
  included: [
    "Da Nang airport transfers",
    "Hotel accommodation (3/4/5-star)",
    "Ba Na Hills full day (Golden Bridge + Fantasy Park + cable car)",
    "Hoi An: cooking class + cycling + Ancient Town tour",
    "My Son UNESCO Cham Ruins sunrise tour",
    "Hue: Imperial Citadel + Royal Tombs + Dragon Boat + Royal Dinner",
    "All meals as per itinerary",
    "All entrance fees",
    "English-speaking coordinator 24/7",
  ],
  excluded: [
    "International flights",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Da Nang",
      meals: "-/-/-",
      activities: [
        "Da Nang Airport pick-up; private AC transfer to hotel.",
        "Check-in from 14:00; evening: My Khe Beach sunset stroll.",
        "Optional: Han River bridge light show (21:00-22:00).",
      ],
    },
    {
      day: "Day 2",
      title: "Ba Na Hills Full Day",
      meals: "B/L/-",
      activities: [
        "Breakfast; 08:00-08:30 - Pick up; 30-40 min to Ba Na Hills station.",
        "09:40 - World's longest cable car (5,772 m); Golden Bridge photo stop.",
        "Le Jardin D'Amour (9 flower gardens); Linh Ung Pagoda; French Village.",
        "11:30 - Buffet lunch (vegetarian options available).",
        "Afternoon - Fantasy Park (4D/5D film, roller coaster, dinosaur park); Carnival Show at Square Du Dome.",
        "15:00 - Cable car descent; 17:00 - Hotel drop-off via Han Market.",
      ],
    },
    {
      day: "Day 3",
      title: "Marble Mountains + Hoi An",
      meals: "B/-/D",
      activities: [
        "Breakfast; 15:00-15:30 - Marble Mountains (5 marble hills; cave temples).",
        "Non Nuoc stone carving village; Thuy Son summit viewpoint.",
        "16:30 - Arrive Hoi An; guided Ancient Town evening walk.",
        "18:00 - Dinner (local specialities: Cao Lau, White Rose, Banh Mi).",
        "19:00 - Lantern making + Hoai River boat ride; check-in hotel.",
      ],
    },
    {
      day: "Day 4",
      title: "Hoi An Full Day",
      meals: "B/L/-",
      activities: [
        "Breakfast; market visit + Vietnamese cooking class (3-4 dishes; lunch = what you cook).",
        "Afternoon: cycling through rice paddies and local villages (1.5 hrs, flat).",
        "Ancient Town guided tour: Japanese Covered Bridge, Assembly Hall, Tan Ky House.",
        "Evening: lantern release on Thu Bon River at dusk.",
      ],
    },
    {
      day: "Day 5",
      title: "My Son Sunrise - Hue Transfer",
      meals: "B/L/-",
      activities: [
        "07:00 - Pick up; drive to My Son Sanctuary.",
        "UNESCO Cham towers (4th-13th c. Hindu temples); 10:30 - Siva dance performance.",
        "12:00 - Depart via Hai Van Pass (1,448 m panoramic stop) - Lang Co Beach photo stop.",
        "Arrive Hue; lunch at Hue royal cuisine restaurant; check-in; Dong Ba Market.",
      ],
    },
    {
      day: "Day 6",
      title: "Hue Heritage Full Day",
      meals: "B/L/D",
      activities: [
        "Breakfast; 10:00 - Khai Dinh Royal Tomb (unique ceramic-mosaic mausoleum).",
        "11:30 - Lunch at Hue restaurant.",
        "13:00 - Imperial Citadel UNESCO (Noon Gate, Thai Hoa Palace, Thai Mieu Temple).",
        "14:30 - Optional: Minh Mang Royal Tomb (scenic lake; skip if short on time).",
        "15:15 - Thien Mu Pagoda (7-storey, 1601 AD); Perfume River view.",
        "19:00 - Private Dragon Boat: 90-min sunset Perfume River cruise.",
        "Royal Hue Dinner: 8-course royal cuisine experience.",
      ],
    },
    {
      day: "Day 7",
      title: "Hue - Da Nang Airport",
      meals: "B/-/-",
      activities: [
        "Breakfast; optional Dong Ba Market browse.",
        "Private transfer Hue - Da Nang Airport (~2 hrs).",
        "Tour ends - safe travels!",
      ],
    },
  ],
};

const packageFourDetails: PackageDetailsData = {
  title: "South Vietnam + Highlands",
  duration: "7 Days / 6 Nights",
  destinations: "HCMC - Cu Chi - Mekong Delta - Da Lat - Nha Trang",
  pricing: [
    { label: "3-Star Hotel", price: "₹52,500" },
    { label: "4-Star Hotel", price: "₹73,000" },
    { label: "5-Star Hotel", price: "₹1,11,500" },
  ],
  included: [
    "HCMC airport transfers",
    "Hotel accommodation (3/4/5-star)",
    "HCMC city tour + Cu Chi Tunnels half day",
    "Mekong Delta full-day (My Tho, Ben Tre, Vinh Trang Pagoda)",
    "Domestic flights (HCMC-Da Lat & Da Lat-Nha Trang) - included",
    "Da Lat highlands: Langbiang + Elephant Falls",
    "Nha Trang 4-Island snorkelling + Thap Ba Mud Bath",
    "All meals as per itinerary",
    "All entrance fees",
  ],
  excluded: [
    "International flights",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "AK-47 shooting (optional surcharge)",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival HCMC (Saigon)",
      meals: "-/-/-",
      activities: [
        "Arrive Tan Son Nhat Airport (SGN); private AC transfer to District 1 hotel.",
        "Check-in from 14:00; evening: Ben Thanh Market, Bui Vien Walking Street.",
      ],
    },
    {
      day: "Day 2",
      title: "HCMC City Tour + Cu Chi Tunnels",
      meals: "B/L/-",
      activities: [
        "Breakfast; 07:30-08:00 - Pick up District 1.",
        "Morning: Reunification Palace, Notre-Dame Cathedral, Central Post Office, War Remnants Museum.",
        "Noon - Lunch (vegetarian options available).",
        "Afternoon: Cu Chi Tunnels (45 km; ~1 hr drive).",
        "Watch documentary; bamboo traps & weapon exhibits; crawl 70 m tunnel (optional).",
        "Try steamed cassava; learn rice paper & rice wine making.",
        "17:30 - Depart Cu Chi; 18:30 - Hotel drop-off HCMC.",
      ],
    },
    {
      day: "Day 3",
      title: "Mekong Delta Full Day",
      meals: "B/L/-",
      activities: [
        "Breakfast; 07:30-08:15 - Pick up near Ben Thanh; drive My Tho-Ben Tre.",
        "Mekong Restop; Vinh Trang Pagoda (19th-century European-Asian architecture).",
        "My Tho Cruise Port - Tien River boat: 4 islets (Long, Lan, Qui, Phung).",
        "Thoi Son Island: fruit garden, honey bee farm, honey lemon tea.",
        "Don Ca Tai Tu folk music; tropical fruit tasting; coconut candy workshop.",
        "Rowing boat through coconut-palm canals; noon lunch at riverside restaurant.",
        "14:30 - Return My Tho by boat; 17:00 - Drop-off HCMC.",
      ],
    },
    {
      day: "Day 4",
      title: "HCMC - Da Lat Highlands",
      meals: "B/-/D",
      activities: [
        "Breakfast; transfer to SGN Airport; VietJet flight HCMC - Da Lat (~45 min).",
        "Da Lat airport transfer to hotel.",
        "Afternoon: Da Lat Central Market (strawberries, artichokes, flowers).",
        "Crazy House (Hang Nga - Gaudi-inspired surreal architecture).",
        "Xuan Huong Lake evening walk; dinner at hotel.",
      ],
    },
    {
      day: "Day 5",
      title: "Da Lat Highlands - Nha Trang",
      meals: "B/L/-",
      activities: [
        "Breakfast; Jeep ride to Langbiang Mountain (2,167 m).",
        "Trek to summit: panoramic Da Lat plateau views (~1.5 hrs, easy-moderate pace).",
        "Lunch at local Da Lat restaurant.",
        "Elephant Waterfalls: short scenic stop (~30 min).",
        "Transfer to Da Lat Airport; VietJet flight Da Lat - Nha Trang (~45 min).",
        "Nha Trang check-in; evening Tran Phu Beach promenade walk.",
      ],
    },
    {
      day: "Day 6",
      title: "Nha Trang 4-Island Tour + Mud Bath",
      meals: "B/L/-",
      activities: [
        "Breakfast; 08:30 - Speed boat to 4 islands.",
        "Mun Island: snorkelling at coral reef; Mot Island: white-sand beach swim.",
        "Tam Island: traditional fishing village; on-deck set-menu lunch.",
        "14:30 - Return; transfer to Thap Ba Hot Spring & Mud Bath Centre.",
        "90-min therapeutic volcanic mud bath + mineral hot spring soak.",
        "Evening: Nha Trang Night Market.",
      ],
    },
    {
      day: "Day 7",
      title: "Nha Trang - Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast; optional: Long Son Pagoda (giant white Buddha).",
        "Private transfer to Cam Ranh Airport (Nha Trang).",
        "Tour ends - safe travels!",
      ],
    },
  ],
};

const packageFiveDetails: PackageDetailsData = {
  title: "Vietnam Honeymoon Premium",
  duration: "10 Days / 9 Nights",
  destinations: "Hanoi - Ha Long Bay (Luxury Cruise) - Hoi An - Hue - Phu Quoc",
  pricing: [
    { label: "3-Star Hotel", price: "Not available" },
    { label: "4-Star Hotel", price: "₹1,42,000" },
    { label: "5-Star Hotel", price: "₹2,11,000" },
  ],
  included: [
    "All private airport transfers (3 cities)",
    "Boutique / luxury hotel accommodation (4/5-star romance tier)",
    "Ha Long Bay 2D/1N luxury cruise (couple setup)",
    "Private Hoi An cooking class + private lantern boat ride",
    "Hue private dragon boat + royal dinner for two (candles, musician)",
    "Phu Quoc: sunset sailing + 2-hr couple's spa massage",
    "Romantic room decor (rose petals, welcome fruit, mood lighting)",
    "All meals as per itinerary",
    "All entrance fees + domestic flights (Hanoi-Da Nang & Da Nang-Phu Quoc)",
    "Dedicated English-speaking coordinator 24/7",
  ],
  excluded: [
    "International flights (open-jaw HAN in, PQC out)",
    "Vietnam e-Visa (~₹2,500 per person)",
    "Tips & gratuities",
    "Champagne & premium beverages",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Hanoi - Boutique Hotel",
      meals: "-/-/-",
      activities: [
        "VIP airport pick-up; private AC sedan; coordinator welcome.",
        "Check-in boutique hotel; room with flowers & welcome card (pre-arranged).",
        "Romantic evening walk: Hoan Kiem Lake at dusk.",
        "Dinner at upscale Hanoi restaurant (French-Vietnamese fusion).",
      ],
    },
    {
      day: "Day 2",
      title: "Hanoi Romantic City Tour",
      meals: "B/L/-",
      activities: [
        "Breakfast (in-room option for 5-star).",
        "Private city tour: Ho Chi Minh Mausoleum, Temple of Literature, Hoan Kiem cyclo ride.",
        "Lunch at iconic Cha Ca La Vong restaurant (150-yr-old Hanoi speciality).",
        "Hang Gai (Silk Street) shopping; Egg Coffee at Giang Cafe (1946).",
        "Evening: Thang Long Water Puppet Show (premium seats pre-booked).",
      ],
    },
    {
      day: "Day 3",
      title: "Ha Long Bay 2D/1N Luxury Cruise",
      meals: "B/L/D",
      activities: [
        "Breakfast; 08:00 - Pick up; 11:30 - Arrive Tuan Chau Marina.",
        "12:00 - Board luxury cruise; champagne welcome; couple cabin setup.",
        "12:45 - Private lunch while cruising karst formations.",
        "Afternoon - Private kayaking through Luon Cave; swim at secluded beach.",
        "17:30 - Sunset party (golden-hour photography).",
        "18:00 - Private cooking class; 7-course dinner; 21:00 - Star-gazing from sundeck.",
      ],
    },
    {
      day: "Day 4",
      title: "Ha Long Morning - Fly Da Nang - Hoi An Resort",
      meals: "B/L/-",
      activities: [
        "08:00 - Dark & Bright Cave kayaking.",
        "09:30 - Check-out; 10:00 - Last lunch; 11:30 - Dock; bus to Hanoi (arr. 15:30).",
        "Flight Hanoi - Da Nang (1 hr); transfer to Hoi An resort (45 min).",
        "Check-in: rose-petal welcome; evening lantern stroll Hoi An Ancient Town.",
      ],
    },
    {
      day: "Day 5",
      title: "Hoi An Romantic Day",
      meals: "B/L/-",
      activities: [
        "Breakfast (pool-side for 5-star).",
        "Private cooking class for two (4 dishes) + market visit.",
        "Afternoon: cycling through rice fields + basket boat in coconut forest.",
        "Evening: private lantern boat on Thu Bon River at sunset.",
        "Dinner at The Deck (finest restaurant in Hoi An; reservations arranged).",
      ],
    },
    {
      day: "Day 6",
      title: "My Son Sunrise - Hue",
      meals: "B/L/-",
      activities: [
        "07:00 - Pick up; My Son Cham Ruins (4th-13th c.); 10:30 - Siva dance performance.",
        "Depart via Hai Van Pass panoramic stop - Lang Co Beach photo stop.",
        "Lunch at Hue royal cuisine restaurant.",
        "Check-in La Residence & Spa; evening: Thien Mu Pagoda at dusk.",
      ],
    },
    {
      day: "Day 7",
      title: "Hue Heritage + Private Royal Dinner",
      meals: "B/L/D",
      activities: [
        "Breakfast; private guided Imperial Citadel tour (UNESCO).",
        "10:00 - Khai Dinh Royal Tomb; 12:00 - Multi-course royal Hue lunch.",
        "19:00 - Private dragon boat: 90-min Perfume River cruise for two.",
        "Live traditional musician on board; royal Hue dinner with candles & lanterns.",
      ],
    },
    {
      day: "Day 8",
      title: "Hue - Da Nang - Phu Quoc",
      meals: "B/-/-",
      activities: [
        "Breakfast; transfer Da Nang Airport (~2 hrs); flight Da Nang - Phu Quoc (~1.5 hrs).",
        "Phu Quoc resort check-in: honeymoon suite (rose petals, fruits; pre-arranged).",
        "Afternoon: beach & infinity pool; evening: sunset from resort jetty.",
      ],
    },
    {
      day: "Day 9",
      title: "Phu Quoc - Sailing + Spa",
      meals: "B/L/-",
      activities: [
        "Breakfast; 10:00 - Private sailing cruise (4 hrs; An Thoi archipelago).",
        "Snorkelling at coral reef with guide; BBQ lunch on deck.",
        "14:00 - 2-hr couple's Vietnamese massage at resort spa.",
        "Evening: Duong Dong Night Market (pearl jewellery, fresh seafood).",
      ],
    },
    {
      day: "Day 10",
      title: "Phu Quoc - Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast at resort; leisurely morning.",
        "Optional: Vinwonders cable car or An Thoi island exploration.",
        "Transfer to Phu Quoc International Airport.",
        "Tour ends - congratulations on your honeymoon!",
      ],
    },
  ],
};

const packageSixDetails: PackageDetailsData = {
  title: "Family Fun Circuit",
  duration: "10 Days / 9 Nights",
  destinations: "Hanoi - Ha Long - Da Nang - Ba Na Hills - Hoi An - HCMC - Phu Quoc",
  pricing: [
    { label: "3-Star Hotel", price: "₹91,000 per adult*" },
    { label: "4-Star Hotel", price: "₹1,24,500 per adult*" },
    { label: "5-Star Hotel", price: "Contact us" },
  ],
  included: [
    "All airport transfers (Hi-Ace private vehicle)",
    "Hotel family rooms throughout",
    "Ha Long Bay 2D/1N family cruise (Era Cruises; connecting cabins)",
    "Ba Na Hills full day (Fantasy Park included)",
    "Hoi An: kids' lantern making + cooking class",
    "HCMC city tour + Cu Chi Tunnels (family version)",
    "Mekong Delta family day tour",
    "Vinpearl Phu Quoc 2 nights (amusement park + aquarium included)",
    "All meals as per itinerary",
    "All entrance fees + domestic flights (Hanoi-Da Nang, Da Nang-HCMC & HCMC-Phu Quoc)",
  ],
  excluded: [
    "Vietnam e-Visa (children under 14 may be exempt - verify)",
    "Tips & gratuities",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Hanoi",
      meals: "-/-/-",
      activities: [
        "Noi Bai Airport family pick-up in Hi-Ace (4 pax + luggage).",
        "Check-in family room; evening: Hoan Kiem Lake + Old Quarter street food walk.",
      ],
    },
    {
      day: "Day 2",
      title: "Hanoi Kid-Friendly City Tour",
      meals: "B/L/-",
      activities: [
        "Breakfast; Vietnam Museum of Ethnology (outdoor ethnic village models - kids love it).",
        "Temple of Literature; lunch (vegetarian options; kids menu).",
        "Thang Long Water Puppet Show (45 min - highly recommended for children).",
        "Evening: Dong Xuan Market toys & souvenirs.",
      ],
    },
    {
      day: "Day 3",
      title: "Ha Long Bay 2D/1N Family Cruise",
      meals: "B/L/D",
      activities: [
        "Breakfast; 08:00 - Pick up; 12:00 - Board Era Cruises (2 connecting family cabins).",
        "12:30 - Lunch; kids' activity briefing by crew.",
        "Afternoon - Kayaking; swimming platform; cave exploration.",
        "17:30 - Kids' squid fishing & sunset party; 19:00 - Dinner; family movies/games.",
      ],
    },
    {
      day: "Day 4",
      title: "Ha Long - Fly Da Nang - Beach Hotel",
      meals: "B/L/-",
      activities: [
        "07:00 - Breakfast on cruise; 08:00 - Kayak or bamboo boat at Dark Cave (30 min).",
        "09:30 - Cruise check-out; last lunch on board at 10:00.",
        "11:30 - Dock; limo bus to Hanoi (~3.5 hrs).",
        "~15:30 - Arrive Hanoi; domestic flight HAN - Da Nang (1 hr).",
        "Check-in Da Nang beach hotel; light dinner; rest - no mandatory activities.",
      ],
    },
    {
      day: "Day 5",
      title: "Ba Na Hills Family Day",
      meals: "B/L/-",
      activities: [
        "Breakfast; 08:00 - Pick up to Ba Na Hills (30-40 min).",
        "09:40 - Cable car up (kids love it!); Golden Bridge photo stop.",
        "Fantasy Park: roller coaster, VR games, carousel, giant slides - all-day fun.",
        "11:30 - Buffet lunch; Carnival Show; 15:00 - Cable car descent; 17:00 - Beach.",
      ],
    },
    {
      day: "Day 6",
      title: "Marble Mountains + Hoi An",
      meals: "B/-/D",
      activities: [
        "Breakfast; 15:00 - Marble Mountains (kids climb caves!).",
        "Transfer to Hoi An; check-in family pool hotel.",
        "Evening Ancient Town: lanterns, Hoai River boat; 18:00 - Family dinner.",
      ],
    },
    {
      day: "Day 7",
      title: "Hoi An - Kids' Lantern Making + Cooking",
      meals: "B/L/-",
      activities: [
        "Breakfast; morning pool time.",
        "10:00 - Kids' lantern making workshop (90 min); cooking class (eat what you cook!).",
        "Afternoon: cycling in rice fields (kids' bikes); basket boat in coconut forest.",
        "Evening: release lanterns on Thu Bon River - magical family memory.",
      ],
    },
    {
      day: "Day 8",
      title: "Fly HCMC + Mekong Delta",
      meals: "B/L/-",
      activities: [
        "Breakfast; flight Da Nang - HCMC (1 hr); check-in District 1.",
        "Afternoon Mekong Delta family tour: Ben Tre coconut canals, ducks, candy factory.",
        "Floating market + tropical fruit tasting (20+ varieties); 17:00 - Back HCMC.",
      ],
    },
    {
      day: "Day 9",
      title: "HCMC City + Cu Chi - Phu Quoc",
      meals: "B/L/-",
      activities: [
        "Breakfast; morning HCMC tour (07:30 pick-up).",
        "Reunification Palace + Notre-Dame Cathedral + Post Office.",
        "Cu Chi Tunnels family version (kid-safe sections, educational).",
        "Noon - Lunch; SGN Airport; VietJet - Phu Quoc (1 hr).",
        "Vinpearl check-in; evening: amusement park + waterslides.",
      ],
    },
    {
      day: "Day 10",
      title: "Phu Quoc - Vinpearl + Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast; Vinpearl Aquarium (sharks, rays - kids adore it).",
        "Amusement Park rides; beach; check-out; airport transfer.",
        "Tour ends - unforgettable family adventure!",
      ],
    },
  ],
};

const packageSevenDetails: PackageDetailsData = {
  title: "Senior Comfort Vietnam",
  duration: "12 Days / 11 Nights",
  destinations: "Hanoi - Ninh Binh - Ha Long - Da Nang - Hoi An - Hue - HCMC - Phu Quoc",
  pricing: [
    { label: "3-Star Hotel", price: "Not available" },
    { label: "4-Star Hotel", price: "₹1,31,500" },
    { label: "5-Star Hotel", price: "₹1,82,500" },
  ],
  included: [
    "All private door-to-door AC sedan transfers (no shared buses)",
    "Lift access & ground-floor rooms confirmed at all hotels",
    "Ha Long Bay 2D/1N luxury cruise (gangway assistance)",
    "Ninh Binh: Trang An boat (100% seated; no hiking)",
    "Hoi An by cyclo - no walking required",
    "Hue: golf cart inside Imperial Citadel (no stairs)",
    "Hue private dragon boat + royal dinner",
    "Phu Quoc: glass-bottom boat + couple's spa",
    "All entrance fees + senior travel insurance + domestic flights (Hanoi-Da Nang, Da Nang-HCMC & HCMC-Phu Quoc)",
    "Wheelchair assistance at all airports on request",
    "English-speaking coordinator 24/7",
  ],
  excluded: [
    "International flights (open-jaw HAN in, PQC out)",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Hanoi",
      meals: "-/-/-",
      activities: [
        "Dedicated airport meet & greet; wheelchair assist on request.",
        "Private AC sedan to hotel (lift & porter service confirmed); check-in from 14:00.",
        "Optional gentle stroll: Hoan Kiem Lake (flat, 20 min; benches available).",
      ],
    },
    {
      day: "Day 2",
      title: "Hanoi Easy City Tour",
      meals: "B/L/-",
      activities: [
        "Breakfast; car-based city tour (minimal walking; AC throughout).",
        "Ho Chi Minh Mausoleum exterior; One Pillar Pagoda; Temple of Literature (flat, shaded).",
        "Lunch at air-conditioned restaurant (armchairs; vegetarian options).",
        "Hoan Kiem Lake at leisure; Ngoc Son Temple (flat bridge; guide assists).",
        "Evening: Thang Long Water Puppet Show (seated, 45 min, AC).",
      ],
    },
    {
      day: "Day 3",
      title: "Ninh Binh Easy Day",
      meals: "B/L/D",
      activities: [
        "Breakfast; private car to Ninh Binh (2 hrs; comfort stop en route).",
        "Hoa Lu Ancient Capital (flat paved paths); buffet lunch.",
        "Trang An boat cruise: 100% seated wooden boat (~2 hrs; calm water; no hiking).",
        "Check-in Emeralda Resort (flat grounds; golf cart; spa); dinner at resort.",
      ],
    },
    {
      day: "Day 4",
      title: "Ninh Binh - Ha Long Luxury Cruise",
      meals: "B/L/D",
      activities: [
        "Breakfast; private car to Marina (2.5 hrs; comfort stops).",
        "Gangway assistance confirmed; cabin with bay view; flat-deck walking only.",
        "Bamboo boat option (fully seated; no kayaking required).",
        "Sung Sot Cave: flat pathway (no steep steps); sunset party (deck chairs).",
        "Dinner on board; early sleep fully available.",
      ],
    },
    {
      day: "Day 5",
      title: "Ha Long Morning - Fly Da Nang",
      meals: "B/L/-",
      activities: [
        "07:00 - Breakfast on cruise; optional: seated bamboo boat (30 min, no kayaking).",
        "09:00 - Cruise check-out; 10:00 - Last lunch on board.",
        "11:30 - Dock; private car to Hanoi (~2.5 hrs).",
        "Domestic flight - Da Nang; Da Nang beach resort check-in.",
        "Afternoon: rest at resort; optional gentle beach promenade walk.",
      ],
    },
    {
      day: "Day 6",
      title: "Hoi An by Cyclo - Ancient Town Easy Tour",
      meals: "B/-/D",
      activities: [
        "Breakfast; private transfer to Hoi An (45 min; comfort stop).",
        "Entire Ancient Town tour by cyclo (no walking required).",
        "Japanese Covered Bridge, Assembly Hall, Tan Ky House, tailors' street.",
        "Cafe rest after every 2 sites; lunch at leisure (AC restaurant, armchairs).",
        "Check-in heritage hotel; rest; dinner (vegetarian options confirmed).",
      ],
    },
    {
      day: "Day 7",
      title: "Hoi An Rest Day",
      meals: "B/-/-",
      activities: [
        "Breakfast; fully free day - no mandatory activities.",
        "Recommended: Hoi An Day Spa (full body massage + reflexology).",
        "Optional: My Son Ruins (car-based; flat paths); market browse at leisure.",
        "Evening: riverside restaurant; lanterns at dusk from terrace seating.",
      ],
    },
    {
      day: "Day 8",
      title: "Hue Heritage (Golf Cart + Dragon Boat)",
      meals: "B/L/D",
      activities: [
        "Breakfast; private transfer Hue via Hai Van Pass (~2 hrs; scenic photo stop by car).",
        "La Residence Hotel check-in (golf cart within grounds; UNESCO building).",
        "Hue Imperial Citadel by golf cart - entire tour by cart; no stairs required.",
        "17:00 - Thien Mu Pagoda (flat platform; accessed by car).",
        "19:00 - Private covered dragon boat: 90-min Perfume River cruise (seated).",
        "Royal Hue 8-course dinner on board (vegetarian version available).",
      ],
    },
    {
      day: "Day 9",
      title: "Hue - Da Nang - HCMC",
      meals: "B/-/-",
      activities: [
        "Breakfast; transfer Da Nang Airport (~2 hrs); domestic flight - HCMC (1 hr 15 min).",
        "HCMC check-in central hotel (porter, lift, flat access); rest.",
        "Optional gentle evening: Notre-Dame Cathedral & Post Office by car.",
      ],
    },
    {
      day: "Day 10",
      title: "HCMC Easy City Tour",
      meals: "B/L/-",
      activities: [
        "Breakfast; 07:30 - Pick up; car-based city tour (no long walks; AC throughout).",
        "Reunification Palace (ground floor; lift); Notre-Dame Cathedral (short flat walk).",
        "War Remnants Museum (seated exhibits; 45 min).",
        "Noon - Lunch (AC; armchairs; vegetarian options).",
        "Afternoon: hotel rest / spa / pool; optional: Saigon Sky Deck (elevator only).",
      ],
    },
    {
      day: "Day 11",
      title: "HCMC - Phu Quoc",
      meals: "B/-/-",
      activities: [
        "Breakfast; transfer SGN; VietJet - Phu Quoc (1 hr).",
        "Resort check-in (flat grounds; golf cart; beachfront).",
        "Afternoon: beach & pool - rest & recharge; resort dinner.",
      ],
    },
    {
      day: "Day 12",
      title: "Phu Quoc - Spa + Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast; 2-hr Vietnamese massage at resort spa (in-room option available).",
        "Glass-bottom boat tour: view coral reefs without swimming (seated, covered).",
        "Check-out; transfer to Phu Quoc Airport.",
        "Tour ends - we hope Vietnam touched your heart!",
      ],
    },
  ],
};

const packageEightDetails: PackageDetailsData = {
  title: "North-Central Adventure",
  duration: "9 Days / 8 Nights",
  destinations: "Hanoi - Cat Ba Island (Ha Long) - Phong Nha Caves (UNESCO) - Hue - Hoi An",
  pricing: [
    { label: "3-Star Hotel", price: "₹52,000" },
    { label: "4-Star Hotel", price: "₹75,000" },
    { label: "5-Star Hotel", price: "₹1,12,000" },
  ],
  included: [
    "All airport transfers + inter-city AC transfers",
    "Hotel accommodation (3/4/5-star as selected)",
    "Cat Ba Island: beaches (Cat Co 1,2,3) + Lan Ha Bay kayaking",
    "Phong Nha Cave boat tour + Dark Cave zip-line & swim",
    "Paradise Cave (largest dry cave in Asia) full tour",
    "Hue heritage (Imperial Citadel + Royal Tombs + Dragon Boat)",
    "Hoi An Ancient Town + My Son UNESCO day tour",
    "All meals as per itinerary",
    "All entrance fees",
    "English-speaking coordinator 24/7",
  ],
  excluded: [
    "International flights",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "Son Doong cave expedition (separate specialist tour)",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Hanoi",
      meals: "-/-/-",
      activities: [
        "Arrive Noi Bai Airport; private AC transfer to Old Quarter hotel.",
        "Check-in from 14:00; evening: Hoan Kiem Lake, Train Street, Egg Coffee.",
      ],
    },
    {
      day: "Day 2",
      title: "Hanoi City Tour - Ferry to Cat Ba Island",
      meals: "B/L/-",
      activities: [
        "Breakfast; half-day Hanoi city tour: Temple of Literature, Ho Chi Minh Mausoleum, Hoan Kiem Lake.",
        "Afternoon: transfer to Haiphong port (2 hrs); ferry to Cat Ba Island (45 min).",
        "Arrive Cat Ba town; check-in island hotel; evening free: seafood dinner at Cat Ba harbour.",
        "Cat Ba is the largest island in Ha Long Bay - UNESCO Biosphere Reserve.",
      ],
    },
    {
      day: "Day 3",
      title: "Cat Ba Island - Lan Ha Bay Kayaking + Cat Co Beach",
      meals: "B/L/-",
      activities: [
        "Breakfast; 08:30 - Boat to Lan Ha Bay (quieter, more pristine section of Ha Long).",
        "Private kayaking through Lan Ha Bay lagoons and sea caves (~3 hrs).",
        "Swimming at secluded white-sand beach coves (private; no tour groups).",
        "Seafood set-menu lunch on boat.",
        "Afternoon: Cat Co Beach (1, 2, or 3) - clifftop scenic path connecting all 3.",
        "Cat Co 1: most popular family beach; Cat Co 3: quietest, most beautiful.",
        "Evening: sunset from Cat Ba town harbour promenade.",
      ],
    },
    {
      day: "Day 4",
      title: "Cat Ba - Hanoi - Overnight Bus to Phong Nha",
      meals: "B/L/-",
      activities: [
        "Breakfast at island hotel; morning: Hospital Cave (WWII H'mong hideout - fascinating history).",
        "Ferry + transfer back to Hanoi (arrive ~13:00); lunch in Hanoi.",
        "Afternoon free in Hanoi; evening dinner.",
        "21:00 - Board overnight sleeper bus Hanoi - Phong Nha (~8 hrs).",
      ],
    },
    {
      day: "Day 5",
      title: "Phong Nha - Dark Cave Zip-Line + Phong Nha Cave",
      meals: "B/L/D",
      activities: [
        "Arrive Phong Nha; breakfast; check-in accommodation.",
        "Morning: Phong Nha Cave boat tour (UNESCO World Heritage).",
        "Glide by boat into the illuminated cave system - 8 km long; stunning formations.",
        "Afternoon: Dark Cave adventure package - zip-line into the cave mouth over the Son River.",
        "Swim through cave pools in the dark (headlamp provided); mud bath inside the cave (natural volcanic mud).",
        "Kayak through the cave to exit.",
        "Evening: dinner at local Phong Nha farmstay restaurant.",
      ],
    },
    {
      day: "Day 6",
      title: "Phong Nha - Paradise Cave + Transfer to Hue",
      meals: "B/L/-",
      activities: [
        "Breakfast; 08:00 - Paradise Cave: the largest dry cave in Asia (31 km long; 80 m high cathedral chamber).",
        "1.6 km wooden boardwalk inside; guided tour highlighting unique speleothems.",
        "Phong Nha Botanical Garden walk (30 min flat; jungle atmosphere).",
        "Noon - Lunch at local restaurant.",
        "Afternoon: transfer Phong Nha - Hue (~2.5 hrs on Highway 1A).",
        "Check-in Hue hotel; evening free: Dong Ba Market or riverside walk.",
      ],
    },
    {
      day: "Day 7",
      title: "Hue Heritage Full Day",
      meals: "B/L/D",
      activities: [
        "Breakfast; 10:00 - Khai Dinh Royal Tomb (ceramic-mosaic mausoleum).",
        "11:30 - Lunch at Hue restaurant.",
        "13:00 - Hue Imperial Citadel UNESCO: Noon Gate, Thai Hoa Palace, Thai Mieu Temple.",
        "14:00 - Minh Mang Royal Tomb (scenic lake & gardens).",
        "15:00 - Thien Mu Pagoda (7-storey; 1601 AD; Perfume River view).",
        "19:00 - Private Dragon Boat: 90-min sunset Perfume River cruise.",
        "Royal Hue Dinner: 8-course royal cuisine experience.",
      ],
    },
    {
      day: "Day 8",
      title: "Hue - Hoi An (My Son + Ancient Town)",
      meals: "B/L/-",
      activities: [
        "Breakfast; 07:00 - Pick up for My Son Sanctuary (UNESCO Cham Ruins, 4th-13th c.).",
        "10:30 - Siva music & dance performance among ancient towers.",
        "12:00 - Depart for Hoi An via Hai Van Pass (panoramic photo stop).",
        "Arrive Hoi An; check-in hotel; lunch.",
        "Afternoon: Hoi An Ancient Town guided walk: Japanese Covered Bridge, Assembly Hall.",
        "Evening: Hoai River lantern boat at dusk; Old Quarter Night Market.",
      ],
    },
    {
      day: "Day 9",
      title: "Hoi An - Da Nang Airport - Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast; optional morning: An Bang Beach (Hoi An's best beach; 5 min from town).",
        "Private transfer Hoi An - Da Nang Airport (45 min).",
        "Tour ends - safe travels!",
      ],
    },
  ],
};

const packageNineDetails: PackageDetailsData = {
  title: "Central Coast Escape",
  duration: "7 Days / 6 Nights",
  destinations: "Da Nang - Ba Na Hills - Hoi An - Quy Nhon - Ky Co Beach - Nha Trang",
  pricing: [
    { label: "3-Star Hotel", price: "₹44,000" },
    { label: "4-Star Hotel", price: "₹63,500" },
    { label: "5-Star Hotel", price: "₹1,02,000" },
  ],
  included: [
    "Da Nang airport transfers",
    "Hotel accommodation (3/4/5-star)",
    "Ba Na Hills full day (Golden Bridge + Fantasy Park)",
    "Hoi An Ancient Town + cooking class",
    "Quy Nhon: Ky Co Beach boat trip (the Maldives of Vietnam)",
    "Thap Doi Cham Towers + Phuong Mai Sand Dunes",
    "Nha Trang: 4-Island snorkelling + Thap Ba Mud Bath",
    "All meals as per itinerary",
    "All entrance fees",
    "English-speaking coordinator 24/7",
  ],
  excluded: [
    "International flights",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "Quy Nhon - Nha Trang road transfer (~1.5 hrs; no flight needed)",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Da Nang",
      meals: "-/-/-",
      activities: [
        "Da Nang Airport pick-up; private AC transfer to hotel.",
        "Check-in from 14:00; evening: My Khe Beach sunset walk (Asia's finest urban beach).",
        "Optional: Han River Night Market; Dragon Bridge fire & water show (Sat/Sun).",
      ],
    },
    {
      day: "Day 2",
      title: "Ba Na Hills Full Day",
      meals: "B/L/-",
      activities: [
        "Breakfast; 08:00-08:30 - Pick up to Ba Na Hills (30-40 min).",
        "09:40 - World's longest cable car (5,772 m); Golden Bridge iconic photo stop.",
        "Le Jardin D'Amour (9 gardens); Linh Ung Pagoda; French Village.",
        "11:30 - Buffet lunch; Fantasy Park all-afternoon (roller coaster, 4D film).",
        "15:00 - Cable car descent; stop Han Market; 17:00 - Hotel drop-off.",
      ],
    },
    {
      day: "Day 3",
      title: "Hoi An - Ancient Town + Cooking Class",
      meals: "B/L/-",
      activities: [
        "Breakfast; transfer Da Nang - Hoi An (45 min).",
        "Check-in hotel; afternoon Vietnamese cooking class (market visit + 3-4 dishes).",
        "Lunch: eat your own prepared dishes.",
        "Evening: Hoi An Ancient Town guided walk: Japanese Covered Bridge, Assembly Hall.",
        "Hoai River lantern boat + night market; dinner at leisure.",
      ],
    },
    {
      day: "Day 4",
      title: "Hoi An - Quy Nhon - Ky Co Beach",
      meals: "B/L/-",
      activities: [
        "Breakfast; transfer Hoi An - Quy Nhon (~2.5 hrs drive or 1-hr flight).",
        "Check-in Quy Nhon beachfront hotel (FLC Quy Nhon or Avani resort).",
        "Afternoon: Ky Co Beach boat trip (25 km from Quy Nhon) - called 'the Maldives of Vietnam'.",
        "Turquoise lagoon, granite cliffs, white sand; snorkelling at crystal-clear coral reef.",
        "Far less crowded than Nha Trang - pristine & photogenic.",
        "Evening: fresh seafood dinner at Quy Nhon fishing harbour.",
      ],
    },
    {
      day: "Day 5",
      title: "Quy Nhon - Cham Towers + Sand Dunes",
      meals: "B/L/-",
      activities: [
        "Breakfast; 09:00 - Thap Doi Cham Towers (11th-12th century twin Cham towers in the city).",
        "Ghenh Rang Pine Forest & Xuan Van Beach (quiet local beach; pine hills).",
        "Banh It Cham Tower complex (hilltop ruins; panoramic Binh Dinh plains views).",
        "Lunch at local Quy Nhon restaurant (speciality: Banh Xeo Quy Nhon).",
        "Afternoon: Phuong Mai Sand Dunes (red-gold dunes meeting the sea - unique landscape).",
        "Sand-boarding on dunes; sunset photography from dune summit.",
        "Evening: local fishing village walk; seafood market at leisure.",
      ],
    },
    {
      day: "Day 6",
      title: "Quy Nhon - Nha Trang - 4 Islands + Mud Bath",
      meals: "B/L/-",
      activities: [
        "Breakfast; transfer Quy Nhon - Nha Trang (~1.5 hrs drive).",
        "Check-in Nha Trang hotel (on Tran Phu Beach strip).",
        "Afternoon: leisure at Tran Phu Beach; Nha Trang city walk.",
        "14:30 - Thap Ba Hot Spring & Mud Bath Centre (90-min volcanic mud + mineral soak).",
        "Evening: Nha Trang Night Market for fresh seafood & souvenirs.",
      ],
    },
    {
      day: "Day 7",
      title: "Nha Trang - Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast; optional: Long Son Pagoda (giant white Buddha; 1930s landmark).",
        "Private transfer to Cam Ranh Airport (Nha Trang).",
        "Tour ends - safe travels! Quy Nhon & Ky Co Beach are unique coastal additions not found in other packages.",
      ],
    },
  ],
};

const packageTenDetails: PackageDetailsData = {
  title: "Southern Coast & Mui Ne",
  duration: "8 Days / 7 Nights",
  destinations: "HCMC - Cu Chi - Mekong Delta - Mui Ne Sand Dunes - Nha Trang - Phu Quoc",
  pricing: [
    { label: "3-Star Hotel", price: "₹52,500" },
    { label: "4-Star Hotel", price: "₹74,000" },
    { label: "5-Star Hotel", price: "₹1,12,000" },
  ],
  included: [
    "HCMC airport transfers",
    "Hotel accommodation (3/4/5-star)",
    "HCMC city tour + Cu Chi Tunnels half day",
    "Mekong Delta full-day family tour",
    "Mui Ne: Red & White Sand Dunes + Fairy Stream + Fishing Village",
    "Nha Trang: 4-Island snorkelling + Thap Ba Mud Bath",
    "Phu Quoc: 2 nights (beach + sunset sailing)",
    "All meals as per itinerary",
    "All entrance fees + domestic flight (Nha Trang-Phu Quoc)",
    "English-speaking coordinator 24/7",
  ],
  excluded: [
    "Domestic flight (Nha Trang-Phu Quoc) noted as included",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival HCMC",
      meals: "-/-/-",
      activities: [
        "Arrive SGN Airport; private AC transfer to District 1 hotel.",
        "Check-in from 14:00; evening: Ben Thanh Market, Bui Vien Walking Street.",
      ],
    },
    {
      day: "Day 2",
      title: "HCMC City Tour + Cu Chi Tunnels",
      meals: "B/L/-",
      activities: [
        "Breakfast; 07:30-08:00 - Pick up District 1.",
        "Morning: Reunification Palace, Notre-Dame Cathedral, War Remnants Museum.",
        "Noon - Lunch; afternoon: Cu Chi Tunnels (~1 hr drive).",
        "Watch documentary; bamboo traps; crawl 70 m original tunnel (optional).",
        "Try steamed cassava; 17:30 - Depart; 18:30 - Hotel HCMC.",
      ],
    },
    {
      day: "Day 3",
      title: "Mekong Delta Full Day",
      meals: "B/L/-",
      activities: [
        "Breakfast; 07:30-08:15 - Pick up near Ben Thanh; Mekong Delta (My Tho-Ben Tre).",
        "Vinh Trang Pagoda (19th century); Tien River boat: 4 islets.",
        "Thoi Son Island: fruit garden, honey bee farm, Don Ca Tai Tu folk music.",
        "Rowing boat through coconut-palm canals; coconut candy workshop.",
        "Noon - Riverside lunch; 14:30 - Return boat; 17:00 - Back HCMC.",
      ],
    },
    {
      day: "Day 4",
      title: "HCMC - Mui Ne (Sand Dunes Town)",
      meals: "B/-/D",
      activities: [
        "Breakfast; private car transfer HCMC - Mui Ne (~4.5 hrs; comfort stop en route).",
        "Check-in Mui Ne beachfront resort (bungalow-style; palm trees; sea view).",
        "Afternoon: Mui Ne fishing harbour walk (most colourful fishing fleet in South Vietnam).",
        "Evening: dinner at beachside restaurant; Mui Ne Beach sunset.",
      ],
    },
    {
      day: "Day 5",
      title: "Mui Ne - Red Dunes + White Dunes + Fairy Stream",
      meals: "B/L/-",
      activities: [
        "Breakfast; 05:30 - Sunrise jeep tour (most spectacular time at dunes).",
        "Red Sand Dunes (Doi Hong): dramatic crimson dunes at sunrise - most photogenic in Vietnam.",
        "Sand-boarding down dunes; camel/quad bike rides (optional).",
        "White Sand Dunes (Bau Trang Lake): pure white dunes meeting a blue lake - surreal landscape.",
        "Fairy Stream (Suoi Tien): wade through shallow stream between red rock canyon walls (30 min).",
        "Poshanu Cham Tower ruins (oldest Cham heritage in South Vietnam; hilltop views).",
        "Noon - Lunch at local seafood restaurant.",
        "Afternoon: free time at resort beach (Mui Ne is Asia's kitesurfing capital); optional kitesurfing lesson (Nov-Apr best season).",
      ],
    },
    {
      day: "Day 6",
      title: "Mui Ne - Nha Trang - 4 Islands + Mud Bath",
      meals: "B/L/-",
      activities: [
        "Breakfast; transfer/flight Mui Ne - Nha Trang (~3 hrs drive).",
        "Check-in Nha Trang beachfront hotel.",
        "Afternoon: leisure at Tran Phu Beach; optional beach clubs or Nha Trang city walk.",
        "14:30 - Thap Ba Hot Spring & Mud Bath Centre (90-min mud bath + mineral soak).",
        "Evening: Nha Trang Night Market.",
        "Note: 4-island boat tour available on Day 7 morning before airport drop-off.",
      ],
    },
    {
      day: "Day 7",
      title: "Nha Trang - Phu Quoc - Beachfront Resort",
      meals: "B/-/-",
      activities: [
        "Breakfast; transfer to Cam Ranh Airport; VietJet - Phu Quoc (1 hr).",
        "Resort check-in (flat grounds; golf cart; beachfront).",
        "Afternoon: resort beach & pool leisure; sunset viewing from jetty.",
      ],
    },
    {
      day: "Day 8",
      title: "Phu Quoc - Sailing + Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast; morning sunset sailing cruise (An Thoi archipelago; snorkelling).",
        "Optional: Vinwonders cable car or aquarium.",
        "Check-out; transfer to Phu Quoc International Airport.",
        "Tour ends - safe travels! Mui Ne Red & White Sand Dunes are Asia's kitesurfing capital & most unique landscape.",
      ],
    },
  ],
};

const packageElevenDetails: PackageDetailsData = {
  title: "Con Dao Island Escape",
  duration: "8 Days / 7 Nights",
  destinations: "HCMC - Cu Chi - Con Dao Islands (3 nights) - Phu Quoc",
  pricing: [
    { label: "3-Star Hotel", price: "Not available" },
    { label: "4-Star Hotel", price: "₹93,500" },
    { label: "5-Star Hotel", price: "₹1,36,500" },
  ],
  included: [
    "HCMC & Con Dao & Phu Quoc airport transfers",
    "Hotel accommodation (4/5-star boutique resort on Con Dao)",
    "HCMC half-day city tour + Cu Chi Tunnels",
    "Con Dao: 3 nights - snorkelling, sea turtle watching, Con Son Prison museum",
    "Con Dao National Park jungle trek (3 km easy; ranger guide)",
    "Con Dao: Dam Trau Beach (voted Vietnam's most beautiful beach)",
    "Phu Quoc: 2 nights - sunset sailing + couple's spa",
    "All meals as per itinerary",
    "All entrance fees + domestic flights (HCMC-Con Dao & Con Dao-Phu Quoc)",
    "English-speaking coordinator 24/7",
  ],
  excluded: [
    "International flights (HCMC in, Phu Quoc out)",
    "Vietnam e-Visa (~₹2,500)",
    "Tips & gratuities",
    "Personal expenses",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival HCMC",
      meals: "-/-/-",
      activities: [
        "Arrive SGN Airport; private AC transfer to District 1 hotel.",
        "Check-in from 14:00; evening: Saigon Opera House area, French Quarter stroll.",
      ],
    },
    {
      day: "Day 2",
      title: "HCMC City + Cu Chi - Fly Con Dao",
      meals: "B/L/-",
      activities: [
        "Breakfast; 08:00 - Pick up; morning city tour: Reunification Palace, War Remnants Museum (~2 hrs).",
        "Noon - Lunch; transfer to SGN Airport.",
        "Flight - Con Dao (~1 hr).",
        "Con Dao Airport transfer to boutique resort.",
        "Evening: Con Son seafront promenade walk; fresh crab dinner at local restaurant.",
      ],
    },
    {
      day: "Day 3",
      title: "Con Dao - Dam Trau Beach + Con Son Prison",
      meals: "B/L/-",
      activities: [
        "Breakfast at resort.",
        "Morning: Con Son Prison Museum complex (French colonial prison; Poulo Condor history).",
        "Hang Duong Cemetery (Vietnamese revolutionary figures; deeply moving visit).",
        "Noon - Lunch at resort or town restaurant.",
        "Afternoon: Dam Trau Beach - voted Vietnam's most beautiful beach.",
        "Crystal-clear turquoise water; white sand; virtually no crowds.",
        "Snorkelling at offshore reef; sunset photography from beach.",
      ],
    },
    {
      day: "Day 4",
      title: "Con Dao - Sea Turtle Watching + National Park Trek",
      meals: "B/L/D",
      activities: [
        "Breakfast; 08:00 - Con Dao National Park: jungle trek with park ranger (3 km easy; 2 hrs).",
        "Spot wildlife: black squirrels, sea eagles, monitor lizards, butterflies.",
        "Visit Con Dao National Park Visitor Centre (marine conservation education).",
        "Noon - Lunch at park canteen or packed lunch in jungle.",
        "Afternoon: snorkelling tour (Bay Canh Island - best coral in South Vietnam).",
        "Evening (seasonal; Jun-Sep): sea turtle nesting watch at Bat Dat Beach - Hawksbill & Green Sea Turtles, ranger-guided (11 PM start).",
      ],
    },
    {
      day: "Day 5",
      title: "Con Dao - Free Day (Beach, Kayaking, Diving)",
      meals: "B/-/-",
      activities: [
        "Breakfast at resort; full free day to enjoy Con Dao at your own pace.",
        "Options: scuba diving (some of Vietnam's best coral; PADI courses); kayaking around Con Son coastline.",
        "Lo Voi Beach (secluded rocky cove); An Hai Beach (main resort beach; calm waters; beachfront bars).",
        "Explore Con Son Market for local honey, dried seafood, and black pepper.",
        "Con Dao pepper plantation visit (Con Dao pepper is Vietnam's finest).",
      ],
    },
    {
      day: "Day 6",
      title: "Con Dao - Phu Quoc - Beachfront Resort",
      meals: "B/-/-",
      activities: [
        "Breakfast; transfer Con Dao Airport; flight - Phu Quoc (~45 min; via HCMC or direct).",
        "Phu Quoc resort check-in (Long Beach or Sao Beach; beachfront).",
        "Afternoon: resort beach & pool; sunset from resort jetty.",
      ],
    },
    {
      day: "Day 7",
      title: "Phu Quoc - Sailing + Spa",
      meals: "B/L/-",
      activities: [
        "Breakfast; 10:00 - Sunset sailing cruise: An Thoi archipelago (4 hrs).",
        "Snorkelling at coral reef; fresh BBQ lunch on deck.",
        "14:00 - 2-hr Vietnamese massage at resort spa.",
        "Evening: Duong Dong Night Market (pearl jewellery, fresh seafood).",
      ],
    },
    {
      day: "Day 8",
      title: "Phu Quoc - Departure",
      meals: "B/-/-",
      activities: [
        "Breakfast at resort; leisurely morning.",
        "Optional: Vinwonders cable car or aquarium.",
        "Check-out; transfer to Phu Quoc International Airport.",
        "Tour ends - safe travels! Con Dao is Vietnam's most pristine island escape: sea turtles, coral, history.",
      ],
    },
  ],
};

const packages: TourPackage[] = [
  {
    name: "North Vietnam Classic",
    duration: "5 Days / 4 Nights",
    destinations: "Hanoi - Ha Long Bay - Ninh Binh",
    threeStarPrice: "₹33,500",
    fourStarPrice: "₹49,500",
    fiveStarPrice: "₹68,000",
    sheet: "Package 1",
    details: packageOneDetails,
  },
  {
    name: "North Vietnam Explorer",
    duration: "8 Days / 7 Nights",
    destinations: "Hanoi - Ha Long Bay (2D1N) - Ninh Binh - Sapa - Mai Chau",
    threeStarPrice: "₹50,500",
    fourStarPrice: "₹73,000",
    fiveStarPrice: "₹1,09,000",
    sheet: "Package 2",
    details: packageTwoDetails,
  },
  {
    name: "Central Vietnam Complete",
    duration: "7 Days / 6 Nights",
    destinations: "Da Nang - Ba Na Hills - Hoi An - My Son - Hue",
    threeStarPrice: "₹46,500",
    fourStarPrice: "₹66,000",
    fiveStarPrice: "₹1,07,500",
    sheet: "Package 3",
    details: packageThreeDetails,
  },
  {
    name: "South Vietnam + Highlands",
    duration: "7 Days / 6 Nights",
    destinations: "HCMC - Cu Chi - Mekong Delta - Da Lat - Nha Trang",
    threeStarPrice: "₹52,500",
    fourStarPrice: "₹73,000",
    fiveStarPrice: "₹1,11,500",
    sheet: "Package 4",
    details: packageFourDetails,
  },
  {
    name: "Vietnam Honeymoon Premium",
    duration: "10 Days / 9 Nights",
    destinations: "Hanoi - Ha Long Bay (Luxury Cruise) - Hoi An - Hue - Phu Quoc",
    threeStarPrice: "Not available",
    fourStarPrice: "₹1,42,000",
    fiveStarPrice: "₹2,11,000",
    sheet: "Package 5",
    details: packageFiveDetails,
  },
  {
    name: "Family Fun Circuit",
    duration: "10 Days / 9 Nights",
    destinations: "Hanoi - Ha Long - Da Nang - Ba Na Hills - Hoi An - HCMC - Phu Quoc",
    threeStarPrice: "₹91,000*",
    fourStarPrice: "₹1,24,500*",
    fiveStarPrice: "Contact us",
    sheet: "Package 6",
    details: packageSixDetails,
  },
  {
    name: "Senior Comfort Vietnam",
    duration: "12 Days / 11 Nights",
    destinations: "Hanoi - Ninh Binh - Ha Long - Da Nang - Hoi An - Hue - HCMC - Phu Quoc",
    threeStarPrice: "Not available",
    fourStarPrice: "₹1,31,500",
    fiveStarPrice: "₹1,82,500",
    sheet: "Package 7",
    details: packageSevenDetails,
  },
  {
    name: "North-Central Adventure",
    duration: "9 Days / 8 Nights",
    destinations: "Hanoi - Cat Ba Island (Ha Long) - Phong Nha Caves (UNESCO) - Hue - Hoi An",
    threeStarPrice: "₹52,000",
    fourStarPrice: "₹75,000",
    fiveStarPrice: "₹1,12,000",
    sheet: "Package 8",
    details: packageEightDetails,
  },
  {
    name: "Central Coast Escape",
    duration: "7 Days / 6 Nights",
    destinations: "Da Nang - Ba Na Hills - Hoi An - Quy Nhon - Ky Co Beach - Nha Trang",
    threeStarPrice: "₹44,000",
    fourStarPrice: "₹63,500",
    fiveStarPrice: "₹1,02,000",
    sheet: "Package 9",
    details: packageNineDetails,
  },
  {
    name: "Southern Coast & Mui Ne",
    duration: "8 Days / 7 Nights",
    destinations: "HCMC - Cu Chi - Mekong Delta - Mui Ne Sand Dunes - Nha Trang - Phu Quoc",
    threeStarPrice: "₹52,500",
    fourStarPrice: "₹74,000",
    fiveStarPrice: "₹1,12,000",
    sheet: "Package 10",
    details: packageTenDetails,
  },
  {
    name: "Con Dao Island Escape",
    duration: "8 Days / 7 Nights",
    destinations: "HCMC - Cu Chi - Con Dao Islands (3 nights) - Phu Quoc",
    threeStarPrice: "Not available",
    fourStarPrice: "₹93,500",
    fiveStarPrice: "₹1,36,500",
    sheet: "Package 11",
    details: packageElevenDetails,
  },
];

type PackageCardProps = {
  tourPackage: TourPackage;
  onBookNow: (booking: ActiveBooking) => void;
};

const PackageCard = memo(({ tourPackage, onBookNow }: PackageCardProps) => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const priceOptions = [
    { label: "3 Star", price: tourPackage.threeStarPrice },
    { label: "4 Star", price: tourPackage.fourStarPrice },
    { label: "5 Star", price: tourPackage.fiveStarPrice },
  ].filter((option) => option.price.trim().toLowerCase() !== "not available");
  const priceGridColsClass =
    priceOptions.length === 1
      ? "grid-cols-1"
      : priceOptions.length === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  return (
    <article className="min-w-0 flex min-h-0 h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-blue-600">{tourPackage.sheet}</p>
          <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900">
            {tourPackage.name}
          </h3>
        </div>
        <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {tourPackage.duration}
        </span>
      </div>

      <p
        className="mt-4 text-sm leading-6 text-gray-600 truncate"
        title={tourPackage.destinations}
      >
        {tourPackage.destinations}
      </p>

      <div className="mt-auto border-t border-gray-100 pt-4">
        <div className={`grid ${priceGridColsClass} gap-1 text-center sm:gap-2`}>
          {priceOptions.map((option) => {
            const isSelected = selectedPrice === option.label;

            return (
              <button
                key={option.label}
                type="button"
                onClick={() => setSelectedPrice(option.label)}
                className={`flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-xl px-1.5 py-2 text-[10px] sm:px-2 sm:py-3 sm:text-xs transition focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-50 text-gray-900 hover:bg-blue-50"
                }`}
              >
                <span
                  className={`block truncate text-[10px] font-semibold leading-tight ${
                    isSelected ? "text-white" : "text-gray-500"
                  }`}
                >
                  {option.label}
                </span>
                <span className="block w-full break-words text-center text-[11px] font-bold leading-tight sm:text-sm">
                  {option.price}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          disabled={!selectedPrice}
          onClick={() =>
            selectedPrice &&
            onBookNow({
              details: tourPackage.details,
              hotelClass: selectedPrice,
            })
          }
          className="mt-5 w-full rounded-xl bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
        >
          Book Now
        </button>
      </div>
    </article>
  );
});

const Home = () => {
  const [activeBooking, setActiveBooking] = useState<ActiveBooking | null>(null);
  const [bookingRequest, setBookingRequest] = useState<ActiveBooking | null>(null);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vietnam Tour Packages",
    itemListElement: packages.map((tourPackage, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristTrip",
        name: tourPackage.details.title,
        description: tourPackage.destinations,
        touristType: "Leisure",
        itinerary: {
          "@type": "ItemList",
          itemListElement: tourPackage.details.itinerary.map((day, dayIndex) => ({
            "@type": "ListItem",
            position: dayIndex + 1,
            name: day.title,
          })),
        },
        offers: tourPackage.details.pricing.map((price) => ({
          "@type": "Offer",
          name: price.label,
          price: price.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "INR",
        })),
      },
    })),
  };

  return (
    <section
      id="home"
      className="scroll-mt-20 pt-20 pb-10 px-4 md:px-10 bg-gray-50"
    >
      <Helmet>
        <title>VietJourney 360 | Best Vietnam Tour Packages & Travel Agency</title>
        <meta
          name="description"
          content="Explore Vietnam tour packages from VietJourney 360 - Hanoi, Ha Long Bay, Sapa, Ninh Binh, Da Nang, Hoi An & Ho Chi Minh City. Group tours, custom itineraries, 3/4/5-star hotels."
        />
        <link rel="canonical" href="https://vietjourney360.com/" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Carousel />

      <section className="mx-auto mt-10 max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Tour Packages
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Vietnam Travel Packages
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 md:text-lg">
            Choose the route and hotel class that fits your travel style.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packages.map((tourPackage) => (
            <PackageCard
              key={tourPackage.sheet}
              tourPackage={tourPackage}
              onBookNow={setActiveBooking}
            />
          ))}
        </div>
      </section>

      <div className="text-center py-8">
        <p className="text-gray-600 text-lg md:text-xl">
          Discover beautiful destinations and plan your perfect trip with us.
        </p>
      </div>

      <Card />

      {activeBooking && (
        <PackageDetails
          details={activeBooking.details}
          selectedHotelClass={activeBooking.hotelClass}
          onClose={() => setActiveBooking(null)}
          onContinueBooking={() => {
            setBookingRequest(activeBooking);
            setActiveBooking(null);
          }}
        />
      )}

      {bookingRequest && (
        <PackageBooking
          packageTitle={bookingRequest.details.title}
          selectedHotelClass={bookingRequest.hotelClass}
          amount={
            bookingRequest.details.pricing.find((price) =>
              price.label
                .replace(/[-\s]/g, "")
                .toLowerCase()
                .startsWith(
                  bookingRequest.hotelClass.replace(/[-\s]/g, "").toLowerCase(),
                ),
            )?.price ?? ""
          }
          onClose={() => setBookingRequest(null)}
          onBack={() => {
            setActiveBooking(bookingRequest);
            setBookingRequest(null);
          }}
          onBook={(formData) => {
            console.log("Booking submitted", {
              package: bookingRequest.details.title,
              tier: bookingRequest.hotelClass,
              amount: bookingRequest.details.pricing.find((price) =>
                price.label
                  .replace(/[-\s]/g, "")
                  .toLowerCase()
                  .startsWith(
                    bookingRequest.hotelClass.replace(/[-\s]/g, "").toLowerCase(),
                  ),
              )?.price,
              ...formData,
            });
            setBookingRequest(null);
          }}
        />
      )}
    </section>
  );
};

export default Home;
