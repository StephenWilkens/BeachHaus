import { PrivateEventsAbout } from "@/components/privateEventsAbout";
import { BookYourEventButton } from "@/components/bookYourEventButton";
import { PrivateEventsHeroCarousel } from "@/components/privateEventsHeroCarousel";
import { VenueOptions } from "@/components/venueOptions";

export default function PrivateEvents() {
  return (
    <div>
      <PrivateEventsHeroCarousel />
      <PrivateEventsAbout />
      <BookYourEventButton />
      <VenueOptions />
    </div>
  );
}
