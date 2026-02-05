"use client";

import Link from "next/link";
import Button from "../ui/Button";
import CircularText from "../ui/CircularText/CircularText";

const HeroSection = () => {
  return (
    <div id="cta" className="relative overflow-hidden scroll-mt-24">
      <div>
        <img
          src="/assets/images/bg.png"
          alt=""
          className="hidden dark:block blur-3xl w-full max-w-[1600px] h-full absolute top-0 left-1/2 -translate-x-1/2"
        />
        <img
          src="/assets/icons/A.png"
          alt=""
          className="w-[280px] sm:w-[360px] md:w-[460px] absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-5"
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center py-16 sm:py-20 md:py-28 max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto md:mx-0">
            {/* Top text */}
            <div className="mb-16 sm:mb-20 md:mb-28">
              <span className="text-zinc-900 dark:text-white text-base sm:text-lg font-normal">
                Ready to
              </span>
              <span className="text-[#0047ff] dark:text-[#c5f011] text-base sm:text-lg font-normal ml-2">
                elevate
              </span>
              <br />
              <span className="text-[#0047ff] dark:text-[#c5f011] text-base sm:text-lg font-normal">
                your brand?
              </span>
            </div>

            {/* Main heading */}
            <div className="mb-6 sm:mb-8">
              <p className="text-zinc-900 dark:text-white text-3xl sm:text-4xl md:text-5xl italic font-normal -mb-1 sm:-mb-2">
                Let&apos;s start
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-zinc-900 dark:text-white leading-tight">
                <span className="font-bold mr-2 sm:mr-3">Your</span>
                <span className="italic font-display font-normal text-[#0047ff] dark:text-[#c5f011]">Project</span>
              </h1>
            </div>

            {/* CTA Button */}
            <Link href="https://pgraqmyxdqr.typeform.com/to/PBkWGxPz#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx">
              <Button>Start Now</Button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex absolute bottom-16 md:bottom-24 lg:bottom-32 right-4 md:right-6 lg:right-8 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[175px] md:h-[175px] bg-zinc-200/80 dark:bg-white/10 border border-zinc-300 dark:border-white/20 rounded-full items-center justify-center">
          <CircularText
            text="AWARD WINNING AGENCY - SINCE 2020 - "
            onHover="speedUp"
            spinDuration={20}
            size="small"
            className="!text-black dark:!text-white"
          />
          <img
            src="/assets/icons/Union.png"
            alt=""
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
