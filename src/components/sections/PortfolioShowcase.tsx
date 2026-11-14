import React, { useState } from 'react';
import { PORTFOLIO } from '../../data/content';

export const PortfolioShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPortfolio = selectedCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.categoryKey === selectedCategory);

  return (
    <section id="portofolio" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              Rekam Jejak Nyata
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 font-heading">
              Kampanye Sukses Bersama Brand Terkemuka
            </h2>
          </div>
          <p className="text-sm text-brand-muted max-w-md">
            Bukan sekadar views kosong; kami mengukur keberhasilan dari antrean pembeli, DM reservasi, dan peningkatan penjualan nyata bagi mitra kami.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: `Semua Proyek (${PORTFOLIO.length})` },
            { id: 'resto', label: 'Kuliner Restoran' },
            { id: 'cafe', label: 'Cafe & Coffee' },
            { id: 'hotel', label: 'Hotel & Staycation' },
            { id: 'retail', label: 'UMKM & Oleh-Oleh' },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                  isActive
                    ? 'border-brand-primary bg-brand-primary text-white'
                    : 'border-brand-surfaceBorder bg-brand-surface text-gray-300 hover:border-brand-primary/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-brand-surfaceBorder bg-brand-surface overflow-hidden group hover:border-brand-primary/40 transition-all flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-white">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{item.title}</h3>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-surfaceBorder/80 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xl font-black text-brand-primary font-heading">
                      {item.metrics.primaryValue}
                    </p>
                    <p className="text-[11px] text-brand-muted">{item.metrics.primaryLabel}</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-emerald-400 font-heading">
                      {item.metrics.secondaryValue}
                    </p>
                    <p className="text-[11px] text-brand-muted">{item.metrics.secondaryLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
