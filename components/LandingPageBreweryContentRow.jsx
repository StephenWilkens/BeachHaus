import Image from "next/image";
import Link from "next/link";
import bhBG from "../public/16x9Crop/tapRoom-BeerHall-Patio/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -518.jpg";

export function LandingPageBreweryContentRow() {
  return (
    <div className="bg-black relative group lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="mobile md:hidden">
        <Image
          src={bhBG}
          alt="beer"
          class="opacity-90 w-full object-cover group-hover:opacity-50 duration-300 ease-in-out"
        />
        <div className="absolute inset-0 top-12 group-hover:top-2 duration-300 ease-in-out">
          <h1 className="text-white text-4xl font-bold text-center mx-16 group-hover:text-3xl group-hover:mx-10 group-hover:font-bold">
            The Brewery at Beach Haus
          </h1>
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 top-20 duration-300 ease-in-out">
          <p className="text-white leading-tight text-sm text-justify mx-12">
            Not only is our brewery the Jersey Shore&apos;s premier brewery for
            crispy lagers and refresing ales, but we also offer incredible food
            and a full bar.
          </p>
          <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded self-center mx-24 mt-2">
            <Link href="/brewery">Explore the Menus</Link>
          </button>
        </div>
      </div>
      <div className="desktop hidden md:block">
        <Image
          src={bhBG}
          alt="beer"
          class="opacity-90 w-full object-cover group-hover:opacity-50 duration-300 ease-in-out"
        />
        <div className="absolute inset-0 top-40 group-hover:top-20 duration-300 ease-in-out">
          <h1 className="text-white text-8xl 2xl:text-9xl font-bold text-left ml-10">
            The Brewery
            <br />
            at Beach Haus
          </h1>
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 top-72 2xl:top-96 duration-300 ease-in-out">
          <p className="text-white text-justify text-3xl 2xl:text-4xl ml-10">
            Not only is our brewery the Jersey Shore&apos;s premier
            <br />
            brewery for crispy lagers and refresing ales,
            <br />
            but we also offer incredible food and a full bar.
          </p>
          <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded self-center ml-10 mt-5">
            <Link href="/brewery">Explore our Menus</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
