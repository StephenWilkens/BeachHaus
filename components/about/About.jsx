import Image from "next/image";
import Link from "next/link";
import tanks from "../../public/bh2.jpg";
import aboutImg from "../../public/DRONE SHOTS 2022 - LAUREN AND JAMES WEDDING - SARA FITZ CO-1111.jpg"

export function About() {
  return (
    <div>
      <div class="group relative w-full overflow-hidden bg-black lg:max-h-[540px] 2xl:max-h-[900px]">
        <Image
          src={aboutImg}
          alt="About background"
          class="object-cover opacity-80"
        />
        {/* <div className="absolute inset-0 left-1/2 hidden h-2/3 w-1/2 bg-black/60 lg:top-14 lg:block lg:w-1/3"></div>
        <div class="absolute inset-0 left-10 top-14 h-1/3 w-1/3 lg:left-1/2 lg:top-36 2xl:left-32 2xl:top-40 2xl:pr-32">
          <h1 className="text-center text-8xl font-bold text-cyan-50">About</h1>
        </div> */}
      </div>
      <div class="grid grid-rows-2 divide-y bg-cyan-50 md:grid-rows-1 lg:hidden">
        <div class="row-span-1 mx-auto mt-3">
          <Link
            href="#ourstory"
            class="hover:font-regular m-3 font-medium hover:text-cyan-800"
          >
            Our Story
          </Link>
          <Link
            href="#info"
            class="hover:font-regular m-3 font-medium hover:text-cyan-800"
          >
            Information
          </Link>
        </div>
      </div>
      <div class="grid bg-cyan-50 lg:grid-cols-12 lg:gap-x-10 lg:py-10">
        <div className="col-span-12 lg:col-span-8 " id="ourstory">
          <h1 className=" ml-4 text-center text-6xl font-extrabold text-cyan-800 lg:text-left">
            Our Story
          </h1>
          <p class="mx-5 pt-5 text-left text-xl lg:text-center">
            The <b>Beach Haus </b>Vision &mdash; a one-of-a-kind Jersey Shore
            venue to meet, unwind, or celebrate in a variety of spaces
            featuring:
          </p>
          <p className="mx-5 mt-5 indent-8 text-lg">
            • Custom in-Haus brews, craft cocktails, fine wine and spirits
          </p>
          <p className="mx-5 mt-1 indent-8 text-lg">
            • Comfort food selections or our chef&apos;s special creations
          </p>
          <p className="mx-5 mt-1 indent-8 text-lg">
            • An unmatched rooftop bar and lounge
          </p>
          <p className="mx-5 mt-1 indent-8 text-lg">
            • Live entertainment and multiple event spaces
          </p>
          <p className="mx-5 mt-1 indent-8 text-lg">
            • Private and in-Haus events
          </p>
          <p className="mx-5 mt-1 indent-8 text-lg">
            • Upscale restaurant adjacent to casual Taproom
          </p>
          <p className="mx-5 mt-10 text-xl leading-normal">
            Upon its acquisition in 2014, Beach Haus transformed the iconic
            Freedman&apos;s Bakery Building in downtown Belmar into one of New
            Jersey&apos;s largest independent breweries with an 11,000 square
            foot, 30-barrel production facility and nearly 10,000 square feet of
            hospitality space. The modern rustic design encompasses the history
            of the landmark building while bridging the way to its unique
            outdoor spaces, bars and restaurant options. Beach Haus has rapidly
            become a community hub and destination location for all to
            experience its many levels and craving options at the heart of the
            Jersey Shore!
          </p>
        </div>
        <div className="col-span-12 pb-5 lg:col-span-4" id="info">
          <h1 className="mx-5 pt-14 text-4xl font-bold text-cyan-800">Info & Hours</h1>
          <h3 className="mx-5 pt-4 text-xl font-semibold">
            Beach Haus Brewery Tap Room and Lobby
          </h3>
          <p className="mx-5  pt-1">
            <b className="text-lg">Phone:</b> 732-202-7782
          </p>
          
          <p className="mx-5 pt-1">
            <b>Monday - Thursday:</b> 4PM-10PM
          </p>
          <p className=" mx-5">
            <b>Friday & Saturday:</b> 12PM-11PM
          </p>
          <p className=" mx-5">
            <b>Sunday:</b> 12PM-8PM
          </p>
          <p className=" mx-5 pt-1">
            <b>Please note:</b> The kitchen shuts down one hour before closing time
          </p>
          <h3 className="mx-5 pt-4 text-xl font-semibold">801 Craft Kitchen</h3>
          <p className="mx-5  pt-1">
            <b className="text-lg">Closed for the season</b>
          </p>
          <h3 className="mx-5 pt-4 text-xl font-semibold">
            Rooftop at Beach Haus
          </h3>
          <p className="mx-5  pt-1">
            <b className="text-lg">Closed for the season</b>
          </p>
        </div>
      </div>
    </div>
  );
}
