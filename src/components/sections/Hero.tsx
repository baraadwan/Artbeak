"use client";

import Link from "next/link";
import Button from "../ui/Button";
import DarkVeil from "../ui/DarkVeil";
import { IconBrandInstagram, IconBrandX, IconWorld } from "@tabler/icons-react";
import CountUp from "../ui/CountUp/CountUp";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-[#010208] flex items-center overflow-hidden h-screen min-h-[1000px] max-h-[1360px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full absolute inset-0 z-10 pb-16 pt-28 flex justify-center flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-22">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Only Pay </span>
                <span className="inline mr-5">When you Convert</span>
                <span className="inline text-4xl md:text-6xl italic font-normal text-gray-300 font-display">
                  more
                </span>
              </h1>
            </div>

            {/* Social Proof */}
            <div className="space-y-4 pt-8">
              <p className="text-white text-lg mb-22">
                5.0 Average Rating on <span className="underline">Google</span>
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://x.com/"
                  className="w-10 h-10 border border-white rounded-full flex items-center justify-center bg-white cursor-pointer"
                >
                  <IconBrandX className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="w-10 h-10 border border-white rounded-full flex items-center justify-center bg-white cursor-pointer"
                >
                  <IconBrandInstagram className="w-5 h-5 text-black" />
                </a>
                <a
                  href=""
                  className="w-10 h-10 border border-white rounded-full flex items-center justify-center bg-white cursor-pointer"
                >
                  <IconWorld className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Description, CTA & Stats */}
          <div className="space-y-8">
            <div>
              {/* Description */}
              <p className="text-xl text-gray-50 max-w-lg leading-relaxed">
                A US Wyoming company based in Cairo, we are performance based,
                risk-free website re-design agency that focus on turning normal
                websites into conversion machines.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href="/contact">
                  <Button>Start Now</Button>
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-600 mt-28"></div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="text-left">
                <div className="text-7xl font-semibold text-lime-400 mb-2">
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
                <div className="text-white text-sm leading-tight">
                  CLIENTS SATISFIED AND <br /> REPEATING
                </div>
              </div>
              <div className="text-left">
                <div className="text-7xl font-semibold text-lime-400 mb-2">
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
                <div className="text-white text-sm leading-tight">
                  PROJECTS COMPLETED IN <br /> 6 COUNTRIES
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Guarantees & Founders */}
        <div className="mt-16 space-y-8">
          {/* Guarantees */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-white text-3xl font-medium">
              <span>Refund Guaranteed</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>100% Risk Free</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Flexible Pricing</span>
            </div>
          </div>

          {/* Founders Section */}
          <div className="space-y-4">
            <div className="h-px bg-gray-600"></div>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3 ">
                <div className="w-[100px] h-[100px] bg-gray-600 rounded-full border-4 border-white relative">
                  <Image
                    src={"/assets/images/founder1.png"}
                    alt="founder"
                    width={100}
                    height={100}
                    className="object-cover rounded-full w-full h-full overflow-hidden"
                  />
                  <p className="text-white text-xs uppercase tracking-wider absolute -bottom-12 left-0 whitespace-nowrap">
                    FOUNDERS OF <br /> ARTBEAK
                  </p>
                </div>
                <div className="w-[100px] h-[100px] bg-gray-600 rounded-full border-4 border-white">
                  <Image
                    src={"/assets/images/founder2.png"}
                    alt="founder"
                    width={100}
                    height={100}
                    className="object-cover rounded-full w-full h-full overflow-hidden"
                  />
                </div>
              </div>
              <div className="flex-1 ml-22">
                <p className="text-white text-4xl font-medium">
                  We help business redesign their normal websites and turn them
                  into conversion machines risk free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkVeil />
    </section>
  );
};

export default Hero;
