import Image from "next/image";
import Link from "next/link";
import burgers from "../public/11_images/burgers1_1.jpeg";

export function BreweryLandingPageFoodMenuContentRow() {
  return (
    <div className="mt-2 w-full md:min-h-[560px] lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="mobile group relative bg-black md:hidden">
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
          <div className="absolute inset-0 top-40 opacity-0 duration-500 ease-in-out group-hover:opacity-100">
            <p className="mx-12 text-justify text-sm font-medium leading-tight text-white">
              Check out our amazing food offerings!
            </p>
            <button class="ml-28 mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery">
                <h1 className="text-sm">Explore the Menu</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="desktop hidden md:grid md:grid-cols-2">
        <Image
          src={burgers}
          alt="burgers"
          className="col-span-1 m-auto h-5/6 w-auto"
        />
        <div className="col-span-1">
          <div className="bg-white shadow-xl rounded-sm h-2/3 w-5/6 my-32 p-12">
            <h1 className="text-left ml-2 pt-5 text-5xl font-semibold">Beach Haus Brewery Food</h1>
            <h1 className="text-left ml-2 mt-5 text-4xl">
              Check out our amazing food offerings!
            </h1>
            <button class="ml-2 mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery/food">
                <h1 className="text-xl">Explore the Menu</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
