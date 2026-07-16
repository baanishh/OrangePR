import { type Reason } from "../types/whyChoose";
import whyImg1 from "../assets/images/why-choose/why-img-1.svg";
import whyImg2 from "../assets/images/why-choose/why-img-2.svg";
import whyImg3 from "../assets/images/why-choose/why-img-3.svg";

export const whyChooseData: Reason[] = [
  {
    number: "01",
    title: ["MARKET ENTRY", "EXPERTISE"],
    description:
      "We provide end-to-end PR and digital marketing solutions for businesses entering India.",
    image: whyImg1,
    bg: "bg-[#AEB4B9]",
    offsetY: false,
  },
  {
    number: "02",
    title: ["STRONG MEDIA", "RELATIONSHIPS"],
    description:
      "Our network spans top Indian publications, ensuring maximum visibility for your brand.",
    image: whyImg2,
    bg: "bg-[#FD9073]",
    offsetY: true,
  },
  {
    number: "03",
    title: ["LOCALIZED", "STORYTELLING"],
    description:
      "We tailor messaging to resonate with Indian consumers, investors, and stakeholders.",
    image: whyImg3,
    bg: "bg-[#FBB78C]",
    offsetY: false,
  },
];
