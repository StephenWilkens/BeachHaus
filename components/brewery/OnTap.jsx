import Image from "next/image";

async function getBeers() {
  let url = process.env.untappedOnTapURL;
  let username = process.env.untappedUserName;
  let pass = process.env.untappedPass;
  let headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + Buffer.from(username + ":" + pass).toString("base64"),
  );
  const res = await fetch(url, {
    method: "GET",
    headers: headers,
    next: { revalidate: 86400 },
    // cache: 'no-store'
  });
  const data = await res.json();
  return data;
}

export async function OnTapBeer() {
  let menu = await getBeers();
  let onTapBeers = await menu.menu.sections[0].items;
  let cannedBeers = await menu.menu.sections[1];
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
