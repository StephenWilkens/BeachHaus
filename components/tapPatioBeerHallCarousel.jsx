import { EventsCarousel } from "./eventsCarousel";
import TPBH1 from "../public/TapRoomPatioBeerHallPrivate/853D0F99-6062-448F-AE9F-879356DDF2B1.jpg"
import TPBH2 from "../public/TapRoomPatioBeerHallPrivate/DRONESHOTS2022-LAURENANDJAMESWEDDING-SARAFITZCO-1118.jpg"
import TPBH3 from "../public/TapRoomPatioBeerHallPrivate/GALLERY2022-LAURENANDJAMESWEDDING-SFPHOTO-518.jpg"
import TPBH4 from "../public/TapRoomPatioBeerHallPrivate/IMG_7375.jpg"

const IMAGES = [TPBH1, TPBH2, TPBH3, TPBH4];
const OPTIONS = { loop: true };

export function TapPatioBeerHallCarousel() {
  return (
    <div>
      <EventsCarousel images={IMAGES} options={OPTIONS} />
    </div>
  );
}
