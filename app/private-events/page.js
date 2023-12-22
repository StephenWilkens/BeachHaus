import { PrivateEventsAbout } from "@/components/privateEventsAbout";
import { PrivateEventsHeroCarousel } from "@/components/privateEventsHeroCarousel";
import { VenueOptions } from "@/components/venueOptions";
import { VirtualTour } from "@/components/virtualTour";

export default function PrivateEvents() {
  return (
    <div>
      <h1 className="md:hidden text-center text-3xl py-3 md:text-6xl font-light md:font-light tracking-widest">
        PRIVATE EVENTS
        <br />
        AT BEACH HAUS
      </h1>
      <h1 className="hidden md:block text-center text-3xl py-6 md:text-7xl font-light md:font-light tracking-widest">
        PRIVATE EVENTS AT BEACH HAUS
      </h1>
      <PrivateEventsHeroCarousel />
      <PrivateEventsAbout />
      <VenueOptions />
      <VirtualTour />
    </div>
  );
}
