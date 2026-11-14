import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
            Ulasan Nyata Klien
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Apa Kata Pengusaha Kuliner & Hotel di Medan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-brand-surfaceBorder bg-brand-surface flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-surfaceBorder">
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary font-bold flex items-center justify-center text-sm">
                  {t.clientName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white font-heading">{t.clientName}</p>
                  <p className="text-xs text-brand-muted">{t.clientRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
