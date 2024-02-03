import Link from "next/link";
import Image from "next/image";

import bh11 from "../../public/11_images/beerHall_cardPic.JPEG";
import ck11 from "../../public/11_images/ck_1_1.jpeg";
import lb11 from "../../public/11_images/lobby11.jpg";
import tap11 from "../../public/11_images/taproom.jpg";
import food11 from "../../public/11_images/burgers1_1.jpeg";
import wedding11 from "../../public/11_images/wedding1_1.jpeg";
export function VenueOptions() {
  return (
    <div>
      <div class="md:p-5 mt-5 md:mt-16">
        <h1 class="text-4xl md:text-6xl text-center font-light md:pb-5">
          VENUE OPTIONS
        </h1>
      </div>
      <div class="md:grid md:grid-cols-3">
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/private-events/venue-options/beer-hall">
            <Image class="w-full" src={bh11} alt="first offering pic" />
            <div class="px-3 py-5">
              <div class="font-light text-2xl md:text-4xl text-center mb-2">
                BEER HALL
              </div>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/private-events/venue-options/craft-kitchen">
            <Image class="w-full" src={ck11} alt="Second offering pic" />
            <div class="px-3 py-4">
              <div class="font-light text-2xl md:text-4xl text-center mb-2">
                801 CRAFT KITCHEN
              </div>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/private-events/venue-options/lobby-bar">
            <Image class="w-full" src={lb11} alt="third offering pic" />
            <div class="px-3 py-5">
              <div class="font-light text-2xl md:text-4xl text-center mb-2">
                LOBBY BAR
              </div>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/private-events/venue-options/taproom-beerhall-patio">
            <Image class="w-full" src={tap11} alt="first offering pic" />
            <div class="px-3 py-5">
              <div class="font-light text-2xl md:text-4xl text-center mb-2">
                TAP ROOM, BEER HALL, AND PATIO
              </div>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/private-events/food-and-beverage-packages">
            <Image class="w-full" src={food11} alt="Second offering pic" />
            <div class="px-3 py-4">
              <div class="font-light text-2xl md:text-4xl text-center mb-2">
                FOOD AND BEVERAGE PACKAGES
              </div>
            </div>
          </Link>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
          <Link href="/private-events/weddings">
            <Image class="w-full" src={wedding11} alt="third offering pic" />
            <div class="px-3 py-5">
              <div class="font-light text-2xl md:text-4xl text-center mb-2">
                WEDDING PACKAGES
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
