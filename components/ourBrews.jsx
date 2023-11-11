"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import highSide from "../public/HIGH-SIDE-BLONDE-ALE-BEACH-HAUS.png";
import winterRental from "../public/WINTER-RENTAL-BLACK-LAGER-BEACH-HAUS.png";
import whatchamalger from "../public/WHATCHAMALAGER-BEACH-HAUS.png";
import peachOther from "../public/WE-WERE-MADE-FOR-PEACH-OTHER-BEACH-HAUS.png";
import swell from "../public/SWELL-–-NEW-ENGLAND-STYLE-IPA-BEACH-HAUS.png";
import swash from "../public/SWASH-WHITE-ALE-BEACH-HAUS.png";
import session81 from "../public/SESSION-81-INDIA-PALE-ALE-IPA-BEACH-HAUS.png";
import pumptoberFest from "../public/PUMPTOBERFEST-BEACH-HAUS.png";
import paradeDay from "../public/PARADE-DAY-COFFEE-STOUT-BEACH-HAUS.png";
import oktoberFest from "../public/OKTOBERFEST-BEACH-HAUS.png";
import lightHaus from "../public/LIGHT-HAUS-LAGER-BEACH-HAUS.png";
import krampus from "../public/krampus-16oz-Beach-Haus-opt.png";

export function OurBrews() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center my-10">
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={winterRental} alt="hs" class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">WINTER RENTAL<br />BLACK LAGER</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 5.2%</p>
              <p className="text-3xl font-medium">IBU: 28</p>
              <p className="text-center">
                Beach Haus Winter Rental brings together the smoothness of
                traditional Bavarian Lagers with the satisfying flavor of
                generous amounts of dark roasted malts. The pleasant balance
                lends itself to repeated pours.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5 overflow-hidden">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2 overflow-hidden">
              <div className="bg-gray-200 rounded-t-xl relative ">
                <div class="absolute top-5 inset-x-24 ">
                  <Image src={whatchamalger} alt="hs" height="250" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center ">WHATCHAMA<br />LAGER</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 5.3%</p>
              <p className="text-3xl font-medium">IBU: 25</p>
              <p className="text-center">
                Chock-full of Dark Malts (Dark Munich, Chocolate, Roasted
                Barley, Carafa 3) accompanied by sweet and familiar chocolate,
                peanut butter and vanilla flavors. This beer is based on our
                widely popular Test Dept.™ Chocolate Peanut Butter lager.
                Whatever you call it…you’ll love it!
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={peachOther} alt="hs" height="250" class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">WE WERE MADE<br />FOR PEACH OTHER</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 7.2%</p>
              <p className="text-3xl font-medium">IBU: 38</p>
              <p className="text-center">
                2nd Place at the 2019 AC Beer & Music Fest in the Hazy IPA
                category! ‘We Were Made For Peach Other’ – a Milkshake IPA made
                with peaches, vanilla and lactose. Simcoe, Nugget, Citra and
                Azacca hops are used in the boil, whirlpool and dry hopping. It
                has a nice golden hazy appearance that picks up a little bit of
                orange color from the peach purée.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={swell} alt="hs" height={250} class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">SWELL</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 6.4%</p>
              <p className="text-3xl font-medium">IBU: 40</p>
              <p className="text-center">
                Beach Haus Swell New England Style IPA is ‘juicy- centric’ and
                brings heavy citrus and fruity notes throughout. A heavy-handed
                hop blend featuring post-boil Mosaic and Citra whirlpool
                additions work with a carefully selected grain bill to make sure
                maximum haze is offered.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={swash} alt="hs" height={250} class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">SWASH</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 5.7%</p>
              <p className="text-3xl font-medium">IBU: 15</p>
              <p className="text-center">
                Inspired by Belgian Wits, this White Ale is yellow in color with
                a slight haze. It has a medium body, coriander, and a hint of
                sweet orange peel.
                <br />
                <br />
                Swash is made with Hallertau Blanc, and Mandarina Bavaria gives
                it a slight tropical, pineapple and citrus note.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={session81} alt="hs" height={250} class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">SESSION 81</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 5.5%</p>
              <p className="text-3xl font-medium">IBU: 29</p>
              <p className="text-center">
                Malt forward, we dry hopped Session 81 with Zythos and HBC-472
                (experimental hop) which balances out this session IPA and
                brings tropical notes of coconut, pineapples, tangerine and
                grapefruit.
                <br />
                <br /> A collaboration effort between the brewery and our good
                friends and neighbors at Eastern Lines Surf Shop for their
                annual Belmar Pro surf contest.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={pumptoberFest} alt="hs" class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">PUMPTOBERFEST</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 6.5%</p>
              <p className="text-3xl font-medium">IBU: 25</p>
              <p className="text-center">
                Beach Haus Pumptoberfest carries all the rich smoothness of a
                traditional Märzen, delicately spiced to taste. Pours a
                burnished bronze, and uses generous amounts of Munich malt and
                employ traditional old-world lagering techniques to produce a
                clean and capricious brew for you to sip for the end of Summer
                and Fall months.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={paradeDay} alt="hs" height={250} class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">PARADE DAY<br />COFFEE STOUT</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 7%</p>
              <p className="text-3xl font-medium">IBU: 25</p>
              <p className="text-center">
                Parade Day Irish-style coffee stout – blended with a roast by
                local roaster Turnstile Coffee, Parade Day expresses café bliss
                with notes of cocoa and a soft, almost minty finish. This beer
                helps kick off the Annual Belmar St. Patrick’s Day Parade on the
                first Sunday of every March!
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={oktoberFest} alt="hs" class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">OKTOBERFEST</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 6.5%</p>
              <p className="text-3xl font-medium">IBU: 15</p>
              <p className="text-center">
                Oans, zwoa, drei, g’suffa! (one, two, three, down the hatch!)
                Get ready to tackle Oktoberfest season with our old-world-styled
                Märzen which has been a fan favorite since its initial 2015
                release.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={lightHaus} alt="hs" class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">LIGHT HAUS<br />LAGER</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 4.7%</p>
              <p className="text-3xl font-medium">IBU: 10</p>
              <p className="text-center">
                Our Light Haus Lager is made with Horizon and Tettnang hops that
                provides low bitterness with a clean, crisp and balanced finish.
                Straw in color and light in body this beer lends itself to
                repeated pours and pairs well with most food.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={krampus} alt="hs" class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">KRAMPUS</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center ">
              <p className="text-3xl font-medium">ABV: 9.4%</p>
              <p className="text-3xl font-medium">IBU: 20</p>
              <p className="text-center">
                Beach Haus® Krampus is a welcome visitor to any holiday home
                with its blend of spices, fruitiness and malt. Our most limited
                of limited releases that is brewed a lil different each year.
                For 2018 we used light brown sugar, raisins and figs to bring
                out caramelized sugar and dried fruit flavors. Also added to the
                boil is star anise, clove, cardamom and cinnamon. The spices
                balance and play nice with the caramelized sugars. A 9.4% ABV
                gives this year’s Krampus an extra bite!
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 w-[330px] h-[470px] group [perspective:800px] py-5">
          <div class="w-full h-full relative transition-transform duration-1000 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div class="w-full h-full absolute rounded-xl shadow-xl bg-white [backface-visibility:hidden] grid grid-rows-2">
              <div className="bg-gray-200 rounded-t-xl relative">
                <div class="absolute top-5 inset-x-24">
                  <Image src={highSide} alt="hs" class="" />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-4xl font-semibold text-center">HIGH SIDE<br />BLONDE ALE</h1>
              </div>
            </div>
            <div class="w-full h-full rounded-xl shadow-xl absolute bg-gray-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center">
              <p className="text-3xl font-medium">ABV: 6%</p>
              <p className="text-3xl font-medium">IBU: 22</p>
              <p className="text-center">
                Beach Haus High Side pours clean with cascades of fine, bright
                white bubbles that introduce a nose of soft bread sweetness,
                then balanced by a subdued hop presence from the addition of
                Horizon hops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="col-span-1">
  <div className=" bg-transparent w-[300px] h-[200px] border-1 border hover:[ transform: rotateY(180deg)]">
    <div class="relative w-full h-full text-center hover:[ transform: rotateY(180deg)] [transition: transform 0.8s] [transform-style: preserve-3d]">
      <div class="absolute w-full h-full [backface-visibility: hidden]">
        <Image src={highSide} alt="High Side" />
      </div>
      <div class="absolute w-full h-full [backface-visibility: hidden]">
        <p>Highside ripsss</p>
        </div>
        </div>
        </div>
      </div> */
}
