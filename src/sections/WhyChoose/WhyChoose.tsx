import { whyChooseData as reasons } from "../../data/whyChoose";
import FadeIn from "../../components/common/FadeIn";

const WhyChoose = () => {
  return (
    <section className="bg-[#EFEFEF] laptop:bg-white py-12 laptop:py-20 relative overflow-hidden">
      <FadeIn className="max-w-[1600px] mx-auto px-6 xs-sm:px-8 md-lg:px-12 relative isolate">
        {/* Gray background box that ends halfway through the cards (bottom aligns with bottom of card images) */}
        <div className="absolute top-0 left-6 right-6 xs-sm:left-8 xs-sm:right-8 md-lg:left-12 md-lg:right-12 h-[300px] laptop:h-[540px] bg-[#EFEFEF] border border-gray-200 rounded-t-md -z-10 hidden laptop:block" />

        <h2 className="text-3xl md:text-[64px] font-inter-600 uppercase text-title-black text-center pt-8 laptop:pt-16 mb-12 laptop:mb-16">
          Why Choose Concept PR?
        </h2>

        <div className="flex flex-col laptop:flex-row items-start gap-8 laptop:gap-6 px-0 laptop:px-[63px]">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className={`relative flex flex-col justify-between w-full laptop:w-1/3 h-auto min-h-[420px] laptop:h-[562px] rounded-2xl p-6 md:p-8 text-white ${reason.bg} ${
                reason.offsetY ? "laptop:mt-10" : ""
              }`}
            >
              <div className="flex items-start justify-between pb-8 laptop:pb-0">
                <span className="text-6xl md:text-[96px] font-inter-600 text-[#F6F6F6] leading-none">
                  {reason.number}
                </span>

                <img
                  src={reason.image}
                  alt={reason.title.join(" ")}
                  className="h-24 w-24 md:w-[147px] md:h-[147px] object-cover shrink-0"
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg md:text-[24px] font-inter-600 uppercase leading-tight">
                  {reason.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="text-sm md:text-[20px] font-inter-400 text-white leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default WhyChoose;
