import Image from "next/image";
import Link from "next/link";
import tanks from "../public/bh2.jpg";

export function BHCocktailMenu() {
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
        <div class="z-20 col-span-2 h-full w-full p-12 md:py-32">
          <h1 className="text-5xl md:text-8xl text-white font-bold text-center">
            HAUS DRINKS
          </h1>
        </div>
      </div>
      <div class="grid grid-rows-2 md:grid-rows-1 divide-y">
        <div class="row-span-1 mx-auto mt-3">
          <Link
            href="#cocktails"
            class="m-3 font-medium hover:font-regular hover:text-cyan-800"
          >
            Craft Cocktails
          </Link>
          <Link
            href="#beertails"
            class="m-3 font-medium hover:font-regular hover:text-cyan-800"
          >
            Beertails
          </Link>
        </div>
      </div>
      <div id="cocktails" class="my-5">
        <h1 class="text-4xl font-bold border-y-2 border-gray-500 text-cyan-800 text-center">
          COCKTAILS
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-5">
        <div class="md:pt-5">
          <h1 class="text-center text-2xl font-medium">
            SPICED APPLE MARGARITA
          </h1>
          <p class="text-center text-sm text-gray-500">
            Espolon Reposado Tequila, Apple Cider, Lime, Brown Sugar Simple,
            Cinnamon Sugar Rim
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">KARAMEL APPLE</h1>
          <p class="text-center text-sm text-gray-500">
            Stoli Salted Caramel Vodka, Apple Cider, Lemon
          </p>
          <p class="text-center text-sm text-gray-500">13</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">SEASONAL MULE</h1>
          <p class="text-center text-sm text-gray-500">
            Rotating Seasonal Mule
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">CRANBERRY SPRITZ</h1>
          <p class="text-center text-sm text-gray-500">
            Sourland Mountain Cranberry Vodka, Aperol, Lemon, Rosemary Simple,
            Prosecco
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">SEASONAL SANGRIA</h1>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">THE HORNET</h1>
          <p class="text-center text-sm text-gray-500">
            Haus Gin, Lemon, Mike’s Hot Honey
          </p>
          <p class="text-center text-sm text-gray-500">13</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">CRANBERRY LEMONADE</h1>
          <p class="text-center text-sm text-gray-500">
            Sourland Mountain Cranberry Vodka, Lemonade, Club
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            CHAI ESPRESSO MARTINI
          </h1>
          <p class="text-center text-sm text-gray-500">
            Stoli Vanilla Vodka, Kahlua, Espresso, Coconut Water, Chai Simple,
            Cinnamon Sugar Rim
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            CAMPFIRE S&apos;MORES
          </h1>
          <p class="text-center text-sm text-gray-500">
            Birddog S&apos;mores Whiskey, Kahlua, Cream, Chocolate Syrup &
            Graham Cracker Rim
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">THE FALL BUCKET</h1>
          <p class="text-center text-sm text-gray-500">
            Laird&apos;s Apple Jack, Misunderstood Ginger Whiskey, Apple Cider,
            Lemon, Club
          </p>
          <p class="text-center text-sm text-gray-500">17</p>
        </div>
      </div>
      <div id="beertails" class="my-5">
        <h1 class="text-4xl font-bold border-y-2 border-gray-500 text-cyan-800 text-center">
          BEERTAILS
        </h1>
        <div class="">
          <h1 class="text-center text-2xl font-medium">BEERGARITA</h1>
          <p class="text-center text-sm text-gray-500">
            Haus Margarita topped with choice of Beach Haus Sour Beer
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">HAUS CIDER</h1>
          <p class="text-center text-sm text-gray-500">
            Ironbound Hard Cider, Laird&apos;s Apple Jack, Apple Cider
          </p>
          <p class="text-center text-sm text-gray-500">13</p>
        </div>
      </div>
    </div>
  );
}
