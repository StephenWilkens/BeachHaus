import { ThumbCarousel } from "./thumbCarousel";
import { BookYourEventButton } from "@/components/bookYourEventButton";

import lb1 from "../public/16x9Crop/lobbyBar/AFB07F09-0A49-47BA-B1A2-D82FEF0F8443.jpg";
import lb2 from "../public/16x9Crop/lobbyBar/DB6B43A1-5AA7-45DE-B2FA-C05626752A45.jpg";
import lb3 from "../public/16x9Crop/lobbyBar/E6E009EC-E8C9-4F67-85F7-9A2DA119F966.jpg";


const carouselImages = [
  lb1,
  lb2,
  lb3
];
const carouselOptions = { loop: true };

export function LobbyBarVenue() {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl pt-6 pb-3 md:text-7xl font-light md:font-light tracking-widest">
          Lobby Bar
        </h1>
        <h1 className="text-center md:text-3xl md:tracking-wide md:leading-normal md:font-[250]">
          Semi-Private
        </h1>
        <h1 className="text-center md:text-xl md:tracking-wide md:leading-normal md:font-[250]">
          Capacity: 20-55 Guests
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
