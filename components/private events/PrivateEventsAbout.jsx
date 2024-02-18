import { BookYourEventButton } from "@/components/private events/BookYourEventButton";

export function PrivateEventsAbout() {
  return (
    <div className="relative grid bg-cyan-50">
      <div className="flex h-full w-full flex-col px-5 pb-2 pt-4 md:px-20 md:py-10">
        <h1 className="text-justify text-black md:text-3xl md:font-[250] md:leading-normal md:tracking-wide">
          Overlooking downtown Belmar, NJ, our 4,000 square foot Brew Pub is an
          ideal venue for any type of event! Our venues are housed within three
          stories of impressive space with atmospheres ranging from rustic to
          elegant. Our food and beverage packages meet the needs for any event
          whether it be casual or formal - Birthdays, Showers, Rehearsal
          Dinners, Corporate Events, Weddings, and more! Fill out the form below
          for more information!
        </h1>
      </div>
      <div className="pb-3">
        <BookYourEventButton />
      </div>
    </div>
  );
}
