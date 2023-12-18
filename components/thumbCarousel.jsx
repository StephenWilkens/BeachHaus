"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./emblaCarouselThumbsButton";
import Image from "next/image";

export function ThumbCarousel(props) {
  const { images, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      dragFree: true,
    }
  );
  // const images = [bhp1, bhp2, bhp3, bhp4, bhp5, bhp6, bhp7, bhp8];
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
        <div className="embla__container h-[360px] md:h-[540px] 2xl:h-[720px] [backface-visibility: hidden] flex touch-pan-y ml-[calc(var(--slide-spacing) * -1)] items-start">
          {slides.map((index) => (
            <div
              className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] relative"
              key={index}
            >
              <div className="embla__slide__number w-16 h-16 z-10 absolute top-2 right-2 rounded-full bg-[rgba(249, 249, 249, 0.85)] leading-10 font-black text-center pointer-events-none">
                <span>{index + 1}</span>
              </div>
              <Image
                className="embla__slide__img block h-[360px] md:h-[540px] 2xl:h-[720px] w-full object-contain"
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
