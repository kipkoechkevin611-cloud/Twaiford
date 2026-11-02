'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500',
      outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    const widthClass = fullWidth ? 'w-full' : '';
    
    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
