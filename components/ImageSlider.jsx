"use client";
import bh1 from "../public/bh1.jpg";
import bh2 from "../public/bh2.jpg";
import bh3 from "../public/bh3.jpg";
import bh4 from "../public/bh4.jpg";
import av1 from "../public/averyimg1.jpeg";
import av2 from "../public/averyimg2.jpeg";
import av3 from "../public/averimg3.jpeg";
import av4 from "../public/averyimg4.jpeg";
import bhLong from "../public/bh-long.jpeg";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState, useEffect } from "react";

export function ImageSlider({ autoSlide = false, autoSlideInterval = 3000 }) {
  const slides = [av1, av2, av3, av4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  const prevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" w-full  lg:max-h-[540px] 2xl:max-h-[780px] m-auto relative group flex items-center justify-center overflow-hidden">
        <Image
          src={slides[currentIndex]}
          alt="Slider Image"
          class="place-self-center"
        />
      <div className="absolute inset-0 flex items-center justify-between p-4">
        {/* Need some javascript to say if(currentIndex === 1) {use this ^} else if (=== 2) {use that} */}
        <button
          onClick={prevSlide}
          className="absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 md:w-10 md:h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 md:w-10 md:h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-end p-1">
          {slides.map((slide, slideIndex) => (
            <div
              className="sm:text-2xl cursor-pointer bg-white/70 rounded-full"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
