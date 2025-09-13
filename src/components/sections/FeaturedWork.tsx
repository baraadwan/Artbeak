"use client";

import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import { Tabs } from "../ui/Tabs";
import { useState } from "react";

const Content = (
  <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl px-4 sm:px-8 md:px-16 font-bold text-white bg-gradient-to-br from-[#012da2] to-[#011a5d]">
    <div className="mt-8 sm:mt-12 md:mt-16 w-full h-full">
      <div className="flex gap-6 md:gap-10 w-full">
        <div className="w-1/2">
          <Image
            src="/assets/images/showcase/previous-version.png"
            alt="Previous Version"
            width={600}
            height={1000}
            className="object-contain w-full h-auto"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/assets/images/showcase/after-version.png"
            alt="After Version"
            width={600}
            height={1000}
            className="object-contain w-full h-auto"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  </div>
);

const FeaturedWork = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: Content,
    },
    {
      title: "Services",
      value: "services",
      content: Content,
    },
    {
      title: "Playground",
      value: "playground",
      content: Content,
    },
    {
      title: "Content",
      value: "content",
      content: Content,
    },
    {
      title: "Random",
      value: "random",
      content: Content,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % tabs.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  return (
    <section id="work" className="py-0 sm:py-12 lg:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-row gap-6 items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="text-white">Featured</span>{" "}
            <br className="sm:hidden" />
            <span className="text-[#0047ff] font-display italic font-normal">
              {" "}
              Work
            </span>
          </h2>
          <Link href="https://www.behance.net/artbeak">
            <Button>See More</Button>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="h-56 sm:h-80 md:h-[420px] lg:h-[540px] mb-8 sm:mb-10 lg:mb-12 relative">
            <div className="absolute inset-0 z-30">
              <Tabs
                tabs={tabs}
                activeIndex={activeIndex}
                onActiveIndexChange={setActiveIndex}
                contentClassName="mt-0"
              />
            </div>
          </div>
          {/* Project Details */}
          <div className="flex gap-4 items-center justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Snaprent Before & After
              </h3>
              <p className="text-[11px] sm:text-xs text-white/50">
                Website Redesign & Webflow Development
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* <button
                aria-label="Previous"
                onClick={goPrev}
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer"
              >
                <Image
                  src="/assets/icons/arrow-right-big.png"
                  alt="Arrow Left"
                  width={48}
                  height={48}
                  className="rotate-180"
                />
              </button> */}
              <button
                aria-label="Next"
                onClick={goNext}
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer"
              >
                <Image
                  src="/assets/icons/arrow-right-big.png"
                  alt="Arrow Right"
                  width={48}
                  height={48}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
