import Image from "next/image";
import header from "../../public/rooftop/rooftopHeader.jpg";
import beer from "../../public/rooftop/rooftopBeer43.jpeg";
import blueBar from "../../public/rooftop/rooftopBlueBar169.jpg";
import projection from "../../public/rooftop/rooftopProjection43.jpg";
//inspo from https://www.elephantela.com/
export function Rooftop() {
  return (
    <div className="grid h-full w-full grid-cols-12 bg-cyan-50">
      <div className="relative col-span-full">
        <Image src={header} alt="Header" className="" />
        <div className="absolute inset-0 top-10 ml-5 lg:top-20">
          <h1 className="text-2xl font-thin text-white lg:text-8xl">
            The Rooftop at Beach Haus
          </h1>
        </div>
      </div>
      <div className="col-span-full flex flex-col items-center justify-center px-5 py-10 lg:col-span-5 lg:px-8 lg:py-0 ">
        <h1 className="text-center text-lg font-semibold lg:text-4xl">
          The rooftop is decorated with chic soft seating sections, firepits,
          TVs, a selfie wall, 30-seat wrap around bar, and more. Just hanging
          out on our rooftop will make you feel like you are on vacation, local
          or tourist alike.{" "}
        </h1>
      </div>
      <div className="max-md:hidden lg:col-span-7">
        <Image src={beer} alt="Rooftop Beer" className="" />
      </div>
      <div className="col-span-full">
        <Image src={blueBar} alt="Bar at Night" className="" />
      </div>
      <div className="col-span-full flex flex-col items-center justify-center px-5 py-10 lg:hidden">
        <h1 className="text-center text-lg font-semibold lg:text-4xl ">
          The Rooftop at Beach Haus offers stylish signature cocktails such as
          the Aloe Goodbye, Casa Sunset and Shark River Spritz. Our tapas boards
          serve as the perfect appetizer before heading down to the 2nd floor
          for dinner.
        </h1>
      </div>
      <div className="col-span-full lg:col-span-7">
        <Image src={projection} alt="Rooftop Beer" className="" />
      </div>
      <div className=" flex flex-col items-center justify-center px-8 max-md:hidden lg:col-span-5">
        <h1 className="text-center text-lg font-semibold lg:text-4xl ">
          The Rooftop at Beach Haus offers stylish signature cocktails such as
          the Aloe Goodbye, Casa Sunset and Shark River Spritz, The
          rooftop&apos;s tapas boards serve as the perfect appetizer before
          heading down to the 2nd floor for dinner.
        </h1>
      </div>
    </div>
  );
}
