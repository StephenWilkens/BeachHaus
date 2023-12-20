import Image from "next/image";
import Script from 'next/script'

import bhLongLogo from "../public/beachHausBrewLongLogo.png";
export function PrivateEventsAbout() {
  return (
    <div className="bg-white relative grid">
      <Image
        src={bhLongLogo}
        alt="Main Room"
        fill
        class="object-cover opacity-5 absolute"
      />
      <div className="h-full w-full flex flex-col py-5 px-3 md:py-16 md:px-20">
        <h1 className="text-black md:text-3xl md:tracking-wide md:leading-normal">
          Overlooking downtown Belmar, NJ, our 4,000 square foot Brew Pub is an
          ideal venue for any type of event! Our venues are housed within three
          stories of impressive space with atmospheres ranging from rustic to
          elegant. Our food and beverage packages meet the needs for any event
          whether it be casual or formal - Birthdays, Showers, Rehearsal
          Dinners, Corporate Events, Weddings, and more! Fill out the form below
          for more information!
        </h1>
      </div>
    </div>
  );
}

