import BHLong from "../../public/bh-long.jpeg";
import Image from "next/image";

export function BreweryLandingPageHeader() {
  return (
    <div class="relative grid grid-cols-2 bg-black ">
      <div class="col-span-2 m-auto w-full">
        <Image
          src={BHLong}
          alt="top img"
          fill
          class="absolute object-cover opacity-80"
        />
        <div class="md:absolute md:inset-x-28 md:inset-y-24 md:col-span-1 md:h-4/6 md:w-2/6 md:bg-black md:opacity-70"></div>
      </div>
      <div class="relative z-10 col-span-2 h-full w-full p-10 text-center md:col-span-1">
        <h1 class="z-20 text-2xl font-bold text-white md:px-40 md:py-36 md:text-left md:text-6xl 2xl:ml-12 2xl:mr-44 2xl:py-52 2xl:text-8xl">
          The Brewery at Beach Haus
        </h1>
      </div>
    </div>
  );
}
