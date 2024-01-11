"use client";

export function ContractBrewingContactForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      phone: String(event.target.phone.value),
      beerInfo: String(event.target.beerInfo.value),
    };
    
  }
  return (
    <div className="mx-auto max-w-4xl px-4">
      <form onSubmit={handleSubmit}>
        <div className="my-4 flex w-full flex-col">
          <label className="font-bold text-gray-800" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            required
            className="border border-gray-100 bg-gray-50 p-4"
            id="name"
          />
        </div>
        <div className="my-4 flex w-full flex-col">
          <label className="font-bold text-gray-800" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-100 bg-gray-50 p-4"
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
            className="border border-gray-100 bg-gray-50 p-4"
            required
          />
        </div>
        <div className="my-4 flex w-full flex-col">
          <label className="font-bold text-gray-800" htmlFor="beerInfo">
            What are you looking to brew?
          </label>
          <textarea
            rows={4}
            name="beerInfo"
            id="beerInfo"
            className="border border-gray-100 bg-gray-50 p-4"
            required
            maxLength={100}
            placeholder="Please not that we only brew malted beverages and seltzers. We do not provide non-alcoholic brewing either."
          />
        </div>
        <button
          type="submit"
          className="mb-5 border bg-cyan-800 px-4 py-2 text-white hover:bg-opacity-70"
        >
          Send Info
        </button>
      </form>
    </div>
  );
}
