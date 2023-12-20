"use client";
import Script from "next/script";
import { WeddingsAtBHScript } from "@/components/weddingsAtBHScript";
import { EventsCarousel, EventsCarouselCarousel } from "@/components/eventsCarousel"
import reserved from "../../public/BeerHallSemiPrivate/04BF669F-4982-475E-9E3C-B51B419FFD54.jpg";
import weich from "../../public/BeerHallSemiPrivate/beerHallReserved.jpg";
import xmas from "../../public/BeerHallSemiPrivate/DB16296C-80B7-42B0-9A18-0B0F84C65509.jpg";
import jbs from "../../public/BeerHallSemiPrivate/DB16296C-80B7-42B0-9A18-0B0F84C65509.jpg";
import { ThumbCarousel } from '@/components/keenSlider'
const OPTIONS = { loop: true }
const IMAGES = [reserved, weich, xmas, jbs];
import { BHSPCarousel } from "@/components/bhspCarousel";
import { PrivateEventsAbout } from "@/components/privateEventsAbout";
import { BookYourEventButton } from "@/components/bookYourEventButton";
import { PrivateEventsHeroCarousel } from "@/components/privateEventsHeroCarousel";
import { PrivateEventsVenueOptions } from "@/components/privateEventsVenueOptions";

export default function Playground() {
  return (
    <div>
      <PrivateEventsHeroCarousel />
      <PrivateEventsAbout />
      <BookYourEventButton />
      <PrivateEventsVenueOptions />
    </div>
  );
}
