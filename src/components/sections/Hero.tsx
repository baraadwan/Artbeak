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
          <div className="space-y-8">
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

          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg md:text-xl text-gray-50 max-w-xl leading-relaxed font-inter">
              A US Wyoming company based in Cairo, we are performance based,
              risk-free website re-design agency that focus on turning normal
              websites into conversion machines.
            </p>

            {/* CTA BUTTON — ID ADDED HERE */}
            <div className="pt-6 sm:pt-8">
              <Link href="https://pgraqmyxdqr.typeform.com/to/PBkWGxPz#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx">
                <Button id="start-now-btn">Start Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
