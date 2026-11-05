'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'white' | 'white-ghost' | 'signal'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles = {
      primary: 'bg-navy-DEFAULT text-white hover:bg-navy-700',
      ghost: 'border border-navy-DEFAULT/30 text-navy-DEFAULT hover:border-navy-DEFAULT hover:bg-navy-DEFAULT/[0.04]',
      white: 'bg-white text-navy-DEFAULT hover:bg-signal',
      'white-ghost': 'border border-white/30 text-white hover:border-white hover:bg-white/5',
      signal: 'bg-signal text-navy-DEFAULT hover:bg-white',
    }

    const sizeStyles = {
      sm: 'px-4 text-sm h-9',
      md: 'px-5 text-sm h-10',
      lg: 'px-7 text-[15px] h-12',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
