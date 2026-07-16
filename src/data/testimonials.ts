import { type Testimonial, type TestimonialColumn } from "../types/testimonial";
import p1 from "../assets/images/testimonial/testimonial-img-1.webp";
import p2 from "../assets/images/testimonial/testimonial-img-2.webp";
import p3 from "../assets/images/testimonial/testimonial-img-3.webp";
import p4 from "../assets/images/testimonial/testimonial-img-4.webp";
import p5 from "../assets/images/testimonial/testimonial-img-5.webp";
import p6 from "../assets/images/testimonial/testimonial-img-6.webp";
import p7 from "../assets/images/testimonial/testimonial-img-7.webp";
import p8 from "../assets/images/testimonial/testimonial-img-8.webp";
import p9 from "../assets/images/testimonial/testimonial-img-9.webp";
import p10 from "../assets/images/testimonial/testimonial-img-10.webp";
import p11 from "../assets/images/testimonial/testimonial-img-11.webp";
import p12 from "../assets/images/testimonial/testimonial-img-12.webp";

export const testimonialsData: Testimonial[] = [
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "James Andrews",
    role: "CEO and Founder of the Company",
    avatar: p1,
  },
  {
    quote:
      "A second quote goes here so the pagination has something real to switch between when you click 02.",
    name: "Sarah Miles",
    role: "Marketing Director",
    avatar: p7,
  },
  {
    quote:
      "A third quote goes here to complete the three-slide testimonial carousel shown in the design.",
    name: "David Chen",
    role: "Head of Communications",
    avatar: p11,
  },
];

export const testimonialColumns: TestimonialColumn[] = [
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[7.2vw] xl:h-[114px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p1, h: "h-[9.2vw] xl:h-[158px]" },
      { image: p2, h: "h-[9.2vw] xl:h-[158px]" },
    ],
  },
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[3.5vw] xl:h-[55px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p3, h: "h-[9.2vw] xl:h-[158px]" },
      { image: p4, h: "h-[9.2vw] xl:h-[158px]" },
    ],
  },
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[7.7vw] xl:h-[123px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p5, h: "h-[9.2vw] xl:h-[158px]" },
    ],
  },
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[3.9vw] xl:h-[62px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p6, h: "h-[9.2vw] xl:h-[158px]" },
    ],
  },
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[6.1vw] xl:h-[97px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p7, h: "h-[9.2vw] xl:h-[158px]" },
    ],
  },
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[3.9vw] xl:h-[62px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p8, h: "h-[9.2vw] xl:h-[158px]" },
    ],
  },
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[7.7vw] xl:h-[123px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p9, h: "h-[9.2vw] xl:h-[158px]" },
    ],
  },
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[3.4vw] xl:h-[54px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p10, h: "h-[9.2vw] xl:h-[158px]" },
      {
        image: p11,
        h: "h-[10vw] xl:h-[160px]",
        clipPath: "url(#rounded-trapezoid)",
      },
    ],
  },
  {
    slots: [
      {
        image: null,
        bg: "bg-[#F8F8F8]",
        h: "h-[6.9vw] xl:h-[111px]",
        rounded: "rounded-t-none rounded-b-xl md:rounded-b-[24px]",
      },
      { image: p12, h: "h-[9.2vw] xl:h-[158px]" },
      { image: null, bg: "bg-[#D9D9D9]", h: "h-[9.2vw] xl:h-[158px]" },
    ],
  },
];
