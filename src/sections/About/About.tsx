import { useState } from "react";
import FeatherIcon from "../../components/common/FeatherIcon";
import FadeIn from "../../components/common/FadeIn";
import promoteImg from "../../assets/images/about/about-1.svg";
import { statisticsData as stats } from "../../data/statistics";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const introText =
    "Orange PR is Dubai's leading communication company, specializing in cultural, lifestyle, fashion and art. Our agency was founded on a culture of smart strategic thinking, creativity, and innovation that delivers successful solutions to our local, national, and international customer base.";
  const remainingText =
    "Our ability to create and execute dynamic, forward-thinking PR campaigns quickly, while maintaining quality, increasing visibility, and achieving the targeted objectives or aims, is the key to our success. By offering a full turn-key solution, companies partner with us because of our unique approach, which allows us to build a solid connection with you and your brand. Therefore plan, execute, and evaluate effective cross-media and cross-cultural campaigns.";

  return (
    <section id="about" className="bg-white">
      <FadeIn>
        <div className="flex flex-col max-w-[1536px] mx-auto px-6 xs-sm:px-8 md-lg:px-12 pt-12 md:pt-20 pb-8 md:pb-16 gap-12 md:gap-16">
        {/* Heading */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end w-full">
          <div className="laptop:w-1/3 z-10">
            <h2 className="text-4xl xs:text-[48px] sm:text-[56px] md:text-[64px] font-inter-600 text-title-black leading-none tracking-tight">
              Think. Create.
              <br />
              <span>Promote.</span>
            </h2>
          </div>
          <div className="hidden md:block absolute right-[-750px] -bottom-10 select-none pointer-events-none z-0">
            <span className="font-inter-900 text-[100px] lg:text-[320px] text-[#F1F1F161] tracking-widest leading-none select-none">
              ORANGE
            </span>
          </div>
        </div>

        {/* Image + copy */}
        <div className="flex flex-col md-lg:flex-row gap-8 lg:gap-12 items-start w-full max-w-[1250px] mx-auto">
          <div className="w-full md-lg:w-[380px] xl:w-[379px] shrink-0 overflow-hidden shadow-card group">
            <img
              src={promoteImg}
              alt="Orange PR team member"
              className="w-full h-[320px] sm:h-[468px] md-lg:h-[468px] object-cover transition-transform duration-500 group-hover:scale-103"
            />
          </div>

          <div className="flex flex-col justify-between self-stretch gap-6">
            <div className="flex flex-col gap-6">
              <p
                className={`text-gray-700 text-base sm:text-lg md-lg:text-xl lg:text-[22px] leading-relaxed md-lg:leading-[1.65] font-inter-400 ${
                  isExpanded
                    ? "line-clamp-none"
                    : "line-clamp-6 md-lg:line-clamp-9"
                }`}
              >
                {introText} {remainingText}
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="self-start px-6 py-4 md:px-16 md:py-8 rounded-[5px] text-sm md:text-base bg-black text-white font-inter-600 tracking-wider hover:bg-primary transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm active:scale-95 whitespace-nowrap"
            >
              <span>{isExpanded ? "READ LESS" : "READ MORE"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md-lg:grid-cols-4 border-t border-l border-gray-100 max-w-[1536px] mx-auto mt-10 md:mt-24">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 lg:gap-4 px-4 md-lg:px-6 xl:px-8 py-8 border-r border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-300"
          >
            <span className="flex h-[74px] w-[74px] items-center justify-center bg-[#DEE4E6] rounded-md shrink-0 text-primary">
              <FeatherIcon
                icon={stat.icon}
                fIconColor="#ff6b00"
                iconWidth={48}
                iconHeight={48}
              />
            </span>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-2xl text-blue-gray font-inter-400 leading-tight">
                {stat.label}
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-inter-500 text-black leading-none mt-1">
                {stat.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      </FadeIn>
    </section>
  );
};

export default About;
