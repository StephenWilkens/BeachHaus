export async function getOnTapBeer() {
  let url = process.env.UNTAPPED_ON_TAP_URL;
  let username = process.env.UNTAPPED_USER;
  let pass = process.env.UNTAPPED_PASS;
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
  let url = process.env.UNTAPPED_BEER_TO_GO_URL;
  let username = process.env.UNTAPPED_USER;
  let pass = process.env.UNTAPPED_PASS;
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
