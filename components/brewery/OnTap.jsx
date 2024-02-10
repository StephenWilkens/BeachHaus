import { getOnTapBeer } from "@/lib/untappedMenuReqs";
import Image from "next/image";

export async function OnTapBeer() {
  let onTapBeers = await getOnTapBeer()
  return (
    <div className="lg:grid-cols-2 grid grid-cols-1 bg-cyan-50">
      {onTapBeers.map((beer) => (
        <div key={beer.id} className="col-span-1 mx-2 my-5 grid grid-cols-12">
          <div className="col-span-2">
            <Image
              src={beer.label_image}
              width={100}
              height={100}
              alt="Label Image"
            />
          </div>
          <div className="col-span-10 ml-1">
            <h1 className="text-xl">{beer.name}</h1>
            <p className="text-sm">{beer.style}</p>
            <p className="text-sm font-semibold">
              {beer.abv}% ABV • {beer.ibu} IBU
            </p>
            <p className="text-sm mr-10">{beer.description}</p>
          </div>
          <div className="col-span-2"></div>
        </div>
      ))}
    </div>
  );
}
