import Image from "next/image";
import distroHeader from "../../public/distributionHeader.jpg";

export function DistributionHeader() {
  return (
    <div className="group relative w-full overflow-hidden bg-black lg:max-h-[540px] 2xl:max-h-[900px]">
      <Image src={distroHeader} alt="Taps" className="object-cover opacity-70" />
      <div className="absolute inset-0 left-5 top-10 h-1/3 w-2/3 bg-black/60 lg:top-16 lg:w-1/2"></div>
      <div className="absolute inset-0 left-10 top-14 h-1/3 w-1/3 lg:left-24 lg:top-28 2xl:left-32 2xl:top-40 2xl:pr-32">
        <h1 className="text-4xl text-cyan-50 lg:text-8xl 2xl:text-9xl">
          Distribution
        </h1>
      </div>
    </div>
  )
}