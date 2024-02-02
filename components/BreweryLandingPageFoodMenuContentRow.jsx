import Image from "next/image";
import Link from "next/link";
import burgers from "../public/11_images/burgers1_1.jpeg";
import { UtensilsCrossedIcon, MoveDownIcon, MoveRightIcon } from "lucide-react";

export function BreweryLandingPageFoodMenuContentRow() {
  return (
    <div className="mt-2 w-full md:min-h-[560px] lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="mobile group relative bg-black lg:hidden">
        <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block">
          <Image
            src={burgers}
            alt="Food"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-28 duration-500 ease-in-out group-hover:top-12">
            <h1 className="mx-6 text-center text-5xl font-bold leading-tight text-white group-hover:leading-none">
              Brew Food
            </h1>
          </div>
          <div className="absolute inset-0 top-40 flex flex-col items-center opacity-0 duration-500 ease-in-out group-hover:opacity-100">
            <p className="mx-12 text-center text-sm font-medium leading-tight text-white">
              Check out our amazing food offerings!
            </p>
            <button class="mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery/food">
                <h1 className="text-sm">Explore the Menu</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="desktop relative hidden grid-cols-2 lg:grid">
        <div className="absolute inset-0 -left-36 top-3/4 opacity-70">
          <MoveDownIcon className=" h-96 w-96 stroke-[.25px] 2xl:stroke-[.5px]" />
        </div>
        <div className="absolute inset-0 top-[62%] opacity-70">
          <MoveRightIcon className=" h-96 w-96 stroke-[.25px] 2xl:stroke-[.5px]" />
        </div>
        <Image
          src={burgers}
          alt="burgers"
          className="col-span-1 m-auto h-2/3 w-auto"
        />
        <div className="z-10 col-span-1 mt-[40%] h-2/3 w-2/3">
          <h1 className="text-left text-6xl font-bold leading-tight text-cyan-800 2xl:text-7xl">
            Brewery
            <br />
            Food
          </h1>
          <h1 className="mr-20 mt-7 text-left text-2xl font-light 2xl:mt-12 2xl:text-3xl">
            Check out our amazing food offerings!
          </h1>
          <button class=" mt-6 rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600 2xl:mt-20">
            <Link href="/brewery/food">
              <h1 className="text-xl 2xl:text-3xl">Explore the Menu</h1>
            </Link>
          </button>
          <div className="absolute inset-0 left-[65%] top-10 opacity-70 2xl:-top-40">
            <UtensilsCrossedIcon className=" h-96 w-96 stroke-[.5px] 2xl:h-2/3 2xl:w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
