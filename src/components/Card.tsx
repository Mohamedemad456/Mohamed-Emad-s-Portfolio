import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

const Card = ({ children, className = '', hover = true, delay = 0, onClick }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`bg-card rounded-xl p-6 border border-border shadow-xs ${
        hover
          ? 'transition-all duration-300 hover:border-green/40 hover:ring-1 hover:ring-purple/20 hover:shadow-lg'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
