"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import flights from "../../public/bhFlights.png";
import fullTable from "../../public/801FullTable.jpg";
import rooftopPour from "../../public/rooftopPour.JPG";
import craftCool from "../../public/801Cool.png";
//[Autoplay()]


export const LandingPageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla overflow-hidden w-full" ref={emblaRef}>
      <div className="embla__container flex max-h-[360px] lg:max-h-[540px] 2xl:max-h-[780px] items-center">
        <div className="embla__slide bg-black relative flex flex-none flex-wrap lg:flex-nowrap w-full min-h-[360px] lg:max-h-[540px] 2xl:max-h-[780px]">
          <Image
            src={rooftopPour }
            alt="flight of beers"
            class="opacity-70 w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center md:gap-4">
            <h1 className="text-white text-center md:text-start text-5xl font-bold md:text-8xl md:pl-3">
              The Rooftop
              <br />
              at Beach Haus
            </h1>
            <p className="text-white text-center md:text-start pt-2 px-12 md:px-0 md:pl-3 text-xl md:text-2xl">
              Belmar&apos;s best rooftop bar
            </p>
            <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-2 mt-3 rounded ml-3">
              <Link href="/rooftop">Join the party!</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide bg-black relative flex flex-none flex-wrap lg:flex-nowrap w-full min-h-[360px] lg:max-h-[540px] 2xl:max-h-[780px]">
          <Image
            src={fullTable }
            alt="flight of beers"
            class="opacity-70 w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center md:gap-4">
            <h1 className="text-white text-center md:text-start text-5xl font-bold md:text-8xl md:pl-3">
              The Brewery
              <br />
              at Beach Haus
            </h1>
            <p className="text-white text-center md:text-start pt-2 px-12 md:px-0 md:pl-3 text-xl md:text-2xl">
              Delicious food, award winning beer, and fresh cocktails
            </p>
            <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-2 mt-3 rounded ml-3">
              <Link href="/brewery">Explore our Menu</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide bg-black relative flex flex-none flex-wrap lg:flex-nowrap w-full min-h-[360px] lg:max-h-[540px] 2xl:max-h-[780px]">
          <Image
            src={craftCool }
            alt="flight of beers"
            class="opacity-70 w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center md:gap-4">
            <h1 className="text-white text-center md:text-start text-5xl font-bold md:text-8xl md:pl-3">
              801 Craft Kitchen
            </h1>
            <p className="text-white text-center md:text-start pt-2 px-12 md:px-0 md:pl-3 text-xl md:text-2xl">
              Fine dining at the shore
            </p>
            <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-2 mt-3 rounded ml-3">
              <Link href="https://801craftkitchen.com/">Meet the Chef</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide bg-black relative flex flex-none flex-wrap lg:flex-nowrap w-full min-h-[360px] lg:max-h-[540px] 2xl:max-h-[780px]">
          <Image
            src={ flights }
            alt="flight"
            class="opacity-70 w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center md:gap-4">
            <h1 className="text-white text-center md:text-start text-5xl font-bold md:text-8xl md:pr-3">
              The Lounge
            </h1>
            <p className="text-white text-center md:text-end pt-2 px-12 md:px-0 md:pr-3 text-xl md:text-2xl">
              Local vibe with world class beer
            </p>
            <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-2 mt-3 rounded mr-3">
              <Link href="/lounge">Check it out!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};