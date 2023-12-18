import { ThumbCarousel } from "./thumbCarousel";
import reserved from "../public/BeerHallSemiPrivate/beerHallReserved.jpg";
import weich from "../public/BeerHallSemiPrivate/DB16296C-80B7-42B0-9A18-0B0F84C65509.jpg";
import xmas from "../public/BeerHallSemiPrivate/FullSizeRender.jpg";
import jbs from "../public/BeerHallSemiPrivate/04BF669F-4982-475E-9E3C-B51B419FFD54.jpg";

const IMAGES = [reserved, weich, xmas, jbs];
const OPTIONS = { loop: true };

export function BHSPCarousel() {
  return (
    <div>
      <ThumbCarousel images={IMAGES} options={OPTIONS} />
    </div>
  );
}
