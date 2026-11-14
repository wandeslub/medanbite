import React from 'react';
import { STATS } from '../../data/content';

export const StatsTicker: React.FC = () => {
  return (
    <section id="statistik" className="relative z-10 py-12 border-y border-brand-surfaceBorder bg-brand-surface/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-surfaceBorder">
          {STATS.map((item, index) => (
            <div key={index} className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
                {item.value}
              </p>
              <p className="text-sm font-semibold text-brand-accent mt-1">{item.label}</p>
              <p className="text-xs text-brand-muted mt-0.5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
