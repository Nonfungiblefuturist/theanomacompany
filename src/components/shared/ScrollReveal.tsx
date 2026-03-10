import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "fade-up" | "blur-fade" | "scale-in" | "slide-up";

interface ScrollRevealProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
}

const variants: Record<AnimationType, { initial: any; animate: any }> = {
  "fade-up": {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  },
  "blur-fade": {
    initial: { opacity: 0, y: 10, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "scale-in": {
    initial: { opacity: 0, scale: 1.4 },
    animate: { opacity: 1, scale: 1 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  },
};

const durations: Record<AnimationType, number> = {
  "fade-up": 0.6,
  "blur-fade": 0.8,
  "scale-in": 1.2,
  "slide-up": 0.8,
};

const ScrollReveal = ({
  children,
  type = "fade-up",
  delay = 0,
  duration,
  className = "",
  viewportAmount = 0.2,
}: ScrollRevealProps) => {
  const v = variants[type];
  const d = duration ?? durations[type];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: d, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
