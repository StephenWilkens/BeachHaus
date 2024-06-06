import Image from "next/image";
import Link from "next/link";
import tanks from "../../public/bh2.jpg";

export function BreweryCocktailMenu() {
  return (
    <div className="bg-cyan-50">
      <div class="relative grid grid-cols-2 bg-black">
        <div class="col-span-2 m-auto w-full p-10 lg:p-20">
          <Image
            src={tanks}
            alt="About us background"
            fill
            class="absolute object-cover opacity-70"
          />
          <div class="col-span-2 h-full w-full p-12 md:py-32">
            <h1 className="absolute inset-0 left-16 top-14 text-5xl font-bold text-white md:text-8xl lg:left-96 lg:top-40">
              HAUS DRINKS
            </h1>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2 divide-y md:grid-rows-1">
        <div class="row-span-1 mx-auto mt-3">
          <Link
            href="#cocktails"
            class="hover:font-regular m-3 font-medium hover:text-cyan-800"
          >
            Summer Cocktails
          </Link>
          <Link
            href="#beertails"
            class="hover:font-regular m-3 font-medium hover:text-cyan-800"
          >
            Beertails
          </Link>
          <Link
            href="#cans"
            class="hover:font-regular m-3 font-medium hover:text-cyan-800"
          >
            Cans
          </Link>
          <Link
            href="#wines"
            class="hover:font-regular m-3 font-medium hover:text-cyan-800"
          >
            Wines
          </Link>
        </div>
      </div>
      <div id="cocktails" class="my-5">
        <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
          SUMMER COCKTAILS
        </h1>
      </div>
      <div class="grid grid-cols-1 space-y-5 md:grid-cols-2">
        <div class="md:pt-5">
          <h1 class="text-center text-2xl font-medium">PEACH HAUS MULE</h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Tito&apos;s Handmade Vodka, Peach Combier, Fresh Lime, Peach Ginger
            Beer
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            SPICY POMEGRANATE MARGARITA
          </h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Espolon Blanco Tequila, Jalapeno Simple, Pomegranate Juice, Tajin
            Rim
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">KEY LIME MARTINI</h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Shipwreck Lime Rum, RumChata, Fresh Lime, Graham Cracker Rim
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">MANGO APEROL WAVE</h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Aperol, Mango Juice, Fresh Lemon, Topped with Prosecco
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            MADDIE&apos;S COOLCUMBER COCKTAIL
          </h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Jameson Irish Whiskey, St Germain Elderflower Liqueur, Fresh Lemon,
            Simple, Muddled Cucumber
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            BOURBON SWEET PEACH TEA
          </h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Bulliet Bourbon, Peach Combier, Fresh Lemon and Iced Tea
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            JUNIPER FLOWER COCKTAIL
          </h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Bombay Sapphire Gin, St Germain Elderflower Liqueur, Grapefruit and
            Fresh Lemon
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">GOLDEN PINEAPPLE</h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Espolon Reposado Tequila, Pineapple Juice, Fresh Lime, Agave, Mole
            Bitters, Salted Rim
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">BLUEBERRY LEMONADE</h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Sourland Blueberry Vodka, Lemonade and Club
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            BEACH HAUS RUM BUCKET
          </h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Shipwreck Spiced Rum, Lime Rum, Mango Rum, Coconut Rum, Blue
            Curaçao, Orange and Pineapple Juice, Fresh Lime, Appleton Estate Rum
            Floater
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">17</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            HAUS SEASONAL SANGRIA
          </h1>
          <p class="mx-5 text-center text-sm text-gray-500">14</p>
        </div>
      </div>
      <div id="beertails" class="mt-5 pb-5">
        <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
          BEERTAILS
        </h1>
        <div class="mt-5">
          <h1 class="text-center text-2xl font-medium">BEERGARITA</h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Haus Margarita topped with choice of Beach Haus Sour Beer
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">ORANGE CRUSH</h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Stoli Orange Vodka, Triple Sec, Fresh Lemon Topped with Beach Haus
            Orange Creamsicle Beer
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">HAUS CIDER</h1>
          <p class="mx-5 text-center text-sm text-gray-500">
            Ironbound Hard Cider, Laird&apos;s Apple Jack, Apple Cider
          </p>
          <p class="mt-5 text-center text-sm text-gray-500">13</p>
        </div>
      </div>
      <div id="cans" class="mt-5 pb-5">
        <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
          CANS
        </h1>
        <div class="mt-5">
          <h1 class="text-center text-2xl font-medium">
            ATHLETIC NON-ALCOHOLIC BEER
          </h1>
          <p class="mx-5 text-center text-sm text-gray-500">6</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">SURFSIDE</h1>

          <p class="mx-5 text-center text-sm text-gray-500">9</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">STATESIDE SELTZER</h1>

          <p class="mt-5 text-center text-sm text-gray-500">9</p>
        </div>
      </div>
      <div id="wines" class="mt-5 pb-5">
        <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
          Wines
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div class="mt-3 md:mt-5">
          <h1 class="text-center text-2xl font-medium">SPARKLING</h1>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            PROSECCO SPLIT
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">12</p>
        </div>
        <div class="mt-3 md:mt-5">
          <h1 class="text-center text-2xl font-medium">ROSE</h1>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            THE PALE BY SACHA LICHINE
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">12/32</p>
        </div>
        <div class="mt-3 md:mt-5">
          <h1 class="text-center text-2xl font-medium">WHITE</h1>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            HAYES RANCH CHARDONNAY
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">12/32</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">California</p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            LA CREMA CHARDONNAY
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">12/32</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">California</p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            GABBIANO PINOT GRIGIO
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">12/32</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">California</p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            SANTA MARGHERITA PINOT GRIGIO
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">15/55</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">
            Alto Adige, Italy
          </p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            OYSTER BAY SAUVIGNON BLANC
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">12/32</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">
            Marlborough, New Zealand
          </p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            KIM CRAWFORD SAUVIGNON BLANC
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14/45</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">
            Marlborough, New Zealand
          </p>
        </div>
        <div class="mb-3 mt-3 md:mt-5">
          <h1 class="text-center text-2xl font-medium">RED</h1>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            UNDERWOOD PINOT NOIR
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">12/32</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">Oregon</p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            SOKOL BLOSSER EVOLUTION PINOT NOIR
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14/42</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">
            Willamette Valley, Oregon
          </p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            THE VELVET DEVIL MERLOT
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">14/38</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">Washington</p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            STONECAP CABERNET SAUVIGNON
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">11/32</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">
            Columbia Valley, Washington
          </p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            SILVER PALM CABERNET SAUVIGNON
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">13/38</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">
            North Coast, California
          </p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            GOLDSCHMIDT KATHERINE CABERNET SAUVIGNON
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">15/48</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">
            Alexander Valley, California
          </p>
          <p class="mx-5 text-center text-sm font-medium text-gray-900">
            DAOU PESSIMIST RED BLEND
          </p>
          <p class="mx-5 text-center text-sm text-gray-500">15/48</p>
          <p class="mb-5 mx-5 text-center text-sm text-gray-500">
            Paso Robles, California
          </p>
        </div>
      </div>
    </div>
  );
}
