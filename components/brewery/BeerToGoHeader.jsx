import Image from "next/image";
import tapsHeader from "../../public/16x9Crop/BH_16x9togoBeer.jpg";

export function BeerToGoHeader() {
  return (
    <div className="group relative w-full overflow-hidden bg-black lg:max-h-[540px] 2xl:max-h-[900px]">
      <Image src={tapsHeader} alt="Taps" className="object-cover opacity-90" />
      <div className="absolute inset-0 left-5 top-10 h-2/3 w-1/2 bg-black/50 lg:top-14 lg:w-1/3"></div>
      <div className="absolute inset-0 left-10 top-14 h-1/3 w-1/3 lg:left-14 lg:top-28 2xl:left-32 2xl:top-40 2xl:pr-32">
        <h1 className="text-4xl text-cyan-50 lg:text-8xl 2xl:text-9xl">
          Beer To Go
        </h1>
      </div>
    </div>
  );
}
