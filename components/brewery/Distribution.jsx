import { DistributionContactForm } from "./DistributionContactForm";

export function Distribution() {
  return (
    <div className="bg-cyan-50">
      <h1 className="px-10 pt-10 text-4xl font-semibold">
        Beach Haus beer is now available for your liquor store or drafts!
      </h1>
      <p className="py-5 px-10 text-2xl">
        When we acquired our liquor license in 2020 our distribution rights were
        striped. With the passing of the NJ brewery bill we have regained our
        ability to sell beer as of February 1 st , 2024. Reach out to us
        directly for available products, pricing or to set up an in-person
        meeting. We welcome you to come visit the facility, try the beers and
        meet the team. Reach out below!
      </p>
      <p className="px-10 py-5 text-2xl">
        Don&apos;t own a liquor store or bar? We&apos;d still love to hear where
        you want to see Beach Haus beer. Send us the location you&apos;d like to
        drink Beach Haus and we will reach out to the business. Make sure to put
        in a good word or recommendation to the beer buyer!
      </p>
      <DistributionContactForm />
    </div>
  );
}

