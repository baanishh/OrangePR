import { type Slide } from "../types/hero";
import heroBg1 from "../assets/images/hero/hero-bg-1.webp";
import heroBg2 from "../assets/images/hero/hero-bg-2.webp";
import heroBg3 from "../assets/images/hero/hero-bg-3.webp";
import heroLadyBg from "../assets/images/hero/hero-lady.webp";
import thumbnail from "../assets/images/hero/thumbnail-1.webp";

export const slidesData: Slide[] = [
  {
    title: ["FRESH", "JUICY", "BRIGHT"],
    description:
      "Streamlining Media Relations for Brands. Orange PR manages media relations, freeing clients to focus on daily operations, while ensuring campaign initiatives are constantly monitored and updated for success.",
    backgroundImage: heroBg1,
    heroImage: heroLadyBg,
    videoThumbnail: thumbnail,
  },
  {
    title: ["STRATEGY", "INNOVATE", "GROW"],
    description:
      "Empowering Brands with Bold Narratives. We create tailored PR strategies that elevate your brand voice, secure premium media coverage, and build authentic connections with your target audience.",
    backgroundImage: heroBg2,
    heroImage: heroLadyBg,
    videoThumbnail: thumbnail,
  },
  {
    title: ["IMPACT", "VISIBLE", "STRONG"],
    description:
      "Designing Memorable Campaigns for Maximum Reach. Our creative campaigns drive conversation, boost visibility, and ensure your brand makes a lasting impression in the media landscape.",
    backgroundImage: heroBg3,
    heroImage: heroLadyBg,
    videoThumbnail: thumbnail,
  },
];
