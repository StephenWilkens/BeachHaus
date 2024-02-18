import { VenuePagesCarousel } from "@/components/VenueOptionPagesCarousel";
import { BookYourEventButton } from "@/components/private events/BookYourEventButton";

import wed1 from "../../public/16x9Crop/wedding/2K6A8968.jpg";
import wed2 from "../../public/16x9Crop/wedding/2K6A9007.jpg";
import wed3 from "../../public/16x9Crop/wedding/2K6A9020.jpg";
import wed4 from "../../public/16x9Crop/wedding/2K6A9100.jpg";
import wed5 from "../../public/16x9Crop/wedding/6.0 RECEPTION-36.jpg";
import wed6 from "../../public/16x9Crop/wedding/9E12BF7E-9F7A-43B8-BAEC-99E8A084C5D1.jpg";
import wed7 from "../../public/16x9Crop/wedding/Action(8).jpg";
import wed8 from "../../public/16x9Crop/wedding/Brew Haus .jpg";
import wed9 from "../../public/16x9Crop/wedding/Brew Haus Ceremony(1).jpg";
import wed10 from "../../public/16x9Crop/wedding/Brew Haus Wedding.jpg";
import wed11 from "../../public/16x9Crop/wedding/D_0077_(1).jpg";
import wed12 from "../../public/16x9Crop/wedding/Decor.jpg";
import wed13 from "../../public/16x9Crop/wedding/Decor(3).jpg";
import wed14 from "../../public/16x9Crop/wedding/HIGHLIGHT REEL 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -111_websize.jpg";
import wed15 from "../../public/16x9Crop/wedding/HIGHLIGHT REEL 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -132.jpg";
import wed16 from "../../public/16x9Crop/wedding/HIGHLIGHT REEL 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -149_websize.jpg";
import wed17 from "../../public/16x9Crop/wedding/HIGHLIGHT REEL 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -158_websize.jpg";
import wed18 from "../../public/16x9Crop/wedding/HIGHLIGHT REEL 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -160_websize.JPEG";
import wed19 from "../../public/16x9Crop/wedding/HIGHLIGHT REEL 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -160_websize.jpg";
import wed20 from "../../public/16x9Crop/wedding/IMG_1689.jpg";
import wed21 from "../../public/16x9Crop/wedding/IMG_1746.jpg";
import wed22 from "../../public/16x9Crop/wedding/IMG_1747.jpg";
import wed23 from "../../public/16x9Crop/wedding/Kaitlyn+Zack-9263.jpg";
import wed24 from "../../public/16x9Crop/wedding/Kaitlyn+Zack-9435.jpg";
import wed25 from "../../public/16x9Crop/wedding/Kaitlyn+Zack-9839.jpg";
import wed26 from "../../public/16x9Crop/wedding/KLP02287.jpg";
import wed27 from "../../public/16x9Crop/wedding/Screen Shot 2022-09-01 at 6.15.26 PM.jpg";

const carouselImages = [
  wed1,
  wed2,
  wed3,
  wed4,
  wed5,
  wed6,
  wed7,
  wed8,
  wed9,
  wed10,
  wed11,
  wed12,
  wed13,
  wed14,
  wed15,
  wed16,
  wed17,
  wed18,
  wed19,
  wed20,
  wed21,
  wed22,
  wed23,
  wed24,
  wed25,
  wed26,
  wed27,
];
const carouselOptions = { loop: true };

export function Weddings() {
  return (
    <div className="py-8 grid grid-cols-5 bg-cyan-50">
      <div className="col-span-3">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="col-span-2 mx-12">
        <h1 className="text-left text-6xl font-light tracking-tight">
          WEDDINGS AT BEACH HAUS
        </h1>
        <h1 className="mr-8 mt-10  text-justify text-xl font-light">
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
        <div className="mr-10 mt-12">
          <BookYourEventButton />
        </div>
      </div>
    </div>
  );
}
