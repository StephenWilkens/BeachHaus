import eventsHeader from "../public/eventsHeader2.png";
import header2 from "../public/BeerHallPrivate/IMG_6537.jpg"
import Image from "next/image";

export function PrivateEventsHeader() {
  return (
    <div className=" bg-black relative flex flex-none flex-wrap lg:flex-nowrap w-full min-h-[360px] lg:max-h-[540px] 2xl:max-h-[780px]">
      <Image
        src={header2}
        alt="Main Room"
        class="object-cover w-full opacity-90"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center md:gap-4">
        <h1 className="text-white text-8xl font-semibold text-center">Private Events</h1>
      </div>
    </div>
  );
}
