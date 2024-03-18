"use client";
import Script from "next/script";

export default function Booking() {
  return (
    <div className="bg-cyan-50">
      <div>
        <Script
          src="https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=20813&amp;public_key=5cb2656b95d6432fb8b400a5e9a8e48623824589"
          onError={(e) => {
            console.error("Script failed to load", e);
            alert(
              "There was an error with the form. Please reload the page and resubmit your information. Our apologies for the inconvenience.",
            );
          }}
        ></Script>
        <Script
          src="https://www.google.com/recaptcha/api.js"
          onError={(e) => {
            console.error("Script failed to load", e);
            alert(
              "There was an error with the form. Please reload the page and resubmit your information. Our apologies for the inconvenience.",
            );
          }}
        ></Script>
      </div>
    </div>
  );
}
