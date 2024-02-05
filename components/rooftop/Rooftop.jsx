import Image from "next/image";
import header from "../../public/rooftop/rooftopHeader.jpg";
import beer from "../../public/rooftop/rooftopBeer43.jpeg";
import blueBar from "../../public/rooftop/rooftopBlueBar169.jpg";
import projection from "../../public/rooftop/rooftopProjection43.jpg"
//inspo from https://www.elephantela.com/
export function Rooftop() {
  return (
    <div className="grid h-full w-full grid-cols-12 bg-cyan-50">
      <div className="relative col-span-full">
        <Image src={header} alt="Header" className="" />
        <div className="absolute inset-0 top-10 lg:top-20 ml-5">
          <h1 className="text-2xl lg:text-8xl font-thin text-white">
            The Rooftop at Beach Haus
          </h1>
        </div>
      </div>
      <div className="col-span-5 flex flex-col items-center justify-center lg:gap-y-10">
        <h1 className="lg:text-6xl">Words,</h1>
        <h1 className="lg:text-6xl">About,</h1>
        <h1 className="lg:text-6xl">Sunset/Evening Experience</h1>
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
        <h1 className="lg:text-6xl">Text about night life experience</h1>
      </div>
    </div>
  );
}
