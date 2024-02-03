import header2 from "../../public/BeerHallPrivate/IMG_6537.jpg";
import Image from "next/image";

export function PrivateEventsHeader() {
  return (
    <div className=" relative flex min-h-[360px] w-full flex-none flex-wrap bg-black lg:max-h-[540px] lg:flex-nowrap 2xl:max-h-[780px]">
      <Image
        src={header2}
        alt="Main Room"
        class="w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center md:gap-4">
        <h1 className="text-center text-8xl font-semibold text-white">
          Private Events
        </h1>
      </div>
    </div>
  );
}
