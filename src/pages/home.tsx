import { useState } from "react";

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

const commonIncluded = [
  "Airport transfers (pick-up & drop-off)",
  "Hotel accommodation (3/4/5-star as selected)",
  "Meals as per itinerary (B/L/D notation per day)",
  "All entrance fees",
  "English-speaking tour guide",
  "All transportation during tour",
];

const commonExcluded = ["Tips & gratuities", "Beverages", "Personal expenses"];

const packageOneDetails: PackageDetailsData = {
  title: "Package 1 - Hanoi - Ha Long - Ninh Binh",
  duration: "4 Days / 3 Nights",
  destinations: "Hanoi - Ha Long Bay - Ninh Binh",
  pricing: [
    { label: "3-Star Hotel", price: "$216 USD" },
    { label: "4-Star Hotel", price: "$336 USD" },
    { label: "5-Star Hotel", price: "$456 USD" },
  ],
  included: commonIncluded,
  excluded: commonExcluded,
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Hanoi - Hanoi Hotel",
      meals: "-/-/-",
      activities: [
        "Airport pick-up, transfer to hotel in Old Quarter.",
        "Free time: explore Hoan Kiem Lake, Train Street, Coffee Street, Tran Quoc Pagoda, Temple of Literature, Museums, and more.",
      ],
    },
    {
      day: "Day 2",
      title: "Ha Long Bay Day Trip - Hanoi Hotel",
      meals: "B/L/-",
      activities: [
        "08:20-08:50 - Pick-up at hotel / Opera House; depart for Ha Long Bay, about 2.5 hr drive via Hanoi-Haiphong-Tuan Chau Hwy.",
        "12:00 - Arrive Tuan Chau Harbor; board boat.",
        "12:30 - Set-menu lunch on board; scenic views of Fighting Chicken & Incense Burner Islets.",
        "14:00 - Arrive Bo Hon Island; visit Sung Sot Cave with stalagmites and stalactites.",
        "14:45 - Kayaking or bamboo boat through Luon Cave to a beautiful lagoon.",
        "15:15 - Visit TiTop Island: beach swimming or hike to summit viewpoint.",
        "16:00 - Sunset party on boat with wine, fruits, and biscuits while cruising back.",
        "17:45 - Back at harbor; board bus to Hanoi.",
        "20:30 - Drop-off at hotel; tour ends.",
      ],
    },
    {
      day: "Day 3",
      title: "Ninh Binh Day Trip - Hanoi Hotel",
      meals: "B/L/-",
      activities: [
        "07:30-08:00 - Pick-up; depart for Ninh Binh province.",
        "09:15 - Rest stop for 15-20 min.",
        "10:30 - Visit Hoa Lu Ancient Capital, 968-1010 AD, with temples of Dinh & Le Dynasties.",
        "11:45 - Buffet lunch: goat meat, fish, chicken, fried rice, and vegetarian options.",
        "13:00 - Trang An, UNESCO World Heritage Site 2014; 2-hr boat trip through tunnel caves and filming location of Kong: Skull Island 2016.",
        "15:00 - 45-min cycling tour around local village.",
        "15:45 - Mua Cave: climb about 500 steps to Lying Dragon Mountain summit for panoramic Tam Coc views.",
        "17:00 - Depart for Hanoi.",
        "19:00 - Drop-off at hotel.",
      ],
    },
    {
      day: "Day 4",
      title: "Airport Drop-off",
      meals: "B/-/-",
      activities: ["Transfer from hotel to airport; package ends."],
    },
  ],
};

const packageTwoDetails: PackageDetailsData = {
  title: "Package 2 - Hanoi - Ha Long - Ninh Binh",
  duration: "5 Days / 4 Nights",
  destinations: "Hanoi - Ha Long Bay overnight cruise - Ninh Binh",
  pricing: [
    { label: "3-Star Hotel", price: "$467 USD" },
    { label: "4-Star Hotel", price: "$588 USD" },
    { label: "5-Star Hotel", price: "$708 USD" },
  ],
  included: [
    "Airport transfers (pick-up & drop-off)",
    "Hotel accommodation + overnight cruise cabin",
    "Meals as per itinerary (B/L/D notation per day)",
    "All entrance fees",
    "English-speaking tour guide",
    "All transportation during tour",
  ],
  excluded: commonExcluded,
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Hanoi - Hanoi Hotel",
      meals: "-/-/-",
      activities: [
        "Airport pick-up, transfer to hotel in Old Quarter.",
        "Free time: Hoan Kiem Lake, Train Street, Coffee Street, Tran Quoc Pagoda, Temple of Literature, Museums, and more.",
      ],
    },
    {
      day: "Day 2",
      title: "Ha Long Bay 2D/1N - Overnight on Cruise",
      meals: "B/L/D",
      activities: [
        "08:00-08:30 - Pick-up from Hanoi Old Quarter hotel.",
        "11:30-11:45 - Arrive Tuan Chau Marina.",
        "12:00-12:30 - Transfer to cruise; welcome drink; captain briefing; cabin check-in.",
        "12:45-13:00 - Vietnamese seafood & vegetarian lunch while cruising; view dramatic limestone karsts.",
        "Afternoon - Cruise through Con Vit Islet, Thumb Islet, and Gia Luan Harbor in the Cat Ba area.",
        "Afternoon - Explore Lan Ha Bay lagoon; swimming or sunbathing.",
        "Afternoon - Kayaking & swimming at Ba Trai Dao Beach / Tra Bau area.",
        "17:30 - Sunset party with fruit, cake, tea, and photos on deck.",
        "18:00-18:15 - Cooking class with cruise chef: spring rolls and Vietnamese traditional dishes.",
        "19:00 - Dinner on board.",
        "21:00 - Evening activities: cards, chess, music, squid fishing; overnight on cruise.",
      ],
    },
    {
      day: "Day 3",
      title: "Ha Long Bay to Hanoi - Hanoi Hotel",
      meals: "B/L/-",
      activities: [
        "06:30 - Optional Tai Chi on sundeck.",
        "07:00-07:45 - Morning views of bay; breakfast.",
        "08:00 - Sail to Dark & Bright Cave; kayak or bamboo boat exploration.",
        "09:30 - Return to cruise; check-out from cabin.",
        "10:00 - Last lunch on cruise.",
        "11:30-12:00 - Dock near Tuan Chau Harbor; farewell to crew.",
        "12:00 - Limousine bus / Dcar to Hanoi Old Quarter.",
        "15:30-15:45 - Arrive hotel in Hanoi.",
      ],
    },
    {
      day: "Day 4",
      title: "Ninh Binh Day Trip - Hanoi Hotel",
      meals: "B/L/-",
      activities: [
        "07:30-08:00 - Pick-up; depart for Ninh Binh.",
        "09:15 - Rest stop for 15-20 min.",
        "10:30 - Hoa Lu Ancient Capital with temples of King Dinh & King Le.",
        "11:45 - Buffet lunch: goat meat, fish, chicken, fried rice, and vegetarian options.",
        "13:00 - Trang An UNESCO World Heritage boat trip for 2 hrs through tunnel caves.",
        "15:00 - 45-min cycling around local village.",
        "15:45 - Mua Cave: about 500-step climb for panoramic Tam Coc views.",
        "17:00 - Depart for Hanoi.",
        "19:00 - Drop-off at hotel.",
      ],
    },
    {
      day: "Day 5",
      title: "Airport Drop-off",
      meals: "B/-/-",
      activities: ["Transfer from hotel to airport; package ends."],
    },
  ],
};

const packageThreeDetails: PackageDetailsData = {
  title: "Package 3 - Hanoi - Ha Long - Sapa",
  duration: "6 Days / 5 Nights",
  destinations:
    "Hanoi - Ha Long Bay overnight cruise - Sapa, Cat Cat Village, Lao Chai-Ta Van trek, Fansipan",
  pricing: [
    { label: "3-Star Hotel", price: "$576 USD" },
    { label: "4-Star Hotel", price: "$696 USD" },
    { label: "5-Star Hotel", price: "$816 USD" },
  ],
  included: [
    "Airport transfers (pick-up & drop-off)",
    "Hotel accommodation + overnight cruise cabin + Sapa hotel/homestay",
    "Meals as per itinerary",
    "All entrance fees",
    "English-speaking tour guide",
    "All transportation including overnight bus Hanoi-Sapa",
  ],
  excluded: commonExcluded,
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Hanoi - Hanoi Hotel",
      meals: "-/-/-",
      activities: [
        "Airport pick-up; transfer to Old Quarter hotel.",
        "Free time: Hoan Kiem Lake, Train Street, Coffee Street, Tran Quoc Pagoda, Temple of Literature, and Museums.",
      ],
    },
    {
      day: "Day 2",
      title: "Ha Long Bay 2D/1N - Overnight on Cruise",
      meals: "B/L/D",
      activities: [
        "08:00-08:30 - Pick-up from Hanoi Old Quarter.",
        "11:30-11:45 - Arrive Tuan Chau Marina.",
        "12:00-12:30 - Board cruise; welcome drink; cabin check-in.",
        "12:45-13:00 - Lunch on board while cruising through Halong limestone formations.",
        "Afternoon - Cruise through Con Vit Islet, Thumb Islet, and Gia Luan Harbor.",
        "Afternoon - Lan Ha Bay lagoon: swimming or sunbathing.",
        "Afternoon - Kayaking & swimming at Ba Trai Dao Beach / Tra Bau area.",
        "17:30 - Sunset party on deck.",
        "18:00-18:15 - Cooking class with cruise chef.",
        "19:00 - Dinner; 21:00 - Evening activities with cards and squid fishing; overnight on cruise.",
      ],
    },
    {
      day: "Day 3",
      title: "Ha Long Bay to Overnight Bus to Sapa",
      meals: "B/L/-",
      activities: [
        "06:30 - Optional Tai Chi on sundeck.",
        "07:00-07:45 - Breakfast; morning bay views.",
        "08:00 - Explore Dark & Bright Cave by kayak or bamboo boat.",
        "09:30 - Return to cruise; check-out.",
        "10:00 - Last lunch on cruise.",
        "11:30-12:00 - Dock at Tuan Chau; farewell to crew.",
        "12:00 - Limo bus to Hanoi Old Quarter.",
        "15:30-15:45 - Arrive Hanoi hotel; dinner by yourself.",
        "21:00-21:30 - Guide picks up from hotel; mini-van to bus station; overnight bus to Sapa, about 5.5-6 hrs.",
      ],
    },
    {
      day: "Day 4",
      title: "Sapa - Cat Cat Village",
      meals: "B/L/D",
      activities: [
        "05:00 - Arrive Sapa Town; wait at bus station for guide for 30-45 min.",
        "06:00-06:30 - Breakfast at local restaurant.",
        "08:30-09:00 - Walk to Cat Cat Village gate, home of Black H'mong ethnic people near the foot of Fansipan Peak.",
        "Guided trek about 2.5 km over about 2 hrs: daily life of locals, valley bottom, French Hydraulic Power Station waterfall, bridge photo stop, and uphill walk back to bus.",
        "12:30 - Lunch at local restaurant.",
        "14:30 - Check-in hotel; relax or explore Sapa Town independently.",
        "Overnight in Sapa.",
      ],
    },
    {
      day: "Day 5",
      title: "Lao Chai - Ta Van Trek to Bus Back to Hanoi",
      meals: "B/L/-",
      activities: [
        "07:00-07:30 - Breakfast at local restaurant.",
        "08:30-09:00 - Begin hike through Y Linh Ho; trek rice terraces along Muong Hoa Stream to Black Hmong village of Lao Chai, about 9 km over 3.5 hrs, with Hoang Lien Son Mountain views; arrive Ta Van village of the Giay ethnic people.",
        "12:30 - Lunch at local restaurant.",
        "13:30 - Guide takes you to bus station.",
        "14:00-14:15 - Bus departs Sapa.",
        "19:30-20:00 - Arrive back at hotel in Hanoi Old Quarter.",
      ],
    },
    {
      day: "Day 6",
      title: "Airport Drop-off",
      meals: "B/-/-",
      activities: ["Transfer from hotel to airport; package ends."],
    },
  ],
};

const packageFourDetails: PackageDetailsData = {
  title: "Package 4 - Hanoi, Central Vietnam & Hoi An",
  duration: "8 Days / 7 Nights",
  destinations:
    "Hanoi - Ha Long Bay - Ninh Binh - Da Nang - Ba Na Hills - Marble Mountain - Hoi An",
  pricing: [
    { label: "3-Star Hotel", price: "$456 USD" },
    { label: "4-Star Hotel", price: "$696 USD" },
    { label: "5-Star Hotel", price: "$1056 USD" },
  ],
  included: [
    "Airport transfers (pick-up & drop-off)",
    "Hotel accommodation throughout",
    "Meals as per itinerary",
    "All entrance fees including Ba Na Hills cable car",
    "English-speaking tour guide",
    "All transportation during tour",
  ],
  excluded: [
    "Tips & gratuities",
    "Beverages",
    "Personal expenses",
    "Internal flight Hanoi-Da Nang (arrange separately)",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Hanoi - Hanoi Hotel",
      meals: "-/-/-",
      activities: [
        "Airport pick-up; transfer to Old Quarter hotel.",
        "Free time: Hoan Kiem Lake, Train Street, Coffee Street, Tran Quoc Pagoda, Temple of Literature, and Museums.",
      ],
    },
    {
      day: "Day 2",
      title: "Ha Long Bay Day Trip - Hanoi Hotel",
      meals: "B/L/-",
      activities: [
        "08:20-08:50 - Pick-up; depart for Ha Long Bay, about 2.5 hr via Hanoi-Haiphong-Tuan Chau Hwy.",
        "12:00 - Board boat at Tuan Chau Harbor.",
        "12:30 - Set-menu lunch on board; views of Fighting Chicken & Incense Burner Islets.",
        "14:00 - Bo Hon Island: visit Sung Sot Cave.",
        "14:45 - Kayaking or bamboo boat through Luon Cave.",
        "15:15 - TiTop Island: swim or hike to viewpoint.",
        "16:00 - Sunset party with wine, fruits, and biscuits while cruising back.",
        "17:45 - Back at harbor; board bus to Hanoi.",
        "20:30 - Drop-off at hotel.",
      ],
    },
    {
      day: "Day 3",
      title: "Ninh Binh Day Trip - Hanoi Hotel",
      meals: "B/L/-",
      activities: [
        "07:30-08:00 - Pick-up; depart for Ninh Binh.",
        "09:15 - Rest stop.",
        "10:30 - Hoa Lu Ancient Capital with temples of King Dinh & King Le.",
        "11:45 - Buffet lunch.",
        "13:00 - Trang An UNESCO World Heritage boat trip for 2 hrs.",
        "15:00 - 45-min cycling in local village.",
        "15:45 - Mua Cave: about 500-step climb for Tam Coc panorama.",
        "17:00-19:00 - Return to Hanoi.",
      ],
    },
    {
      day: "Day 4",
      title: "Transfer Hanoi to Da Nang - Da Nang Hotel",
      meals: "B/-/-",
      activities: [
        "Pick-up from Hanoi hotel; transfer to airport for flight to Da Nang.",
        "Arrival Da Nang: driver transfer to Da Nang hotel.",
        "Overnight Da Nang.",
      ],
    },
    {
      day: "Day 5",
      title: "Ba Na Hills Full Day - Da Nang Hotel",
      meals: "B/L/-",
      activities: [
        "07:30-08:15 - Guide & car pick-up; transfer to Ba Na Hills.",
        "Visit Golden Bridge, the viral worldwide landmark.",
        "France Wine Cellar, Le Jardin D'Amour with 9 gardens, and Linh Ung Pagoda.",
        "French Village Campanile, Nine Floor Goddess Shrine, Tombstone Temple, Linh Phong Monastery, Linh Chua Linh Tu Temple, and Tru Vu Tea Shop.",
        "Watch Carnival Performance Show at Square Du Dome.",
        "Alpine Coaster adventure ride.",
        "Buffet lunch at Ba Na Hills restaurant.",
        "Fantasy Park games.",
        "15:30 - Cable car descent; return to Da Nang.",
        "Visit Han Market for local fresh produce, dried goods, and daily life.",
        "Dinner by yourself; overnight Da Nang.",
      ],
    },
    {
      day: "Day 6",
      title: "Marble Mountain to Hoi An Ancient Town - Hoi An Hotel",
      meals: "B/-/D",
      activities: [
        "Breakfast at hotel; check-out by 12:00.",
        "14:00-14:30 - Guide pick-up from hotel.",
        "Marble Mountain: Linh Ung Pagoda, Tam Thai, Xa Loi Tower, Tang Chon Cave, Hoa Nghiem Cave, and Huyen Khong Cave.",
        "Hoi An Ancient Town: Japanese Covered Bridge and Assembly Hall of Fujian Chinese Congregation.",
        "Leisurely walk through Old Quarter: shops, galleries, and markets.",
        "Boating on Hoai River.",
        "Dinner in Hoi An; overnight Hoi An.",
      ],
    },
    {
      day: "Day 7",
      title: "Free Day in Hoi An - Hoi An Hotel",
      meals: "B/-/-",
      activities: [
        "Full free day: relax and shopping in Old Town.",
        "Optional: prepare for return flight or continue to Ho Chi Minh City.",
        "Overnight Hoi An.",
      ],
    },
    {
      day: "Day 8",
      title: "Airport Drop-off",
      meals: "B/-/-",
      activities: ["Transfer from hotel to airport; package ends."],
    },
  ],
};

const packages: TourPackage[] = [
  {
    name: "Hanoi - Ha Long - Ninh Binh",
    duration: "4 Days / 3 Nights",
    destinations: "Hanoi - Ha Long Bay - Ninh Binh",
    threeStarPrice: "$216",
    fourStarPrice: "$336",
    fiveStarPrice: "$456",
    sheet: "Package 1",
    details: packageOneDetails,
  },
  {
    name: "Hanoi - Ha Long - Ninh Binh",
    duration: "5 Days / 4 Nights",
    destinations: "Hanoi - Ha Long Bay overnight cruise - Ninh Binh",
    threeStarPrice: "$467",
    fourStarPrice: "$588",
    fiveStarPrice: "$708",
    sheet: "Package 2",
    details: packageTwoDetails,
  },
  {
    name: "Hanoi - Ha Long - Sapa",
    duration: "6 Days / 5 Nights",
    destinations:
      "Hanoi - Ha Long Bay overnight cruise - Sapa, Cat Cat Village, Lao Chai-Ta Van trek, Fansipan",
    threeStarPrice: "$576",
    fourStarPrice: "$696",
    fiveStarPrice: "$816",
    sheet: "Package 3",
    details: packageThreeDetails,
  },
  {
    name: "Hanoi, Central Vietnam & Hoi An",
    duration: "8 Days / 7 Nights",
    destinations:
      "Hanoi - Ha Long Bay - Ninh Binh - Da Nang - Ba Na Hills - Marble Mountain - Hoi An",
    threeStarPrice: "$456",
    fourStarPrice: "$696",
    fiveStarPrice: "$1056",
    sheet: "Package 4",
    details: packageFourDetails,
  },
];

const Home = () => {
  const [selectedPrices, setSelectedPrices] = useState<Record<string, string>>({});
  const [activeBooking, setActiveBooking] = useState<ActiveBooking | null>(null);
  const [bookingRequest, setBookingRequest] = useState<ActiveBooking | null>(null);

  return (
    <section
      id="home"
      className="scroll-mt-20 pt-20 pb-10 px-4 md:px-10 bg-gray-50"
    >
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

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((tourPackage) => {
            const priceOptions = [
              { label: "3 Star", price: tourPackage.threeStarPrice },
              { label: "4 Star", price: tourPackage.fourStarPrice },
              { label: "5 Star", price: tourPackage.fiveStarPrice },
            ];
            const selectedPrice = selectedPrices[tourPackage.sheet];

            return (
              <article
                key={tourPackage.sheet}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                      {tourPackage.sheet}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">
                      {tourPackage.name}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {tourPackage.duration}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tourPackage.destinations}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 text-center">
                  {priceOptions.map((option) => {
                    const isSelected = selectedPrice === option.label;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() =>
                          setSelectedPrices((currentPrices) => ({
                            ...currentPrices,
                            [tourPackage.sheet]: option.label,
                          }))
                        }
                        className={`rounded-xl p-3 transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-50 text-gray-900 hover:bg-blue-50"
                        }`}
                      >
                        <span
                          className={`block text-xs font-semibold ${
                            isSelected ? "text-white" : "text-gray-500"
                          }`}
                        >
                          {option.label}
                        </span>
                        <span className="mt-1 block text-lg font-bold">
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
                    setActiveBooking({
                      details: tourPackage.details,
                      hotelClass: selectedPrice,
                    })
                  }
                  className="mt-5 w-full rounded-xl bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                >
                  Book Now
                </button>
              </article>
            );
          })}
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
