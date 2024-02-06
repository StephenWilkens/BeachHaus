import Image from "next/image";
import Link from "next/link";
import rooftop from "../../public/16x9Crop/roofTop/1B7A4E97-2B90-4985-AD3A-960F379D7C03.jpg";

export function LandingPageRooftopContentRow() {
  return (
    <div className="bg-black relative group w-full lg:max-h-[720px] 2xl:max-h-[1080px] mt-2">
      <div className="before:hidden group-hover:before:block before:absolute before:border-white before:border-2 2xl:before:border-4 before:z-10 before: before:w-[98%] before:h-[97%] before:right-1 before:top-1 md:before:right-4 md:before:top-2 2xl:before:right-8 before:opacity-70">
        <div className="mobile md:hidden">
          <Image
            src={rooftop}
            alt="beer"
            class="opacity-90 w-full object-cover group-hover:opacity-50 duration-500 ease-in-out"
          />
          <div className="absolute inset-0 top-12 group-hover:top-2 duration-500 ease-in-out">
            <h1 className="text-white text-4xl font-bold text-center mx-16 group-hover:text-3xl group-hover:mx-10 group-hover:font-bold">
              The Rooftop at Beach Haus
            </h1>
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 top-20 duration-500 ease-in-out">
            <p className="text-white leading-tight text-sm text-justify mx-12">
              Not only is our brewery the Jersey Shore&apos;s premier brewery
              for crispy lagers and refresing ales, but we also offer incredible
              food and a full bar.
            </p>
            <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded self-center ml-28 mt-2">
              <Link href="/brewery">
                <h1 className="text-sm">Explore the Menus</h1>
              </Link>
            </button>
          </div>
        </div>
        <div className="desktop hidden md:block">
          <Image
            src={rooftop}
            alt="beer"
            class="opacity-90 w-full lg:max-h-[720px] 2xl:max-h-[1080px] object-cover group-hover:opacity-50 duration-500 ease-in-out"
          />
          <div className="absolute inset-0 top-36 left-1/2 group-hover:top-20 duration-500 ease-in-out">
            <h1 className="text-white text-8xl 2xl:text-9xl font-bold text-left mr-10">
              The Rooftop
              <br />
              at Beach Haus
            </h1>
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 top-72 left-1/2 2xl:top-96 duration-500 ease-in-out">
            <p className="text-white text-left text-3xl 2xl:text-4xl mr-10">
              A 40-seat bar, fire pits with soft seating, an extensive cocktail
              menu, and a sunset view of the Shark River. Check out the new
              releases & our fan favorites on our menu!
            </p>
            <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded self-center mr-10 mt-5">
              <Link className="text-xl" href="/brewery">See More!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
