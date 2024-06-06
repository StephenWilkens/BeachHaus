import { getBeerToGo } from "@/lib/untappedMenuReqs";
import Image from "next/image";

export async function BeerToGo() {
  let beers = await getBeerToGo();
  return (
    <div className="grid grid-cols-1 bg-cyan-50 lg:grid-cols-2">
      {beers.map((beer) => (
        <div key={beer.id} className="col-span-1 mx-2 my-5 grid grid-cols-12">
          <div className="col-span-2">
            <Image
              src={beer.label_image}
              width={100}
              height={100}
              alt="Label Image"
            />
          </div>
          <div className="col-span-6 ml-1">
            <h1 className="text-xl">{beer.name}</h1>
            <p className="text-sm">{beer.style}</p>
            <p className="text-sm font-semibold">
              {beer.abv}% ABV 
            </p>
          </div>
          <div className="col-span-3">

            <p>{beer.containers[0].container_size.name}</p>
          </div>
          <div className="col-span-1">
            <p>${beer.containers[0].price}</p>
            </div>
        </div>
      ))}
    </div>
  );
}
