import { ImageSlider } from "@/components/ImageSlider";
import { OurFacility } from "@/components/ourFacility";
import {EmblaCarousel} from "@/components/emblaCarousel"
export default function Home() {


  return (
    <div>
      {/* <ImageSlider /> */}
      <EmblaCarousel />
      <OurFacility />
    </div>
  );
}
