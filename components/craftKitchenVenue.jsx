import { ThumbCarousel } from "./thumbCarousel";
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
    <div>
      <div>
        <h1 className="text-center text-3xl pt-6 pb-3 md:text-7xl font-light md:font-light tracking-widest">
          801 Craft Kitchen
        </h1>
        <h1 className="text-center md:text-3xl md:tracking-wide md:leading-normal md:font-[250]">
          Private
        </h1>
        <h1 className="text-center md:text-xl md:tracking-wide md:leading-normal md:font-[250]">
          Seated Capacity: 20-65 Guests • Standing Capacity: 20-100 Guests
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
