import Image from "next/image";
import headerImg from "../../public/16x9Crop/BH_16x9contractBrewing.jpg";

export function ContractBrewingHeader() {
  return (
    <div className="group relative w-full overflow-hidden bg-black lg:max-h-[540px] 2xl:max-h-[900px]">
      <Image
        src={headerImg}
        alt="Taps"
        className="w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 left-2 top-10 h-1/2 w-2/3 bg-black/70 lg:top-16 lg:w-1/3 lg:left-10"></div>
      <div className="absolute inset-0 left-10 top-14 h-1/3 w-1/3 lg:left-24 lg:top-28 2xl:left-32 2xl:top-40 2xl:pr-32">
        <h1 className="text-4xl text-cyan-50 lg:text-8xl 2xl:text-9xl">
          Contract Brewing
        </h1>
      </div>
    </div>
  );
}
