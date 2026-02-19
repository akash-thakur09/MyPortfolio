import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  const Component = hover ? motion.div : 'div';
  
  const hoverProps = hover ? {
    whileHover: { y: -4 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <Component
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${
        hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
      } ${className}`}
      {...hoverProps}
    >
      {children}
    </Component>
  );
};
