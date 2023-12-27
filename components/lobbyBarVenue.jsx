import { VenuePagesCarousel } from "@/components/venuePagesCarousel";
import { BookYourEventButton } from "@/components/bookYourEventButton";

import lb1 from "../public/16x9Crop/lobbyBar/AFB07F09-0A49-47BA-B1A2-D82FEF0F8443.jpg";
import lb2 from "../public/16x9Crop/lobbyBar/DB6B43A1-5AA7-45DE-B2FA-C05626752A45.jpg";
import lb3 from "../public/16x9Crop/lobbyBar/E6E009EC-E8C9-4F67-85F7-9A2DA119F966.jpg";

const carouselImages = [lb1, lb2, lb3];
const carouselOptions = { loop: true };

export function LobbyBarVenue() {
  return (
    <div className="grid grid-cols-5 my-8">
      <div className="col-span-3">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="col-span-2 mx-12">
        <h1 className="text-left font-light tracking-tight text-6xl">
          LOBBY BAR
        </h1>
        <h1 className="text-left text-lg mt-10 tracking-wide font-medium">
          •CAPACITY: 20-55 GUESTS
        </h1>
        <h1 className="text-justify mr-8  mt-10 text-xl font-light">
          Located on the first floor of Beach Haus, The Lobby bar serves as our
          main entrance and retail space. This space is considered semi-private,
          however you and your guests have exclusive access to the bar, high
          tops, and soft seating areas. This space is perfect for smaller,
          causal events!
        </h1>
        <div className="mt-12 mr-10">
          <BookYourEventButton />
        </div>
      </div>
    </div>
  );
}
