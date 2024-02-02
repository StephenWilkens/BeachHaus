import Link from "next/link";
import Image from "next/image";
import cocktail11 from "../public/11_images/cocktail11.JPG";
import cocktail from "../public/16x9Crop/roofTop/1B7A4E97-2B90-4985-AD3A-960F379D7C03.jpg";
import { MartiniIcon, WineIcon, FlaskConicalIcon } from "lucide-react";

export function BreweryLandingPageCocktailsContentRow() {
  return (
    <div className="mt-2 w-full md:min-h-[560px] lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="mobile group relative bg-black lg:hidden">
        <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block">
          <Image
            src={cocktail11}
            alt="Cocktails"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-28 duration-500 ease-in-out group-hover:top-12">
            <h1 className="mx-6 text-center text-5xl font-bold leading-tight text-white group-hover:leading-none">
              Cocktails
            </h1>
          </div>
          <div className="absolute inset-0 top-40 flex flex-col items-center opacity-0 duration-500 ease-in-out group-hover:opacity-100">
            <p className="mx-12 text-center text-sm font-medium leading-tight text-white">
              Full bar with specialty crafted cocktails. We&apos;re no one trick
              pony
            </p>
            <button class="mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery/cocktails">
                <h1 className="text-sm">Cocktail Menu</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="desktop relative hidden lg:flex">
        <Image
          src={cocktail}
          alt="cocktaill"
          className="w-full object-cover lg:max-h-[720px] 2xl:max-h-[1080px]"
        />
        <div className="absolute inset-0 left-10 top-[10%] h-1/2 w-1/3 bg-cyan-50 2xl:top-96">
          <h1 className="ml-10 mt-12 text-left text-6xl font-bold text-cyan-800 2xl:text-7xl">
            Cocktails
          </h1>
          <p className="mx-10 mt-5 text-left text-2xl font-light 2xl:text-3xl 2xl:mt-7">
            Full bar with specialty crafted cocktails. We&apos;re no one trick
            pony
          </p>
          <button class="ml-10 mt-12 rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
            <Link href="/brewery/cocktails">
              <h1 className="text-xl 2xl:text-2xl">Cocktail Menu</h1>
            </Link>
          </button>
        </div>
        <div className="absolute inset-0 left-10 top-[55%] h-1/6 w-1/3 bg-black 2xl:top-[70%]">
          <div className="flex h-full w-full place-items-center mx-3 2xl:mx-10">
            <div className="flex flex-auto items-center">
              <FlaskConicalIcon className=" h-8 w-8 text-white 2xl:h-16 2xl:w-16" />
              <h1 className="ml-2 text-lg font-light text-white 2xl:text-2xl">
                Handcrafted
                <br />
                Cocktails
              </h1>
            </div>
            <div className="flex flex-auto items-center">
              <MartiniIcon className=" h-8 w-8 text-white 2xl:h-16 2xl:w-16" />
              <h1 className="ml-2 text-lg font-light text-white 2xl:text-2xl">
                Classic
                <br />
                Cocktails
              </h1>
            </div>
            <div className="flex flex-auto items-center">
              <WineIcon className=" h-8 w-8 text-white 2xl:h-16 2xl:w-16" />
              <h1 className="ml-2 text-lg font-light text-white 2xl:text-2xl">
                Full
                <br />
                Bar
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
