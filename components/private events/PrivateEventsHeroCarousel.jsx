"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "../ThumbnailCarousel";
import slider_1 from "../../public/13_6/decor.jpg";
import slider_2 from "../../public/16x9Crop/KLP02300.jpg";
import slider_3 from "../../public/16x9Crop/beerHall/oT4e9E9c.jpg";
import slider_4 from "../../public/16x9Crop/food&Bev/Screenshot 2023-12-08 at 10.56.32 PM.jpg";
import slider_5 from "../../public/16x9Crop/food&Bev/0A568443-2E37-4258-824E-59561DB03127.jpg";
import slider_6 from "../../public/16x9Crop/wedding/2K6A9020.jpg";
import slider_7 from "../../public/16x9Crop/1220Cherryville.jpg";
import slider_8 from "../../public/16x9Crop/craftKitchen/C331E484-30B3-4EE2-8EB7-15B418A0A5AE.jpg";
import slider_9 from "../../public/16x9Crop/DCC89281-1524-4FA0-B5A5-F1D3FCD02DE6.jpg";
import slider_10 from "../../public/16x9Crop/wedding/Decor.jpg";
import slider_11 from "../../public/16x9Crop/food&Bev/FD69FF0D-6800-4060-A532-BB943653A780.jpg";
import slider_12 from "../../public/16x9Crop/beerHall/IMG_3907.jpg";
import slider_13 from "../../public/16x9Crop/beerHall/IMG_4132.jpg";
import slider_14 from "../../public/13_6/thirty.jpeg";
import slider_15 from "../../public/16x9Crop/beerHall/IMG_6537.jpg";
import slider_16 from "../../public/16x9Crop/food&Bev/Kaitlyn+Zack-1093.jpg";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function PrivateEventsHeroCarousel() {
  // const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
  ]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const images = [
    slider_1,
    slider_5,
    slider_6,
    slider_7,
    slider_8,
    slider_9,
    slider_10,
    slider_11,
    slider_12,
    slider_13,
    slider_14,
    slider_15,
    slider_2,
    slider_3,
    slider_4,
    slider_16,
  ];
  const slideCount = images.length;
  const slides = Array.from(Array(slideCount).keys());

  const imageByIndex = (index) => images[index % images.length];

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
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
    <div className="embla p-2 md:p-6 md:pb-0 bg-cyan-50">
      <div className="embla__viewport overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container [backface-visibility: hidden] ml-[calc(var(--slide-spacing) * -1)] flex h-[200px] touch-pan-y items-start md:h-[630px] 2xl:h-[1080px]">
          {slides.map((index) => (
            <div
              className="embla__slide relative min-w-0 flex-[0_0_var(--slide-size)] px-[--slide-spacing]"
              key={index}
            >
              <div className="embla__slide__number bg-[rgba(249, 249, 249, 0.85)] pointer-events-none absolute right-2 top-2 z-10 h-16 w-16 rounded-full text-center font-black leading-10">
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
          <div className="embla-thumbs__container ml-[calc(var(--thumbs-slide-spacing) * -1)] flex flex-row">
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
