import Image from "next/image";
import Link from "next/link";
import entree from "../../public/16x9Crop/wedding/2K6A9020.jpg";
import square from "../../public/11_images/wedding1_1.jpeg";

export function LandingPageEventsContentRow() {
  return (
    <div className="bg-black relative group w-full lg:max-h-[720px] 2xl:max-h-[1080px] mt-2">
      <div className="before:hidden group-hover:before:block before:absolute before:border-white before:border-2 2xl:before:border-4 before:z-10 before: before:w-[98%] before:h-[97%] before:right-1 before:top-1 md:before:right-4 md:before:top-2 2xl:before:right-8 before:opacity-70">
        <div className="mobile md:hidden">
          <Image
            src={square}
            alt="beer"
            class="opacity-80 w-full object-cover group-hover:opacity-50 duration-500 ease-in-out"
          />
          <div className="absolute inset-0 top-16 group-hover:top-5 duration-500 ease-in-out">
            <h1 className="text-white text-4xl font-bold text-center group-hover:text-3xl group-hover:font-bold">
              Private Events
            </h1>
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 top-16 duration-500 ease-in-out">
            <p className="text-white leading-tight text-center mx-20">
              Contact our private events booking staff to rent out our event
              space for your next party!
            </p>
            <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded self-center ml-32 mt-3">
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
            class="opacity-80 w-full lg:max-h-[720px] 2xl:max-h-[1080px] object-cover group-hover:opacity-50 duration-500 ease-in-out"
          />
          <div className="absolute inset-0 top-52 group-hover:top-20 duration-500 ease-in-out">
            <h1 className="text-white text-9xl 2xl:text-9xl font-bold text-center">
              Private Events
            </h1>
          </div>
          <div className="opacity-0 grid grid-cols-1 group-hover:opacity-100 absolute inset-0 top-64 2xl:top-96 duration-500 ease-in-out">
            <div className="">
              <p className="text-white text-center text-3xl 2xl:text-4xl mx-60">
                Contact our private events booking staff to rent out our event
                space for your next party!
              </p>
            </div>
            <div className="place-self-center pb-56">
              <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded">
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
