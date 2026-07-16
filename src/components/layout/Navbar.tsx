import { useState } from "react";
import FeatherIcon from "../common/FeatherIcon";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function Navbar() {
  const navLinks = ["HOME", "PR SERVICES", "ABOUT US", "CONTACT"];
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1536px] mx-auto px-4 xs:px-6 xs-sm:px-8 md-lg:px-12 pt-6 md:pt-10 flex items-center justify-between relative">
        <span className="font-inter-900 text-[28px] xs:text-[38px] md:text-[58px] text-white tracking-wide select-none whitespace-nowrap">
          ORANGE PR
        </span>

        <div className="flex items-center gap-[38px]">
          <div className="hidden min-[980px]:flex items-center gap-[30px]">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-base font-inter-600 text-white hover:text-white/80 transition-colors uppercase tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-[50px] w-[50px] items-center justify-center rounded-sm border border-white text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <FeatherIcon
              icon={isOpen && width && width < 980 ? "x" : "menu-dots"}
              iconWidth={24}
              iconHeight={24}
            />
          </button>
        </div>

        {/* Mobile menu dropdown list */}
        {isOpen && (
          <div className="min-[980px]:hidden absolute top-full left-4 right-4 xs:left-6 xs:right-6 mt-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[12px] flex flex-col gap-4 shadow-2xl z-50 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-lg font-inter-600 text-white hover:text-white/80 transition-colors uppercase tracking-wider block py-2 border-b border-white/10 last:border-b-0"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
