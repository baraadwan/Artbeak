"use client";

import React from "react";
import Button from "../ui/Button";
import { IconCircleArrowUpRightFilled } from "@tabler/icons-react";
import Link from "next/link";

const newsletterArticles = [
  {
    id: 1,
    date: "Aug 29, 2025",
    title: "Day 3: What's the Point of Anything in the AI Era?",
    description: "What happens to your business when AI can do everything?",
    image: "/assets/posts/post-1.jpeg",
    imageAlt:
      "Person with curly dark hair wearing pink top and colorful sunglasses",
    link: "https://hustleandgrinddiary.substack.com/p/day-3-whats-the-point-of-anything",
  },
  {
    id: 2,
    date: "Aug 29, 2025",
    title: "Day 2 — How to Focus on a World of Trends",
    description:
      "The world doesn't stop throwing shiny new trends at us. AI, Web3, crypto, new platforms, new opportunities. Some days it feels like you need four startups just to keep up.",
    image: "/assets/posts/post-2.jpeg",
    imageAlt: "Person looking at smartphone with financial graph on monitor",
    link: "https://hustleandgrinddiary.substack.com/p/how-to-focus-on-a-world-of-trends-f0d",
  },
  {
    id: 3,
    date: "Aug 29, 2025",
    title: "Day 4 – Busy but Broke – The Founder Trap",
    description: "How can you be busy all day… and still broke?",
    image: "/assets/posts/post-3.jpeg",
    imageAlt: "Hands typing on laptop with smartphone and red drink",
    link: "https://hustleandgrinddiary.substack.com/p/day-4-busy-but-broke-the-founder",
  },
];

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="relative w-full bg-zinc-100 dark:bg-black text-zinc-900 dark:text-white py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="text-zinc-900 dark:text-white">Hustle & Grind</span>{" "}
              <span className="text-[#0047ff] font-display font-normal italic">
                Newsletter
              </span>
            </h2>
          </div>
          <Link href="https://hustleandgrinddiary.substack.com/">
            <Button>Subscribe</Button>
          </Link>
        </div>

        {/* Newsletter Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsletterArticles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => window.open(article.link, "_blank")}
            >
              {/* Date */}
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">{article.date}</p>

              {/* Title */}
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                {article.description}
              </p>

              {/* Image Container */}
              <div className="relative mb-6 mt-auto">
                <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  {/* Image with consistent height */}
                  <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-zinc-300 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Interactive Button Overlay (visible on hover/focus) */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto outline-none bg-white cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(article.link, "_blank");
                  }}
                >
                  <IconCircleArrowUpRightFilled className="w-full h-full text-[#0047ff] scale-[1.2]" />
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-300 dark:bg-zinc-800"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
