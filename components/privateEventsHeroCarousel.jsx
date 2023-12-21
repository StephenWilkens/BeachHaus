"use client";
// needs to be converted to thumbs carousel
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./emblaCarouselThumbsButton";
import bhp1 from "../public/BeerHallPrivate/IMG_0788.jpeg";
import bhp2 from "../public/BeerHallPrivate/IMG_1746.jpeg";
import bhp3 from "../public/BeerHallPrivate/IMG_1747.jpeg";
import bhp4 from "../public/BeerHallPrivate/IMG_3907.jpeg";
import bhp5 from "../public/BeerHallPrivate/IMG_4132.jpeg";
import bhp6 from "../public/BeerHallPrivate/IMG_6030.jpeg";
import bhp7 from "../public/BeerHallPrivate/IMG_6537.jpg";
import bhp8 from "../public/BeerHallPrivate/oT4e9E9c.jpeg";
import r16_9_1 from "../public/16-9ratio/events-16:9.jpg"
import r16_9_2 from "../public/16-9ratio/weich_16_9.jpg"
import r16_9_27 from "../public/16-9ratio/62_27_img.jpeg"
import r16_9_3 from "../public/16-9ratio/rooftopSunsetDrink16x9.jpeg"
import r13_6_1 from "../public/13_6/bettertogeth.jpeg"
import r13_6_2 from "../public/13_6/bluebeam.jpeg"
import r13_6_3 from "../public/13_6/cheers.jpg"
import r13_6_4 from "../public/13_6/cookiebeers.jpeg"
import r13_6_5 from "../public/13_6/couple13_6.jpg"
import r13_6_6 from "../public/13_6/decor.jpg"
import r13_6_7 from "../public/13_6/donuts.jpg"
import r13_6_8 from "../public/13_6/longDining.jpg"
import r13_6_9 from "../public/13_6/thirty.jpeg"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function PrivateEventsHeroCarousel() {
  // const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const images = [r13_6_1, r13_6_2, r13_6_3, r13_6_4, r13_6_5, r13_6_6, r13_6_7, r13_6_8, r13_6_9];
  const slideCount = images.length;
  const slides = Array.from(Array(slideCount).keys());

  const imageByIndex = (index) => images[index % images.length];

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla p-2 md:p-6 md:pb-0">
      <div className="embla__viewport overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container h-[200px] md:h-[630px] 2xl:h-[1080px] [backface-visibility: hidden] flex touch-pan-y ml-[calc(var(--slide-spacing) * -1)] items-start">
          {slides.map((index) => (
            <div
              className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 px-[--slide-spacing] relative"
              key={index}
            >
              <div className="embla__slide__number w-16 h-16 z-10 absolute top-2 right-2 rounded-full bg-[rgba(249, 249, 249, 0.85)] leading-10 font-black text-center pointer-events-none">
                <span>{index + 1}</span>
              </div>
              <Image
                className="embla__slide__img block  w-full object-contain"
                src={imageByIndex(index)}
                alt="Carousel Image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs md:mt-[var(--thumbs-slide-spacing)]">
        <div
          className="embla-thumbs__viewport overflow-hidden"
          ref={emblaThumbsRef}
        >
          <div className="embla-thumbs__container flex flex-row ml-[calc(var(--thumbs-slide-spacing) * -1)]">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={imageByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


 