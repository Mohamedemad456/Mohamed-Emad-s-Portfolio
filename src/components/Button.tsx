import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 text-center';
  
  const variants = {
    primary:
      'bg-linear-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700 shadow-sm hover:shadow-md',
    secondary:
      'bg-linear-to-r from-purple-600 to-emerald-600 text-white hover:from-purple-700 hover:to-emerald-700 shadow-sm hover:shadow-md',
    outline:
      'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex items-center justify-center gap-2"
    >
      {children}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {buttonContent}
    </button>
  );
};

export default Button;
