import { EventBookingForm } from "@/components/eventBookingForm"
import Script from "next/script"
export default function BreweryEventsBooking() {
  return(
    <div>
      {/* <Script src="https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=20813&amp;public_key=5cb2656b95d6432fb8b400a5e9a8e48623824589" strategy="beforeInteractive" type="text/javascript" /><a href="http://www.tripleseat.com" id="tripleseat_link">Private Event Software powered by Tripleseat</a> */}
      <EventBookingForm />
    </div>
  )
}