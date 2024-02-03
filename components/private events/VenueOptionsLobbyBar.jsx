import { VenuePagesCarousel } from "@/components/VenueOptionPagesCarousel";
import { BookYourEventButton } from "@/components/private events/BookYourEventButton";

import lb1 from "../../public/16x9Crop/lobbyBar/AFB07F09-0A49-47BA-B1A2-D82FEF0F8443.jpg";
import lb2 from "../../public/16x9Crop/lobbyBar/DB6B43A1-5AA7-45DE-B2FA-C05626752A45.jpg";
import lb3 from "../../public/16x9Crop/lobbyBar/E6E009EC-E8C9-4F67-85F7-9A2DA119F966.jpg";

const carouselImages = [lb1, lb2, lb3];
const carouselOptions = { loop: true };

export function LobbyBarVenue() {
  return (
    <div className="mb-5 grid grid-cols-1 md:my-8 md:grid-cols-5">
      <div className="mb-5 md:col-span-3 md:mb-0">
        <VenuePagesCarousel images={carouselImages} options={carouselOptions} />
      </div>
      <div className="mb-5 md:col-span-2 md:mx-12 md:mb-0">
        <h1 className="text-center text-6xl font-light tracking-tight md:text-left">
          LOBBY BAR
        </h1>
        <h1 className="mt-5 text-center text-lg font-medium tracking-wide md:mt-10 md:text-left">
          •CAPACITY: 20-55 GUESTS
        </h1>
        <h1 className="mx-5 mt-5 text-justify text-xl font-light md:mx-0 md:mr-8 md:mt-10">
          Located on the first floor of Beach Haus, The Lobby bar serves as our
          main entrance and retail space. This space is considered semi-private,
          however you and your guests have exclusive access to the bar, high
          tops, and soft seating areas. This space is perfect for smaller,
          causal events!
        </h1>
        <div className="mt-12 md:mr-10">
          <BookYourEventButton />
        </div>
      </div>
    </div>
  );
}
