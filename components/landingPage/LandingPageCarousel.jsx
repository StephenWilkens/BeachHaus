"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";


import slider1 from "../../public/5_28/3.png";
import slider2 from "../../public/5_28/13.png";
import slider3 from "../../public/5_28/14.png";
import slider4 from "../../public/5_28/15.png";
import slider5 from "../../public/BH_Pics_11_17/3.png";
import slider6 from "../../public/BH_Pics_11_17/4.png";
import slider7 from "../../public/BH_Pics_11_17/6.png";
import slider8 from "../../public/BH_Pics_11_17/7.png";

//[Autoplay()]
// stopOnInteraction: false
export const LandingPageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <div className="embla w-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex items-center lg:max-h-full 2xl:max-h-[780px]">
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={slider1}
            alt="flight of beers"
            class="w-full object-contain lg:object-cover"
          />
        </div>
        {/* <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Link href="https://0e81a9-f7.myshopify.com/products/sip-stitch-workshop-june-10-2025">
            <Image
              src={slider2}
              alt="flight of beers"
              class="w-full object-contain lg:object-cover"
            />
          </Link>
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Link href="https://0e81a9-f7.myshopify.com/products/cocktail-aura-on-the-rooftop-june-25-2025">
            <Image
              src={slider3}
              alt="flight of beers"
              class="w-full object-contain lg:object-cover"
            />
          </Link>
        </div> */}
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={slider4}
            alt="flight of beers"
            class="w-full object-contain lg:object-cover"
          />
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={slider5}
            alt="flight of beers"
            class="w-full object-contain lg:object-cover"
          />
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={slider6}
            alt="flight"
            class="w-full object-contain lg:object-cover"
          />
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={slider7}
            alt="flight"
            class="w-full object-contain lg:object-cover"
          />
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={slider8}
            alt="flight"
            class="w-full object-contain lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};
