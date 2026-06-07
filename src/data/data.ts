type CityImages = {
    coverImage: string;
    gallery: string[];
};

const cityImageModules = import.meta.glob<string>(
    "../assets/**/*.{jpg,jpeg,png,avif,webp}",
    { eager: true, query: "?url", import: "default" },
);

const imageNameSorter = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
});

const getCityImages = (folder: string, coverFileName: string): CityImages => {
    const folderPrefix = `../assets/${folder}/`;
    const gallery = Object.entries(cityImageModules)
        .filter(([path]) => path.startsWith(folderPrefix))
        .sort(([pathA], [pathB]) => {
            const fileNameA = pathA.slice(folderPrefix.length);
            const fileNameB = pathB.slice(folderPrefix.length);

            if (fileNameA === coverFileName) return -1;
            if (fileNameB === coverFileName) return 1;

            return imageNameSorter.compare(fileNameA, fileNameB);
        })
        .map(([, imageUrl]) => imageUrl);

    const coverImage = gallery[0];

    if (!coverImage) {
        throw new Error(`No images found for ${folder}`);
    }

    return { coverImage, gallery };
};

const hoChiMinhCityImages = getCityImages("SOUTH VIETNAM/Ho Chi Minh City", "Ho_Chi_Minh_City.jpg");
const canThoImages = getCityImages("SOUTH VIETNAM/Can Tho", "Can_Tho.jpg");
const conDaoImages = getCityImages("SOUTH VIETNAM/Con Dao", "Con_Dao.jpg");
const phuQuocImages = getCityImages("SOUTH VIETNAM/Phu Quoc", "Phu_Quoc.jpg");
const vungTauImages = getCityImages("SOUTH VIETNAM/Vung Tau", "Vung_Tau.jpg");
const caoBangImages = getCityImages("NORTH VIETNAM/Cao Bang", "Cao_Bang.jpg");
const haGiangImages = getCityImages("NORTH VIETNAM/Ha Giang", "Ha_Giang.jpg");
const halongBayImages = getCityImages("NORTH VIETNAM/Halong Bay", "Halong_Bay.jpg");
const hanoiImages = getCityImages("NORTH VIETNAM/Hanoi", "hanoi-vietnam-city.jpg");
const ninhBinhImages = getCityImages("NORTH VIETNAM/Ninh Binh", "ninh-binh.jpg");
const sapaImages = getCityImages("NORTH VIETNAM/Sapa", "Sapa.jpg");
const daLatImages = getCityImages("CENTRAL VIETNAM/Da Lat", "jrnrgjerng.jpg");
const daNangImages = getCityImages("CENTRAL VIETNAM/Da Nang", "ekrrjngke.jpg");
const hoiAnImages = getCityImages("CENTRAL VIETNAM/Hoi An", "ejrkrnejrg.jpg");
const muiNeImages = getCityImages("CENTRAL VIETNAM/Mui Ne", "eknekrgj.jpg");
const nhaTrangImages = getCityImages("CENTRAL VIETNAM/Nha Trang", "keerjngkjergn.jpg");
const phongNhaImages = getCityImages("CENTRAL VIETNAM/Phong Nha", "kejn.jpg");

const cities = [

    {
        id: "ho-chi-minh-city",

        title: "South Vietnam - Ho Chi Minh City",

        shortDescription: "Vietnam’s vibrant city filled with culture, food, and nightlife.",

        fullDescription: "Ho Chi Minh City is the largest and most dynamic city in Vietnam, famous for its incredible energy, modern skyline, rich history, and vibrant street life. The city offers a perfect blend of traditional Vietnamese culture and modern urban lifestyle, making it one of the most exciting destinations in Southeast Asia. Visitors can explore historic landmarks such as the Notre Dame Cathedral, Central Post Office, Independence Palace, and the War Remnants Museum while also enjoying luxury shopping malls, rooftop cafés, and lively nightlife districts. The streets are filled with endless food stalls serving authentic Vietnamese cuisine including pho, banh mi, fresh seafood, and local coffee. The city comes alive at night with colorful lights, busy markets, live music, and entertainment areas that create an unforgettable atmosphere. Ho Chi Minh City is also a gateway to the Mekong Delta and nearby cultural attractions, making it ideal for travelers looking for adventure, food, history, shopping, and modern city experiences all in one destination.",

        ...hoChiMinhCityImages,
    },

    {
        id: "can-tho",

        title: "South Vietnam - Can Tho",

        shortDescription: "Famous for floating markets and peaceful Mekong scenery.",

        fullDescription: "Can Tho is the cultural heart of the Mekong Delta and one of the most peaceful and beautiful destinations in southern Vietnam. The city is best known for its famous floating markets where local vendors sell fresh fruits, vegetables, seafood, and traditional Vietnamese dishes directly from colorful wooden boats on the river. Visitors can enjoy scenic boat rides through narrow canals surrounded by tropical greenery, coconut trees, and traditional riverside villages. Can Tho offers an authentic local experience where travelers can explore rice farms, local handicrafts, ancient houses, and peaceful countryside landscapes. The city is also famous for delicious Mekong Delta cuisine featuring fresh seafood, tropical fruits, and local specialties. During sunrise, the rivers become lively with boats and market activity, creating a truly unforgettable atmosphere. Can Tho is perfect for travelers seeking relaxation, cultural experiences, local traditions, and the natural beauty of Vietnam’s river life.",

        ...canThoImages,
    },

    {
        id: "con-dao",

        title: "South Vietnam - Con Dao",

        shortDescription: "Tropical islands with crystal waters and relaxing beaches.",

        fullDescription: "Con Dao is one of Vietnam’s most stunning island destinations, famous for its untouched natural beauty, peaceful atmosphere, crystal-clear waters, and white sandy beaches. The islands are surrounded by beautiful coral reefs, making them perfect for snorkeling, diving, and marine adventures. Travelers can relax on quiet beaches, explore tropical forests, and experience breathtaking sunsets over the ocean. Con Dao is also known for its rich historical significance with old prisons and museums that tell important stories from Vietnam’s past. Nature lovers can discover rare wildlife, sea turtles, and protected national parks filled with diverse ecosystems and scenic landscapes. Unlike crowded tourist destinations, Con Dao offers a calm and luxurious escape where visitors can truly connect with nature and enjoy peaceful island life. The destination is ideal for honeymoon trips, luxury vacations, adventure activities, and unforgettable beach experiences.",

        ...conDaoImages,
    },

    {
        id: "phu-quoc",

        title: "South Vietnam - Phu Quoc",

        shortDescription: "A tropical paradise known for beaches and coral reefs.",

        fullDescription: "Phu Quoc is Vietnam’s largest tropical island and one of the country’s most popular luxury beach destinations. Known for its turquoise waters, soft white sand beaches, palm-lined coastlines, and breathtaking sunsets, the island offers a perfect tropical escape for travelers from around the world. Visitors can enjoy water sports, snorkeling, scuba diving, island hopping, fishing tours, and relaxing beach resorts surrounded by nature. Phu Quoc is also famous for its vibrant night markets, fresh seafood, local pepper farms, fish sauce factories, and friendly island culture. The island combines modern tourism with untouched natural beauty, offering both luxury experiences and peaceful hidden beaches. Travelers can explore waterfalls, tropical forests, safari parks, cable cars, and scenic coastal roads while enjoying warm weather throughout the year. Phu Quoc is ideal for family vacations, romantic holidays, adventure trips, and luxury beach getaways.",

        ...phuQuocImages,
    },

    {
        id: "vung-tau",

        title: "South Vietnam - Vung Tau",

        shortDescription: "A lively coastal city perfect for beaches and nightlife.",

        fullDescription: "Vung Tau is a vibrant coastal city in southern Vietnam known for its beautiful beaches, seafood culture, ocean views, and energetic nightlife. Located close to Ho Chi Minh City, it is one of the most popular weekend getaway destinations for both locals and international travelers. The city features long sandy beaches, scenic mountain viewpoints, and famous attractions such as the giant Christ statue overlooking the sea. Visitors can relax by the beach during the day and enjoy lively cafés, seafood restaurants, bars, and entertainment areas at night. Vung Tau is also famous for fresh seafood markets where travelers can taste local Vietnamese dishes prepared with freshly caught fish, crabs, and shellfish. The city offers a perfect balance between relaxation and modern entertainment, making it ideal for beach lovers, couples, families, and groups looking for a fun coastal experience.",

        ...vungTauImages,
    },

    {
        id: "cao-bang",

        title: "North Vietnam - Cao Bang",

        shortDescription: "Home to stunning waterfalls and scenic mountain landscapes.",

        fullDescription: "Cao Bang is one of the most breathtaking natural destinations in northern Vietnam, famous for its majestic mountains, peaceful countryside, waterfalls, caves, and untouched beauty. The region is home to the world-famous Ban Gioc Waterfall, one of the largest and most spectacular waterfalls in Southeast Asia. Visitors can explore dramatic limestone mountains, crystal-clear rivers, hidden caves, and traditional ethnic villages surrounded by lush green landscapes. Cao Bang offers a peaceful escape from busy cities and provides authentic cultural experiences with local communities and traditional mountain lifestyles. The roads through the mountains offer incredible scenic views, making it a paradise for photographers, nature lovers, and adventure travelers. The area is also rich in history and culture with ancient traditions, local markets, and unique regional cuisine. Cao Bang is the perfect destination for travelers seeking nature, relaxation, adventure, and unforgettable mountain scenery.",

        ...caoBangImages,
    },

    {
        id: "ha-giang",

        title: "North Vietnam - Ha Giang",

        shortDescription: "Adventure destination with breathtaking mountain roads.",

        fullDescription: "Ha Giang is one of Vietnam’s most famous adventure destinations, known for its dramatic mountain landscapes, winding roads, deep valleys, and breathtaking viewpoints. The region is especially popular for the legendary Ha Giang Loop, a scenic motorbike route that takes travelers through some of the most beautiful mountain scenery in Southeast Asia. Visitors can experience towering limestone peaks, terraced rice fields, traditional ethnic villages, and stunning river valleys while exploring the remote northern countryside. The area is rich in cultural diversity with many ethnic communities preserving unique traditions, clothing, festivals, and local lifestyles. Ha Giang offers unforgettable experiences for adventure seekers, photographers, and nature lovers looking to explore Vietnam’s raw and untouched beauty. The changing seasons bring colorful flowers, green mountains, golden rice terraces, and misty landscapes that create magical scenery throughout the year.",

        ...haGiangImages,
    },

    {
        id: "halong-bay",

        title: "North Vietnam - Halong Bay",

        shortDescription: "UNESCO site famous for limestone islands and cruises.",

        fullDescription: "Halong Bay is one of the most iconic natural wonders in the world and a UNESCO World Heritage Site famous for its emerald waters and thousands of towering limestone islands rising dramatically from the sea. The destination offers breathtaking scenery that attracts travelers from all around the globe. Visitors can explore hidden caves, floating fishing villages, secluded beaches, and peaceful lagoons while enjoying luxury cruises through the bay. Sunrise and sunset views over the limestone formations create unforgettable landscapes perfect for photography and relaxation. Travelers can also enjoy kayaking, swimming, cave exploration, seafood dining, and overnight cruises surrounded by nature. Halong Bay combines adventure, luxury, and natural beauty, making it one of the most unforgettable travel experiences in Vietnam. The peaceful atmosphere and spectacular scenery make it ideal for couples, families, and nature lovers seeking a world-class destination.",

        ...halongBayImages,
    },

    {
        id: "hanoi",

        title: "North Vietnam - Hanoi",

        shortDescription: "Vietnam’s historic capital rich in culture and street food.",

        fullDescription: "Hanoi is the historic capital of Vietnam and one of the country’s most culturally rich and fascinating cities. Known for its centuries-old architecture, traditional temples, vibrant street markets, and legendary street food culture, Hanoi offers a unique combination of history and modern city life. Visitors can explore the famous Old Quarter with its narrow streets, local cafés, shopping areas, and authentic Vietnamese atmosphere. The city is home to many important landmarks including Hoan Kiem Lake, the Temple of Literature, Ho Chi Minh Mausoleum, and beautiful French colonial buildings. Hanoi is also considered one of the best street food destinations in the world, offering delicious dishes such as pho, bun cha, egg coffee, and fresh spring rolls. The city becomes especially beautiful during the evening when the streets are filled with lights, music, local performances, and lively markets. Hanoi is perfect for travelers who want to experience Vietnam’s culture, history, food, and traditional lifestyle in one incredible destination.",

        ...hanoiImages,
    },

    {
        id: "ninh-binh",

        title: "North Vietnam - Ninh Binh",

        shortDescription: "Scenic rivers, caves, and lush green mountain views.",

        fullDescription: "Ninh Binh is one of Vietnam’s most beautiful natural destinations, often called the ‘Halong Bay on Land’ because of its spectacular limestone mountains, peaceful rivers, and breathtaking countryside scenery. Visitors can enjoy relaxing boat rides through caves, rivers, and lush green valleys surrounded by towering cliffs and rice fields. The area is famous for attractions such as Trang An, Tam Coc, and ancient temples that combine natural beauty with cultural history. Ninh Binh offers peaceful landscapes perfect for nature lovers, photographers, and travelers looking for a relaxing escape from busy cities. The region also features cycling routes through villages, scenic viewpoints, and traditional Vietnamese countryside experiences. During the rice harvest season, the landscape becomes even more beautiful with golden fields stretching across the valleys. Ninh Binh is ideal for travelers seeking adventure, relaxation, cultural exploration, and unforgettable natural scenery.",

        ...ninhBinhImages,
    },

    {
        id: "sapa",

        title: "North Vietnam - Sapa",

        shortDescription: "Famous for rice terraces and beautiful mountain trekking.",

        fullDescription: "Sapa is one of Vietnam’s most famous mountain destinations, known for its spectacular rice terraces, cool mountain climate, scenic trekking routes, and rich cultural diversity. Located in northern Vietnam near the Chinese border, Sapa offers breathtaking landscapes filled with misty mountains, waterfalls, green valleys, and traditional ethnic villages. Travelers can enjoy trekking adventures through rice fields and mountain trails while experiencing the unique traditions and lifestyles of local ethnic communities. The region is famous for its beautiful panoramic viewpoints and changing seasonal scenery, including green terraces during summer and golden rice fields during harvest season. Sapa also offers peaceful cafés, local markets, mountain resorts, and authentic cultural experiences that make every visit unforgettable. The fresh mountain air, dramatic landscapes, and traditional atmosphere create a perfect destination for nature lovers, photographers, adventure travelers, and anyone looking to experience the beauty of northern Vietnam.",

        ...sapaImages,
    },

    {
        id: "da-lat",

        title: "Central Vietnam - Da Lat",

        shortDescription: "A cool mountain retreat known for flowers and waterfalls.",

        fullDescription: "Da Lat is a charming highland city in central Vietnam famous for its cool climate, pine forests, colorful flower gardens, waterfalls, and peaceful mountain scenery. The city has a romantic atmosphere with French colonial villas, quiet lakes, local markets, and cozy cafes that make it feel different from Vietnam's tropical coastal destinations. Visitors can explore Xuan Huong Lake, Valley of Love, Datanla Waterfall, cable car viewpoints, and scenic countryside farms filled with strawberries, coffee, and flowers. Da Lat is also popular for adventure activities such as canyoning, trekking, cycling, and exploring forest trails. The fresh mountain air, relaxed pace, and beautiful landscapes make Da Lat ideal for couples, families, photographers, and travelers looking for a refreshing escape surrounded by nature.",

        ...daLatImages,
    },

    {
        id: "da-nang",

        title: "Central Vietnam - Da Nang",

        shortDescription: "A modern beach city with bridges, mountains, and nightlife.",

        fullDescription: "Da Nang is one of central Vietnam's most exciting coastal cities, known for its long sandy beaches, modern skyline, beautiful bridges, and easy access to famous cultural attractions. Visitors can relax on My Khe Beach, explore the Marble Mountains, enjoy panoramic views from Son Tra Peninsula, and experience the city's lively riverfront at night. Da Nang is also a gateway to Ba Na Hills, the Golden Bridge, Hoi An, and Hue, making it a perfect base for travelers who want both beach relaxation and cultural discovery. The city offers fresh seafood, stylish cafes, friendly neighborhoods, and a clean urban atmosphere that feels comfortable for families, couples, and groups. With its mix of nature, food, nightlife, and nearby heritage sites, Da Nang is one of Vietnam's most complete travel destinations.",

        ...daNangImages,
    },

    {
        id: "hoi-an",

        title: "Central Vietnam - Hoi An",

        shortDescription: "A lantern-lit ancient town rich in culture and food.",

        fullDescription: "Hoi An is one of Vietnam's most beautiful heritage destinations, famous for its lantern-lit streets, ancient houses, riverside scenery, tailor shops, and warm traditional atmosphere. The UNESCO-listed Ancient Town features a unique blend of Vietnamese, Japanese, Chinese, and European architecture, creating a peaceful setting filled with temples, markets, galleries, and local craft shops. Visitors can walk beside the Thu Bon River, take boat rides at sunset, join cooking classes, visit nearby beaches, and enjoy some of the best regional food in Vietnam, including cao lau, white rose dumplings, and banh mi. At night, colorful lanterns reflect across the river and transform the town into a memorable cultural experience. Hoi An is ideal for travelers looking for history, romance, photography, shopping, food, and relaxed coastal charm.",

        ...hoiAnImages,
    },

    {
        id: "mui-ne",

        title: "Central Vietnam - Mui Ne",

        shortDescription: "A sunny beach escape famous for dunes and water sports.",

        fullDescription: "Mui Ne is a sunny coastal destination in central Vietnam known for its sandy beaches, red and white dunes, fishing villages, and strong sea breezes that make it a favorite place for kiteboarding and windsurfing. Travelers can explore the famous Fairy Stream, watch sunrise over the white sand dunes, ride across scenic desert-like landscapes, and enjoy fresh seafood beside the ocean. Mui Ne offers a relaxed resort atmosphere with beach cafes, seafood restaurants, coastal roads, and peaceful sunsets that create an easy holiday mood. The destination is perfect for travelers who want warm weather, outdoor adventure, photography, beach relaxation, and a slower pace away from larger cities. Its mix of sea, sand, local culture, and unique natural landscapes makes Mui Ne one of Vietnam's most distinctive coastal getaways.",

        ...muiNeImages,
    },

    {
        id: "nha-trang",

        title: "Central Vietnam - Nha Trang",

        shortDescription: "A vibrant beach city with islands, seafood, and resorts.",

        fullDescription: "Nha Trang is a lively beach city in central Vietnam famous for its clear blue water, long coastline, island tours, seafood restaurants, and resort-style experiences. Visitors can spend the day relaxing on the beach, snorkeling around nearby islands, exploring coral reefs, visiting local temples, or taking a boat trip across the bay. The city combines tropical scenery with urban energy, offering cafes, night markets, rooftop views, spas, and entertainment areas close to the sea. Nha Trang is also known for mud baths, fresh seafood, and easy access to scenic coastal viewpoints. It is a strong choice for families, couples, and groups who want a beach holiday with plenty of activities, comfortable hotels, water sports, and a lively city atmosphere.",

        ...nhaTrangImages,
    },

    {
        id: "phong-nha",

        title: "Central Vietnam - Phong Nha",

        shortDescription: "A nature destination famous for caves and jungle scenery.",

        fullDescription: "Phong Nha is one of Vietnam's most impressive nature destinations, known for dramatic limestone mountains, jungle landscapes, underground rivers, and some of the world's most spectacular cave systems. The area is home to Phong Nha-Ke Bang National Park, a UNESCO World Heritage Site where visitors can explore famous caves, take boat rides through underground passages, hike through forests, and discover peaceful rural scenery. Adventure travelers can enjoy cave expeditions, cycling routes, river activities, and viewpoints surrounded by green mountains. Phong Nha also offers a quiet countryside atmosphere with local homestays, small restaurants, and friendly village life. It is ideal for nature lovers, explorers, photographers, and anyone looking for an unforgettable adventure beyond Vietnam's busy cities and beaches.",

        ...phongNhaImages,
    },

];

export default cities;