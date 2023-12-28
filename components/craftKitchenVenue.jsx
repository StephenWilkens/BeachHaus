import { VenuePagesCarousel } from "@/components/venuePagesCarousel";
import { BookYourEventButton } from "@/components/bookYourEventButton";

import ck1 from "../public/16x9Crop/craftKitchen/2.jpg";
import ck2 from "../public/16x9Crop/craftKitchen/5.jpg";
import ck3 from "../public/16x9Crop/craftKitchen/6.jpg";
import ck4 from "../public/16x9Crop/craftKitchen/7.jpg";
import ck5 from "../public/16x9Crop/craftKitchen/8.jpg";
import ck6 from "../public/16x9Crop/craftKitchen/9.jpg";
import ck7 from "../public/16x9Crop/craftKitchen/9B627A8F-0810-4F9E-8AC5-404F660AA3AF.jpg";
import ck8 from "../public/16x9Crop/craftKitchen/133FFD92-D5CE-43FF-8AE9-350BE73C57E0.jpg";
import ck9 from "../public/16x9Crop/craftKitchen/C331E484-30B3-4EE2-8EB7-15B418A0A5AE.jpg";
import ck10 from "../public/16x9Crop/craftKitchen/IMG_0538.jpg";
import ck11 from "../public/16x9Crop/craftKitchen/IMG_4979.jpg";
import ck12 from "../public/16x9Crop/craftKitchen/IMG_6608.jpg";

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
    <div className="grid grid-cols-1 md:grid-cols-5 md:my-8">
      <div className="md:col-span-3 mt-8 ">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="md:col-span-2 mb-5 md:mb-0 md:mx-12">
        <h1 className="text-center mt-5 md:text-left font-light tracking-tight text-6xl">
          801 CRAFT KITCHEN
        </h1>
        <h1 className="text-center md:text-left text-lg mt-10 tracking-wide font-medium">
          •SEATED CAPACITY: 20-65 GUESTS
          <br />
          &nbsp;(INCLUDING LOUNGE AREA)
          <br />
          •STANDING CAPACITY:20-100 GUESTS
        </h1>
        <h1 className="text-justify mx-5 md:mx-0 md:mr-8  mt-10 text-xl font-light">
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
