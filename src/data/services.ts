import { type Service } from "../types/service";
import mediaImg from "../assets/images/services/service-img-1.svg";
import influencerImg from "../assets/images/services/service-img-2.svg";
import eventsImg from "../assets/images/services/service-img-3.svg";

export const servicesData: Service[] = [
  {
    title: ["Media", "Relations"],
    description:
      "Orange PR takes charge of all media relations on behalf of our clients, enabling them to concentrate on their brand's daily requirements.",
    image: mediaImg,
  },
  {
    title: ["Influencer", "Management"],
    description:
      "We connect brands with the right influencers to build authentic reach and engagement across every platform.",
    image: influencerImg,
  },
  {
    title: ["Events"],
    description:
      "From concept to execution, we plan and manage standout events that put your brand center stage.",
    image: eventsImg,
  },
];
