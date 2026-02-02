"use client";

import Link from "next/link";
import Button from "../ui/Button";
import {
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import CountUp from "../ui/CountUp/CountUp";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#010208] flex items-center overflow-hidden lg:h-[1100px] md:h-[1400px] sm:h-[1200px] h-[1300px] -mt-[80px] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full absolute inset-0 z-10 pb-16 sm:pb-16 pt-20 sm:pt-24 lg:pt-28 flex justify-center flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-16 lg:mb-22">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight font-inter">
                <span className="block">Only Pay </span>
                <span className="inline mr-3 sm:mr-5">When you </span>
                <p>
                  <span className="inline mr-3 sm:mr-5"> Convert</span>
                  <span className="inline text-3xl sm:text-4xl md:text-6xl italic font-normal text-white font-display">
                    more
                  </span>
                </p>
              </h1>
            </div>

            {/* Social Proof */}
            <div className="space-y-4 pt-6 sm:pt-8">
              <p className="text-white text-base sm:text-lg py-1 font-inter">
                5.0 Average Rating on{" "}
                <span
                  onClick={() =>
                    window.open(
                      "https://share.google/xmAmcluAfW3LjMMMn",
                      "_blank"
                    )
                  }
                  className="underline cursor-pointer"
                >
                  Google
                </span>
              </p>
              <div className="  mb-7 sm:mb-10 lg:mb-20"></div>
              {/* Social Icons */}
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://www.linkedin.com/company/artbeak"
                  className="w-10 h-10 border border-white rounded-full flex items-center justify-center bg-white cursor-pointer"
                >
                  <IconBrandLinkedin className="w-6 h-6 text-black" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="w-10 h-10 border border-white rounded-full flex items-center justify-center bg-white cursor-pointer"
                >
                  <IconBrandInstagram className="w-6 h-6 text-black" />
                </a>
                <a
                  href="https://www.behance.net/artbeak"
                  className="w-10 h-10 border border-white rounded-full flex items-center justify-center bg-white cursor-pointer"
                >
                  <IconBrandDribbble className="w-6 h-6 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Description, CTA & Stats */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-50 max-w-xl leading-relaxed font-inter">
                A US Wyoming company based in Cairo, we are performance based,
                risk-free website re-design agency that focus on turning normal
                websites into conversion machines.
              </p>

              {/* CTA Button */}
              <div className="pt-6 sm:pt-8">
                <div>
                  <Link href="https://pgraqmyxdqr.typeform.com/to/PBkWGxPz#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx">
                    <Button>Start Now</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-600 mt-10 md:mt-20 lg:mt-28"></div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 ">
              <div className="text-left">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#C5F010] mb-2 font-inter">
                  {/* 95% */}
                  <CountUp
                    from={0}
                    to={95}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text"
                  />
                  %
                </div>
                <div className="text-white text-xs sm:text-sm leading-tight font-inter">
                  CLIENTS SATISFIED AND <br /> REPEATING
                </div>
              </div>
              <div className="text-left">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#C5F010] mb-2 font-inter">
                  <CountUp
                    from={0}
                    to={47}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text"
                  />
                  +
                </div>
                <div className="text-white text-xs sm:text-sm leading-tight font-inter">
                  PROJECTS COMPLETED IN <br /> 6 COUNTRIES
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Guarantees & Founders */}
        <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-8">
          {/* Guarantees */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-white text-xl sm:text-2xl lg:text-3xl font-medium font-inter">
              <span>Refund Guaranteed</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>100% Risk Free</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Flexible Pricing</span>
            </div>
          </div>

          {/* Founders Section */}
          <div className="space-y-16">
            <div className="h-px bg-[#dddddd]"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-14 sm:space-y-0">
              <div className="flex -space-x-2 sm:-space-x-3 ">
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] bg-gray-600 rounded-full border-4 border-white relative">
                  <Image
                    src={"/assets/images/founder1.png"}
                    alt="founder"
                    width={100}
                    height={100}
                    className="object-cover rounded-full w-full h-full overflow-hidden"
                  />
                  <p className="text-white text-[10px] sm:text-xs uppercase tracking-wider absolute -bottom-10 sm:-bottom-12 left-0 whitespace-nowrap font-inter">
                    FOUNDERS OF <br /> ARTBEAK
                  </p>
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] bg-gray-600 rounded-full border-4 border-white">
                  <Image
                    src={"/assets/images/founder2.png"}
                    alt="founder"
                    width={100}
                    height={100}
                    className="object-cover rounded-full w-full h-full overflow-hidden"
                  />
                </div>
              </div>
              <div className="flex-1 sm:ml-10 lg:ml-80">
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-inter">
                  We help business redesign their normal websites and turn them
                  into conversion machines risk free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1480px] mx-auto relative h-full w-full">
        <div className="absolute inset-0 -right-96">
          <img
            src="/header-shape.svg"
            alt=""
            className="blur-3xl opacity-70 h-[90%] w-full"
          />
        </div>
      </div>
      {/* <DarkVeil hueShift={24} /> */}
    </section>
  );
};

export default Hero;
