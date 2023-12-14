import { PrivateEventsHeader } from "@/components/privateEventsHeader";
import { PrivateEventsAbout } from "@/components/privateEventsAbout";
import { TripSeatScript } from "@/components/tripleSeatScript";
import { VenueOptions } from "@/components/venueOptions";
import { FoodAndBevPackages } from "@/components/FoodAndBevPackages";
export default function PrivateEvents() {
  return (
    <div>
      <PrivateEventsHeader />
      <PrivateEventsAbout />
      <TripSeatScript />
      <VenueOptions />
      <FoodAndBevPackages />
    </div>
  );
}
