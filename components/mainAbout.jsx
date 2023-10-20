import Image from "next/image";
import tanks from "../public/bh2.jpg";

export function MainAbout() {
  return (
    <div>
      <div class="grid grid-cols-2 bg-black relative">
        <div class="w-full m-auto col-span-2">
          <Image
            src={tanks}
            alt="About us background"
            fill
            class="object-cover opacity-70 absolute"
          />
        </div>
        <div class="z-20 col-span-2 h-full w-full p-10 md:py-20">
          <h1 className="text-8xl text-white font-bold text-center">
            OUR STORY
          </h1>
        </div>
      </div>
      <div class="bg-black">
        <p class="text-white text-left text-xl px-10 md:px-20 py-10">
          This iconic location was originally the site of Freedman&apos;s bakery,
          which opened in June of 1950. In February of 2014, we took over the
          building to continue to build onto the legacy. After many months of
          heavy construction, Beach Haus opened it&apos;s doors for the first time on
          March 1st, 2015, starting with our 30 barrel brew house.
          <br />
          <br />
          Soon after 801 Craft Kitchen opened it doors with renound chef Rob
          Tuzeneu. Here offer casual contemporary American sit-down dining,
          ranging from light sharable appetizers to seasonally sourced mains and
          crafted desserts.
          <br />
          <br />
          Most recently, we are proud to announce the opening of The Rooftop at
          Beach Haus. This fun and inviting space boasts a full bar, fire pits,
          and a breath taking view of the New Jersey oceanside.
        </p>
        {/* <ul class="text-white"> talk with chris about
          <li>Brewery open</li>
          <li>Restaurant open</li>
          <li>Rooftop open</li>
          <li>what ever else he wants in here</li>
        </ul> */}
      </div>
    </div>
  );
}
