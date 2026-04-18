/* import { useState } from "react";

type CarouselProps = {
  images: [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];
};

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={images[current]}
        alt="slide"
        className="w-full h-64 object-cover rounded-xl"
      />

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
      >
        ▶
      </button>
    </div>
  );
} */

import Carousel from "./carousel";

const CarouselSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Carousel autoplay loop className="rounded-xl h-400px">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1"
          className="h-full w-full object-cover"
          alt="img"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
          className="h-full w-full object-cover"
          alt="img"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3"
          className="h-full w-full object-cover"
          alt="img"
        />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
