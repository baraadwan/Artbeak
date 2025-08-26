"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="relative grid grid-cols-1 gap-20 h-[300px] w-full">
      <div className="flex flex-col justify-between py-4">
        <motion.div
          key={active}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <motion.p className="mt-8 text-3xl font-semibold text-neutral-300">
            {testimonials[active].quote.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.02 * index,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
        <div>
          <div className="h-[1px] w-full bg-neutral-800 my-4"></div>
          <div className="flex gap-4 pt-12 md:pt-0 justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#c4c4c4] mr-4"></div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-xs text-[#c4c4c4]">
                  {testimonials[active].designation}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-neutral-900/5 rounded-full px-4 py-2 border border-neutral-800 h-[36px] w-[158px]">
              <button
                onClick={handlePrev}
                className="group/button flex items-center justify-center w-8 h-8 "
              >
                <ChevronLeft className="h-5 w-5 text-neutral-400 transition-transform duration-300 group-hover/button:text-white" />
              </button>
              <span className="text-neutral-400">
                {active + 1} / {testimonials.length}
              </span>
              <button
                onClick={handleNext}
                className="group/button flex items-center justify-center w-8 h-8 "
              >
                <ChevronRight className="h-5 w-5 text-neutral-400 transition-transform duration-300 group-hover/button:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
