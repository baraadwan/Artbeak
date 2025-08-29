"use client";

import Button from "../ui/Button";
import CircularText from "../ui/CircularText/CircularText";

const HeroSection = () => {
  return (
    <div id="cta" className="relative overflow-hidden scroll-mt-24">
      <div>
        <img
          src="/assets/images/bg.png"
          alt=""
          className="blur-3xl w-full max-w-[1600px] h-full absolute top-0 left-1/2 -translate-x-1/2"
        />
        <img
          src="/assets/icons/A.png"
          alt=""
          className="w-[460px] absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-5 "
        />
      </div>
      <div className="relative z-10 flex items-center py-28 max-w-7xl mx-auto">
        <div className=" px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Top text */}
            <div className="mb-28">
              <span className="text-[#8b94b2] text-lg font-normal">
                Ready to
              </span>
              <span className="text-[#c5f011] text-lg font-normal ml-2">
                elevate
              </span>
              <br />
              <span className="text-[#c5f011] text-lg font-normal">
                your brand?
              </span>
            </div>

            {/* Main heading */}
            <div className="mb-8">
              <p className="text-[#828285] text-5xl italic font-normal -mb-2">
                Let&apos;s start
              </p>
              <h1 className="text-8xl font-normal text-white leading-tight">
                <span className="font-bold mr-3">Your</span>
                <span className=" italic font-display font-normal">
                  Project
                </span>
              </h1>
            </div>

            {/* CTA Button */}
            <Button onClick={() => {}}>Start Now</Button>
          </div>
        </div>
        <div className="absolute bottom-32 right-8 w-[175px] h-[175px] bg-white/10 border bg-opacity-50 rounded-full flex items-center justify-center">
          <CircularText
            text="AWARD WINNING AGENCY - SINCE 2020 - "
            onHover="speedUp"
            spinDuration={20}
            size="small"
          />
          <img
            src="/assets/icons/Union.png"
            alt=""
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
