import barrelBeer from "../public/averimg3.jpeg";
import Image from "next/image";

export function ContractBrewingMain() {
  return (
    <div>
      <div class="grid grid-cols-2 relative">
        <div class="w-full m-auto col-span-2">
          <Image
            src={barrelBeer}
            alt="Barrels image"
            fill
            class="object-cover absolute"
          />
        </div>
        <div class="z-10 col-start-1 col-end-1 pt-2 pb-20 px-5 align-top md:p-0 md:col-start-2 md:col-end-2">
          <h1 class="text-4xl text-left text-white font-bold md:text-right md:text-7xl md:pl-40 md:pr-16 md:pb-60 md:pt-10">
            Contract Brewing
          </h1>
        </div>
      </div>
      <div class="grid md:grid-cols-2 bg-orange-50">
        <div class="col-span-1 mx-5 mt-5 border-black  rounded shadow-lg bg-white py-3 md:mb-5">
          <h1 class="text-4xl text-center text-blue-500 font-semibold">
            Brewing
          </h1>
          <ul class="p-5 space-y-2 text-medium font-medium">
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
        <div class="col-span-1 mx-5 mt-5 border-black  rounded shadow-lg bg-white py-3 mb-5">
          <h1 class="text-4xl text-center text-blue-500 font-semibold">
            Packaging
          </h1>
          <ul class="p-5 space-y-2 text-medium font-medium">
            <li>• Bottles: 12 oz./750ml / pry-top / Paper-label capability</li>
            <li>• Cans: 12 oz., 16 oz. / Paper-label capability</li>
            <li>• Packages: 4/6-packs, 6/4-packs, 2/12-packs and 24 loose</li>
            <li>• Draft: Sixtels, Quarters, Halves</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="col-span-1 px-10">
  <h1 class="text-4xl text-blue-500 font-semibold">Packaging</h1>
  <ul class="p-5 space-y-2 text-xl font-medium">
    <li>• Bottles: 12 oz./750ml / pry-top / Paper-label capability</li>
    <li>• Cans: 12 oz., 16 oz. / Paper-label capability</li>
    <li>• Packages: 4/6-packs, 6/4-packs, 2/12-packs and 24 loose</li>
    <li>• Draft: Sixtels, Quarters, Halves</li>
  </ul>
</div> */
}
