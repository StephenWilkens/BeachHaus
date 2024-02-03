import { VenuePagesCarousel } from "@/components/VenueOptionPagesCarousel";
import { BookYourEventButton } from "@/components/private events/BookYourEventButton";

import bh1 from "../../public/16x9Crop/beerHall/04BF669F-4982-475E-9E3C-B51B419FFD54.jpg";
import bh2 from "../../public/16x9Crop/beerHall/DB16296C-80B7-42B0-9A18-0B0F84C65509.jpg";
import bh3 from "../../public/16x9Crop/beerHall/FullSizeRender 2.jpg";
import bh4 from "../../public/16x9Crop/beerHall/IMG_0788.jpg";
import bh5 from "../../public/16x9Crop/beerHall/IMG_3907.jpg";
import bh6 from "../../public/16x9Crop/beerHall/IMG_6537.jpg";
import bh7 from "../../public/16x9Crop/beerHall/IMG_4132.jpg";
import bh8 from "../../public/16x9Crop/beerHall/IMG_7361.jpg";
import bh9 from "../../public/16x9Crop/beerHall/oT4e9E9c.jpg";

const carouselImages = [bh1, bh2, bh3, bh4, bh5, bh6, bh7, bh8, bh9];
const carouselOptions = { loop: true };

export function BeerHall() {
  return (
    <div className="mb-5 grid grid-cols-1 md:my-8 md:grid-cols-5">
      <div className="mb-5 md:col-span-3 md:mb-0">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="mb-5 md:col-span-2 md:mx-12 md:mb-0">
        <h1 className="text-center text-6xl font-light tracking-tight md:text-left">
          BEER HALL
        </h1>
        <h1 className="mt-5 text-center text-lg font-medium tracking-wide md:mt-10 md:text-left">
          •SEMI-PRIVATE CAPACITY: 20-64 GUESTS
          <br />
          •PRIVATE CAPAPCITY: 65-130 GUESTS
        </h1>
        <h1 className="mx-5 mt-5 text-justify text-xl font-light md:mx-0 md:mr-8 md:mt-10">
          To the right of the 2nd Floor Taproom, The Beer Hall is available
          either as a private or semi-private venue depending on your headcount.
          The rustic, industrial space is designed with 12 foot wooden tables
          and benches, a wood paneled wall, 130&quot; display screen, portable
          bar, and starry string lights. It is the perfect room for any event:
          birthday parties, corporate events, wedding receptions, showers, and
          more.
        </h1>
        <div className="mt-12 md:mr-10">
          <BookYourEventButton />
        </div>
      </div>
    </div>
  );
}
