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
    <section id="work" className="py-0 sm:py-12 lg:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-row gap-6 items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="text-zinc-900 dark:text-white">Featured</span>{" "}
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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-[#050509] overflow-hidden transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-[#151515] hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/60"
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

              <div className="px-5 sm:px-7 lg:px-8 py-4 sm:py-5 lg:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-white/50 mb-1">
                    Website Redesign
                  </p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs lg:text-sm text-zinc-600 dark:text-white/60 max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[11px] sm:text-xs text-zinc-600 dark:text-white/60">
                  <span className="hidden sm:inline">View full case study</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-400 dark:border-white/25">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
