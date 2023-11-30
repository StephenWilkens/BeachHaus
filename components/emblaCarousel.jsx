"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import flights from "../public/bhFlights.png";
//[Autoplay()]

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla overflow-hidden w-full" ref={emblaRef}>
      <div className="embla__container flex lg:max-h-[540px] 2xl:max-h-[780px] items-center">
        <div className="embla__slide bg-black relative flex flex-none flex-wrap lg:flex-nowrap w-full">
          <Image
            src={flights}
            alt="flight of beers"
            class="opacity-70 w-full"
          />
          <div className="absolute inset-0 flex items-center justify-between">
            <h1 className="text-white text-8xl">
              The Brewery
              <br />
              at Beach Haus
            </h1>
            <p className="text-white text-2xl">Great food, fresh beer, and cocktails</p>
          </div>
        </div>
        <div className="embla__slide relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10">
          Slide 2
        </div>
        <div className="embla__slide relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10">
          Slide 3
        </div>
      </div>
    </div>
  );
};


{/* <div className="absolute inset-0 flex items-center justify-between">
            <h1 className="text-white text-8xl">
              The Brewery
              <br />
              at Beach Haus
            </h1>
            <p className="text-white text-2xl">Great food, fresh beer, and cocktails</p>
          </div> */}