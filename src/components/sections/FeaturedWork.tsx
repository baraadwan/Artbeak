"use client";

import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ultimate High Website Redesign",
    description: "Before & after of a full homepage redesign",
    image: "/ultimate-high-redesign.png",
  },
  {
    title: "Axela Construction Website Redesign",
    description: "Turning a corporate construction site into a bold, conversion-focused experience",
    image: "/axela-redesign.png",
  },
  {
    title: "Emission Free Generators Redesign",
    description: "Cleaner layout for a complex climate-tech product",
    image: "/emissionfree-redesign.png",
  },
  {
    title: "ARA NYC Real Estate Redesign",
    description: "High-contrast, premium feel for commercial leasing",
    image: "/ara-redesign.png",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="pt-24 pb-24 sm:pt-12 sm:pb-12 lg:pt-20 lg:pb-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-row gap-6 items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-xl">
            <span className="text-zinc-900 dark:text-white">A few of our</span>{" "}
            <span className="text-[#0047ff] font-display italic font-normal">featured</span>{" "}
            <span className="text-zinc-900 dark:text-white">website redesigns.</span>
          </h2>
          <Link href="https://www.behance.net/artbeak">
            <Button>See More</Button>
          </Link>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-[#050509] overflow-hidden transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-[#151515]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="relative w-full h-56 sm:h-72 md:h-[380px] lg:h-[460px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />
              </div>

              <div className="px-5 sm:px-7 lg:px-8 py-5 sm:py-6 lg:py-8">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-white/50 mb-3">
                  Website Redesign
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-xs lg:text-sm text-zinc-600 dark:text-white/60 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
