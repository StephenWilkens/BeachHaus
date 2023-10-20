import lander_location from "../public/lander-location-Beach-Haus-1.jpg";
import Link from "next/link";
import Image from "next/image";
import taps from "../public/TapMarkers.jpg";
import bhLong from "../public/bh-long.jpeg";
import entree from "../public/801entree.jpeg";

export function OurFacility() {
  return (
    <div>
      <div className="mx-auto  bg-orange-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 py-10">
          <div className="hidden md:block md:col-start-1 md:col-end-1">
            <Image src={taps} alt="taps" />
          </div>
          <div className="border-2 border-black py-20 px-12 rounded-xl col-span-2 md:col-start-2 md:col-end-2 place-self-center mx-3 md:mx-10">
            <h1 className="font-bold text-4xl text-center">
              Brewery at Beach Haus
            </h1>
            <br />
            <p className="text-center">
              Beach Haus is the Jersey Shore’s premier brewery for crispy lagers
              & refreshing ales. Don’t forget the food & views!
            </p>
            <br />
            <div class="ml-20 md:ml-36">
              <Link
                href="/brewery"
                class="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
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
          <h1 className="text-6xl text-white text-center">801 Craft Kitchen</h1>
          <p className="text-4xl text-white text-center">
            Casual contemporary American sit-down dining
          </p>
          <p className="text-white text-center">
            Chef Rob Tuzeneu delivers a menu encompassing light shareable
            appetizers to seasonally sourced mains and crafted desserts.
          </p>
        </div>
      </div>
      <div>
        <div className="mx-auto bg-orange-50">
          <div className="max-w-6xl mx-auto grid grid-cols-2 py-10">
            <div className="border-2 border-black py-20 px-12 col-span-2 md:col-start-1 md:col-end-1 place-self-center mx-10">
              <h1 className="text-4xl">Rooftop at Beach Haus</h1>
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
                href="/restaurant"
                class="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded"
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
            <div className="bg-orange-50 py-20 px-5 mx-auto md:px-12 col-span-2 md:col-start-2 md:col-end-2 place-self-center md:mx-10">
              <h1 className="text-4xl ">Host Private Parties With Us</h1>
              <br />
              <p className="">
                Contact our private events booking staff to rent out our event
                space for your next party!
              </p>
              <br />
              <button class="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Book Today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
