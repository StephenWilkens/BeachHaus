"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import flights from "../../public/bhFlights.png";
import fullTable from "../../public/801FullTable.jpg";
import rooftopPour from "../../public/rooftopPour.JPG";
import craftCool from "../../public/801Cool.png";
import trivia from "../../public/16x9Crop/BH_16X9trivia.jpg";
import testDept from "../../public/16x9Crop/BH_16x9testDept.jpg";
import contractBrewImg from "../../public/16x9Crop/BH_16x9contractBrewing.jpg";
import distroImg from "../../public/16x9Crop/BH_16x9_DistroSlider.jpg";
import burgersImg from "../../public/16x9Crop/BH_BurgerSlider.png";
import liveMusicImg from "../../public/16x9Crop/BH_16x9_MusicSlider.jpg";
//[Autoplay()]
// stopOnInteraction: false
export const LandingPageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <div className="embla w-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex max-h-[360px] items-center lg:max-h-[720px] 2xl:max-h-[780px]">
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-[720px] lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={burgersImg}
            alt="flight of beers"
            class="w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start md:gap-4">
            <h1 className="text-center text-5xl font-bold text-white md:pl-3 md:text-start md:text-8xl">
              Burger Mondays
            </h1>
            <p className="px-12 pt-2 text-center text-xl text-white md:px-0 md:pl-3 md:text-start md:text-2xl">
              Every Monday, Buy 1 Burger, Get a 2nd Burger Half Off!
            </p>
            <button class="ml-3 mt-3 rounded bg-cyan-800 px-2 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery/food">See the Burger Menu!</Link>
            </button>
          </div>
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-[720px] lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={trivia}
            alt="flight of beers"
            class="w-full object-cover"
          />
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-[720px] lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={testDept}
            alt="flight of beers"
            class="w-full object-cover opacity-70 lg:opacity-90"
          />
          <div className="absolute inset-0 top-10 flex flex-col items-center md:gap-4 lg:top-60">
            <h1 className="text-center text-5xl font-bold text-white md:pl-3 md:text-start md:text-8xl">
              Test Dept. Friday
            </h1>
          </div>
          <div className="absolute inset-0 top-40 lg:top-80">
            <p className="text-center text-xl text-white lg:mt-40 lg:px-80 lg:font-semibold lg:text-center lg:text-2xl">
              Each Friday, our brewers release a limited small brew to
              experiment with new styles! These unique beers are draft only, and
              go fast!
            </p>
          </div>
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-[720px] lg:flex-nowrap 2xl:max-h-[780px]">
          <Link className="max-md:h-[360px] lg:max-h-[720px] " href="/events-calendar">
            <Image
              src={liveMusicImg}
              alt="flight"
              class="max-md:h-[360px] h-full object-cover"
            />
          </Link>
          button to events
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-[720px] lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={distroImg}
            alt="flight"
            class="w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center md:items-end md:gap-4">
            <h1 className="text-center text-5xl font-bold text-white md:px-3 md:text-start md:text-8xl">
              We Finally Can Distribute our Beer!
            </h1>
            <p className="px-12 pt-2 text-center text-xl text-white md:px-0 md:pr-3 md:text-end md:text-4xl">
              Bars! Restaurants! Retailers! Buyers and managers reach out to us
              directly for beer inquiries!
            </p>
            <button class="mr-3 mt-3 rounded bg-cyan-800 px-2 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery/contractbrewing">Contact Us Today</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
