import React from 'react';
import { Check, MessageCircle, Zap, Calendar } from 'lucide-react';
import { PRICING_TIERS } from '../../data/content';
import { openWhatsAppChat } from '../../utils/whatsapp';

export const PricingTiers: React.FC = () => {
  return (
    <section id="paket" className="relative z-10 py-24 bg-brand-surface/30 border-y border-brand-surfaceBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            Kemitraan Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Pilihan Paket Kolaborasi yang Fleksibel
          </h2>
          <p className="text-base sm:text-lg text-brand-muted">
            Pilih skema kampanye yang paling cocok dengan target pertumbuhan brand Anda di pasar Medan.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isFeatured = tier.featured;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                  isFeatured
                    ? 'border-2 border-brand-primary bg-gradient-to-b from-brand-surface to-[#1F1412] relative shadow-stitch-glow'
                    : 'border-brand-surfaceBorder bg-brand-surface hover:border-brand-surfaceBorder/80'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-primary text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6 pt-2">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${isFeatured ? 'text-brand-accent' : 'text-gray-400'}`}>
                      {tier.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 font-heading">{tier.name}</h3>
                    <p className="text-xs text-brand-muted mt-2 leading-relaxed">{tier.description}</p>
                  </div>

                  <div className="border-y border-brand-surfaceBorder py-4">
                    <span className="text-xs text-brand-muted">Investasi Mulai Dari</span>
                    <p className="text-3xl font-extrabold text-white font-heading mt-0.5">{tier.startingPrice}</p>
                  </div>

                  <ul className="space-y-3 text-xs text-gray-300">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 ${isFeatured ? 'text-brand-primary' : 'text-emerald-400'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => openWhatsAppChat(tier.whatsappMessage)}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white shadow-stitch-glow hover:opacity-95'
                        : 'border border-brand-surfaceBorder bg-brand-surface/90 hover:bg-brand-surfaceBorder text-white'
                    }`}
                  >
                    {isFeatured ? (
                      <Zap className="w-4 h-4" />
                    ) : tier.id === 'travel-staycation' ? (
                      <Calendar className="w-4 h-4 text-brand-accent" />
                    ) : (
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                    )}
                    <span>{tier.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
