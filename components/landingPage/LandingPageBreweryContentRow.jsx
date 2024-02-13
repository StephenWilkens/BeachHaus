import Image from "next/image";
import Link from "next/link";
import bhBG from "../../public/16x9Crop/tapRoom-BeerHall-Patio/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -518.jpg";
import brewery1_1 from "../../public/11_images/brewery1_1.jpg";

export function LandingPageBreweryContentRow() {
  return (
    <div className="group relative mt-2 w-full bg-black lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block md:before:right-4 md:before:top-2 2xl:before:right-8 2xl:before:border-4">
        <div className="mobile md:hidden">
          <Image
            src={brewery1_1}
            alt="beer"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-28 duration-500 ease-in-out group-hover:top-12">
            <h1 className="mx-6 text-center text-5xl font-bold leading-tight text-white group-hover:leading-none">
              The Brewery at Beach Haus
            </h1>
          </div>
          <div className="absolute inset-0 top-40 opacity-0 duration-500 ease-in-out group-hover:z-20 group-hover:opacity-100">
            <p className="mx-12 text-justify text-sm font-medium leading-tight text-white">
              Enjoy hot food from the kitchen, cocktails from our full bar, and
              20 craft beers on tap!
            </p>
            <button class="ml-28 mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery">
                <h1 className="text-sm">See our menus!</h1>
              </Link>
            </button>
          </div>
        </div>
        <div className="desktop hidden md:block">
          <Image
            src={bhBG}
            alt="beer"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50 lg:max-h-[720px] 2xl:max-h-[1080px]"
          />
          <div className="absolute inset-0 top-40 duration-500 ease-in-out group-hover:top-20">
            <h1 className="ml-10 text-left text-8xl font-bold text-white 2xl:text-9xl">
              The Brewery
              <br />
              at Beach Haus
            </h1>
          </div>
          <div className="absolute inset-0 top-72 opacity-0 duration-500 ease-in-out group-hover:opacity-100 2xl:top-96">
            <p className="ml-10 text-justify text-3xl text-white 2xl:text-4xl">
              Enjoy hot food from the kitchen, cocktails from
              <br />
              our full bar, and 20 craft beers on tap!
            </p>
            <button class="ml-10 mt-5 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link className="text-xl" href="/brewery">
                See our menus!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
