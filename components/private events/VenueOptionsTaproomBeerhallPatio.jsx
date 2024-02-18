import { VenuePagesCarousel } from "@/components/VenueOptionPagesCarousel";
import { BookYourEventButton } from "@/components/private events/BookYourEventButton";

import tbp1 from "../../public/16x9Crop/tapRoom-BeerHall-Patio/853D0F99-6062-448F-AE9F-879356DDF2B1.jpg";
import tbp2 from "../../public/16x9Crop/tapRoom-BeerHall-Patio/DRONE SHOTS 2022 - LAUREN AND JAMES WEDDING - SARA FITZ CO-1118.jpg";
import tbp3 from "../../public/16x9Crop/tapRoom-BeerHall-Patio/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -518.JPEG";
import tbp4 from "../../public/16x9Crop/tapRoom-BeerHall-Patio/IMG_4757.jpg";
import tbp5 from "../../public/16x9Crop/tapRoom-BeerHall-Patio/IMG_7375.jpg";

const carouselImages = [tbp1, tbp2, tbp3, tbp4, tbp5];
const carouselOptions = { loop: true };

export function TapRoomBeerHallPatioVenue() {
  return (
    <div className="grid grid-cols-1 bg-cyan-50 pb-5 md:grid-cols-5 md:py-8">
      <div className="mt-5 md:col-span-3">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="mb-5 md:col-span-2 md:mx-12 md:mb-0">
        <h1 className="text-center text-5xl font-light tracking-tight md:text-left md:text-6xl">
          TAPROOM, PATIO, AND BEER HALL BUYOUT
        </h1>
        <h1 className="mt-5 text-center text-lg font-medium tracking-wide md:mt-10 md:text-left">
          •CAPACITY: 300 GUESTS
        </h1>
        <h1 className="mx-5 mt-5 text-justify text-xl font-light md:mx-0 md:mr-8 md:mt-10">
          Located on the second floor, The Taproom, Beer Hall, and Patio is our
          most known space when you think of Beach Haus! This buyout can
          accommodate up to 300 guests and is most commonly bought out for
          Weddings and large Corporate Events. Please note that we do require
          specific food and beverage minimums depending on the day of the week
          and time of the year.
        </h1>
        <div className="my-6 md:mr-10">
          <BookYourEventButton />
        </div>
      </div>
    </div>
  );
}
