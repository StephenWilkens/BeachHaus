import { DistributionContactForm } from "./DistributionContactForm";

export function Distribution() {
  return (
    <div className="bg-cyan-50">
      <h1 className="px-10 pt-10 text-center text-4xl font-semibold">
        Beach Haus Brewery: A New Chapter in Distribution
      </h1>
      <p className="px-10 py-5 text-2xl">
        Beach Haus Brewery, nestled in the heart of Belmar, New Jersey, is
        making waves once again with the resumption of beer distribution. In
        2020, Beach Haus Brewery obtained a liquor license, which led to the
        revocation of its distribution rights. However, the New Jersey Brewery
        Bill that was passed in late 2023, allowed them to distribute once again
        as of February 2024. This marked an exciting new chapter for the
        brewery, facilitating further expansion and greater community
        engagement.
      </p>
      <h1 className="px-10 pt-10 text-center text-3xl font-semibold">
        Welcoming Mike DiTomasso, Director of Sales
      </h1>
      <p className="px-10 py-5 text-2xl">
        In late 2024, Beach Haus welcomed Mike DiTomasso to the team as the
        Director of Sales. DiTomasso brings a substantial breadth of experience
        and a novel perspective to the brewery&apos;s distribution strategy.
        With his expertise, Beach Haus is well-positioned to extend its reach
        and enhance its presence within the competitive beer market.
      </p>
      <h1 className="px-10 pt-10 text-center text-3xl font-semibold">
        Find Beach Haus Beer{" "}
      </h1>
      <p className="px-10 py-5 text-2xl">
        Beach Haus&apos; distribution network is expanding, and soon they will
        be available in more locations than ever. DiTomasso quotes,
      </p>
      <p className="px-10 py-5 text-2xl">
        “Expanding beyond Monmouth and Ocean County is essential for our
        distribution goals. North and West Jersey will be pivotal to our
        success. This expansion will enable us to reach a wider demographic and
        enhance familiarity when people visit the Jersey Shore. Once we&apos;ve
        established a stronger presence across New Jersey, I would like to
        extend our reach to New York and Pennsylvania. Although expanding that
        far will require patience and hard work, the future is bright for Beach
        Haus Brewery.&quot;
      </p>
      <h1 className="px-10 pt-10 text-center text-3xl font-semibold">
        Purchase Beach Haus Beer
      </h1>
      <p className="px-10 py-5 text-2xl">
        If you are interested in offering Beach Haus beer in your liquor store
        or bar, kindly contact Mike DiTomasso through the available channels
        listed below or by completing the contact form.
      </p>
      <p className="px-10 py-5 text-2xl">
        Phone: (718) 877 - 5435<br></br>
        Email: Mike.DiTomasso@BeachHausBeer.com
      </p>
      <DistributionContactForm />
    </div>
  );
}
