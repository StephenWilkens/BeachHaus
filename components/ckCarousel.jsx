import { ThumbCarousel } from "./thumbCarousel";
import CKC1 from "../public/CraftKitchenPrivate/2.png";
import CKC2 from "../public/CraftKitchenPrivate/5.png";
import CKC3 from "../public/CraftKitchenPrivate/6.png";
import CKC4 from "../public/CraftKitchenPrivate/7.png";
import CKC5 from "../public/CraftKitchenPrivate/8.png";
import CKC6 from "../public/CraftKitchenPrivate/9.png";
import CKC7 from "../public/CraftKitchenPrivate/9B627A8F-0810-4F9E-8AC5-404F660AA3AF.JPG";
import CKC8 from "../public/CraftKitchenPrivate/133FFD92-D5CE-43FF-8AE9-350BE73C57E0.JPG";
import CKC9 from "../public/CraftKitchenPrivate/A632B84C-00F9-4DC1-9001-121CEDD9DC88.JPEG";
import CKC10 from "../public/CraftKitchenPrivate/C331E484-30B3-4EE2-8EB7-15B418A0A5AE.jpg";
import CKC11 from "../public/CraftKitchenPrivate/IMG_0538.jpeg";
import CKC12 from "../public/CraftKitchenPrivate/IMG_4979.jpeg";
import CKC13 from "../public/CraftKitchenPrivate/IMG_6608.jpeg";

const IMAGES = [
  CKC1,
  CKC2,
  CKC3,
  CKC4,
  CKC5,
  CKC6,
  CKC7,
  CKC8,
  CKC9,
  CKC10,
  CKC11,
  CKC12,
  CKC13,
];
const OPTIONS = { loop: true };

export function CKCarousel() {
  return (
    <div>
      <ThumbCarousel images={IMAGES} options={OPTIONS} />
    </div>
  );
}
