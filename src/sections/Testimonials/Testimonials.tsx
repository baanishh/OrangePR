import { useState, useEffect } from "react";
import FeatherIcon from "../../components/common/FeatherIcon";
import {
  testimonialsData as testimonials,
  testimonialColumns as columns,
} from "../../data/testimonials";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 10000);
    return () => clearInterval(timer);
  }, [active]);

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

        <div className="relative w-full overflow-hidden mt-16">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(active * 100) / testimonials.length}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-full shrink-0 flex flex-col items-center gap-6"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover"
                />

                <div className="h-[260px] xs:h-[220px] sm:h-[180px] md:h-[160px] overflow-hidden flex items-center justify-center">
                  <p className="text-black text-lg md:text-[24px] font-inter-400 line-clamp-6">
                    {t.quote}
                  </p>
                </div>

                <div>
                  <p className="font-inter-600 text-[24px] text-black">
                    {t.name}
                  </p>
                  <p className="text-base font-inter-400 text-black">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm mt-8">
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
