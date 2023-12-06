import { PrivateEventsHeader } from "@/components/privateEventsHeader";
import { PrivateEventsAbout } from "@/components/privateEventsAbout";
import { TripSeatScript } from "@/components/tripleSeatScript";
export default function PrivateEvents() {
  return (
    <div>
      <PrivateEventsHeader />
      <PrivateEventsAbout />
      <TripSeatScript />
    </div>
  );
}
