import React from "react";
import Button from "../ui/Button";
import {
  IconCircleArrowUpRight,
  IconCircleArrowUpRightFilled,
} from "@tabler/icons-react";

const newsletterArticles = [
  {
    id: 1,
    date: "Friday / May 3, 2024",
    title: "Trends Are Existing",
    description:
      "The world doesn't stop throwing shiny new trends at us. AI, Web3, crypto, new platforms..",
    image: "/assets/images/news-letter-1.png",
    imageAlt:
      "Person with curly dark hair wearing pink top and colorful sunglasses",
  },
  {
    id: 2,
    date: "Saturday / May 1, 2024",
    title: "No company runway left",
    description:
      "I woke up today with a heavy thought: I've got about 20 days of runway left. Not just for the business, but..",
    image: "/assets/images/news-letter-2.png",
    imageAlt: "Person looking at smartphone with financial graph on monitor",
  },
  {
    id: 3,
    date: "Sunday / April 24, 2024",
    title: "The power of outsourcing",
    description:
      "Today, I had one challenge in mind that I need to fix, which is the constant pressure of having employees..",
    image: "/assets/images/news-letter-3.png",
    imageAlt: "Hands typing on laptop with smartphone and red drink",
  },
];

const Newsletter = () => {
  return (
    <section className="relative w-full bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="text-white">Hustle & Grind</span>{" "}
              <span className="text-[#0047ff] font-display font-normal italic">
                Newsletter
              </span>
            </h2>
          </div>
          <Button>Subscribe</Button>
        </div>

        {/* Newsletter Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsletterArticles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              {/* Date */}
              <p className="text-zinc-400 text-sm mb-3">{article.date}</p>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 underline decoration-zinc-600 underline-offset-4">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {article.description}
              </p>

              {/* Image Container */}
              <div className="relative mb-6">
                <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden bg-zinc-800">
                  {/* Placeholder for image - you can replace with actual images */}
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                    <img src={article.image} alt={article.imageAlt} />
                  </div>
                </div>

                {/* Interactive Button Overlay (visible on hover/focus) */}
                <button className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto outline-none bg-white">
                  <IconCircleArrowUpRightFilled className="w-full h-full text-[#0047ff] scale-[1.2]" />
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-800"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
