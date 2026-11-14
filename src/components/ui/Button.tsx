import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 active:scale-[0.98]";

  const variantStyles = {
    primary: "bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white shadow-stitch-glow hover:opacity-95 hover:scale-[1.02]",
    secondary: "bg-brand-accent text-brand-dark hover:bg-amber-400 shadow-stitch-gold",
    outline: "border border-brand-surfaceBorder bg-brand-surface/90 text-gray-200 hover:bg-brand-surface hover:border-brand-primary/50",
    ghost: "text-gray-300 hover:text-white hover:bg-brand-surface"
  };

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5"
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
