import { EventsCarousel } from "./eventsCarousel";
import lob1 from "../public/LobbyBarSemiPrivate/AFB07F09-0A49-47BA-B1A2-D82FEF0F8443.jpg";
import lob2 from "../public/LobbyBarSemiPrivate/DB6B43A1-5AA7-45DE-B2FA-C05626752A45.jpg";
import lob3 from "../public/LobbyBarSemiPrivate/E6E009EC-E8C9-4F67-85F7-9A2DA119F966.jpg";

const IMAGES = [lob1, lob2, lob3];
const OPTIONS = { loop: true };

export function LobbyCarousel() {
  return (
    <div>
      <EventsCarousel images={IMAGES} options={OPTIONS} />
    </div>
  );
}
