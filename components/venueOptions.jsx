import Link from "next/link";
import Image from "next/image";

import bh11 from "../public/11_images/beerhallreso.jpg";
import ck11 from "../public/11_images/ck_1_1.jpeg";
import lb11 from "../public/11_images/lobby11.jpg";
import tap11 from "../public/11_images/taproom.jpg";
import food11 from "../public/11_images/zaOven11.jpg";
import wedding11 from "../public/11_images/weddings_1_1.jpg";
export function VenueOptions() {
  return (
    <div>
      <div class="p-5 md:p-10">
        <h1 class="text-5xl md:text-6xl text-center text-cyan-800 font-bold">
          Venue Options
        </h1>
      </div>
      <div class="md:grid md:grid-cols-3">
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/brewery/ontap">
            <Image class="w-full" src={bh11} alt="first offering pic" />
            <div class="px-6 py-5">
              <div class="font-bold text-4xl text-cyan-800 text-center mb-2">
                Beer Hall
              </div>
              <p class="text-gray-700 text-center">(Semi-Private / Private)</p>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/brewery/food">
            <Image class="w-full" src={ck11} alt="Second offering pic" />
            <div class="px-6 py-4">
              <div class="font-bold text-4xl text-center text-cyan-800 mb-2">
                801 Craft Kitchen
              </div>
              <p class="text-gray-700 text-center">(Private)</p>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/brewery/contractbrewing">
            <Image class="w-full" src={lb11} alt="third offering pic" />
            <div class="px-6 py-5">
              <div class="font-semibold text-4xl text-cyan-800 text-center mb-2">
                Lobby Bar
              </div>
              <p class="text-gray-700 text-center">(Semi-Private)</p>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/brewery/ontap">
            <Image class="w-full" src={tap11} alt="first offering pic" />
            <div class="px-6 py-5">
              <div class="font-bold text-4xl text-cyan-800 text-center mb-2">
                Tap Room, Beer hall, & Patio
              </div>
              <p class="text-gray-700 text-center">(Private)</p>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/brewery/food">
            <Image class="w-full" src={food11} alt="Second offering pic" />
            <div class="px-6 py-4">
              <div class="font-bold text-4xl text-center text-cyan-800 mb-2">
                Food and Beverage Packages
              </div>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/brewery/contractbrewing">
            <Image class="w-full" src={wedding11} alt="third offering pic" />
            <div class="px-6 py-5">
              <div class="font-semibold text-4xl text-cyan-800 text-center mb-2">
                Wedding Packages
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
