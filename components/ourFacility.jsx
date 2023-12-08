"use client";
import lander_location from "../public/lander-location-Beach-Haus-1.jpg";
import Link from "next/link";
import Image from "next/image";
import taps from "../public/TapMarkers.jpg";
import bhLong from "../public/bh-long.jpeg";
import entree from "../public/801entree.jpeg";
import oakTableSpread from "../public/oakTableSpread.jpeg";
import { Card } from "flowbite-react";

export function OurFacility() {
  return (
    <div>
      <div className="mx-auto md:bg-gray-50">
        <div>
          <div class="md:hidden max-w-sm rounded overflow-hidden shadow-2xl m-5 md:col-span-1">
            <Link href="/brewery">
              <Image
                class="w-full"
                src={oakTableSpread}
                alt="first offering pic"
              />
              <div class="px-6 py-5">
                <div class="font-bold text-5xl text-cyan-800 text-center mb-2">
                  The Brewery at
                  <br />
                  Beach Haus
                </div>
                <p class="text-gray-700 text-justify pt-5 text-xl">
                  Not only is our brewery the Jersey Shore&apos;s premier
                  brewery for crispy lagers & refreshing ales, but we also offer
                  incredible food and a full bar.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 py-5">
          <div className="hidden md:block md:col-start-1 md:col-end-1">
            <Image src={oakTableSpread} alt="taps" />
          </div>
          <Link href="/brewery">
            <div className="hidden md:block md:bg-white md:shadow-xl md:rounded-md md:py-32 md:px-12 md:col-span-1 md:place-self-center md:place-content-end md:mx-3 md:ml-28 md:mt-12">
              <h1 className="font-bold text-6xl text-cyan-800 text-justify">
                The Brewery
                <br />
                at Beach Haus
              </h1>
              <br />
              <p className="text-gray-700 text-justify text-xl">
                Not only is our brewery the Jersey Shore&apos;s premier brewery
                for crispy lagers & refreshing ales, but we also offer
                incredible food and a full bar.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Link href="https://801craftkitchen.com">
        <div className="grid grid-cols-2 bg-black relative">
          <div className="w-full m-auto col-span-2">
            <Image
              src={entree}
              alt="div background"
              fill
              class="object-cover opacity-60 absolute"
            />
          </div>
          <div class="z-20 col-span-2 h-full w-full p-10 md:p-40 flex flex-col space-y-10">
            <h1 className="text-6xl text-white text-center">
              801 Craft Kitchen
            </h1>
            <p className="text-4xl text-white text-center">
              Casual contemporary American sit-down dining
            </p>
            <p className="text-white text-center">
              Chef Rob Tuzeneu delivers a menu encompassing light shareable
              appetizers to seasonally sourced mains and crafted desserts.
            </p>
          </div>
        </div>
      </Link>
      <div>
        <div className="mx-auto bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-2 py-10">
            <div className="shadow-2xl rounded-md py-20 px-12 col-span-2 md:col-start-1 md:col-end-1 place-self-center mx-10">
              <h1 className="text-4xl text-cyan-800">Rooftop at Beach Haus</h1>
              <br />
              <p>
                A 40-seat bar, fire pits with soft seating, an extensive
                cocktail menu, and a sunset view of the Shark River.
              </p>
              <br />
              <p>Check out the new releases & our fan favorites on our menu!</p>
              <br />
              <div class="ml-10 md:ml-36">
                <Link
                  href="/rooftop"
                  class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:col-start-2 md:col-end-2">
              <Image src={taps} alt="taps" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-black relative">
        <div className="w-full m-auto col-span-2">
          <Image
            src={bhLong}
            alt="div background"
            fill
            class="object-cover opacity-60 absolute"
          />
        </div>
        <div class="z-20 col-span-2 h-full w-full p-10">
          <div className="mx-auto grid grid-cols-2 py-10">
            <div className="bg-white shadow-inner rounded-md pb-6 pt-4 px-5 md:px-12 md:py-16 col-span-2 md:col-start-2 md:col-end-2 place-self-center md:mx-10">
              <h1 className="text-4xl md:text-6xl md:font-medium text-cyan-800">
                Host Private Parties With Us
              </h1>
              <br />
              <p className="">
                Contact our private events booking staff to rent out our event
                space for your next party!
              </p>
              <br />
              <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded">
                <Link href="/brewery/eventsbooking">Book Today!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
