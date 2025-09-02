"use client";

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
    <div className="relative grid grid-cols-1 gap-8 sm:gap-12 lg:gap-20 h-auto sm:h-[250px] lg:h-[300px] w-full">
      <div className="flex flex-col justify-between py-2 sm:py-4">
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
          <motion.p className="mt-4 sm:mt-6 lg:mt-8 text-lg sm:text-2xl lg:text-3xl font-semibold text-neutral-300 leading-relaxed">
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
          <div className="h-[1px] w-full bg-neutral-800 my-3 sm:my-4"></div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 lg:pt-2 justify-between">
            <div className="flex items-center order-2 sm:order-1">
              {testimonials[active].src ? (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-[#c4c4c4] mr-3 sm:mr-4">
                  <img
                    src={testimonials[active].src}
                    alt={testimonials[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#c4c4c4] mr-3 sm:mr-4"></div>
              )}

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-xs text-[#c4c4c4]">
                  {testimonials[active].designation}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-neutral-900/5 rounded-full px-3 sm:px-4 py-2 border border-neutral-800 h-[32px] sm:h-[36px] w-full sm:w-[158px] order-1 sm:order-2">
              <button
                onClick={handlePrev}
                className="group/button flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-400 transition-transform duration-300 group-hover/button:text-white" />
              </button>
              <span className="text-xs sm:text-sm text-neutral-400">
                {active + 1} / {testimonials.length}
              </span>
              <button
                onClick={handleNext}
                className="group/button flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-400 transition-transform duration-300 group-hover/button:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
