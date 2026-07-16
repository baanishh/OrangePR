import { useState, useRef, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import FadeIn from "../../components/common/FadeIn";
import { servicesData as services } from "../../data/services";

const Services = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (index: number) => {
    setActive(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (container) {
        const card = container.children[active] as HTMLElement;
        if (card) {
          container.scrollTo({
            left: card.offsetLeft,
            behavior: "smooth",
          });
        }
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section id="services" className="bg-white py-12 md:py-20">
      <FadeIn className="flex flex-col laptop:flex-row max-w-[1536px] mx-auto px-6 xs-sm:px-8 md-lg:px-12 gap-10 laptop:gap-6">
        {/* Left copy */}
        <div className="laptop:w-1/3 shrink-0 flex flex-col gap-10 justify-end">
          <h2 className="text-4xl md:text-[64px] font-inter-600 uppercase leading-tight text-title-black">
            What We Do
            <br />
            Experts
          </h2>

          <p className="mt-4 font-inter-500 text-lg md:text-[36px] text-blue-gray">
            We build brands.
          </p>

          <p className="mt-6 font-inter-400 text-black leading-relaxed max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <div className="mt-8 flex items-end justify-between gap-4 w-full">
            <a
              href="#contact"
              className="px-6 py-4 md:px-16 md:py-8 rounded-[5px] text-sm md:text-base bg-black text-white font-inter-600 tracking-wider hover:bg-primary transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm active:scale-95 whitespace-nowrap"
            >
              READ MORE
            </a>

            <div className="flex items-end gap-1 text-sm font-inter-600 pb-2">
              {services.map((_, i) => (
                <span key={i} className="flex items-center gap-1">
                  <button
                    onClick={() => handleSelect(i)}
                    className={`font-inter-400 transition-colors duration-300 ${
                      i === active
                        ? "text-black font-inter-600"
                        : "text-blue-gray hover:text-gray-600"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                  {i !== services.length - 1 && (
                    <span className="text-blue-gray">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={containerRef}
          className="relative flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory laptop:flex-1 pb-2 laptop:pb-0 scrollbar-hide items-start"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title.join(" ")}
              image={service.image}
              title={service.title}
              description={service.description}
              isActive={i === active}
              index={i}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Services;
