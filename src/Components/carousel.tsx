import React from "react";
import {
  Carousel as MTCarousel,
  type CarouselProps,
} from "@material-tailwind/react";

const Carousel = MTCarousel as unknown as React.FC<
  React.PropsWithChildren<Partial<CarouselProps>>
>;

export default Carousel;
