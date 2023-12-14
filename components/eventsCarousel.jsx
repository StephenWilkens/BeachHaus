'use client'
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "@/components/carouselDotButtons";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";


// import imageByIndex from './imageByIndex'

export function EventsCarousel(props) {
  const { images, options } = props
  // const images = [reserved, weich, xmas, jbs];
  const SLIDE_COUNT = images.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );

  const emblaDot =
    "touch-manipulation inline-flex cursor-pointer border-0 p-0 m-0 w-9 h-1 rounded-sm items-center mx-3";
  const emblaDotSelected = "bg-gradient-to-br bg-black";

  const imageByIndex = (index) => images[index % images.length];

  return (
    <div className="embla p-6">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y [backface-visibility: hidden] ml-[calc(var(--slide-spacing) * -1)]">
          {slides.map((index) => (
            <div
              className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] relative"
              key={index}
            >
              <Image
                className="embla__slide__img max-h-[540px] block object-contain"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__dots z-10 bottom-32 absolute left-0 right-0 flex justify-center items-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`${emblaDot}`.concat(
              index === selectedIndex ? `${emblaDotSelected}` : " bg-white"
            )}
          />
        ))}
      </div> */}
    </div>
  );
}
