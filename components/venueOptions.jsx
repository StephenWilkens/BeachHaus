import {BeerHallSemiPrivateCarousel} from "@/components/beerHallSemiPrivate"
export function VenueOptions() {
  return (
    <div className="pt-10">
      <h1 class="text-center text-7xl">Venue Options</h1>
      <p class="px-64 py-5 text-center text-sm">
        Please note that depending on the requested date and time, venue options
        are limited. We highly encourage site visits to really get a feel of our
        unique spaces. Please note that we do not do events on the new Rooftop
        at Beach Haus.
      </p>
      <div className="flex pl-10">
        <h1 className="font-bold text-2xl">BEER HALL</h1>
        <p className="text-xl">(Semi-Private/Private)</p>
      </div>
      <h1 className="text-xl pl-16">•Semi-Private Capacity: 20-64 Guests</h1>
      <BeerHallSemiPrivateCarousel />
    </div>
  );
}
