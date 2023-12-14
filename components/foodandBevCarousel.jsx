import { EventsCarousel } from "./eventsCarousel";

import FB1 from "../public/Food&BevPackages/0A568443-2E37-4258-824E-59561DB03127.JPG";
import FB2 from "../public/Food&BevPackages/1B7A4E97-2B90-4985-AD3A-960F379D7C03.JPG";
import FB3 from "../public/Food&BevPackages/3ECB863F-5414-4D1C-B34C-CE630818EF10.JPG";
import FB4 from "../public/Food&BevPackages/9BCBF6C7-F250-43F7-916B-67226C387C1C.JPG";
import FB5 from "../public/Food&BevPackages/69B9306F-3827-4A88-BBF5-7F6497E2BC7E.JPG";
import FB6 from "../public/Food&BevPackages/1139Cherryville.jpg";
import FB7 from "../public/Food&BevPackages/1140Cherryville.jpg";
import FB8 from "../public/Food&BevPackages/1141Cherryville.jpg";
import FB9 from "../public/Food&BevPackages/1142Cherryville 2.jpg";
import FB10 from "../public/Food&BevPackages/33014EFD-EAAC-450E-BAFD-0249EAF92A30.JPG";
import FB11 from "../public/Food&BevPackages/B0944FF5-0DFD-4501-B9D6-E6AF5E9EED7C.JPG";
import FB12 from "../public/Food&BevPackages/BB5F7D89-F583-4DDA-BDE2-4A331F295B4C.jpg";
import FB13 from "../public/Food&BevPackages/C74353B6-7CFA-4BD0-B4EB-4EEF78B55DCA.JPG";
import FB14 from "../public/Food&BevPackages/D4D0BFB4-AEE7-48F0-992F-C3EDBD749F0A.jpg";
import FB15 from "../public/Food&BevPackages/FD69FF0D-6800-4060-A532-BB943653A780.jpg";
import FB16 from "../public/Food&BevPackages/FullSizeRender.jpeg";
import FB17 from "../public/Food&BevPackages/GALLERY2022-LAURENANDJAMESWEDDING-SFPHOTO-682.jpg";
import FB18 from "../public/Food&BevPackages/GALLERY2022-LAURENANDJAMESWEDDING-SFPHOTO-790.jpg";
import FB19 from "../public/Food&BevPackages/GALLERY2022-LAURENANDJAMESWEDDING-SFPHOTO-791.jpg";
import FB20 from "../public/Food&BevPackages/GALLERY2022-LAURENANDJAMESWEDDING-SFPHOTO-792.jpg";
import FB21 from "../public/Food&BevPackages/GALLERY2022-LAURENANDJAMESWEDDING-SFPHOTO-793.jpg";
import FB22 from "../public/Food&BevPackages/GALLERY2022-LAURENANDJAMESWEDDING-SFPHOTO-794.jpg";
import FB23 from "../public/Food&BevPackages/IMG_0905.jpeg";
import FB24 from "../public/Food&BevPackages/IMG_0916.jpeg";
import FB25 from "../public/Food&BevPackages/IMG_1736.jpeg";
import FB26 from "../public/Food&BevPackages/IMG_1737.jpeg";
import FB27 from "../public/Food&BevPackages/IMG_5661.jpeg";
import FB28 from "../public/Food&BevPackages/IMG_9232.jpeg";
import FB29 from "../public/Food&BevPackages/IMG_9457.jpeg";
import FB30 from "../public/Food&BevPackages/IMG_9807.jpeg";
import FB31 from "../public/Food&BevPackages/Kaitlyn+Zack-1093.jpg";
import FB32 from "../public/Food&BevPackages/Kaitlyn+Zack-1094.jpg";
import FB33 from "../public/Food&BevPackages/KLP02308-2.jpg";
import FB34 from "../public/Food&BevPackages/KLP02309.jpg";
import FB35 from "../public/Food&BevPackages/Pizza Oven(1).png";
import FB36 from "../public/Food&BevPackages/Pretzel.png";
import FB37 from "../public/Food&BevPackages/Screenshot2023-12-08at10.55.20PM.png";
import FB38 from "../public/Food&BevPackages/Screenshot2023-12-08at10.56.23PM.png";
import FB39 from "../public/Food&BevPackages/Screenshot2023-12-08at10.56.32PM.png";
import FB40 from "../public/Food&BevPackages/Screenshot2023-12-08at11.02.17PM.png";

const IMAGES = [
  FB1,
  FB2,
  FB3,
  FB4,
  FB5,
  FB6,
  FB7,
  FB8,
  FB9,
  FB10,
  FB11,
  FB12,
  FB13,
  FB14,
  FB15,
  FB16,
  FB17,
  FB18,
  FB19,
  FB20,
  FB21,
  FB22,
  FB23,
  FB24,
  FB25,
  FB26,
  FB27,
  FB28,
  FB29,
  FB30,
  FB31,
  FB32,
  FB33,
  FB34,
  FB35,
  FB36,
  FB37,
  FB38,
  FB39,
  FB40,
];
const OPTIONS = { loop: true };

export function FoodAndBevCarousel() {
  return (
    <div>
      <EventsCarousel images={IMAGES} options={OPTIONS} />
    </div>
  );
}
