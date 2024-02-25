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
      <div className="col-span-5 flex flex-col items-center justify-center lg:gap-y-10">
        <h1 className="text-center lg:text-4xl">
          The rooftop is decorated with chic soft seating sections, firepits,
          TVs, a selfie wall, 30-seat wrap around bar, and more. Just hanging
          out on our rooftop will make you feel like you are on vacation, local
          or tourist alike.{" "}
        </h1>
      </div>
      <div className="col-span-7">
        <Image src={beer} alt="Rooftop Beer" className="" />
      </div>
      <div className="col-span-full">
        <Image src={blueBar} alt="Bar at Night" className="" />
      </div>
      <div className="col-span-7">
        <Image src={projection} alt="Rooftop Beer" className="" />
      </div>
      <div className="col-span-5 flex flex-col items-center justify-center">
        <h1 className="lg:text-4xl ">
          The Rooftop at Beach Haus offers stylish signature cocktails such as
          the Aloe Goodbye, Casa Sunset and Shark River Spritz, The
          rooftop&apos;s tapas boards serve as the perfect appetizer before
          heading down to the 2nd floor for dinner.
        </h1>
      </div>
    </div>
  );
}
