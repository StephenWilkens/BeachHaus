import { BreweryLandingPageHeader } from "./BreweryLandingPageHeader";
import { BreweryLandingPageFoodMenuContentRow } from "./BreweryLandingPageFoodMenuContentRow";
import { BreweryLandingPageCocktailsContentRow } from "./BreweryLandingPageCocktailsContentRow";
import { BreweryLandingPageBeerContentRow } from "./BreweryLandingPageBeerContentRow";
import { BreweryLandingPageContractBrewContentRow } from "./BreweryLandingPageContracBrewContentRow";

export function BreweryMain() {
  return (
    <div className="bg-black md:bg-cyan-50">
      <BreweryLandingPageHeader />
      <BreweryLandingPageFoodMenuContentRow />
      <BreweryLandingPageCocktailsContentRow />
      <BreweryLandingPageBeerContentRow />
      <BreweryLandingPageContractBrewContentRow />
    </div>
  );
}
