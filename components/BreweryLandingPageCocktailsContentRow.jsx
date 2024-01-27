import Link from "next/link";
import Image from "next/image";
import ck30 from "../public/11_images/ck_1_1.jpeg";
import cocktail from "../public/16x9Crop/roofTop/1B7A4E97-2B90-4985-AD3A-960F379D7C03.jpg";

export function BreweryLandingPageCocktailsContentRow() {
  return (
    <div className="mt-2 w-full md:min-h-[560px] lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="mobile group relative bg-black md:hidden">
        <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block">
          <Image
            src={ck30}
            alt="Cocktails"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-28 duration-500 ease-in-out group-hover:top-12">
            <h1 className="mx-6 text-center text-5xl font-bold leading-tight text-white group-hover:leading-none">
              Cocktails
            </h1>
          </div>
          <div className="absolute inset-0 top-40 opacity-0 duration-500 ease-in-out group-hover:opacity-100">
            <p className="mx-12 text-justify text-sm font-medium leading-tight text-white">
              Full bar with specialty crafted cocktails. We&apos;re no one trick
              pony
            </p>
            <button class="ml-28 mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery">
                <h1 className="text-sm">Cocktail Menu</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="desktop relative hidden md:flex">
        <Image
          src={cocktail}
          alt="cocktaill"
          className="w-full object-cover lg:max-h-[720px] 2xl:max-h-[1080px]"
        />
        <div className="absolute inset-0 left-10 top-20 h-2/3 w-1/3 bg-black bg-opacity-80 2xl:top-96">
          <h1 className="mt-12 text-center text-8xl text-white">Cocktails</h1>
          <p className="mx-20 mt-5 text-center text-2xl text-white">
            Full bar with specialty crafted cocktails. We&apos;re no one trick
            pony
          </p>
          <button class="mt-12 mx-36 rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
            <Link href="/brewery/cocktails">
              <h1 className="text-xl">Cocktail Menu</h1>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
