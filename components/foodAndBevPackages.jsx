import { FoodAndBevCarousel } from "./foodandBevCarousel";

export function FoodAndBevPackages() {
  return (
    <div className="pt-10">
      <h1 class="text-center text-7xl">Food and Beverage Packages</h1>
      <p class="px-64 py-5 text-center text-sm">
        We offer a number of event packages including Stations, Passed Hors
        D&apos;oeuvres, Buffets, and Plated Dinners. We also offer a variety of
        drink packages that include Beach Haus Craft Beers, wine and spirits.
        Please note that we do not allow any outside food or beverage.
      </p>
      <FoodAndBevCarousel />
    </div>
  );
}
