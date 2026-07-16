import { useState } from "react";
import FeatherIcon from "../../components/common/FeatherIcon";

import p1 from "../../assets/images/testimonial/testimonial-img-1.svg";
import p2 from "../../assets/images/testimonial/testimonial-img-2.svg";
import p3 from "../../assets/images/testimonial/testimonial-img-3.svg";
import p4 from "../../assets/images/testimonial/testimonial-img-4.svg";
import p5 from "../../assets/images/testimonial/testimonial-img-5.svg";
import p6 from "../../assets/images/testimonial/testimonial-img-6.svg";
import p7 from "../../assets/images/testimonial/testimonial-img-7.svg";
import p8 from "../../assets/images/testimonial/testimonial-img-8.svg";
import p9 from "../../assets/images/testimonial/testimonial-img-9.svg";
import p10 from "../../assets/images/testimonial/testimonial-img-10.svg";
import p11 from "../../assets/images/testimonial/testimonial-img-11.svg";
import p12 from "../../assets/images/testimonial/testimonial-img-12.svg";

type Slot = {
  image: string | null;
  bg?: string;
  borderColor?: string;
  clipPath?: string;
  h: string;
  rounded?: string;
};
type Column = { mt?: string; slots: Slot[] };

const columns: Column[] = [
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

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
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

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const prev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      {/* Photo wall */}
      <div className="flex justify-center items-start gap-[1vw] xl:gap-4 max-w-[1600px] mx-auto px-4 overflow-hidden pb-12">
        {columns.map((col, i) => (
          <div
            key={i}
            className={`flex flex-col gap-[1vw] xl:gap-4 shrink-0 w-[9.2vw] xl:w-[147px] ${col.mt ?? ""}`}
          >
            {col.slots.map((slot, j) => (
              <div
                key={j}
                className={`${slot.rounded ?? "rounded-xl md:rounded-[24px]"} overflow-hidden shrink-0 relative ${slot.h} ${
                  slot.image ? "" : (slot.bg ?? "bg-gray-100")
                } ${slot.borderColor ?? ""}`}
                style={slot.clipPath ? { clipPath: slot.clipPath } : undefined}
              >
                {slot.image && (
                  <img
                    src={slot.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Heading + testimonial content */}
      <div className="max-w-[840px] mx-auto px-6 text-center mt-[-11vw] xl:mt-[-180px] relative z-10">
        <h2 className="text-[32px] md:text-[64px]  font-inter-600 uppercase text-title-black tracking-wider mb-8">
          TESTIOMONIALS
        </h2>

        <div className="mt-16 flex flex-col items-center gap-6">
          <img
            src={current.avatar}
            alt={current.name}
            className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover"
          />

          <p className="text-black text-lg md:text-[24px] font-inter-400">
            {current.quote}
          </p>

          <div>
            <p className="font-inter-600 text-[24px] text-black">
              {current.name}
            </p>
            <p className="text-base font-inter-400 text-black">
              {current.role}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm mt-4">
            <button
              onClick={prev}
              className="cursor-pointer p-2 hover:opacity-75 transition-opacity"
              aria-label="Previous testimonial"
            >
              <FeatherIcon icon="arrow-left" iconWidth={18} iconHeight={18} />
            </button>

            <span className="flex items-center gap-1">
              {testimonials.map((_, i) => (
                <span key={i} className="flex items-center gap-1">
                  <button
                    onClick={() => setActive(i)}
                    className={`font-bold cursor-pointer px-1 hover:text-black transition-colors ${
                      i === active ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                  {i !== testimonials.length - 1 && (
                    <span className="text-gray-300">/</span>
                  )}
                </span>
              ))}
            </span>

            <button
              onClick={next}
              className="cursor-pointer p-2 hover:opacity-75 transition-opacity"
              aria-label="Next testimonial"
            >
              <FeatherIcon icon="arrow-right" iconWidth={18} iconHeight={18} />
            </button>
          </div>
        </div>
      </div>
      {/* SVG ClipPath definition to draw the perfect rounded trapezoid card */}
      <svg
        className="absolute w-0 h-0 pointer-events-none"
        width="0"
        height="0"
      >
        <defs>
          <clipPath id="rounded-trapezoid" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.1 C 0,0.04 0.05,0.01 0.15,0.02 L 0.85,0.12 C 0.95,0.13 1,0.16 1,0.22 L 1,0.88 C 1,0.94 0.95,0.97 0.85,0.98 L 0.15,0.88 C 0.05,0.87 0,0.84 0,0.78 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default Testimonials;
