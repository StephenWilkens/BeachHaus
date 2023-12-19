import { PrivateEventsAbout } from "@/components/privateEventsAbout";
import { BookYourEventButton } from "@/components/bookYourEventButton";
import { PrivateEventsHeroCarousel } from "@/components/privateEventsHeroCarousel";

export default function PrivateEvents() {
  return (
    <div>
      <PrivateEventsHeroCarousel />
      <PrivateEventsAbout />
      <BookYourEventButton />
      <BookYourEventButton>Make this a link to venue options</BookYourEventButton>
    </div>
  );
}
