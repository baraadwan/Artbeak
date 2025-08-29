import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  MotionValue,
  Transition,
} from "motion/react";
interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
  size?: "normal" | "small";
  direction?: "clockwise" | "counterclockwise";
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true,
  direction: "clockwise" | "counterclockwise" = "counterclockwise"
) => ({
  from,
  to: direction === "clockwise" ? from + 360 : from - 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (
  duration: number,
  from: number,
  direction: "clockwise" | "counterclockwise" = "counterclockwise"
) => ({
  rotate: getRotationTransition(duration, from, true, direction),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  size = "normal",
  direction = "counterclockwise",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: direction === "clockwise" ? start + 360 : start - 360,
      scale: 1,
      transition: getTransition(spinDuration, start, direction),
    });
  }, [spinDuration, text, onHover, controls, direction]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start, direction);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start, direction);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start, direction);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start, direction);
    }

    controls.start({
      rotate: direction === "clockwise" ? start + 360 : start - 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: direction === "clockwise" ? start + 360 : start - 360,
      scale: 1,
      transition: getTransition(spinDuration, start, direction),
    });
  };

  return (
    <motion.div
      className={`m-0 mx-auto rounded-full ${
        size === "small" ? "w-[160px] h-[160px]" : "w-[200px] h-[200px]"
      } relative font-black text-white text-center cursor-pointer origin-center ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
