export async function getOnTapBeer() {
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
  });
  const data = await res.json();
  return data.menu.sections[0].items;
}

export async function getBeerToGo() {
  let url = process.env.untappedBeerToGoURL;
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
  });
  const data = await res.json();
  return data.menu.sections[0].items;
}