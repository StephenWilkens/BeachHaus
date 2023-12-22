import { ThumbCarousel } from "./thumbCarousel";
import { BookYourEventButton } from "@/components/bookYourEventButton";

import tbp1 from "../public/16x9Crop/tapRoom-BeerHall-Patio/853D0F99-6062-448F-AE9F-879356DDF2B1.jpg";
import tbp2 from "../public/16x9Crop/tapRoom-BeerHall-Patio/DRONE SHOTS 2022 - LAUREN AND JAMES WEDDING - SARA FITZ CO-1118.jpg";
import tbp3 from "../public/16x9Crop/tapRoom-BeerHall-Patio/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -518.JPEG";
import tbp4 from "../public/16x9Crop/tapRoom-BeerHall-Patio/IMG_4757.jpg";
import tbp5 from "../public/16x9Crop/tapRoom-BeerHall-Patio/IMG_7375.jpg";

const carouselImages = [tbp1, tbp2, tbp3, tbp4, tbp5];
const carouselOptions = { loop: true };

export function TapRoomBeerHallPatioVenue() {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl pt-6 pb-3 md:text-7xl font-light md:font-light tracking-widest">
          Tap Room, Patio, & Beer Hall Buyout
        </h1>
        <h1 className="text-center md:text-3xl md:tracking-wide md:leading-normal md:font-[250]">
          Private
        </h1>
        <h1 className="text-center md:text-xl md:tracking-wide md:leading-normal md:font-[250]">
          Capacity: 300 Guests
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
