import { VenuePagesCarousel } from "@/components/VenueOptionPagesCarousel";
import { BookYourEventButton } from "@/components/private events/BookYourEventButton";

import ck1 from "../../public/16x9Crop/craftKitchen/2.jpg";
import ck2 from "../../public/16x9Crop/craftKitchen/5.jpg";
import ck3 from "../../public/16x9Crop/craftKitchen/6.jpg";
import ck4 from "../../public/16x9Crop/craftKitchen/7.jpg";
import ck5 from "../../public/16x9Crop/craftKitchen/8.jpg";
import ck6 from "../../public/16x9Crop/craftKitchen/9.jpg";
import ck7 from "../../public/16x9Crop/craftKitchen/9B627A8F-0810-4F9E-8AC5-404F660AA3AF.jpg";
import ck8 from "../../public/16x9Crop/craftKitchen/133FFD92-D5CE-43FF-8AE9-350BE73C57E0.jpg";
import ck9 from "../../public/16x9Crop/craftKitchen/C331E484-30B3-4EE2-8EB7-15B418A0A5AE.jpg";
import ck10 from "../../public/16x9Crop/craftKitchen/IMG_0538.jpg";
import ck11 from "../../public/16x9Crop/craftKitchen/IMG_4979.jpg";
import ck12 from "../../public/16x9Crop/craftKitchen/IMG_6608.jpg";

const carouselImages = [
  ck1,
  ck2,
  ck3,
  ck4,
  ck5,
  ck6,
  ck7,
  ck8,
  ck9,
  ck10,
  ck11,
  ck12,
];
const carouselOptions = { loop: true };

export function CraftKitchenVenue() {
  return (
    <div className="grid grid-cols-1 md:my-8 md:grid-cols-5">
      <div className="mt-8 md:col-span-3 ">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="mb-5 md:col-span-2 md:mx-12 md:mb-0">
        <h1 className="mt-5 text-center text-6xl font-light tracking-tight md:text-left">
          801 CRAFT KITCHEN
        </h1>
        <h1 className="mt-10 text-center text-lg font-medium tracking-wide md:text-left">
          •SEATED CAPACITY: 20-65 GUESTS
          <br />
          &nbsp;(INCLUDING LOUNGE AREA)
          <br />
          •STANDING CAPACITY:20-100 GUESTS
        </h1>
        <h1 className="mx-5 mt-10 text-justify text-xl  font-light md:mx-0 md:mr-8">
          Located on the second floor of Beach Haus, adjacent to the Taproom,
          801 Craft Kitchen is a stylish and chic venue including a bar, lounge
          area, and dining room. The restaurant&apos;s décor features a
          combination of high top and low top tables, paint splattered antique
          windows suspended from the ceiling, string lights, and fiery red
          walls, creating an ambience that is eclectic, whimsical, creative, and
          romantic. The inviting velvet lounge chairs, gold accents, and amusing
          artwork make the perfect spot to gather for your next event!
        </h1>
        <div className="mt-8 md:mr-10">
          <BookYourEventButton />
        </div>
      </div>
    </div>
  );
}
