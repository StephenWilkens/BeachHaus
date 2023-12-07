"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import reserved from "../public/BeerHallSemiPrivate/beerHallReserved.jpg";
import weich from "../public/BeerHallSemiPrivate/DB16296C-80B7-42B0-9A18-0B0F84C65509.jpg";
import xmas from "../public/BeerHallSemiPrivate/events-events-FullSizeRender.jpg";
// [Autoplay()]

export const BeerHallSemiPrivateCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
    inViewThreshold: 0.7,
  });
  const images = [reserved, weich, xmas];

  return (
    <div className="embla p-1.5 bg-black">
      <div className="embla viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container [backface-visibility: hidden] flex touch-pan-y max-h-[540px]">
          {images.map((image, i) => (
            <div
              className="flex-[0_0_70%] min-w-0 relative"
              key={i}
            >
              <Image
                src={image}
                alt="flight"
                class="block h-full w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
