"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import barrelBeer from "../public/averimg3.jpeg";
import ube from "../public/UbeCanHallway.jpg";
import { ContractBrewingContactForm } from "./ContractBrewingContactForm";

export function ContractBrewingMain() {
  return (
    <div class="m-0 h-full w-full overflow-hidden p-0 md:bg-gray-700">
      <div class="grid grid-cols-1 md:hidden md:grid-cols-2">
        <div class=" pb-5">
          <Card
            className="mx-auto max-w-full rounded-none md:mx-5 md:my-5"
            renderImage={() => <Image src={ube} alt="image 1" class="" />}
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contract Brewing
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Start-to-finish contract brewing and packaging services.
            </p>
          </Card>
        </div>
      </div>
      <div class="hidden w-full grid-cols-2 md:grid">
        <div class=" col-span-1 my-5 ml-28 mr-0 rounded-md rounded-br-none rounded-tr-none bg-white">
          <Image src={ube} alt="ube" class="rounded-l-md" />
        </div>
        <div class="col-span-1 my-5 mr-28 rounded-md rounded-bl-none rounded-tl-none bg-white">
          <h1 class="pt-20 text-center text-5xl font-semibold">
            CONTRACT BREWING
          </h1>
          <p className="px-16 pt-12 text-center text-2xl text-gray-700 dark:text-gray-400">
            Start-to-finish contract brewing and packaging services.
          </p>
        </div>
      </div>
      <div class="hidden w-full grid-cols-2 md:grid">
        <div class=" col-span-1 my-5 ml-28 mr-0 rounded-md rounded-br-none rounded-tr-none bg-white">
          <h1 class="pt-8 text-center text-5xl font-semibold">BREWING</h1>
          <ul className="px-16 pt-4 text-center text-xl text-gray-700 dark:text-gray-400">
            <li>• 30BBL Brew Batches</li>
            <li>• Dry Hop Capability</li>
            <li>• High Gravity Brewing Options</li>
            <li>• Consistency, quality, and automation</li>
            <li>
              • Modern brewing technology teamed up with the human touch of our
              skilled brews and production staff
            </li>
            <li>
              • Access to a wide variety of malts, hops, and brewing ingredients
            </li>
            <li>
              • Automated brew house providing reliable process control, but
              retaining continuous human input
            </li>
            <li>• Fully qualified brewing and quality assurance staff</li>
          </ul>
        </div>
        <div class="col-span-1 my-5 mr-28 rounded-md rounded-bl-none rounded-tl-none bg-white">
          <Image src={ube} alt="ube" class="rounded-r-md" />
        </div>
      </div>
      <div class="hidden w-full grid-cols-2 md:grid">
        <div class=" col-span-1 my-5 ml-28 mr-0 rounded-md rounded-br-none rounded-tr-none bg-white">
          <Image src={ube} alt="ube" class="rounded-l-md" />
        </div>
        <div class="col-span-1 my-5 mr-28 rounded-md rounded-bl-none rounded-tl-none bg-white">
          <h1 class="pt-8 text-center text-5xl font-semibold">PACKAGING</h1>
          <ul className="px-16 pt-4 text-center text-xl text-gray-700 dark:text-gray-400">
            <li>• Bottles: 12 oz./750ml / pry-top / Paper-label capability</li>
            <li>• Cans: 12 oz., 16 oz. / Paper-label capability</li>
            <li>• Packages: 4/6-packs, 6/4-packs, 2/12-packs and 24 loose</li>
            <li>• Draft: Sixtels, Quarters, Halves</li>
          </ul>
        </div>
      </div>
      <ContractBrewingContactForm />
    </div>
  );
}

// export function ContractBrewingMain() {
//   return (
//     <div>
//       <div class="grid grid-cols-2 relative">
//         <div class="w-full m-auto col-span-2">
//           <Image
//             src={barrelBeer}
//             alt="Barrels image"
//             fill
//             class="object-cover absolute"
//           />
//         </div>
//         <div class="z-10 col-start-1 col-end-1 pt-2 pb-20 px-5 align-top md:p-0 md:col-start-2 md:col-end-2">
//           <h1 class="text-4xl text-left text-white font-bold md:text-right md:text-7xl md:pl-40 md:pr-16 md:pb-60 md:pt-10">
//             Contract Brewing
//           </h1>
//         </div>
//       </div>
//       <div class="grid md:grid-cols-2 bg-orange-50">
//         <div class="col-span-1 mx-5 mt-5 border-black  rounded shadow-lg bg-white py-3 md:mb-5">
//           <h1 class="text-4xl text-center text-blue-500 font-semibold">
//             Brewing
//           </h1>
//           <ul class="p-5 space-y-2 text-medium font-medium">
//             <li>• 30BBL Brew Batches</li>
//             <li>• Dry Hop Capability</li>
//             <li>• High Gravity Brewing Options</li>
//             <li>• Consistency, quality, and automation</li>
//             <li>
//               • Modern brewing technology teamed up with the human touch of our
//               skilled brews and production staff
//             </li>
//             <li>
//               • Access to a wide variety of malts, hops, and brewing ingredients
//             </li>
//             <li>
//               • Automated brew house providing reliable process control, but
//               retaining continuous human input
//             </li>
//             <li>• Fully qualified brewing and quality assurance staff</li>
//           </ul>
//         </div>
//         <div class="col-span-1 mx-5 mt-5 border-black  rounded shadow-lg bg-white py-3 mb-5">
//           <h1 class="text-4xl text-center text-blue-500 font-semibold">
//             Packaging
//           </h1>
//           <ul class="p-5 space-y-2 text-medium font-medium">
//             <li>• Bottles: 12 oz./750ml / pry-top / Paper-label capability</li>
//             <li>• Cans: 12 oz., 16 oz. / Paper-label capability</li>
//             <li>• Packages: 4/6-packs, 6/4-packs, 2/12-packs and 24 loose</li>
//             <li>• Draft: Sixtels, Quarters, Halves</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
