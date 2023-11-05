"use client";

import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Radio,
  Textarea,
  Datepicker,
} from "flowbite-react";

export function EventBookingForm() {
  return (
    <div class="py-5 px-5">
      <form className="flex max-w-md flex-col gap-4">
        {/* First Name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstName" value="First Name" />
          </div>
          <TextInput
            id="firstName"
            type="text"
            placeholder="First Name"
            required
          />
        </div>
        {/* Last Name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastName" value="Last Name" />
          </div>
          <TextInput
            id="lastName"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        {/* Email */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@gmail.com"
            required
          />
        </div>
        {/* Phone Number */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phoneNumber" value="Phone Number" />
          </div>
          <TextInput
            id="phoneNumber"
            type="email"
            placeholder="(123-456-7890)"
            required
          />
        </div>
        What is your prefered contact method?
        <fieldset className="flex max-w-md flex-col gap-4">
          <legend className="mb-4">{/* Contact Pref*/}</legend>
          <div className="flex items-center gap-2">
            <Radio
              id="email"
              name="contactForms"
              value="email"
              defaultChecked
            />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="phone" name="contactForms" value="phone" />
            <Label htmlFor="phone">Phone</Label>
          </div>
        </fieldset>
        {/* Company*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="company" value="Company" />
          </div>
          <TextInput id="company" type="text" placeholder="Company Name" />
        </div>
        {/* Event Description*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="eventDescription" value="Event Description" />
          </div>
          <Textarea
            id="eventDescription"
            type="text"
            placeholder="Event Description"
            required
          />
        </div>
        {/* Location ID (if multiple locations?)*/}
        {/* Event Date*/}
        <div>
          <div class="mb-2 block">
            <Label htmlFor="eventDate" value="Event Date" />
          </div>
          <Datepicker id="eventDate" />
        </div>
        {/* Start Time*/}
        {/* End Time*/}
        {/* Guest Count*/}
        {/* Additional Info*/}
        {/* lead form ID*/}
        {/* email opt in*/}
        {/* lead source id*/}
        {/* referral source id*/}
        {/* referral source other*/}
        {/* gdpr_consent_granted - with the value 1 to indicate that the lead has consented to data collection as required by GDP*/}
        {/* event_style - Accepted String values as follows:
          onpremise (On-Premise)
          pickup (Pickup Catering)
          dropoff (Drop-Off Catering)
          catering (Full-Service Catering)*/}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
