import { BHSPCarousel } from "@/components/bhspCarousel";
import { BHPCarousel } from "./bhpCarousel";
import { CKCarousel } from "./ckCarousel";

export function PrivateEventsVenueOptions() {
  return (
    <div className="pt-20">
      <div>
        <h1 class="text-center text-7xl font-bold">Venue Options</h1>
        <p class="px-64 py-5 text-center text-sm">
          Please note that depending on the requested date and time, venue
          options are limited. We highly encourage site visits to really get a
          feel of our unique spaces. Please note that we do not do events on the
          new Rooftop at Beach Haus.
        </p>
      </div>
      <div className="flex pl-10">
        <h1 className="font-bold text-2xl">BEER HALL</h1>
        <p className="text-xl">(Semi-Private/Private)</p>
      </div>
      <div>
        <h1 className="text-xl pl-16">•Semi-Private Capacity: 20-64 Guests</h1>
        <BHSPCarousel />
      </div>
      <div>
        <h1 className="text-xl pl-16">•Private Capacity: 65-130 Guests</h1>
        <BHPCarousel />
        {/* <BeerHallPrivateCarousel /> */}
      </div>
      <div className="flex pl-10">
        <h1 className="font-bold text-2xl">801 Craft Kitchen & Lounge</h1>
        <p className="text-xl">(Private)</p>
      </div>
      <div>
        <h1 className="text-xl pl-16">
          •Seated Capacity: 20-65 Guests (including lounge area)
        </h1>
        <h1 className="text-xl pl-16">
          •Standing Capacity: 20-100 Guests (including lounge area)
        </h1>
        <CKCarousel />
        {/* <CraftKitchenCarousel /> */}
      </div>
      <div className="flex pl-10">
        <h1 className="font-bold text-2xl">Lobby Bar</h1>
        <p className="text-xl">(Semi-Private)</p>
      </div>
      <div>
        <h1 className="text-xl pl-16">•Capacity: 20-55 Guests</h1>
        {/* <LobbyCarousel /> */}
      </div>
      <div className="flex pl-10">
        <h1 className="font-bold text-2xl">
          Tap Room, Patio, & Beer Hall Buyout
        </h1>
        <p className="text-xl">(Private)</p>
      </div>
      <div>
        <h1 className="text-xl pl-16">•Capacity: 300 Guests</h1>
        {/* <TapPatioBeerHallCarousel /> */}
      </div>
    </div>
  );
}
