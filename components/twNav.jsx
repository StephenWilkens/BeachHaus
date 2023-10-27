"use client";
import Link from "next/link";
import { bhRoundLogo } from "../public/bhRoundLogo.png";
import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "flowbite-react";

export function TwNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div>
              <Link
                href="/"
                class="flex items-center py-5 px-2 text-gray-700 hover:text-black"
              >
                <Image
                  alt="BH Logo"
                  src="/../public/bhRoundLogo.png"
                  width={40}
                  height={40}
                  class="mr-1"
                />
                <span class="font-bold pl-1">Beach Haus</span>
              </Link>
            </div>

            <div class="hidden md:flex items-center space-x-2">
              <Link href="/about" class="py-5 px-2 text-gray-700 hover:text-black">
                About
              </Link>

              <Dropdown label="The Brewery" inline>
                <Dropdown.Item as={Link} href="/brewery">Home</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/ontap">Currently on Tap</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/food">Food Menu</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/ourbeer">Our Beers</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/contractbrewing">Contract Brewing</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/eventspace">Event Space</Dropdown.Item>
              </Dropdown>
              
              <Dropdown label="801 Craft Kitchen" inline>
                <Dropdown.Item as={Link} href="/restaurant">Home</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/ontap">Currently on Tap</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/food">Food Menu</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/ourbeer">Our Beers</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/contractbrewing">Contract Brewing</Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/eventspace">Event Space</Dropdown.Item>
              </Dropdown>
              
              <a
                href="/rooftop"
                class="py-5 px-2 text-gray-700 hover:text-black"
              >
                Rooftop Bar
              </a>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-black">
              Shop
            </a>
            <a
              href="#"
              class="py-5 px-3 bg-red-500 hover:bg-red-400 text-white hover:text-red-800 rounded transition duration-300"
            >
              Book an Event!
            </a>
          </div>

          <div onClick={handleNav} class="md:hidden flex items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        class={
          menuOpen
            ? "fixed right-0 top-0 w-[65%] h-screen bg-[#ecf0f3] p-10 z-50 ease-in duration-500"
            : "hidden"
        }
      >
        <div onClick={handleNav} class="flex w-full items-center justify-end">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <a href="/about" class="block py-2 pxp-4 text-sm hover:bg-gray-200">
          About
        </a>
        <a href="/brewery" class="block py-2 pxp-4 text-sm hover:bg-gray-200">
          Brewery
        </a>
        <a
          href="/restaurant"
          class="block py-2 pxp-4 text-sm hover:bg-gray-200"
        >
          Restaurant
        </a>
        <a href="/rooftop" class="block py-2 pxp-4 text-sm hover:bg-gray-200">
          Rooftop Bar
        </a>
      </div>
    </nav>
  );
}
