import Image from "next/image";
import Link from "next/link";
import entree from "../../public/16x9Crop/wedding/2K6A9020.jpg";
import square from "../../public/11_images/wedding1_1.jpeg";

export function LandingPageEventsContentRow() {
  return (
    <div className="group relative mt-2 w-full bg-black lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block md:before:right-4 md:before:top-2 2xl:before:right-8 2xl:before:border-4">
        <div className="mobile md:hidden">
          <Image
            src={square}
            alt="beer"
            class="w-full object-cover opacity-80 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-24 duration-500 ease-in-out group-hover:top-16">
            <h1 className="text-center text-4xl font-bold text-white group-hover:text-4xl group-hover:font-bold">
              Private Events
            </h1>
          </div>
          <div className="absolute inset-0 top-28 opacity-0 duration-500 ease-in-out group-hover:z-20 group-hover:opacity-100">
            <p className="mx-20 text-center leading-tight text-white">
              Contact our private events booking staff to rent out our event
              space for your next party!
            </p>
            <button class="ml-32 mt-3 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link href="https://801craftkitchen.com">
                <h1 className="text-sm">See the Space</h1>
              </Link>
            </button>
          </div>
        </div>
        <div className="desktop hidden md:block">
          <Image
            src={entree}
            alt="beer"
            class="w-full object-cover opacity-80 duration-500 ease-in-out group-hover:opacity-50 lg:max-h-[720px] 2xl:max-h-[1080px]"
          />
          <div className="absolute inset-0 top-52 duration-500 ease-in-out group-hover:top-20">
            <h1 className="text-center text-9xl font-bold text-white 2xl:text-9xl">
              Private Events
            </h1>
          </div>
          <div className="absolute inset-0 top-64 grid grid-cols-1 opacity-0 duration-500 ease-in-out group-hover:z-20 group-hover:opacity-100 2xl:top-96">
            <div className="">
              <p className="mx-60 text-center text-3xl text-white 2xl:text-4xl">
                Contact our private events booking staff to rent out our event
                space for your next party!
              </p>
            </div>
            <div className="place-self-center pb-56">
              <button class="rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
                <Link href="https://801craftkitchen.com">
                  <h1 className="text-2xl">See the Space</h1>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
