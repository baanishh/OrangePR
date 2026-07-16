import React, { useState } from "react";
import Input from "../../components/common/Input";
import FadeIn from "../../components/common/FadeIn";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-black py-12 md:pt-20 md:pb-10 border-b border-[#474747] text-white">
      <FadeIn className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-[36px] md:text-[64px] font-inter-600 uppercase tracking-wide mb-4 leading-tight">
            Newsletter
          </h2>
          <p className="text-white text-sm md:text-base font-inter-400 leading-relaxed max-w-[590px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Right Input Form */}
        <form onSubmit={handleSubscribe} className="w-full lg:max-w-[500px]">
          <div className="relative w-full">
            <Input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent! text-white! border-[#474747]! focus:border-white/40! focus:ring-0! pr-14 placeholder:text-white!"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white hover:opacity-80 transition-opacity flex items-center justify-center p-2"
              aria-label="Subscribe to newsletter"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.152 15.058a1.334 1.334 0 0 1 0 1.885l-7.543 7.542a1.33 1.33 0 0 1-1.902.017 1.336 1.336 0 0 1 .017-1.902l5.267-5.267H5.333a1.333 1.333 0 1 1 0-2.666h17.658L17.724 9.4a1.333 1.333 0 0 1 1.885-1.885z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
      </FadeIn>
    </section>
  );
};

export default NewsLetter;
