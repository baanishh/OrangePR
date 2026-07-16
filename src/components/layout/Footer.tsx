const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-16 md:pt-20 border-t border-zinc-900">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-[36px] md:text-[58px] font-inter-900 tracking-wide text-white uppercase leading-none">
              ORANGE PR
            </h2>
            <p className="text-white text-base font-inter-400 leading-relaxed max-w-[612px]">
              Orange PR is Dubai's leading communication company, specializing
              in cultural, lifestyle, fashion and art. Our agency was founded on
              a culture of smart strategic thinking, creativity, and innovation
              that delivers successful solutions to our local, national, and
              international customer base. Our ability to create and execute
              dynamic, forward-thinking PR campaigns quickly, while maintaining
              quality, increasing visibility, and achieving the targeted
              objectives or aims, is the key to our success.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-[18px] font-inter-700 uppercase tracking-widest text-white">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-4 font-inter-400">
              <li className="text-white">
                <a
                  href="#home"
                  className="hover:text-white transition-colors text-base  tracking-wider uppercase"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors text-base tracking-wider uppercase"
                >
                  PR SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors text-base tracking-wider uppercase"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors text-base tracking-wider uppercase"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-[18px] font-inter-700 uppercase tracking-widest text-white">
              CONTACT INFO
            </h3>
            <ul className="flex flex-col gap-6">
              {/* Address */}
              <li className="flex items-start gap-4 text-white text-[14px] font-medium leading-relaxed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 1 1 16 0Z"
                    stroke="#fff"
                    stroke-width="2"
                  />
                  <path
                    d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    stroke="#fff"
                    stroke-width="2"
                  />
                </svg>
                <span>
                  FD - First Floor
                  <br />
                  Incubator Building
                  <br />
                  Masdar City, Abu Dhabi
                  <br />
                  United Arab Emirates
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-4 text-white text-base font-inter-400">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8 1.6A2.4 2.4 0 0 1 19.2 4v16a2.4 2.4 0 0 1-2.4 2.4H7.2A2.4 2.4 0 0 1 4.8 20V4a2.4 2.4 0 0 1 2.4-2.4zM7.2 3.2a.8.8 0 0 0-.8.8v16a.8.8 0 0 0 .8.8h9.6a.8.8 0 0 0 .8-.8V4a.8.8 0 0 0-.8-.8zm7.312 15.451a.56.56 0 0 1 0 1.098l-.112.011H9.6a.56.56 0 0 1 0-1.12h4.8z"
                    fill="#fff"
                  />
                </svg>
                <span>+971 58 58 7 3195</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-4 text-white text-base font-inter-400">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.182 3.5H6.68201C4.47287 3.5 2.68201 5.29086 2.68201 7.5V16.5C2.68201 18.7091 4.47287 20.5 6.68201 20.5H17.182C19.3911 20.5 21.182 18.7091 21.182 16.5V7.5C21.182 5.29086 19.3911 3.5 17.182 3.5Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M2.729 7.58984L9.934 11.7198C10.5378 12.0702 11.2234 12.2547 11.9215 12.2547C12.6196 12.2547 13.3052 12.0702 13.909 11.7198L21.134 7.58984"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>maria@orangepragency.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-width edge-to-edge separator line */}
      <div className="border-t border-[#474747] w-full mt-16" />

      {/* Bottom Copyright & Socials */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white text-[16px] font-inter-400 text-center md:text-left leading-normal">
          © 2025 Orange PR Agency. | Design & Development by : MightyWarners
          Technologies
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712M14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1z"
                fill="#fff"
              />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.022 3.343c.508-.087 1.077-.116 1.613-.025a4.85 4.85 0 0 1 2.54 1.273c.456.01.905-.08 1.302-.208a5.4 5.4 0 0 0 1.098-.501l.009-.006a.75.75 0 0 1 1.042 1.037c-.207.315-.496.877-.819 1.507l-.155.301c-.185.36-.375.724-.552 1.036-.111.196-.23.395-.35.567v.274A12.34 12.34 0 0 1 8.287 21.03a12.3 12.3 0 0 1-6.694-1.97.75.75 0 0 1 .5-1.375q.45.055.905.055a7.5 7.5 0 0 0 3.128-.696 4.86 4.86 0 0 1-2.61-2.923.75.75 0 0 1 .147-.722l.01-.01A4.85 4.85 0 0 1 2.05 9.793V9.74a.75.75 0 0 1 .553-.724 4.9 4.9 0 0 1 .137-4.618.75.75 0 0 1 1.232-.1 10.9 10.9 0 0 0 7.006 3.93 4.85 4.85 0 0 1 2.562-4.406c.402-.214.934-.385 1.482-.479m-11.28 7.548a3.35 3.35 0 0 0 2.503 2.164.75.75 0 0 1 .072 1.453q-.409.124-.834.173a3.36 3.36 0 0 0 2.59 1.3.75.75 0 0 1 .45 1.339 9 9 0 0 1-3.548 1.695c1.07.343 2.189.517 3.313.515h.009A10.84 10.84 0 0 0 19.25 8.607v-.535a.75.75 0 0 1 .186-.495c.07-.079.19-.261.36-.56.16-.282.338-.622.523-.981l.033-.066a5 5 0 0 1-1.593.097.75.75 0 0 1-.47-.237 3.35 3.35 0 0 0-1.904-1.032 3.4 3.4 0 0 0-1.11.025 3.6 3.6 0 0 0-1.028.323 3.35 3.35 0 0 0-1.678 3.74.75.75 0 0 1-.767.925 12.4 12.4 0 0 1-8.149-3.627 3.4 3.4 0 0 0-.063.657v.002a3.34 3.34 0 0 0 1.486 2.785A.75.75 0 0 1 4.64 11a5 5 0 0 1-.897-.11"
                fill="#fff"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.8 7.8 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.3 6.3 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z"
                fill="#fff"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.34 5.46a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4m4.6 2.42a7.6 7.6 0 0 0-.46-2.43 4.9 4.9 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.8 4.8 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.8 4.8 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77c.285-.78.44-1.6.46-2.43 0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.2 3.2 0 0 1-1.15.75 5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3 3.3 3.3 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.1 3.1 0 0 1 .75 1.1c.222.609.337 1.252.34 1.9.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87m0 8.46a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66"
                fill="#fff"
              />
            </svg>
          </a>

          {/* Pinterest */}
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Pinterest"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.67 15.097c-.506 2.726-1.122 5.34-2.95 6.705-.563-4.12.829-7.215 1.475-10.5-1.102-1.91.133-5.755 2.457-4.808 2.86 1.166-2.477 7.102 1.106 7.844 3.741.774 5.269-6.683 2.949-9.109-3.352-3.5-9.757-.079-8.969 4.934.192 1.226 1.421 1.598.491 3.29-2.145-.49-2.785-2.233-2.702-4.556.132-3.8 3.317-6.462 6.511-6.83 4.04-.466 7.831 1.527 8.354 5.44.59 4.416-1.823 9.2-6.142 8.855-1.171-.093-1.663-.69-2.58-1.265"
                fill="#fff"
              />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.45 11.419c0-3.017.3-4.526 1.237-5.463s2.446-.937 5.463-.937h5.7c3.017 0 4.525 0 5.463.937s1.237 2.446 1.237 5.463v1.162c0 3.017-.3 4.526-1.237 5.463s-2.446.937-5.463.937h-5.7c-3.017 0-4.526 0-5.463-.937S2.45 15.598 2.45 12.581z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="m14.686 11.491-4.268-2.667a.6.6 0 0 0-.918.51v5.334a.6.6 0 0 0 .918.508l4.268-2.667a.6.6 0 0 0 0-1.018Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
