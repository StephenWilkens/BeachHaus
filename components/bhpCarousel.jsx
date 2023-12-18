import { ThumbCarousel } from "./thumbCarousel";
import BHP1 from "../public/BeerHallPrivate/IMG_0788.jpeg";
import BHP2 from "../public/BeerHallPrivate/IMG_1746.jpeg";
import BHP3 from "../public/BeerHallPrivate/IMG_1747.jpeg";
import BHP4 from "../public/BeerHallPrivate/IMG_3907.jpeg";
import BHP5 from "../public/BeerHallPrivate/IMG_4132.jpeg";
import BHP6 from "../public/BeerHallPrivate/IMG_6030.jpeg";
import BHP7 from "../public/BeerHallPrivate/IMG_6537.jpg";
import BHP8 from "../public/BeerHallPrivate/oT4e9E9c.jpeg";

const IMAGES = [BHP1, BHP2, BHP3, BHP4, BHP5, BHP6, BHP7, BHP8];
const OPTIONS = { loop: true };

export function BHPCarousel() {
  return (
    <div>
      <ThumbCarousel images={IMAGES} options={OPTIONS} />
    </div>
  );
}