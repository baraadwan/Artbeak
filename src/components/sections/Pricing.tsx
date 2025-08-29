"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  "Design & Development files",
  "Development Type",
  "No. of pages",
  "Revisions times",
  "Free support up to 3 Months",
  "Request at a time",
  "NDA Agreement included",
];

const tiers = [
  {
    name: "Single Website",
    price: "$999",
    cadence: "/site",
    subtitle: "Perfect for startup or small business",
    values: [
      "Included",
      "Webflow or custom code",
      "up to 10",
      "3 Revisions Times",
      "Included",
      "N/A",
      "N/A",
    ],
    cta: { label: "Purchase" },
    highlight: false,
  },
  {
    name: "Unlimited Websites",
    price: "$3,499",
    cadence: "/mo",
    subtitle: "Perfect for serial entrepreneurs or big business",
    values: [
      "Included",
      "Webflow or custom code",
      "Unlimited",
      "Unlimited",
      "Included",
      "2 Request",
      "Included",
    ],
    cta: { label: "Subscribe" },
    highlight: true,
  },
  {
    name: "Unlimited Web Apps",
    price: "$8,499",
    cadence: "/mo",
    subtitle: "Perfect for organise or enterprise",
    values: [
      "Included",
      "Custom code",
      "Unlimited",
      "Unlimited",
      "Included",
      "3 Request",
      "Included",
    ],
    cta: { label: "Subscribe" },
    highlight: false,
  },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-emerald-400"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.91a.75.75 0 0 1 .08 1.06l-4.5 5.25a.75.75 0 0 1-1.12.02l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.67 1.67 3.99-4.66a.75.75 0 0 1 1.07-.03Z"
      clipRule="evenodd"
    />
  </svg>
);

const Pricing = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bestChoiceRef = useRef<HTMLDivElement | null>(null);
  const [badgePos, setBadgePos] = useState<{ top: number; left: number }>({
    top: -9999,
    left: -9999,
  });

  useEffect(() => {
    const updateBadgePosition = () => {
      if (!sectionRef.current || !bestChoiceRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const cardRect = bestChoiceRef.current.getBoundingClientRect();

      // Anchor to the card's top-right corner, relative to section
      const top = cardRect.top - sectionRect.top;
      const left = cardRect.right - sectionRect.left;

      setBadgePos({ top, left });
    };

    updateBadgePosition();
    window.addEventListener("resize", updateBadgePosition);
    window.addEventListener("scroll", updateBadgePosition, { passive: true });

    const interval = setInterval(updateBadgePosition, 500); // handle layout shifts

    return () => {
      window.removeEventListener("resize", updateBadgePosition);
      window.removeEventListener("scroll", updateBadgePosition);
      clearInterval(interval);
    };
  }, []);
  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative w-full bg-black text-white py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#0047ff] font-display font-normal italic">
                Pricing
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm md:text-base text-zinc-300">
              Clear, straightforward plans tailored to your needs. Choose a plan
              and kick-start now
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full bg-zinc-900 p-1">
            <button className="px-4 py-1.5 text-sm rounded-full text-zinc-300">
              Monthly
            </button>
            <button className="px-4 py-1.5 text-sm rounded-full bg-[#0047ff] text-white">
              Yearly{" "}
              <span className="ml-1 py-[1px] rounded-full bg-white text-black px-1">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden grid grid-cols-1 gap-6 items-stretch ">
          {tiers.map((tier) => (
            <div
              key={`mobile-${tier.name}`}
              className={`relative rounded-3xl bg-zinc-950/60 backdrop-blur-sm ${
                tier.highlight
                  ? "ring-1 ring-blue-500/50 shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]"
                  : ""
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#0047ff] rounded-full">
                  <span className="relative z-10 text-sm">Best Choice</span>
                </div>
              )}
              <div className="p-6">
                <p className="uppercase tracking-widest text-xs text-zinc-400">
                  {tier.name}
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">{tier.price}</span>
                  <span className="text-zinc-400">{tier.cadence}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-400">{tier.subtitle}</p>
              </div>
              <div className="border-t border-white/10">
                {features.map((feature, rowIndex) => (
                  <div
                    key={`mfeat-${feature}`}
                    className="flex items-center justify-between px-6 py-3 text-sm border-b border-white/10 last:border-b-0"
                  >
                    <span className="text-zinc-300">{feature}</span>
                    <span className="flex items-center gap-2 text-zinc-200">
                      {tier.values[rowIndex] === "Included" ? (
                        <CheckIcon />
                      ) : (
                        <span className="text-zinc-300">
                          {tier.values[rowIndex]}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <Button
                  className={`w-full ${tier.highlight ? "bg-[#1F6BFF]" : ""}`}
                >
                  {tier.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating badge for highlighted card (desktop/tablet), avoids overflow clipping */}
        <div
          className="hidden md:block absolute z-50"
          style={{
            top: badgePos.top - 45,
            left: badgePos.left - 100,
          }}
        >
          <div className="relative w-[85px] h-[85px] flex items-center justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 66 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(-10px 15px 20px rgba(0,53,191,0.75))",
              }}
            >
              <path
                d="M21.931 5.63834C27.4464 -1.77913 38.5536 -1.77913 44.069 5.63834V5.63834C46.3383 8.69025 49.767 10.6698 53.5447 11.1091V11.1091C62.7261 12.1768 68.2797 21.796 64.6137 30.2812V30.2812C63.1053 33.7724 63.1053 37.7315 64.6137 41.2227V41.2227C68.2797 49.7079 62.7261 59.3271 53.5447 60.3948V60.3948C49.767 60.8341 46.3383 62.8136 44.069 65.8656V65.8656C38.5536 73.283 27.4464 73.283 21.931 65.8656V65.8656C19.6617 62.8136 16.233 60.8341 12.4553 60.3948V60.3948C3.27394 59.3271 -2.27968 49.7079 1.38635 41.2227V41.2227C2.89474 37.7315 2.89474 33.7724 1.38635 30.2812V30.2812C-2.27968 21.796 3.27394 12.1768 12.4553 11.1091V11.1091C16.233 10.6698 19.6617 8.69025 21.931 5.63834V5.63834Z"
                fill="#0047FF"
              />
            </svg>
            <span className="absolute z-10 text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              Best <br /> Choice
            </span>
          </div>
        </div>

        {/* Desktop/tablet: table-like grid */}
        <div className="hidden md:block overflow-auto">
          <div className="min-w-[880px] grid grid-cols-4">
            {/* Header Row */}
            <div className="col-span-1 p-8 border-b border-white/10 flex items-center gap-3">
              <motion.svg
                className="w-16 h-16 text-[#c5f011]"
                fill="currentColor"
                viewBox="0 0 25 24"
                style={{ originX: 0.5, originY: 0.5 }}
                animate={{ rotate: [0, 360], scale: [1, 0.92, 1.06, 1] }}
                transition={{
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  times: [0, 0.4, 0.65, 1],
                }}
              >
                <path d="M0.651611 11.9974C6.65029 11.9974 12.649 5.99868 12.649 0C12.649 5.99868 18.6477 11.9974 24.6463 11.9974C18.6477 11.9974 12.649 17.996 12.649 23.9947C12.649 17.996 6.65029 11.9974 0.651611 11.9974Z" />
              </motion.svg>
            </div>
            {tiers.map((tier) => (
              <div
                key={`head-${tier.name}`}
                className={`relative p-6 pt-10 border-b border-white/10 flex flex-col items-center text-center ${
                  tier.highlight ? "bg-white/10 rounded-t-3xl" : ""
                }`}
                ref={tier.highlight ? bestChoiceRef : null}
              >
                <p className="uppercase tracking-widest text-xs text-zinc-400">
                  {tier.name}
                </p>
                <div className="mt-4 flex items-baseline gap-2 justify-center">
                  <span className="text-3xl md:text-4xl font-semibold">
                    {tier.price}
                  </span>
                  <span className="text-zinc-400">{tier.cadence}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{tier.subtitle}</p>
              </div>
            ))}

            {/* Feature Rows */}
            {features.map((feature, rowIndex) => (
              <React.Fragment key={`row-${feature}`}>
                <div className="col-span-1 px-6 py-4 text-sm border-b border-white/10 flex items-center">
                  <span className="text-zinc-300">{feature}</span>
                </div>
                {tiers.map((tier) => (
                  <div
                    key={`val-${tier.name}-${feature}`}
                    className={`px-8 py-4 text-sm border-b border-white/10 flex items-center justify-center ${
                      tier.highlight ? "bg-white/10" : ""
                    }`}
                  >
                    {tier.values[rowIndex] === "Included" ? (
                      <CheckIcon />
                    ) : (
                      <span className="text-zinc-300">
                        {tier.values[rowIndex]}
                      </span>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}

            {/* CTA Row */}
            <div className="col-span-1 p-6" />
            {tiers.map((tier) => (
              <div
                key={`cta-${tier.name}`}
                className={`p-6 flex items-center justify-center ${
                  tier.highlight ? "bg-white/10 rounded-b-3xl " : ""
                }`}
              >
                <Button variant={tier.highlight ? "primary" : "secondary"}>
                  {tier.cta.label}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
