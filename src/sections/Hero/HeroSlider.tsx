import { useState, useEffect } from "react";
import FeatherIcon from "../../components/common/FeatherIcon";
import heroBg1 from "../../assets/images/hero/hero-bg-1.svg";
import heroBg2 from "../../assets/images/hero/hero-bg-2.png";
import heroBg3 from "../../assets/images/hero/hero-bg-3.jpeg";
import heroLadyBg from "../../assets/images/hero/hero-lady.svg";
import thumbnail from "../../assets/images/hero/thumbnail-1.png";

type Slide = {
  title: string[];
  description: string;
  backgroundImage: string;
  heroImage: string;
  videoThumbnail: string;
};

const slides: Slide[] = [
  {
    title: ["FRESH", "JUICY", "BRIGHT"],
    description:
      "Streamlining Media Relations for Brands. Orange PR manages media relations, freeing clients to focus on daily operations, while ensuring campaign initiatives are constantly monitored and updated for success.",
    backgroundImage: heroBg1,
    heroImage: heroLadyBg,
    videoThumbnail: thumbnail,
  },
  {
    title: ["STRATEGY", "INNOVATE", "GROW"],
    description:
      "Empowering Brands with Bold Narratives. We create tailored PR strategies that elevate your brand voice, secure premium media coverage, and build authentic connections with your target audience.",
    backgroundImage: heroBg2,
    heroImage: heroLadyBg,
    videoThumbnail: thumbnail,
  },
  {
    title: ["IMPACT", "VISIBLE", "STRONG"],
    description:
      "Designing Memorable Campaigns for Maximum Reach. Our creative campaigns drive conversation, boost visibility, and ensure your brand makes a lasting impression in the media landscape.",
    backgroundImage: heroBg3,
    heroImage: heroLadyBg,
    videoThumbnail: thumbnail,
  },
];

const titleStyles = [
  "text-3xl xs:text-4xl xs-sm:text-6xl md:text-8xl laptop:text-[128px] font-inter-300 font-light",
  "text-3xl xs:text-4xl xs-sm:text-6xl md:text-8xl laptop:text-[128px] font-inter-600 font-medium laptop:-mt-6 laptop:-ml-10 md:-mt-3 md:-ml-4 -mt-1.5 -ml-0",
  "text-4xl xs:text-5xl xs-sm:text-7xl md:text-9xl laptop:text-[128px] font-inter-900 font-black laptop:-mt-4 md:-mt-2 -mt-1",
];

// Add cloned slides at the start and end for infinite loop
const extendedSlides = [
  slides[slides.length - 1], // Clone of last slide at the beginning
  ...slides,
  slides[0], // Clone of first slide at the end
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at real first slide (index 1)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMoving, setIsMoving] = useState(false); // Lock navigation during movement/transition

  // Helper to get active slide dot index (0, 1, 2)
  const activeDot = (() => {
    if (currentIndex <= 0) return slides.length - 1;
    if (currentIndex >= extendedSlides.length - 1) return 0;
    return currentIndex - 1;
  })();

  const next = () => {
    if (isMoving) return;
    setIsMoving(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (isMoving) return;
    setIsMoving(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDotClick = (i: number) => {
    if (isMoving) return;
    setIsMoving(true);
    setCurrentIndex(i + 1);
  };

  // Autoplay functionality (6 seconds delay, resets on manual interaction)
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isMoving]);

  // Handle seamless loop jumps at the end of the sliding transition
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // Verify transition completed on the track container itself and is transform
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "transform") return;

    if (currentIndex >= extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
    } else {
      setIsMoving(false); // Clear the lock if we didn't hit a boundary slide
    }
  };

  // Turn transition back on after jump reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setIsMoving(false); // Unlock navigation after the jump has completed
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Self-Healing safety net (automatically recovers from any out-of-bounds state)
  useEffect(() => {
    if (currentIndex >= extendedSlides.length) {
      setCurrentIndex(1);
      setIsMoving(false);
    } else if (currentIndex < 0) {
      setCurrentIndex(slides.length);
      setIsMoving(false);
    }
  }, [currentIndex]);

  // Touch Swipe Gesture Detection
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    if (isMoving) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isMoving) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || isMoving) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  return (
    <section
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative min-h-[480px] xs:min-h-[560px] md:min-h-[700px] laptop:h-[860px] overflow-hidden flex flex-col justify-between text-white select-none"
    >
      {/* Sliding Track for Pages (Background + Contents) */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className="absolute top-0 bottom-0 left-0 h-full flex"
        style={{
          transform: `translateX(-${(currentIndex * 100) / extendedSlides.length}%)`,
          width: `${extendedSlides.length * 100}%`,
          transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
        }}
      >
        {extendedSlides.map((s, idx) => {
          // Determine if this slide is active
          const isActive =
            idx === currentIndex ||
            (currentIndex === 0 && idx === slides.length) ||
            (currentIndex === extendedSlides.length - 1 && idx === 1);

          return (
            <div
              key={idx}
              className="h-full shrink-0 relative flex flex-col justify-between"
              style={{
                backgroundImage: `url(${s.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: `${100 / extendedSlides.length}%`,
              }}
            >
              {/* Main wrapper inside each slide */}
              <div className="relative w-full max-w-[1536px] mx-auto px-4 xs:px-6 xs-sm:px-8 md-lg:px-12 pt-[100px] xs:pt-[120px] md:pt-[180px] pb-[60px] xs:pb-[80px] flex-1 flex flex-col justify-center z-10 h-full">
                <div className="grid grid-cols-1 laptop:grid-cols-2 items-center gap-8">
                  {/* Text column with parallax fade + slide animation */}
                  <div
                    className={`w-full laptop:pl-14 pl-0 text-center laptop:text-left relative z-20 transition-all duration-1000 delay-200 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <p className="uppercase leading-none text-white">
                      {s.title.map((line, i) => (
                        <span key={line} className={`block ${titleStyles[i]}`}>
                          {line}
                        </span>
                      ))}
                    </p>

                    <p className="font-inter-400 mt-4 xs:mt-6 max-w-[468px] mx-auto laptop:mx-0 text-sm xs:text-base text-white">
                      {s.description}
                    </p>

                    <button className="font-inter-600 mt-4 xs:mt-6 md:mt-10 h-[48px] xs:h-[58px] w-[150px] xs:w-[189px] rounded-[5px] py-3 bg-white text-gray-900 text-sm xs:text-base tracking-wide hover:bg-gray-100 transition-colors mx-auto laptop:mx-0 block laptop:inline-block cursor-pointer">
                      EXPLORE
                    </button>
                  </div>
                </div>

                {/* Hero lady image with parallax fade + scale animation */}
                <div className="absolute inset-0 z-10 hidden md-lg:block pointer-events-none overflow-hidden">
                  <img
                    src={s.heroImage}
                    alt=""
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[98%] max-w-none object-contain transition-all duration-1000 delay-300 ${
                      isActive
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4"
                    }`}
                  />
                </div>

                {/* Video card on each slide with parallax fade + slide animation */}
                <div
                  className={`absolute right-4 sm:right-8 md-lg:right-12 bottom-[148px] w-[340px] xl:w-[425px] hidden laptop:block z-20 transition-all duration-1000 delay-150 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="relative p-2 w-full rounded-md overflow-hidden border-2 border-white/50 shadow-lg bg-white/40 backdrop-blur-[10px] aspect-4/3">
                    <img
                      src={s.videoThumbnail}
                      alt=""
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      aria-label="Play video"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="flex h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] items-center justify-center rounded-full bg-white/60 backdrop-blur-[20px]">
                        <FeatherIcon
                          icon="play"
                          iconFillColor="#ffffff"
                          iconWidth={20}
                          iconHeight={20}
                          className="ml-0.5"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom white fade (Fixed static overlay) */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-white/70 pointer-events-none z-10" />

      {/* Desktop Controls (Fixed static overlay) */}
      <div className="absolute right-4 sm:right-8 md-lg:right-12 bottom-12 w-[340px] xl:w-[425px] hidden laptop:flex justify-end z-20">
        <div className="flex items-center gap-4 rounded-full px-6 py-2 border border-white bg-transparent">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="text-white hover:text-white/80 transition-colors flex items-center cursor-pointer"
          >
            <FeatherIcon
              icon="arrow-left"
              iconWidth={24}
              iconHeight={24}
              fIconColor="white"
            />
          </button>

          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="flex items-center justify-center w-8 h-8 cursor-pointer"
              >
                {i === activeDot ? (
                  <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white">
                    <span className="w-2.5 h-2.5 bg-white rounded-full" />
                  </span>
                ) : (
                  <span className="w-2.5 h-2.5 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next slide"
            className="text-white hover:text-white/80 transition-colors flex items-center cursor-pointer"
          >
            <FeatherIcon
              icon="arrow-right"
              iconWidth={24}
              iconHeight={24}
              fIconColor="white"
            />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Controls Fallback (Fixed static overlay) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full px-5 py-2 border border-white z-20 bg-black/20 backdrop-blur-sm laptop:hidden">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="text-white hover:text-white/80 transition-colors flex items-center cursor-pointer"
        >
          <FeatherIcon
            icon="arrow-left"
            iconWidth={18}
            iconHeight={18}
            fIconColor="white"
          />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="flex items-center justify-center w-6 h-6 cursor-pointer"
            >
              {i === activeDot ? (
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                </span>
              ) : (
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className="text-white hover:text-white/80 transition-colors flex items-center cursor-pointer"
        >
          <FeatherIcon
            icon="arrow-right"
            iconWidth={18}
            iconHeight={18}
            fIconColor="white"
          />
        </button>
      </div>
    </section>
  );
}
