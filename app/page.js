import { ImageSlider } from "@/components/ImageSlider";
import { OurFacility } from "@/components/ourFacility";
import { EmblaCarousel } from "@/components/emblaCarousel";
import { LandingPageBreweryContentRow } from "@/components/LandingPageBreweryContentRow";
import { LandingPage801ContentRow } from "@/components/LandingPage801ContentRow";
import { LandingPageRooftopContentRow } from "@/components/LandingPageRooftopContentRow";
import { LandingPageEventsContentRow } from "@/components/LandingPageEventsContentRow";

export default function Home() {
  return (
    <div className="bg-black">
      {/* <ImageSlider /> */}
      <EmblaCarousel />
      <LandingPageBreweryContentRow />
      <LandingPage801ContentRow />
      <LandingPageRooftopContentRow />
      <LandingPageEventsContentRow />
      {/* <OurFacility /> */}
    </div>
  );
}

{
  /* <div className="grid grid-cols-2 gap-2">
  <div className="col-span-1">
    <LandingPage801ContentRow />
  </div>
  <div className="col-span-1">
    <LandingPageRooftopContentRow />
  </div>
</div>; */
}
