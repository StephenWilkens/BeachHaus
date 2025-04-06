import tanks from "../../public/bh2.jpg";
import Image from "next/image";
import Link from "next/link";
import food_menu from "../../public/menu_pics/FOOD_MENU_Spring25_1.jpg";
import food_menu2 from "../../public/menu_pics/FOOD_MENU_Spring25_2.jpg";

export function BreweryFoodMenu() {
  return (
    <div className="grid grid-rows-2 bg-black lg:flex ">
      <Image
        src={food_menu}
        alt="flight of beers"
        class="w-full object-center lg:w-1/2"
      />
      <Image
        src={food_menu2}
        alt="flight of beers"
        class="w-full object-center lg:w-1/2"
      />
    </div>
  );
}
{
  /* <div class="relative grid grid-cols-2 bg-black">
  <div class="col-span-2 m-auto w-full p-10 lg:p-20">
    <Image
      src={tanks}
      alt="About us background"
      fill
      class="absolute object-cover opacity-70"
    />
    <div class="col-span-2 h-full w-full p-12 md:py-32">
      <h1 className="absolute inset-0 left-16 top-14 text-5xl font-bold text-white md:text-8xl lg:left-96 lg:top-40">
        HAUS FOOD
      </h1>
    </div>
  </div>
</div>
<div class="grid grid-rows-2 divide-y md:grid-rows-1">
  <div class="row-span-1 mx-auto mt-3">
    <Link
      href="#soup&salad"
      class="hover:font-regular m-3 font-medium hover:text-cyan-800"
    >
      Soup & Salad
    </Link>
    <Link
      href="#appetizers"
      class="hover:font-regular m-3 font-medium hover:text-cyan-800"
    >
      Appetizers
    </Link>
    <Link
      href="#pizza"
      class="hover:font-regular m-3 font-medium hover:text-cyan-800"
    >
      Wood-Fired Pizza
    </Link>
  </div>
  <div class="row-span-1 mx-auto mb-3 mt-1">
    <Link
      href="#burgers"
      class="hover:font-regular m-3 font-medium hover:text-cyan-800"
    >
      Burgers
    </Link>
    <Link
      href="#mains"
      class="hover:font-regular m-3 font-medium hover:text-cyan-800"
    >
      Mains
    </Link>
    <Link
      href="#dessert"
      class="hover:font-regular m-3 font-medium hover:text-cyan-800"
    >
      Dessert
    </Link>
  </div>
</div>
<div id="soup&salad" class="my-5">
  <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
    SOUP & SALAD
  </h1>
</div>
<div class="grid grid-cols-1 space-y-5 md:grid-cols-2">
  <div class="md:col-span-2 md:pb-3">
    <h1 class="text-center font-semibold">
      ADD CHICKEN +6 • ADD SHRIMP +10
    </h1>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">SARAH&apos;S SALAD</h1>
    <p class="text-center text-sm text-gray-500">
      Arugula, Toasted Pistachios, Red Grapes, Asiago Cheese, Poppy Seed
      Dressing
    </p>
    <p class="text-center text-sm text-gray-500">14</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">CAESAR SALAD</h1>
    <p class="text-center text-sm text-gray-500">
      Romaine, Croutons, Parmesan, Caesar Dressing
    </p>
    <p class="text-center text-sm text-gray-500">13</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">BUDDHA BOWL</h1>
    <p class="text-center text-sm text-gray-500">
      Mixed Greens, Farro, Roasted Butternut Squash, Avocado, Brussel
      Sprouts, Falafel, Hummus, Cranberries, Pepitas, Tahini Dressing
    </p>
    <p class="text-center text-sm text-gray-500">13</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">HAUS SALAD</h1>
    <p class="text-center text-sm text-gray-500">
      Mixed Greens, Cucumbers, Cherry Tomatoes, Honey Dijon Vinaigrette
    </p>
    <p class="text-center text-sm text-gray-500">12</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">
      CROCK OF FRENCH ONION SOUP
    </h1>
    <p class="text-center text-sm text-gray-500">
      Melted Swiss & Grated Parmesan over Onion Soup
    </p>
    <p class="text-center text-sm text-gray-500">8</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">POTATO SOUP</h1>
    <p class="text-center text-sm text-gray-500">
      Creamy Potato Soup, Bacon, Cheddar, Scallions
    </p>
    <p class="text-center text-sm text-gray-500">7</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">TOMATO SOUP</h1>
    <p class="text-center text-sm text-gray-500">
      Tomato, Heavy Cream, Vegetable Stock
    </p>
    <p class="text-center text-sm text-gray-500">5</p>
  </div>
</div>
<div id="appetizers" class="my-5">
  <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
    APPETIZERS
  </h1>
</div>
<div class="grid grid-cols-1 space-y-5 md:grid-cols-2">
  <div class="md:pt-5">
    <h1 class="text-center text-2xl font-medium">BAVARIAN PRETZEL</h1>
    <p class="text-center text-sm text-gray-500">
      Beach Haus Beer Cheese, Dijon Mustard
    </p>
    <p class="text-center text-sm text-gray-500">14</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">WINGS (8)</h1>
    <p class="text-center text-sm text-gray-500">
      Choice of Buffalo, Thai Sticky, Garlic Parmesan, or Cajun Dry Rub
      with Jalapeño Ranch
    </p>
    <p class="text-center text-sm text-gray-500">14</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">HAUS BUTCHER BACON</h1>
    <p class="text-center text-sm text-gray-500">5 Spices, Brown Sugar</p>
    <p class="text-center text-sm text-gray-500">18</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">NACHOS</h1>
    <p class="text-center text-sm text-gray-500">
      Tortilla Chips, Guacamole, Sour Cream, Pico de Gallo, Beer Cheese,
      Shredded Cheddar Cheese, Jalapeños
    </p>
    <p class="text-center text-sm text-gray-500">13</p>
    <p class="text-center text-sm font-medium text-gray-900">
      Add Shredded Chicken +8
      <br />
      Add Short Rib +12
    </p>
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
    <h1 class="text-center text-2xl font-medium">MEATS + CHEESE BOARD</h1>
    <p class="text-center text-sm text-gray-500">
      3 Cured Meats, 3 Cheeses, Fig Jam, Baguette, Candied Walnuts
    </p>
    <p class="text-center text-sm text-gray-500">25</p>
  </div>
  <div class="lg:col-span-2">
    <h1 class="text-center text-2xl font-medium">STREET CORN</h1>
    <p class="text-center text-sm text-gray-500">
      Mexican Style Corn Cob
    </p>
    <p class="text-center text-sm text-gray-500">8</p>
  </div>
</div>
<div id="pizza" class="my-5">
  <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
    WOOD-FIRED PIZZA
  </h1>
</div>
<div class="grid grid-cols-1 space-y-5 md:grid-cols-2">
  <div class="md:col-span-2 md:pb-3">
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
  <div class="lg:col-span-2">
    <h1 class="text-center text-2xl font-medium">CHICKEN PARM PIZZA</h1>
    <p class="text-center text-sm text-gray-500">
      Breaded Chicken, Tomato Sauce, Shredded Mozzalrella, Parmesan
    </p>
    <p class="text-center text-sm text-gray-500">18</p>
  </div>
</div>
<div id="burgers" class="my-5">
  <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
    BURGERS
  </h1>
</div>
<div class="grid grid-cols-1 space-y-5 md:grid-cols-2">
  <div class="pb-3 md:col-span-2">
    <h1 class="text-center font-semibold">
      ALL BURGERS ARE SERVED WITH A SIDE OF HAUS CUT FRIES AND A PICKLE
    </h1>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">CLASSIC BURGER</h1>
    <p class="text-center text-sm text-gray-500">
      Custom Burger Blend, American Cheese, LTO, Haus Sauce, Brioche Bun
    </p>
    <p class="text-center text-sm text-gray-500">16</p>
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
      Unique Burger Recipe Curated by Our Chef Monthly
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
<div id="mains" class="my-5">
  <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
    MAINS
  </h1>
</div>
<div class="grid grid-cols-1 space-y-5 md:grid-cols-2">
  <div class="md:col-span-2 md:pb-3">
    <h1 class="text-center font-semibold">
      ENJOY OUR FAVORITES AT THE JERSEY SHORE
    </h1>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">CHICKEN TACOS (3)</h1>
    <p class="text-center text-sm text-gray-500">
      Mojo Chicken, Avocado, Pico de Gallo, Lime Crema, Queso Oaxaca
    </p>
    <p class="text-center text-sm text-gray-500">15</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">BEEF TACOS (3)</h1>
    <p class="text-center text-sm text-gray-500">
      Slow Braised Short Rib, Pico de Gallo, Queso Fresco, Chimichurri
    </p>
    <p class="text-center text-sm text-gray-500">17</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">PORK TACOS (3)</h1>
    <p class="text-center text-sm text-gray-500">
      BBQ Pulled Poke, Cherry Cole Slaw
    </p>
    <p class="text-center text-sm text-gray-500">15</p>
  </div>
  <div class="">
    <h1 class="text-center text-2xl font-medium">FISH TACOS (3)</h1>
    <p class="text-center text-sm text-gray-500">
      Seasoned Cod, Pico de Gallo, Queso Fresco, Pepper Crema, Flour
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
    <p class="text-center text-sm text-gray-500">16</p>
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
      FLIPPIN&apos; FISH SANDWICH
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
    <p class="text-center text-sm text-gray-500">20</p>
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
  <h1 class="border-y-2 border-gray-500 text-center text-4xl font-bold text-cyan-800">
    DESSERT
  </h1>
</div>
<div class="grid grid-cols-1 space-y-5 md:grid-cols-2">
  <div class="pb-5 md:col-span-2">
    <h1 class="text-center text-2xl font-medium">
      CONEY WAFFLE ICE CREAM
    </h1>
    <p class="text-center text-sm text-gray-500">10</p>
  </div>
</div>*/
}
