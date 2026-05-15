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
