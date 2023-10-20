import tanks from "../public/bh2.jpg";
import Image from "next/image";
import Link from "next/link";

export function BreweryFoodMenu() {
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
            HAUS FOOD
          </h1>
        </div>
      </div>
      <div class="grid grid-rows-2 md:grid-rows-1 divide-y">
        <div class="row-span-1 mx-auto mt-3">
          <Link
            href="#appetizers"
            class="m-3 font-medium hover:font-regular hover:text-red-800"
          >
            Appetizers
          </Link>
          <Link
            href="#soup&salad"
            class="m-3 font-medium hover:font-regular hover:text-red-800"
          >
            Soup & Salad
          </Link>
          <Link
            href="#burgers"
            class="m-3 font-medium hover:font-regular hover:text-red-800"
          >
            Burgers
          </Link>
        </div>
        <div class="row-span-1 mx-auto mt-1 mb-3">
          <Link
            href="#pizza"
            class="m-3 font-medium hover:font-regular hover:text-red-800"
          >
            Wood-Fired Pizza
          </Link>
          <Link
            href="#entrees"
            class="m-3 font-medium hover:font-regular hover:text-red-800"
          >
            Entrees
          </Link>
          <Link
            href="#dessert"
            class="m-3 font-medium hover:font-regular hover:text-red-800"
          >
            Dessert
          </Link>
        </div>
      </div>
      <div id="appetizers" class="my-5">
        <h1 class="text-4xl font-bold border-y-2 border-gray-500 text-red-800 text-center">
          APPETIZERS
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-5">
        <div class="">
          <h1 class="text-center text-2xl font-medium">BAVARIAN PRETZEL</h1>
          <p class="text-center text-sm text-gray-500">
            Beach Haus Beer Cheese, Fancy Mustard
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">HAUS BUTCHER BACON</h1>
          <p class="text-center text-sm text-gray-500">5 Spices, Brown Sugar</p>
          <p class="text-center text-sm text-gray-500">18</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">WINGS (8)</h1>
          <p class="text-center text-sm text-gray-500">
            Choice of Buffalo, Sticky Thai, or Cajun Dry Rub with Jalapeño Ranch
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">HAUS FRIES</h1>
          <p class="text-center text-sm text-gray-500">
            Bacon, Peppadews, Chili Oil, Parmesan Cheese
          </p>
          <p class="text-center text-sm text-gray-500">12</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">POUTINE FRIES</h1>
          <p class="text-center text-sm text-gray-500">
            Short Rib, Gravy, Cheese Curd
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            HEIRLOOM CARROTS & BRUSSEL SPROUTS
          </h1>
          <p class="text-center text-sm text-gray-500">
            Sriracha Honey, Pepitas
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">NACHOS</h1>
          <p class="text-center text-sm text-gray-500">
            Tortilla, Guacamole, Sour Cream, Pico, Cheese, Jalapeños
          </p>
          <p class="text-center text-sm text-gray-500">13</p>
          <p class="text-center text-sm text-gray-500">
            Add Shredded Chicken +8
            <br />
            Add Short Rib +12
          </p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">MEATS + CHEESE BOARD</h1>
          <p class="text-center text-sm text-gray-500">
            3 Cured Meats, 3 Cheeses, Fig Jam, Baguette, Candied Walnuts
          </p>
          <p class="text-center text-sm text-gray-500">25</p>
        </div>
      </div>
      <div id="soup&salad" class="my-5">
        <h1 class="text-4xl font-bold border-y-2 border-gray-500 text-red-800 text-center">
          SOUP & SALAD
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-5">
        <div>
          <h1 class="text-center font-semibold">
            ADD CHICKEN +6 • ADD SHRIMP +10
          </h1>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            CROCK OF FRENCH ONION SOUP
          </h1>
          <p class="text-center text-sm text-gray-500">8</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">HARVEST SALAD</h1>
          <p class="text-center text-sm text-gray-500">
            Arugula, Toasted Pistachios, Red Grapes, Grated Asiago Cheese, Poppy
            Seed Dressing
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">CAESAR</h1>
          <p class="text-center text-sm text-gray-500">
            Romaine, Croutons, Parmesan, Classic Caesar Dressing
          </p>
          <p class="text-center text-sm text-gray-500">13</p>
        </div>
      </div>
      <div id="burgers" class="my-5">
        <h1 class="text-4xl font-bold border-y-2 border-gray-500 text-red-800 text-center">
          BURGERS
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-5">
        <div>
          <h1 class="text-center font-semibold">
            ALL BURGERS ARE SERVED WITH A SIDE OF HAUS CUT FRIES AND A PICKLE
          </h1>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">CLASSIC BURGER</h1>
          <p class="text-center text-sm text-gray-500">
            Custom Burger Blend, American Cheese, LTO, Haus Sauce, Brioche Bun
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">HAUS BURGER</h1>
          <p class="text-center text-sm text-gray-500">
            Custom Burger Blend, NY Sharp Cheddar, Caramelized Onions, Apple
            Smoked Bacon, Chipotle Ranch, Brioche Bun
          </p>
          <p class="text-center text-sm text-gray-500">18</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">BURGER OF THE MONTH</h1>
          <p class="text-center text-sm text-gray-500">
            Showcasing a Unique Burger Recipe from Our Chef each Month!
          </p>
          <p class="text-center text-sm text-gray-500">20</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">IMPOSSIBLE BURGER</h1>
          <p class="text-center text-sm text-gray-500">
            American Cheese, LTO, Chipotle Ranch, Brioche Bun
          </p>
          <p class="text-center text-sm text-gray-500">18</p>
        </div>
      </div>
      <div id="pizza" class="my-5">
        <h1 class="text-4xl font-bold border-y-2 border-gray-500 text-red-800 text-center">
          WOOD-FIRED PIZZA
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-5">
        <div>
          <h1 class="text-center font-semibold">
            COOKED IN OUR TRADITIONAL BRICK OVEN FUELED BY HARDWOOD
          </h1>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">CLASSIC PIE</h1>
          <p class="text-center text-sm text-gray-500">
            Tomato Sauce, Shredded Mozzarella, Parmesan
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">MARGHERITA</h1>
          <p class="text-center text-sm text-gray-500">
            San Marzano Tomato, Fresh Mozzarella, Basil
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">PEPPERONI HONEY</h1>
          <p class="text-center text-sm text-gray-500">
            Tomato Sauce, Spicy Pepperoni, Shredded Mozzarella, Hoy Honey
          </p>
          <p class="text-center text-sm text-gray-500">18</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">WHITE PIE</h1>
          <p class="text-center text-sm text-gray-500">
            Garlic Infused Ricotta, Mozzarella, Tomato Slices
          </p>
          <p class="text-center text-sm text-gray-500">18</p>
        </div>
      </div>
      <div id="entrees" class="my-5">
        <h1 class="text-4xl font-bold border-y-2 border-gray-500 text-red-800 text-center">
          ENTREES
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-5">
        <div>
          <h1 class="text-center font-semibold">
            ENJOY OUR FAVORITES AT THE JERSEY SHORE
          </h1>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">CHICKEN TACOS (3)</h1>
          <p class="text-center text-sm text-gray-500">
            Mojo Chicken, Avocado, Pico de Gallo, Lime Crema, Queso Oaxaca,
            Flour Tortillas
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">BEEF TACOS (3)</h1>
          <p class="text-center text-sm text-gray-500">
            Slow Braised Short Rib, Pico de Gallo, Queso Fresco, Chimichurri,
            Flour Tortillas
          </p>
          <p class="text-center text-sm text-gray-500">17</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">FISH TACOS (3)</h1>
          <p class="text-center text-sm text-gray-500">
            Blackened Cod, Pico de Gallo, Queso Fresco, Pepper Crema, Flour
            Tortillas
          </p>
          <p class="text-center text-sm text-gray-500">18</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            VEGETARIAN EMPANADAS (2)
          </h1>
          <p class="text-center text-sm text-gray-500">
            Fire-roasted Corn, Black Beans, Pepper Crema
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">BEACH BALLS</h1>
          <p class="text-center text-sm text-gray-500">
            Marinated Meatball Sliders on Garlic Parm Rolls, Haus Cut Fries
          </p>
          <p class="text-center text-sm text-gray-500">14</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            FRIED CHICKEN SANDWICH
          </h1>
          <p class="text-center text-sm text-gray-500">
            Breaded Chicken Breast Marinated in Buttermilk, Lettuce, Tomato, Red
            Onion, Ranch, Haus Cut Fries
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">DOUBLE DECKER BLT</h1>
          <p class="text-center text-sm text-gray-500">
            Applewood Smoked Bacon, Bibb Lettuce, Tomato, Avocado Aioli, Haus
            Cut Fries
          </p>
          <p class="text-center text-sm text-gray-500">15</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">
            FLIPPIN' FISH SANDWICH
          </h1>
          <p class="text-center text-sm text-gray-500">
            Fried Flounder, Arugula, Peppadews, Lemon Pepper Aioli, Toasted
            Ciabatta Bread, Haus Cut Fries
          </p>
          <p class="text-center text-sm text-gray-500">17</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">THE SHORTY</h1>
          <p class="text-center text-sm text-gray-500">
            Short Rib, Bourbon Aioli, Haus-made Pickles, NY Sharp Cheddar,
            Brioche Bun, Haus Cut Fries
          </p>
          <p class="text-center text-sm text-gray-500">18</p>
        </div>
        <div class="">
          <h1 class="text-center text-2xl font-medium">FISH + CHIPS</h1>
          <p class="text-center text-sm text-gray-500">
            Beach Haus Beer Battered Fresh Cod, Tartar, Haus Cut Fries
          </p>
          <p class="text-center text-sm text-gray-500">18</p>
        </div>
      </div>
      <div id="dessert" class="my-5">
        <h1 class="text-4xl font-bold border-y-2 border-gray-500 text-red-800 text-center">
          DESSERT
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-5">
        <div class="">
          <h1 class="text-center text-2xl font-medium">CONEY WAFFLE ICE CREAM</h1>
          <p class="text-center text-sm text-gray-500">10</p>
        </div>
      </div>
    </div>
  );
}
