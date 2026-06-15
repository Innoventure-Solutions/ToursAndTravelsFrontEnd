import { useState } from "react";

// Dynamically import all carousel images
const imageModules = import.meta.glob("../assets/carousel/*.jpg", { eager: true });
const images = Object.values(imageModules).map((module: any) => module.default);
 
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={images[current]}
        className="w-full h-[220px] sm:h-[300px] md:h-[500px] object-cover"
        alt="carousel"
      />

      {current === 0 && (
        <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/30 text-left px-6 sm:px-10 md:px-16">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Explore <span className="text-orange-500">Vietnam</span>
          </h1>
          <p className="mt-2 text-sm sm:text-lg md:text-2xl font-medium text-white/90 drop-shadow-lg">
            Vietnam tour packages &amp; travel itineraries crafted by VietJourney 360 - discover breathtaking destinations, made just for your journey.
          </p>
        </div>
      )}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer"
      >
        ❮
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
