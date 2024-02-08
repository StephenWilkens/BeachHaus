import Image from "next/image";
import tapsHeader from "../../public/16x9Crop/food&Bev/Kaitlyn+Zack-1093.jpg";

export function OnTapHeader() {
  return (
    <div className="group relative w-full overflow-hidden bg-black lg:max-h-[540px] 2xl:max-h-[900px]">
      <Image src={tapsHeader} alt="Taps" className="object-cover opacity-90" />
      <div className="absolute inset-0 left-5 top-10 h-2/3 w-1/2 lg:w-1/3 lg:top-14 bg-black/50"></div>
      <div className="absolute inset-0 top-14 left-10 h-1/3 w-1/3 lg:top-28 lg:left-14 2xl:top-40 2xl:left-32 2xl:pr-32">
        <h1 className="text-4xl lg:text-8xl 2xl:text-9xl text-cyan-50">Currently On Tap</h1>
      </div>
    </div>
  );
}
