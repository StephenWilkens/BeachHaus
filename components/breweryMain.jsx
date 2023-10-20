import bhLong from "../public/bh-long.jpeg";
import beerPic from "../public/AnonyHop_CKT.jpg";
import brewLines from "../public/brewLines.jpeg";
import Image from "next/image";
import Link from "next/link";

export function BreweryMain() {
  return (
    <div class="">
      <div class="grid grid-cols-2 relative bg-black ">
        <div class="w-full m-auto col-span-2">
          <Image
            src={bhLong}
            alt="top img"
            fill
            class="object-cover opacity-50 md:opacity-80 absolute"
          />
          <div class="md:col-span-1 md:w-2/6 md:h-4/6 md:bg-black md:absolute md:opacity-70 md:inset-y-24 md:inset-x-28"></div>
        </div>
        <div class="z-10 col-span-2 h-full p-10 w-full text-center md:col-span-1 relative">
          <h1 class="z-20 text-2xl text-white font-bold md:text-6xl md:py-36 md:px-40 md:text-left  ">
            The Brewery at Beach Haus
          </h1>
        </div>
      </div>
      <div class="p-10">
        <h1 class="text-6xl text-center text-red-800 font-bold">
          Our Offerings
        </h1>
      </div>
      <div class="md:grid md:grid-cols-3">
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/brewery/ontap">
            <Image class="w-full" src={beerPic} alt="first offering pic" />
            <div class="px-6 py-5">
              <div class="font-bold text-4xl text-red-800 text-center mb-2">
                Haus Brews
              </div>
              <p class="text-gray-700 text-center">
                Check out what we've got on our 20 rotating taps!
              </p>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="#">
            <Image class="w-full" src={beerPic} alt="Second offering pic" />
            <div class="px-6 py-4">
              <div class="font-bold text-4xl text-center text-red-800 mb-2">
                Haus Foods
              </div>
              <p class="text-gray-700 text-center">
                Come see our food offerings!
              </p>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/brewery/contractbrewing">
            <Image class="w-full" src={brewLines} alt="third offering pic" />
            <div class="px-6 py-5">
              <div class="font-semibold text-4xl text-red-800 text-center mb-2">
                Contract Brewing
              </div>
              <p class="text-gray-700 text-center">
                Start-to-finish contract brewing and packaging services.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
