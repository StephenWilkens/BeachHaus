import { VenuePagesCarousel } from "@/components/venuePagesCarousel";
import { BookYourEventButton } from "@/components/bookYourEventButton";

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
// const carouselPlugIns = [Autoplay()]

export default function Playground() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 mb-5 md:my-8">
      <div className="md:col-span-3">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="md:col-span-2 mb-5 md:mb-0 md:mx-12">
        <h1 className="text-center md:text-left font-light tracking-tight md:tracking-normal text-5xl md:text-6xl">
          WEDDINGS AT BEACH HAUS
        </h1>
        <h1 className="mx-5 text-center md:text-justify md:mx-0 md:mr-8 mt-5 md:mt-10 text-xl font-light">
          Brews & I do&apos;s! Looking for a unique, rustic, industrial,
          beachside wedding? Look no further. Beach Haus&apos;s official wedding
          package includes…
          <br />
          <br />
          •Prosecco Toast <br />
          •5 Hour Premium Open Bar <br />
          •1 Hour Cocktail Party with 3 Stations + 3 Passed Hors D&apos;oeuvres{" "}
          <br />
          •4 Hour Reception with Plated Sit-Down Dinner
        </h1>
        <div className="mt-12 md:mr-10">
          <BookYourEventButton />
        </div>
      </div>
    </div>
  );
}
