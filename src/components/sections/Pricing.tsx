"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const features = [
  "What’s included",
  "Service type",
  "Site scope",
  "Revisions / iterations",
  "Support & monitoring",
  "Active requests at a time",
  "NDA Agreement included",
];

const tiers = [
  {
    name: "Single Website",
    price: "$1,999",
    cadence: "/site",
    subtitle:
      "Full redesign and build for one site, plus 1 free month of maintenance & CRO.",
    values: [
      "Design & development for one site",
      "Webflow or custom code build",
      "Up to 20 pages",
      "Up to 3 revision rounds",
      "1 free month of Maintenance & CRO plans",
      "N/A",
      "Included",
    ],
    cta: { label: "Start For Free" },
    highlight: true,
  },
  {
    name: "Maintenance Plan",
    price: "$99",
    cadence: "/mo",
    subtitle:
      "Bugs, security, content updates, and 24/7 monitoring.",
    values: [
      "Ongoing maintenance & small updates",
      "Bug fixes, security & content changes",
      "Existing live website",
      "Unlimited minor edits",
      "24/7 monitoring & priority support",
      "1 active request at a time",
      "Included",
    ],
    cta: { label: "Start For Free" },
    highlight: false,
  },
  {
    name: "Conversion Optimization",
    price: "$199",
    cadence: "/mo",
    subtitle:
      "A/B testing and CRO to boost your conversion rate.",
    values: [
      "Ongoing test design & implementation",
      "CRO strategy & A/B testing",
      "Key funnels and landing pages",
      "Continuous experiment cycles",
      "Included",
      "1 active experiment at a time",
      "Included",
    ],
    cta: { label: "Start For Free" },
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
  const [isYearly, setIsYearly] = useState(false);
  const PRICING_CONTACT_URL =
    "https://pgraqmyxdqr.typeform.com/to/PBkWGxPz#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx";
  const SINGLE_WEBSITE_CHECKOUT_URL =
    "https://buy.stripe.com/00wbJ28WH08afxGbYh3F604";
  const UNLIMITED_WEBSITE_MONTHLY_URL =
    "https://buy.stripe.com/cNi3cw6Oz6wy2KUgex3F605";
  const UNLIMITED_WEBSITE_YEARLY_URL =
    "https://buy.stripe.com/9B69AU2yj5su71a9Q93F607";

  const UNLIMITED_WEB_APP_MONTHLY_URL =
    "https://buy.stripe.com/6oUdRab4P9IK2KU4vP3F606";
  const UNLIMITED_WEB_APP_YEARLY_URL =
    "https://buy.stripe.com/fZu4gAgp93km71aaUd3F608";

  // Calculate prices based on billing period
  const calculatePrice = (basePrice: string, tierName: string) => {
    const numericPrice = parseInt(basePrice.replace(/[$,]/g, ""));
    // Single Website is a one-time purchase, no discount for yearly
    if (isYearly && tierName !== "Single Website") {
      const discountedPrice = Math.round(numericPrice * 0.8); // 20% discount
      return `$${discountedPrice.toLocaleString()}`;
    }
    return basePrice;
  };

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
      className="relative w-full bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              <span className="text-zinc-900 dark:text-white">Choose a single project</span>
              <br />
              <span className="text-[#0047ff] font-display font-normal italic">
                or flexible monthly plans
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm md:text-base text-zinc-600 dark:text-zinc-300">
              One-time website redesign or ongoing maintenance and CRO. Pick what fits your needs.
            </p>
          </div>
          <div className="hidden md:flex items-center rounded-full bg-zinc-200 dark:bg-zinc-900 p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors cursor-pointer ${
                !isYearly
                  ? "bg-[#0047ff] text-white"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors cursor-pointer ${
                isYearly
                  ? "bg-[#0047ff] text-white"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-1 py-[1px] rounded-full bg-white dark:bg-white text-black px-1">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Mobile: billing period toggle */}
        <div className="md:hidden mb-6 flex items-center justify-center">
          <div className="flex items-center rounded-full bg-zinc-200 dark:bg-zinc-900 p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors cursor-pointer ${
                !isYearly
                  ? "bg-[#0047ff] text-white"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors cursor-pointer ${
                isYearly
                  ? "bg-[#0047ff] text-white"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-1 py-[1px] rounded-full bg-white dark:bg-white text-black px-1">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden grid grid-cols-1 gap-6 items-stretch ">
          {tiers.map((tier, index) => (
            <motion.div
              key={`mobile-${tier.name}`}
              className={`relative rounded-3xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${
                tier.highlight
                  ? "bg-white dark:bg-zinc-950/60 border-zinc-200 dark:border-transparent ring-1 ring-blue-500/50 shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_80px_-10px_rgba(59,130,246,0.8)] hover:shadow-blue-500/30"
                  : "bg-zinc-100 dark:bg-zinc-900/80 border-zinc-200 dark:border-white/10 hover:ring-1 hover:ring-[#0047ff]/30 hover:shadow-[#0047ff]/20"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#0047ff] rounded-full">
                  <span className="relative z-10 text-sm text-white">Best Choice</span>
                </div>
              )}
              <div className="p-6">
                <p className="uppercase tracking-widest text-xs text-zinc-500 dark:text-zinc-400">
                  {tier.name}
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">
                    {calculatePrice(tier.price, tier.name)}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">{tier.cadence}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{tier.subtitle}</p>
              </div>
              <div className="border-t border-zinc-200 dark:border-white/10">
                {features.map((feature, rowIndex) => (
                  <div
                    key={`mfeat-${feature}`}
                    className="flex items-center justify-between px-6 py-3 text-sm border-b border-zinc-200 dark:border-white/10 last:border-b-0"
                  >
                    <span className="text-zinc-600 dark:text-zinc-300">{feature}</span>
                    <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
                      {tier.values[rowIndex] === "Included" ? (
                        <CheckIcon />
                      ) : (
                        <span className="text-zinc-600 dark:text-zinc-300">
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
                  onClick={() => {
                    window.open(
                      PRICING_CONTACT_URL,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  {tier.cta.label}
                </Button>
              </div>
            </motion.div>
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
            <span className="absolute z-10 text-sm text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              Best <br /> Choice
            </span>
          </div>
        </div>

        {/* Desktop/tablet: table-like grid */}
        <div className="hidden md:block overflow-auto">
          <div className="min-w-[880px] grid grid-cols-4">
            {/* Header Row */}
            <div className="col-span-1 p-8 border-b border-zinc-200 dark:border-white/10 flex items-center gap-3">
              <motion.svg
                className="w-16 h-16 text-[#0047ff] dark:text-[#c5f011]"
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
                className={`relative p-6 pt-10 border-b border-zinc-200 dark:border-white/10 flex flex-col items-center text-center ${
                  tier.highlight
                    ? "bg-zinc-100 dark:bg-white/10 rounded-t-3xl"
                    : "bg-white dark:bg-zinc-900/60 rounded-t-3xl"
                }`}
                ref={tier.highlight ? bestChoiceRef : null}
              >
                <p className="uppercase tracking-widest text-xs text-zinc-500 dark:text-zinc-400">
                  {tier.name}
                </p>
                <div className="mt-4 flex items-baseline gap-2 justify-center">
                  <span className="text-3xl md:text-4xl font-semibold">
                    {calculatePrice(tier.price, tier.name)}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">{tier.cadence}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{tier.subtitle}</p>
              </div>
            ))}

            {/* Feature Rows */}
            {features.map((feature, rowIndex) => (
              <React.Fragment key={`row-${feature}`}>
                <div className="col-span-1 px-6 py-4 text-sm border-b border-zinc-200 dark:border-white/10 flex items-center">
                  <span className="text-zinc-600 dark:text-zinc-300">{feature}</span>
                </div>
                {tiers.map((tier) => (
                  <div
                    key={`val-${tier.name}-${feature}`}
                    className={`px-8 py-4 text-sm border-b border-zinc-200 dark:border-white/10 flex items-center justify-center text-center ${
                      tier.highlight
                        ? "bg-zinc-100 dark:bg-white/10"
                        : "bg-white dark:bg-zinc-900/60"
                    }`}
                  >
                    {tier.values[rowIndex] === "Included" ? (
                      <CheckIcon />
                    ) : (
                      <span className="text-zinc-600 dark:text-zinc-300 text-center block w-full">
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
                  tier.highlight
                    ? "bg-zinc-100 dark:bg-white/10 rounded-b-3xl"
                    : "bg-white dark:bg-zinc-900/60 rounded-b-3xl"
                }`}
              >
                <Button
                  variant={tier.highlight ? "primary" : "secondary"}
                  onClick={() => {
                    window.open(
                      PRICING_CONTACT_URL,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
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
