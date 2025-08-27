"use client";

import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

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

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-emerald-400"
  >
    <path d="M11.48 3.5c.2-.58.84-.58 1.04 0l1.62 4.7c.09.27.34.46.62.49l4.94.42c.6.05.84.81.38 1.2l-3.76 3.14c-.22.18-.31.47-.24.75l1.16 4.82c.14.58-.49 1.03-.99.71l-4.15-2.57a.74.74 0 0 0-.78 0l-4.15 2.57c-.5.31-1.12-.13-.99-.71l1.16-4.82c.07-.28-.02-.57-.24-.75L3.92 10.3c-.46-.39-.22-1.15.38-1.2l4.94-.42c.28-.03.53-.22.62-.49l1.62-4.7Z" />
  </svg>
);

const Pricing = () => {
  return (
    <section className="relative w-full bg-black text-white py-24">
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
        <div className="md:hidden grid grid-cols-1 gap-6 items-stretch">
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
              >
                {tier.highlight && (
                  <div className="absolute right-0 top-0 px-3 py-1 bg-[#0047ff] rounded-tr-2xl rounded-tl-0 rounded-bl-2xl">
                    <span className="relative z-10 text-sm">Best Choice</span>
                  </div>
                )}
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
