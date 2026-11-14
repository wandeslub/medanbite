import React from 'react';
import { PILLARS } from '../../data/content';

export const ContentPillars: React.FC = () => {
  return (
    <section id="pilar" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            Spesialisasi Niche
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Pilar Konten yang Memikat Jutaan Selera di Medan
          </h2>
          <p className="text-base sm:text-lg text-brand-muted">
            Kami memproduksi konten sinematik yang tidak sekadar indah dilihat, namun memicu rasa lapar, rasa penasaran, dan aksi nyata mendatangi tempat Anda.
          </p>
        </div>

        {/* Bento Grid (Google Stitch Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className={`${
                pillar.span === 'wide' ? 'md:col-span-2' : ''
              } rounded-3xl overflow-hidden border border-brand-surfaceBorder bg-brand-surface relative group hover:border-brand-primary/50 transition-all duration-300`}
            >
              <img
                src={pillar.imageUrl}
                alt={pillar.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className={`px-3 py-1 rounded-full bg-brand-surface/80 border text-xs font-bold ${pillar.accentColor}`}>
                  {pillar.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl line-clamp-2">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
