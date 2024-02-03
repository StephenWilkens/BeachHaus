import { LandingPageCarousel } from "@/components/landingPage/LandingPageCarousel";
import { LandingPageBreweryContentRow } from "@/components/landingPage/LandingPageBreweryContentRow";
import { LandingPage801ContentRow } from "@/components/landingPage/LandingPage801ContentRow";
import { LandingPageRooftopContentRow } from "@/components/landingPage/LandingPageRooftopContentRow";
import { LandingPageEventsContentRow } from "@/components/landingPage/LandingPageEventsContentRow";

export default function Home() {
  return (
    <div className="bg-black">
      <LandingPageCarousel />
      <LandingPageBreweryContentRow />
      <LandingPage801ContentRow />
      <LandingPageRooftopContentRow />
      <LandingPageEventsContentRow />
    </div>
  );
}
