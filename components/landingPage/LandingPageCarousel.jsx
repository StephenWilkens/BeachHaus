"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import trivia from "../../public/16x9Crop/BH_16X9trivia.jpg";
import testDept from "../../public/16x9Crop/BH_16x9testDept.jpg";
import distroImg from "../../public/16x9Crop/BH_16x9_DistroSlider.jpg";
import burgersImg from "../../public/16x9Crop/BH_BurgerSlider.png";
import liveMusicImg from "../../public/16x9Crop/BH_16x9_HausPartySlider.jpg";
import musicBingo from "../../public/MusicBingo.jpg";
import karaoke from "../../public/Karaoke.jpg";
import cigarNight from "../../public/SUNSETS&CIGARS.jpg";
import legrande from "../../public/ERIC LEGRAND BOURBON TASTING (11 x 11 in) (16 x 9 in).png";
import slider1 from "../../public/BH_Pics_11_17/Orange & Green Illustrative Chili Cook-off Instagram Post-6.png";
import slider2 from "../../public/BH_Pics_11_17/WEBSITE BANNER PHOTOS-2.png";
import slider3 from "../../public/BH_Pics_11_17/1.png";
import slider4 from "../../public/BH_Pics_11_17/3.png";
import slider5 from "../../public/BH_Pics_11_17/4.png";
import slider6 from "../../public/BH_Pics_11_17/5.png";
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
          <Link href="https://www.eventbrite.com/e/beach-haus-brewery-tickets-1134030789619?aff=oddtdtcreator">
            <Image
              src={slider1}
              alt="flight of beers"
              class="w-full object-contain lg:object-cover"
            />
          </Link>
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={slider2}
            alt="flight of beers"
            class="w-full object-contain lg:object-cover"
          />
        </div>
        <div className="embla__slide relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-full lg:flex-nowrap 2xl:max-h-[780px]">
          <Image
            src={slider3}
            alt="flight of beers"
            class="w-full object-contain lg:object-cover"
          />
        </div>
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
