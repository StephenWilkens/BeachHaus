import { ContentRowLeft } from "@/components/contentRowLeft";
import beer from "../../public/16x9Crop/food&Bev/C74353B6-7CFA-4BD0-B4EB-4EEF78B55DCA.jpg";

const IMAGE = beer
const TITLE = "The Brewery at Beach Haus";
const INFO = "Not only is our brewery the Jersey Shore's premier brewery for crispy lagers and refreshing ales, but we also offer incredible food and a full bar."

// "Not only is our brewery the Jersey Shore&apos;s premier brewery for
// crispy lagers and refresing ales, but we also offer incredible food
// and a full bar."

export default function Playground() {
  return (
    <div>
      <ContentRowLeft image={IMAGE} title={TITLE} info={INFO} />
    </div>
  );
}
