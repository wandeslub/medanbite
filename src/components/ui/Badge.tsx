import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'emerald' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className
}) => {
  const variantStyles = {
    primary: "bg-brand-primary/10 border-brand-primary/30 text-brand-primary",
    accent: "bg-brand-accent/10 border-brand-accent/30 text-brand-accent",
    emerald: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    muted: "bg-brand-surface border-brand-surfaceBorder text-brand-muted"
  };

  return (
    <span className={clsx(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide",
      variantStyles[variant],
      className
    )}>
      {children}
    </span>
  );
};
