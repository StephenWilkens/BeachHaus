"use client";

import { Button, Checkbox, Label, TextInput, Radio, Textarea, Datepicker } from "flowbite-react";

export function EventBookingForm() {
  return (
    <div class="py-5 px-5">
      <form className="flex max-w-md flex-col gap-4">
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
        <fieldset className="flex max-w-md flex-col gap-4">
          <legend className="mb-4">What is your prefered contact method?</legend>
          <div className="flex items-center gap-2">
            <Radio
              id="email"
              name="contactForms"
              value="email"
              defaultChecked
            />
            <Label htmlFor="united-state">Phone</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="phone" name="contactForms" value="phone" />
            <Label htmlFor="germany">Phone</Label>
          </div>
        </fieldset>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="company" value="Company" />
          </div>
          <TextInput
            id="company"
            type="text"
            placeholder="Company Name"
          />
        </div>
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
        <div>
          <div class="mb-2 block">
            <Label htmlFor="eventDate" value="Event Date" />
          </div>
          <Datepicker id="eventDate" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
