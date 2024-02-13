import Image from "next/image";
import Link from "next/link";
import distro_beer from "../../public/distro_43.jpg";
import { ContainerIcon } from "lucide-react";

export function BreweryLandingPageDistributionContentRow() {
  return (
    <div className="w-full  overflow-hidden lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="mobile group relative bg-black lg:hidden">
        <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block">
          <Image
            src={distro_beer}
            alt="Food"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-28 flex flex-col items-center duration-500 ease-in-out group-hover:top-12">
            <h1 className="mx-6 text-center text-5xl font-bold leading-tight text-white group-hover:leading-none">
              Distribution
            </h1>
          </div>
          <div className="absolute inset-0 top-32 z-20 flex flex-col items-center opacity-0 duration-500 ease-in-out group-hover:z-20 group-hover:opacity-100">
            <p className="mx-12 text-center text-sm font-medium leading-tight text-white">
              Beach Haus beer is now available for your liquor store or drafts!
            </p>
            <button class="mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery/distribution">
                <h1 className="text-sm">Inquire Here</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="desktop relative hidden h-full w-full grid-cols-12 lg:grid">
        <div className="absolute inset-0 bottom-20 left-[75%] top-[52%] z-10 opacity-60">
          <ContainerIcon className="h-80 w-96 stroke-[.5px] 2xl:h-full 2xl:w-full" />
        </div>
        <div className=" col-span-7">
          <Image src={distro_beer} alt="Beer Cans" className="h-full w-full" />
        </div>
        <div className="z-20 col-span-5 flex flex-col">
          <h1 className="pt-24 text-center text-8xl text-cyan-800 2xl:pt-40 2xl:text-9xl">
            Distribution
          </h1>
          <p className="px-16 pt-10 text-center text-3xl 2xl:px-48  2xl:pt-20 2xl:text-4xl">
            Beach Haus beer is now available for your liquor store or drafts!
          </p>
          <button class="mx-auto mt-20 rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
            <Link href="/brewery/distribution">
              <h1 className="text-xl 2xl:text-3xl">Inquire Here!</h1>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
