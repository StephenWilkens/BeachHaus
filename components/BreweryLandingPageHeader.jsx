import BHLong from "../public/bh-long.jpeg";
import Image from "next/image";

export function BreweryLandingPageHeader() {
  return (
    <div class="grid grid-cols-2 relative bg-black ">
        <div class="w-full m-auto col-span-2">
          <Image
            src={BHLong}
            alt="top img"
            fill
            class="object-cover opacity-50 md:opacity-80 absolute"
          />
          <div class="md:col-span-1 md:w-2/6 md:h-4/6 md:bg-black md:absolute md:opacity-70 md:inset-y-24 md:inset-x-28"></div>
        </div>
        <div class="z-10 col-span-2 h-full p-10 w-full text-center md:col-span-1 relative">
          <h1 class="z-20 text-2xl text-white font-bold md:text-6xl md:py-36 md:px-40 md:text-left 2xl:text-8xl 2xl:mr-44 2xl:ml-12 2xl:py-52">
            The Brewery at Beach Haus
          </h1>
        </div>
      </div>
  )
}