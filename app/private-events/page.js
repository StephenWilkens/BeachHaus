import { PrivateEventsAbout } from "@/components/private events/PrivateEventsAbout";
import { PrivateEventsHeroCarousel } from "@/components/private events/PrivateEventsHeroCarousel";
import { VenueOptions } from "@/components/private events/PrivateEventsLandingPageVenueOptions";
import { VirtualTour } from "@/components/virtual tour/virtualTour";

export default function PrivateEvents() {
  return (
    <div>
      <h1 className="py-3 text-center text-3xl font-light tracking-widest md:hidden md:text-6xl md:font-light">
        PRIVATE EVENTS
        <br />
        AT BEACH HAUS
      </h1>
      <h1 className="hidden py-6 text-center text-3xl font-light tracking-widest md:block md:text-7xl md:font-light">
        PRIVATE EVENTS AT BEACH HAUS
      </h1>
      <PrivateEventsHeroCarousel />
      <PrivateEventsAbout />
      <VenueOptions />
      <VirtualTour />
    </div>
  );
}
