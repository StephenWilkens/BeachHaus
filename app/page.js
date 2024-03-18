import { LandingPageCarousel } from "@/components/landingPage/LandingPageCarousel";
import { LandingPageBreweryContentRow } from "@/components/landingPage/LandingPageBreweryContentRow";
import { LandingPage801ContentRow } from "@/components/landingPage/LandingPage801ContentRow";
import { LandingPageRooftopContentRow } from "@/components/landingPage/LandingPageRooftopContentRow";
import { LandingPageEventsContentRow } from "@/components/landingPage/LandingPageEventsContentRow";
import { TwNav } from "@/components/NavBar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <TwNav />
      <div className="bg-black">
        <LandingPageCarousel />
        <LandingPageBreweryContentRow />
        <LandingPage801ContentRow />
        <LandingPageRooftopContentRow />
        <LandingPageEventsContentRow />
      </div>
      <Footer />
    </>
  );
}
