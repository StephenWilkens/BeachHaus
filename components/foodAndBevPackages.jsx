import { VenuePagesCarousel } from "@/components/venuePagesCarousel";
import { BookYourEventButton } from "@/components/bookYourEventButton";

import fb1 from "../public/16x9Crop/food&Bev/0A568443-2E37-4258-824E-59561DB03127.jpg";
import fb2 from "../public/16x9Crop/food&Bev/3ECB863F-5414-4D1C-B34C-CE630818EF10.jpg";
import fb3 from "../public/16x9Crop/food&Bev/9BCBF6C7-F250-43F7-916B-67226C387C1C.jpg";
import fb4 from "../public/16x9Crop/food&Bev/1139Cherryville.jpg";
import fb5 from "../public/16x9Crop/food&Bev/1140Cherryville.jpg";
import fb6 from "../public/16x9Crop/food&Bev/1141Cherryville.jpg";
import fb7 from "../public/16x9Crop/food&Bev/1142Cherryville 2.jpg";
import fb8 from "../public/16x9Crop/food&Bev/AD662DFD-AC3C-4620-987C-B1991873B52D.jpg";
import fb9 from "../public/16x9Crop/food&Bev/B0944FF5-0DFD-4501-B9D6-E6AF5E9EED7C 2.jpg";
import fb10 from "../public/16x9Crop/food&Bev/BB5F7D89-F583-4DDA-BDE2-4A331F295B4C.jpg";
import fb11 from "../public/16x9Crop/food&Bev/C74353B6-7CFA-4BD0-B4EB-4EEF78B55DCA.jpg";
import fb12 from "../public/16x9Crop/food&Bev/D4D0BFB4-AEE7-48F0-992F-C3EDBD749F0A.jpg";
import fb13 from "../public/16x9Crop/food&Bev/FD69FF0D-6800-4060-A532-BB943653A780.jpg";
import fb14 from "../public/16x9Crop/food&Bev/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -682.jpg";
import fb15 from "../public/16x9Crop/food&Bev/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -790.jpg";
import fb16 from "../public/16x9Crop/food&Bev/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -791.jpg";
import fb17 from "../public/16x9Crop/food&Bev/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -792.jpg";
import fb18 from "../public/16x9Crop/food&Bev/GALLERY 2022 - LAUREN AND JAMES WEDDING - SF PHOTO -793.jpg";
import fb19 from "../public/16x9Crop/food&Bev/PizzaOven(1).jpg";
import fb20 from "../public/16x9Crop/food&Bev/IMG_0916.jpg";
import fb21 from "../public/16x9Crop/food&Bev/IMG_1736.jpg";
import fb22 from "../public/16x9Crop/food&Bev/IMG_1737.jpg";
import fb23 from "../public/16x9Crop/food&Bev/IMG_5661.jpg";
import fb24 from "../public/16x9Crop/food&Bev/IMG_9232.jpg";
import fb25 from "../public/16x9Crop/food&Bev/IMG_9457.jpg";
import fb26 from "../public/16x9Crop/food&Bev/IMG_9807.jpg";
import fb27 from "../public/16x9Crop/food&Bev/Kaitlyn+Zack-1093.jpg";
import fb28 from "../public/16x9Crop/food&Bev/KLP02308-2.jpg";
import fb29 from "../public/16x9Crop/food&Bev/KLP02309.jpg";
import fb30 from "../public/16x9Crop/food&Bev/KLP02308-2.jpg";
import fb31 from "../public/16x9Crop/food&Bev/Screenshot 2023-12-08 at 10.56.32 PM.jpg";

const carouselImages = [
  fb1,
  fb2,
  fb3,
  fb4,
  fb5,
  fb6,
  fb7,
  fb8,
  fb9,
  fb10,
  fb11,
  fb12,
  fb13,
  fb14,
  fb15,
  fb16,
  fb17,
  fb18,
  fb19,
  fb20,
  fb21,
  fb22,
  fb23,
  fb24,
  fb25,
  fb26,
  fb27,
  fb28,
  fb29,
  fb30,
  fb31,
];
const carouselOptions = { loop: true };

export function FoodAndBevPackages() {
  return (
    <div className="grid grid-cols-5 my-8">
      <div className="col-span-3 mt-8">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="col-span-2 mx-12">
        <h1 className="text-left font-light tracking-tight text-6xl">
          FOOD AND BEVERAGE PACKAGES
        </h1>
        <h1 className="text-justify mr-8  mt-10 text-xl font-light">
          We offer six event packages, including stations, passed hors
          d&apos;oeuvres, buffets, and plated dinners. We also offer a variety
          of drink packages that include Beach Haus Brewery craft beer, wine,
          and spirits. Our packages meet the needs for any event type whether it
          be casual or formal, including birthdays, showers, rehearsal dinners,
          corporate meetings, weddings and more!
          <br />
          <br />
          The Beach Haus event and culinary teams&apos; first priority is to
          offer a wonderful guest experience. If there is something you have in
          mind that you don&apos;t see in our packages, please let us know! We
          would love to customize your event to make it one of a kind!
        </h1>
        <div className="my-6 mr-10">
          <BookYourEventButton />
        </div>
      </div>
    </div>
  );
}
