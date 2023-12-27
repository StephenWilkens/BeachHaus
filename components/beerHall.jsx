import { ThumbCarousel } from "./thumbCarousel";
import { BookYourEventButton } from "@/components/bookYourEventButton";

import bh1 from "../public/16x9Crop/beerHall/04BF669F-4982-475E-9E3C-B51B419FFD54.jpg";
import bh2 from "../public/16x9Crop/beerHall/DB16296C-80B7-42B0-9A18-0B0F84C65509.jpg";
import bh3 from "../public/16x9Crop/beerHall/FullSizeRender 2.jpg";
import bh4 from "../public/16x9Crop/beerHall/IMG_0788.jpg";
import bh5 from "../public/16x9Crop/beerHall/IMG_3907.jpg";
import bh6 from "../public/16x9Crop/beerHall/IMG_6537.jpg";
import bh7 from "../public/16x9Crop/beerHall/IMG_4132.jpg";
import bh8 from "../public/16x9Crop/beerHall/IMG_7361.jpg";
import bh9 from "../public/16x9Crop/beerHall/oT4e9E9c.jpg";

const carouselImages = [bh1, bh2, bh3, bh4, bh5, bh6, bh7, bh8, bh9];
const carouselOptions = { loop: true };
// const carouselPlugIns = [Autoplay()]

export function BeerHall() {
  return (
    <div>
      <div>
        <h1 className="text-center font-[250] text-3xl pt-6 pb-3 md:text-7xl md:font-light tracking-widest">
          BEER HALL
        </h1>
        <h1 className="md:hidden text-center mx-6 md:text-xl md:tracking-wide md:leading-normal font-[450]">
          •Semi-Private Capacity: 20-64 Guests <br /> •Private Capacity: 65-130 Guests
        </h1>
        <h1 className="hidden md:block text-center mx-6 md:text-xl md:tracking-wide md:leading-normal md:font-[350]">
          Semi-Private Capacity: 20-64 Guests • Private Capacity: 65-130 Guests
        </h1>
        <h1 className="text-justify mx-6 md:mx-12 mt-3 md:text-2xl md:tracking-wide md:leading-normal font-[250]">
          To the right of the 2nd Floor Taproom, The Beer Hall is available
          either as a private or semi-private venue depending on your headcount.
          The rustic, industrial space is designed with 12 foot wooden tables
          and benches, a wood paneled wall, 130&quot; display screen, portable bar,
          and starry string lights. It is the perfect room for any event:
          birthday parties, corporate events, wedding receptions, showers, and
          more.
        </h1>
      </div>
      <div className="mb-5">
        <ThumbCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="my-5">
        <BookYourEventButton />
      </div>
    </div>
  );
}
