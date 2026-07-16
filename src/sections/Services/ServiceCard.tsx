// ServiceCard.tsx
import FeatherIcon from "../../components/common/FeatherIcon";

type ServiceCardProps = {
  image: string;
  title: string[];
  description: string;
  isActive: boolean;
  index: number;
  onClick: () => void;
};

const ServiceCard = ({
  image,
  title,
  description,
  isActive,
  index,
  onClick,
}: ServiceCardProps) => {
  const heightClasses = [
    "h-[300px] xs-sm:h-[380px] md:h-[460px] laptop:h-[763px]",
    "h-[260px] xs-sm:h-[330px] md:h-[400px] laptop:h-[671px]",
    "h-[220px] xs-sm:h-[280px] md:h-[340px] laptop:h-[580px]",
  ];
  const cardHeight = heightClasses[index] || heightClasses[0];

  return (
    <div
      onClick={onClick}
      className={`relative shrink-0 snap-start cursor-pointer overflow-hidden transition-all duration-500 ease-in-out rounded-3xl ${cardHeight} ${
        isActive
          ? "w-[85%] xs-sm:w-[420px] laptop:w-[440px]"
          : "w-[45%] xs-sm:w-[220px] laptop:w-[260px]"
      }`}
    >
      <img
        src={image}
        alt={title.join(" ")}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col gap-2 bg-white/15 backdrop-blur-md border-t border-white/10">
        <h3 className="text-white font-bold leading-tight text-2xl md:text-3xl">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        {isActive && (
          <div className="flex items-end justify-between gap-4">
            <p className="text-white/85 text-xs md:text-sm leading-relaxed max-w-[80%]">
              {description}
            </p>

            <button
              aria-label="Learn more"
              onClick={(e) => e.stopPropagation()}
              className="h-11 w-11 shrink-0 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors cursor-pointer shadow-md"
            >
              <FeatherIcon
                icon="arrow-right"
                iconWidth={18}
                iconHeight={18}
                fIconColor="#111827"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
