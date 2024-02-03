"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./ThumbnailCarousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function VenuePagesCarousel(props) {
  const { images, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [Autoplay()]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
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
    <div className="embla p-2 ">
      <div className="embla__viewport overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container [backface-visibility: hidden] ml-[calc(var(--slide-spacing) * -1)] flex h-[230px] touch-pan-y items-start md:h-[450px] 2xl:h-[1080px]">
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

      <div className="embla-thumbs pr-2 md:mt-[var(--thumbs-slide-spacing)]">
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
