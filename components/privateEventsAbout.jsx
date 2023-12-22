import Image from "next/image";
import Script from "next/script";
import { BookYourEventButton } from "@/components/bookYourEventButton";

import bhLongLogo from "../public/beachHausBrewLongLogo.png";
export function PrivateEventsAbout() {
  return (
    <div className="relative grid">
      {/* <Image
        src={bhLongLogo}
        alt="Main Room"
        fill
        class="object-cover opacity-5 absolute"
      /> */}
      <div className="h-full w-full flex flex-col pt-4 pb-2 px-5 md:py-10 md:px-20">
        <h1 className="text-black text-justify md:text-3xl md:tracking-wide md:leading-normal md:font-[250]">
          Overlooking downtown Belmar, NJ, our 4,000 square foot Brew Pub is an
          ideal venue for any type of event! Our venues are housed within three
          stories of impressive space with atmospheres ranging from rustic to
          elegant. Our food and beverage packages meet the needs for any event
          whether it be casual or formal - Birthdays, Showers, Rehearsal
          Dinners, Corporate Events, Weddings, and more! Fill out the form below
          for more information!
        </h1>
      </div>
      <div className="pb-3">
        <BookYourEventButton />
      </div>
    </div>
  );
}
