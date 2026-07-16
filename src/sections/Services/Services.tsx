import { useState, useRef, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import mediaImg from "../../assets/images/services/service-img-1.svg";
import influencerImg from "../../assets/images/services/service-img-2.svg";
import eventsImg from "../../assets/images/services/service-img-3.svg";

type Service = {
  title: string[];
  description: string;
  image: string;
};

const services: Service[] = [
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
    <section className="bg-white py-12 md:py-20">
      <div className="flex flex-col laptop:flex-row max-w-[1536px] mx-auto px-6 xs-sm:px-8 md-lg:px-12 gap-10 laptop:gap-6">
        {/* Left copy */}
        <div className="laptop:w-1/3 shrink-0 flex flex-col justify-center">
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
            <button className="px-16 py-8 rounded-[5px] text-base bg-black text-white font-inter-600 tracking-wider hover:bg-primary transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm active:scale-95">
              READ MORE
            </button>

            <div className="flex items-center gap-1 text-sm font-inter-600 pb-2">
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
      </div>
    </section>
  );
};

export default Services;
