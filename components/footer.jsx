import Link from "next/link";
import Image from "next/image";
import {
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoYoutube,
} from "react-icons/bi";
import wave from "../public/bhWave.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative bottom-0 w-full">
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 max-w-7xl px-5 py-16  mx-auto">
        <div className="space-y-5 p-5 ">
          <Link
            href="#"
            class="block text-lg text-blue-400 hover:text-blue-200"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            class="block text-lg text-blue-400 hover:text-blue-200"
          >
            Careers
          </Link>
          <Link
            href="#"
            class="block text-lg text-blue-400 hover:text-blue-200"
          >
            Something Cool
          </Link>
          <Link
            href="#"
            class="block text-lg text-blue-400 hover:text-blue-200"
          >
            Something Neat
          </Link>
          <div className="flex justify-evenly">
            <Link
              href="https://www.instagram.com/beachhausbeer/"
              className="text-3xl hover:text-blue-400"
            >
              <BiLogoInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/beachhausbrewery"
              className="text-3xl hover:text-blue-400"
            >
              <BiLogoFacebook />
            </Link>
            <Link
              href="https://twitter.com/beachhausbeer"
              className="text-3xl hover:text-blue-400"
            >
              <BiLogoTwitter />
            </Link>
            <Link
              href="https://www.youtube.com/@beachhaus3566/featured"
              className="text-3xl hover:text-blue-400"
            >
              <BiLogoYoutube />
            </Link>
          </div>
        </div>
        <div className="space-y-2 ">
          <Image
            src={wave}
            alt="whatever"
            height={200}
            width={200}
            className="rounded-full"
          />
          <div className="flex items-center ">
            <p className="text-sm text-center mx-auto">
              801 Main St
              <br />
              Belmar, NJ
              <br />
              07719
            </p>
          </div>
          <div className="flex justify-between">
            <Link
              href="https://goo.gl/maps/rRY7NUqANGRwRMAz8"
              class="text-sm text-blue-400 hover:text-blue-200"
            >
              Directions
            </Link>
            <Link href="#" class="text-sm text-blue-400 hover:text-blue-200">
              Hours
            </Link>
          </div>
        </div>
        <div className="space-y-7 p-5">
          <Link
            href="#"
            class="block text-lg text-blue-400 hover:text-blue-200"
          >
            Beach Haus Brewery
          </Link>
          <Link
            href="#"
            class="block text-lg text-blue-400 hover:text-blue-200"
          >
            801 Craft Kitchen
          </Link>
          <Link
            href="#"
            class="block text-lg text-blue-400 hover:text-blue-200"
          >
            Rooftop at Beach Haus
          </Link>
        </div>
      </div>
      <div>
        <p className="text-center text-xs">
          Copyright © 2023 Beach Haus Brewery® |{" "}
          <Link href="#">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
