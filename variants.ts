import { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

export const fadeIn = (direction: Direction, delay: number): Variants =>  {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      y: direction === 'up' ? -80 : direction === 'down' ? 80 : 0,
      opacity: 0,
      x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: delay * 0.15, // shorter delay on exit
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
};
