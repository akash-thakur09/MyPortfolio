import { type Variants } from 'framer-motion';

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Stagger container for lists
export const staggerContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Fade in from bottom
export const fadeInUpVariants: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Scale in animation
export const scaleInVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  }
};

// Slide in from left
export const slideInLeftVariants: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Slide in from right
export const slideInRightVariants: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Fade in animation
export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Hover scale animation
export const hoverScaleVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

// Card hover animation
export const cardHoverVariants = {
  rest: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  hover: { 
    y: -8,
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3 }
  }
};
