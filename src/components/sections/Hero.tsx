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
      className="relative bg-zinc-100 dark:bg-[#010208] flex items-center overflow-hidden lg:h-[1100px] md:h-[1400px] sm:h-[1200px] h-[1300px] -mt-[80px] scroll-mt-24"
    >
      {/* Background — hidden in light mode */}
      <div className="absolute inset-0 z-0 hidden dark:block">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/80" aria-hidden />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full absolute inset-0 z-10 pb-16 sm:pb-16 pt-20 sm:pt-24 lg:pt-28 flex justify-center flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-16 lg:mb-22">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight font-inter">
                <span className="block">
                  Free website redesign — pay only if you{" "}
                  <span className="font-display italic font-normal">
                    love it.
                  </span>
                </span>
              </h1>
            </div>

            {/* Social Proof */}
            <div className="space-y-4 pt-6 sm:pt-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-zinc-100 dark:border-[#010208] overflow-hidden bg-zinc-200 dark:bg-zinc-700 flex-shrink-0">
                    <Image
                      src="/assets/clients/client-kevin-.jpeg"
                      alt=""
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-zinc-100 dark:border-[#010208] overflow-hidden bg-zinc-200 dark:bg-zinc-700 flex-shrink-0">
                    <Image
                      src="/assets/clients/client-param-singh.jpeg"
                      alt=""
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-zinc-800 dark:text-white text-base sm:text-lg py-1 font-inter">
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
              </div>
              <div className="  mb-7 sm:mb-10 lg:mb-20"></div>
              {/* Social Icons */}
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://www.linkedin.com/company/artbeak"
                  className="w-10 h-10 border border-zinc-800 dark:border-white rounded-full flex items-center justify-center bg-white dark:bg-white cursor-pointer"
                >
                  <IconBrandLinkedin className="w-6 h-6 text-black" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="w-10 h-10 border border-zinc-800 dark:border-white rounded-full flex items-center justify-center bg-white dark:bg-white cursor-pointer"
                >
                  <IconBrandInstagram className="w-6 h-6 text-black" />
                </a>
                <a
                  href="https://www.behance.net/artbeak"
                  className="w-10 h-10 border border-zinc-800 dark:border-white rounded-full flex items-center justify-center bg-white dark:bg-white cursor-pointer"
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
              <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-gray-50 max-w-xl leading-relaxed font-inter">
                We redesign your website at no upfront cost. You only pay if you
                love the result and it turns your site into a true conversion
                machine.
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
            <div className="h-px bg-zinc-400 dark:bg-gray-600 mt-10 md:mt-20 lg:mt-28"></div>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 ">
              <div className="text-left">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#0047ff] dark:text-[#C5F010] mb-2 font-inter">
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
                <div className="text-zinc-800 dark:text-white text-xs sm:text-sm leading-tight font-inter">
                  CLIENTS SATISFIED
                </div>
              </div>
              <div className="text-left">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#0047ff] dark:text-[#C5F010] mb-2 font-inter">
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
                <div className="text-zinc-800 dark:text-white text-xs sm:text-sm leading-tight font-inter">
                  PROJECTS COMPLETED
                </div>
              </div>
              <div className="text-left">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#0047ff] dark:text-[#C5F010] mb-2 font-inter">
                  <CountUp
                    from={0}
                    to={40}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text"
                  />
                  %
                </div>
                <div className="text-zinc-800 dark:text-white text-xs sm:text-sm leading-tight font-inter">
                  AVG. CONVERSION LIFT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Guarantees & Founders */}
        <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-8">
          {/* Guarantees */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-zinc-800 dark:text-white text-xl sm:text-2xl lg:text-3xl font-medium font-inter">
              <span>Refund Guaranteed</span>
              <div className="w-2 h-2 bg-zinc-600 dark:bg-white rounded-full"></div>
              <span>100% Risk Free</span>
              <div className="w-2 h-2 bg-zinc-600 dark:bg-white rounded-full"></div>
              <span>Flexible Pricing</span>
            </div>
          </div>

          {/* Founders Section */}
          <div className="space-y-16">
            <div className="h-px bg-zinc-300 dark:bg-[#dddddd]"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-14 sm:space-y-0">
              <div className="flex -space-x-2 sm:-space-x-3 ">
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] bg-zinc-400 dark:bg-gray-600 rounded-full border-4 border-white dark:border-white relative">
                  <Image
                    src={"/assets/images/founder1.png"}
                    alt="founder"
                    width={100}
                    height={100}
                    className="object-cover rounded-full w-full h-full overflow-hidden"
                  />
                  <p className="text-zinc-800 dark:text-white text-[10px] sm:text-xs uppercase tracking-wider absolute -bottom-10 sm:-bottom-12 left-0 whitespace-nowrap font-inter">
                    FOUNDERS OF <br /> ARTBEAK
                  </p>
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] bg-zinc-400 dark:bg-gray-600 rounded-full border-4 border-white dark:border-white">
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
                <p className="text-zinc-800 dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-inter">
                  A US company based in Cairo, turning ordinary websites
                  into conversion machines risk-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <DarkVeil hueShift={24} /> */}
    </section>
  );
};

export default Hero;
