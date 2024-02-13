"use client";
import Link from "next/link";
import blackWave from "../public/bh_blk_wave_noBG.png";
import Image from "next/image";
import { useState } from "react";
import { Dropdown, Sidebar } from "flowbite-react";

export function TwNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav class="z-50 bg-cyan-50">
      <div class="max-w-8xl mx-auto px-8">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div>
              <Link href="/" class="flex items-center px-4 py-5 text-black">
                <Image
                  src={blackWave}
                  alt="BH Logo"
                  width={50}
                  height={50}
                  class=""
                />
                <span class="ml-2 text-xl font-bold">Beach Haus</span>
              </Link>
            </div>

            <div class="hidden items-center space-x-2 md:flex">
              <Link href="/about" class="px-2 py-5 text-black">
                About
              </Link>

              <Dropdown label="The Brewery" inline>
                <Dropdown.Item as={Link} href="/brewery">
                  The Brewery at Beach Haus
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/food">
                  Food Menu
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/cocktails">
                  Cocktail Menu
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/ontap">
                  On Tap
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/beer-to-go">
                  Beer To Go
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/contractbrewing">
                  Contract Brewing
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/brewery/distribution">
                  Distribution
                </Dropdown.Item>
              </Dropdown>

              <Link
                href="https://801craftkitchen.com"
                class="px-2 py-5 text-black"
              >
                801 Craft Kitchen
              </Link>

              <Link href="/rooftop" class="px-2 py-5 text-black">
                Rooftop Bar
              </Link>

              <Dropdown label="Private Events" inline>
                <Dropdown.Item as={Link} href="/private-events">
                  Private Events at Beach Haus
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/private-events/booking">
                  Book Your Event
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/private-events/weddings">
                  Weddings at Beach Haus
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  href="/private-events/food-and-beverage-packages"
                >
                  Food & Beverage Packages
                </Dropdown.Item>
                <Dropdown label="Venue Options" inline>
                  <Dropdown.Item
                    as={Link}
                    href="/private-events/venue-options/beer-hall"
                  >
                    Beer Hall
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    href="/private-events/venue-options/craft-kitchen"
                  >
                    801 Craft Kitchen
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    href="/private-events/venue-options/lobby-bar"
                  >
                    Lobby Bar
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    href="/private-events/venue-options/taproom-beerhall-patio"
                  >
                    Tap Room, Patio, and Beer Hall
                  </Dropdown.Item>
                </Dropdown>
              </Dropdown>
              <Link href="/virtual-tour" class="px-2 py-5 text-black">
                Virtual Tour
              </Link>
              <Link href="/events-calendar" class="px-2 py-5 text-black">
                Events Calendar
              </Link>
            </div>
          </div>

          <div class="hidden items-center space-x-1 md:flex">
            <a href="/shop" class="px-3 py-5 text-black">
              Shop
            </a>
            <Link
              href="/private-events"
              class="rounded bg-cyan-800 px-3 py-5 text-white  transition duration-300 hover:opacity-80"
            >
              Book an Event!
            </Link>
          </div>

          <div onClick={handleNav} class="flex items-center md:hidden">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
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
            ? "fixed right-0 top-0 z-50 h-screen w-[65%] bg-[#ecf0f3] p-2 duration-500 ease-in"
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
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Sidebar className="w-full">
          <Sidebar.Items className="">
            <Sidebar.ItemGroup className="">
              <Sidebar.Item href="/">
                <p>Home</p>
              </Sidebar.Item>
              <Sidebar.Collapse label="The Brewery">
                <Sidebar.Item href="/brewery">Home</Sidebar.Item>
                <Sidebar.Item href="/brewery/food">Food Menu</Sidebar.Item>
                <Sidebar.Item href="/brewery/cocktails">
                  Cocktail Menu
                </Sidebar.Item>
                <Sidebar.Item href="/brewery/ontap">On Tap</Sidebar.Item>
                <Sidebar.Item href="/brewery/beer-to-go">
                  Beer To Go
                </Sidebar.Item>
                <Sidebar.Item href="/brewery/contractbrewing">
                  Contract Brewing
                </Sidebar.Item>
                <Sidebar.Item href="/brewery/distribution">
                  Distribution
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="https://801craftkitchen.com">
                <p>801 Craft Kitchen</p>
              </Sidebar.Item>
              <Sidebar.Item href="/rooftop">
                <p>Rooftop Bar</p>
              </Sidebar.Item>
              <Sidebar.Item href="/shop">
                <p>Shop</p>
              </Sidebar.Item>
              <Sidebar.Collapse label="Private Events">
                <Sidebar.Item href="/private-events">
                  Private Events
                  <br />
                  at Beach Haus
                </Sidebar.Item>
                <Sidebar.Item href="/private-events/booking">
                  Book Your Event
                </Sidebar.Item>
                <Sidebar.Item href="/private-events/food-and-beverage-packages">
                  Food and Beverage
                  <br />
                  Packages
                </Sidebar.Item>
                <Sidebar.Item href="/private-events/weddings">
                  Weddings at Beach Haus
                </Sidebar.Item>
                <Sidebar.Collapse label="Venue Options">
                  <Sidebar.Item href="/private-events/venue-options/beer-hall">
                    Beer Hall
                  </Sidebar.Item>
                  <Sidebar.Item href="/private-events/venue-options/craft-kitchen">
                    801 Craft Kitchen
                  </Sidebar.Item>
                  <Sidebar.Item href="/private-events/venue-options/lobby-bar">
                    Lobby Bar
                  </Sidebar.Item>
                  <Sidebar.Item href="/private-events/venue-options/taproom-beerhall-patio">
                    Tap Room,
                    <br />
                    Patio,
                    <br />
                    and Beer Hall
                  </Sidebar.Item>
                </Sidebar.Collapse>
              </Sidebar.Collapse>
              <Sidebar.Item href="/virtual-tour">
                <p>Virtual Tour</p>
              </Sidebar.Item>
              <Sidebar.Item href="/events-calendar">
                <p>Events Calendar</p>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </nav>
  );
}
