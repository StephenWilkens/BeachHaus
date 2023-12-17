"use client";

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
import Image from "next/image";
import AutoHeight from "embla-carousel-auto-height";

export function ThumbCarousel() {
  // const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      dragFree: true,
    },
    [AutoHeight()]
  );
  const images = [bhp1, bhp2, bhp3, bhp4, bhp5, bhp6, bhp7, bhp8];
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
    <div className="embla p-6">
      <div className="embla__viewport overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container [backface-visibility: hidden] flex touch-pan-y ml-[calc(var(--slide-spacing) * -1)] items-start">
          {slides.map((index) => (
            <div
              className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] relative"
              key={index}
            >
              <div className="embla__slide__number w-16 h-16 z-10 absolute top-2 right-2 rounded-full bg-[rgba(249, 249, 249, 0.85)] leading-10 font-black text-center pointer-events-none">
                <span>{index + 1}</span>
              </div>
              <Image
                className="embla__slide__img block h-[var(--slide-height)] w-full object-cover"
                src={imageByIndex(index)}
                alt="Carousel Image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs mt-[var(--thumbs-slide-spacing)]">
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
