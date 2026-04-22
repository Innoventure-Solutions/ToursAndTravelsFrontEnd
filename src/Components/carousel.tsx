import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3",
];

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
