import Image from "next/image";
import Link from "next/link";
import beer11 from "../public/11_images/beer11.jpg";
import { HopIcon } from "lucide-react";

export function BreweryLandingPageBeerContentRow() {
  return (
    <div className="w-full  lg:max-h-[720px] 2xl:max-h-[1080px] overflow-hidden">
      <div className="mobile group relative bg-black lg:hidden">
        <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block">
          <Image
            src={beer11}
            alt="Food"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-28 flex flex-col items-center duration-500 ease-in-out group-hover:top-12">
            <h1 className="mx-6 text-center text-5xl font-bold leading-tight text-white group-hover:leading-none">
              On Tap
            </h1>
          </div>
          <div className="absolute inset-0 top-40 flex flex-col items-center opacity-0 duration-500 ease-in-out group-hover:opacity-100">
            <p className="mx-12 text-center text-sm font-medium leading-tight text-white">
              Come see what we&apos;ve got on tap!
            </p>
            <button class="mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery/ontap">
                <h1 className="text-sm">Tap List</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="desktop relative hidden h-full w-full grid-cols-12 lg:grid">
        
        <div className="absolute inset-0 z-10 col-start-1 col-end-7 opacity-60">
          <HopIcon className="h-2/6 w-2/6 stroke-[.5px]" />
        </div>
        <div className="z-20 col-start-1 col-end-7 flex h-full w-full flex-col items-center justify-center bg-transparent ">
          <h1 className="mb-10 text-8xl font-bold text-cyan-800">
            ON
            <br />
            TAP
          </h1>
          <h1 className="text-left text-3xl font-light">
            Come see what we&apos;ve got on tap!
          </h1>
          <button class="mt-20 rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
            <Link href="/brewery/ontap">
              <h1 className="text-xl 2xl:text-3xl">Tap List</h1>
            </Link>
          </button>
        </div>
        <div className="col-start-7 col-end-13 ">
          <Image src={beer11} alt="burgers" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
