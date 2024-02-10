"use client";

export function DistributionContactForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      phone: String(event.target.phone.value),
      beerInfo: String(event.target.beerInfo.value),
    };

    const response = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent!");
    }
    if (!response.ok) {
      console.log("Error");
    }
  }
  return (
    <div className="px-10 pb-5 w-full bg-cyan-50">
      <h1 className="text-center text-3xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="font-bold text-gray-800" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            required
            className="border border-gray-300 bg-gray-100 "
            id="name"
          />
        </div>
        <div className="my-4 flex w-full flex-col pt-2">
          <label className="font-bold text-gray-800" htmlFor="business">
            Business
          </label>
          <input
            type="text"
            required
            className="border border-gray-300 bg-gray-100 "
            id="business"
          />
        </div>
        <div className="my-4 flex w-full flex-col">
          <label className="font-bold text-gray-800" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 bg-gray-100 "
            required
          />
        </div>
        <div className="my-4 flex w-full flex-col">
          <label className="font-bold text-gray-800" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="1234567890"
            maxLength={12}
            className="border border-gray-300 bg-gray-100 "
            required
          />
        </div>
        <div className="my-4 flex w-full flex-col">
          <label className="font-bold text-gray-800" htmlFor="beerInfo">
            What are you looking to sell?
          </label>
          <textarea
            rows={4}
            name="beerInfo"
            id="beerInfo"
            className="border border-gray-300 bg-gray-100 "
            required
            maxLength={100}
            placeholder="To view a list of available canned products please see the 'Beer To Go' menu"
          />
        </div>
        <button
          type="submit"
          // disabled={loading}
          className="mb-5 border bg-cyan-800 px-4 py-2 text-white hover:bg-opacity-70"
        >
          Send Info
        </button>
      </form>
    </div>
  );
}
