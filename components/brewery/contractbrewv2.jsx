import { ContractBrewingContactForm } from "./ContractBrewingContactForm";
import { ContractBrewingHeader } from "./ContractBrewingHeader";

export function ContractBrewV2() {
  return (
    <div className="grid grid-cols-1 bg-cyan-50 lg:grid-cols-2">
      <div className="col-span-full">
        <ContractBrewingHeader />
      </div>
      <div className="col-span-full">
        <h1 className="mx-6 border-b-2 py-3 text-center text-3xl font-bold text-cyan-800 lg:border-b-4 lg:py-12 lg:text-5xl">
          Start-to-finish contract brewing and packaging services.
        </h1>
      </div>
      <div className="col-span-1 lg:pt-5">
        <h1 className="pt-5 text-center text-3xl font-semibold lg:text-4xl ">
          BREWING
        </h1>
        <ul className="px-16 pt-4 text-center text-xl text-gray-700 dark:text-gray-400 max-md:border-b-2 lg:text-2xl">
          <li className="pb-2">• 30 and 60 Barrel Batches</li>
          <li className="pb-2">• Dry Hop Capability</li>
          <li className="pb-2">• High Gravity Brewing Options</li>
          <li className="pb-2">• Consistency, quality, and automation</li>
          <li className="pb-2">
            • Modern brewing technology teamed with our skilled brewers and
            production staff
          </li>
          <li className="pb-2">
            • Access to a wide variety of malts, hops, and brewing ingredients
          </li>
        </ul>
      </div>
      <div className="col-span-1 pt-5 lg:p-8">
        <h1 className="text-center text-2xl font-semibold lg:text-4xl ">
          PACKAGING
        </h1>
        <ul className="px-16 pt-4 text-center text-xl text-gray-700 dark:text-gray-400 max-md:border-b-2 lg:text-2xl">
          <li className="pb-2">
            • <b>Bottles:</b> 12 oz. and 750ml
          </li>
          <li className="pb-2">
            • <b>Cans:</b> 12 oz. and 16 oz.
          </li>
          <li className="pb-2">
            • <b>Draft:</b> Sixtels, Quarters, Halves
          </li>
        </ul>
      </div>
      <div className="col-span-full pt-5 lg:mt-10 lg:border-t-4">
        <ContractBrewingContactForm />
      </div>
    </div>
  );
}
