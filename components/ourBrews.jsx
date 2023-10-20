import Image from "next/image";
import highSide from "../public/HIGH-SIDE-BLONDE-ALE-BEACH-HAUS.png";

export function OurBrews() {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <div class="group">
          <div className="relative col-span-1 max-w-fit rounded overflow-hidden m-5 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <Image class="w-full " src={highSide} alt="highside" />
            <div class="z-10 absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">High Side</h1>
                <p class="text-xl">ABV 6%</p>
                <p class="text-xl">IBU 22</p>

                <p class="text-base">
                  Beach Haus High Side pours clean with cascades of fine, bright
                  white bubbles that introduce a nose of soft bread sweetness,
                  then balanced by a subdued hop presence from the addition of
                  Horizon hops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <div class="flex min-h-screen items-center justify-center bg-slate-100">
//    <div class="group h-96 w-72 ">
//      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//        <div className="absolute inset-0">
//          <Image
//            src={highSide}
//            alt="highside"
//            class="rounded-xl p-5  shadow-black/40"
//          />
//        </div>
//        <div class="absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//          <div className="flex min-h-full flex-col items-center justify-center">
//            <h1 class="text-3xl font-bold">High Side</h1>
//            <p class="text-xl">ABV 6%</p>
//            <p class="text-xl">IBU 22</p>
//            <p class="text-base">
//              Beach Haus High Side pours clean with cascades of fine, bright
//              white bubbles that introduce a nose of soft bread sweetness,
//              then balanced by a subdued hop presence from the addition of
//              Horizon hops.
//            </p>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>
