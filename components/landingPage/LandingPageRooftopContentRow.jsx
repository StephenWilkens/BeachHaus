import Image from "next/image";
import Link from "next/link";
import rooftop from "../../public/16x9Crop/roofTop/1B7A4E97-2B90-4985-AD3A-960F379D7C03.jpg";

export function LandingPageRooftopContentRow() {
  return (
    <div className="group relative mt-2 w-full bg-black lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="before: before:absolute before:right-1 before:top-1 before:z-10 before:hidden before:h-[97%] before:w-[98%] before:border-2 before:border-white before:opacity-70 group-hover:before:block md:before:right-4 md:before:top-2 2xl:before:right-8 2xl:before:border-4">
        <div className="mobile md:hidden">
          <Image
            src={rooftop}
            alt="beer"
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50"
          />
          <div className="absolute inset-0 top-12 duration-500 ease-in-out group-hover:top-2">
            <h1 className="mx-16 text-center text-4xl font-bold text-white group-hover:mx-10 group-hover:text-3xl group-hover:font-bold">
              The Rooftop at Beach Haus
            </h1>
          </div>
          <div className="absolute inset-0 top-20 opacity-0 duration-500 ease-in-out group-hover:z-20 group-hover:opacity-100">
            <p className="mx-12 text-justify text-sm leading-tight text-white">
              Not only is our brewery the Jersey Shore&apos;s premier brewery
              for crispy lagers and refresing ales, but we also offer incredible
              food and a full bar.
            </p>
            <button class="ml-28 mt-2 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
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
            class="w-full object-cover opacity-90 duration-500 ease-in-out group-hover:opacity-50 lg:max-h-[720px] 2xl:max-h-[1080px]"
          />
          <div className="absolute inset-0 left-1/2 top-36 duration-500 ease-in-out group-hover:top-20">
            <h1 className="mr-10 text-left text-8xl font-bold text-white 2xl:text-9xl">
              The Rooftop
              <br />
              at Beach Haus
            </h1>
          </div>
          <div className="absolute inset-0 left-1/2 top-72 opacity-0 duration-500 ease-in-out group-hover:opacity-100 2xl:top-96">
            <p className="mr-10 text-left text-3xl text-white 2xl:text-4xl">
              A 40-seat bar, fire pits with soft seating, an extensive cocktail
              menu, and a sunset view of the Shark River. Check out the new
              releases & our fan favorites on our menu!
            </p>
            <button class="mr-10 mt-5 self-center rounded bg-cyan-800 px-4 py-2 text-white hover:bg-cyan-600">
              <Link className="text-xl" href="/brewery">
                See More!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
