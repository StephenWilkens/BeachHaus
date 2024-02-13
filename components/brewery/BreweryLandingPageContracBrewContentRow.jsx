import Link from "next/link";
import Image from "next/image";
import cb11 from "../../public/11_images/ContractBrew11.jpg";
import brew from "../../public/16x9Crop/brew169.jpg";
import { HopIcon, ScrollIcon } from "lucide-react";

export function BreweryLandingPageContractBrewContentRow() {
  return (
    <div className="w-full md:min-h-[560px] lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="mobile group relative bg-black lg:hidden">
        <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block">
          <Image
            src={cb11}
            alt="Cocktails"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-28 duration-500 ease-in-out group-hover:top-12">
            <h1 className="mx-6 text-center text-5xl font-bold leading-tight text-white group-hover:leading-none">
              Contract Brewing
            </h1>
          </div>
          <div className="absolute inset-0 top-40 flex flex-col items-center opacity-0 duration-500 ease-in-out group-hover:z-20 group-hover:opacity-100">
            <p className="mx-12 text-center text-sm font-medium leading-tight text-white">
              Start-to-finish contract brewing and packaging services.
            </p>
            <button class="mt-4 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="/brewery/contractbrewing">
                <h1 className="text-sm">Inquire Here!</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="desktop group relative hidden bg-black lg:flex">
        <Image
          src={brew}
          alt="Brew"
          className="w-full object-cover opacity-90 transition delay-200 group-hover:opacity-70 lg:max-h-[720px] 2xl:max-h-[1080px]"
        />
        <div className="absolute inset-0 left-[60%] top-[10%] h-1/2 w-1/3 bg-cyan-50 2xl:top-96">
          <h1 className="ml-10 mt-7 text-left text-6xl font-bold text-cyan-800 2xl:mt-12 2xl:text-7xl">
            Contract Brewing
          </h1>
          <p className="mx-10 mt-5 text-left text-2xl font-light 2xl:mt-12 2xl:text-3xl">
            Start-to-finish contract brewing and packaging services.
          </p>
          <button class="ml-10 mt-5 rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600 2xl:mt-16">
            <Link href="/brewery/contractbrewing">
              <h1 className="text-xl 2xl:text-3xl 2xl:font-light">
                Reach out today!
              </h1>
            </Link>
          </button>
        </div>
        <div className="absolute inset-0 left-[60%] top-[55%] h-1/6 w-1/3 bg-black 2xl:top-[70%]">
          <div className="mx-10 flex h-full w-full place-items-center 2xl:mx-20">
            <div className="flex flex-auto items-center">
              <HopIcon className=" h-8 w-8 text-white 2xl:h-16 2xl:w-16" />
              <h1 className="ml-2 text-lg font-light text-white 2xl:text-2xl">
                Modern Brewing
                <br />
                Technology
              </h1>
            </div>
            <div className="flex flex-auto items-center">
              <ScrollIcon className=" h-8 w-8 text-white 2xl:h-16 2xl:w-16" />
              <h1 className="ml-2 text-lg font-light text-white 2xl:text-2xl">
                Custom
                <br />
                Labeling
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
