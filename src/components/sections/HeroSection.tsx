import React from 'react';
import { Download, MessageCircle, CheckCircle2, MapPin, TrendingUp, Users } from 'lucide-react';
import { openWhatsAppChat } from '../../utils/whatsapp';

interface HeroSectionProps {
  onOpenMediaKit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenMediaKit }) => {
  return (
    <section id="tentang" class="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-surfaceBorder shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                #1 Hyperlocal Food & Travel Creator
              </span>
              <span className="text-xs text-brand-muted">• Kota Medan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-heading">
              Eksplorasi Rasa & Pesona{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-orange-500 to-brand-accent">
                Medan
              </span>{' '}
              Bersama Kami.
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Jembatan terpercaya antara brand kuliner, hotel heritage, dan pariwisata Sumatera Utara dengan{' '}
              <strong className="text-white font-semibold">500.000+ audiens lokal loyal</strong> berdaya beli tinggi.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenMediaKit}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white font-bold text-base shadow-stitch-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5" />
                <span>Unduh Media Kit 2026 (PDF)</span>
              </button>

              <button
                onClick={() => openWhatsAppChat('Halo Medan Bites! Saya tertarik untuk mendiskusikan peluang kolaborasi brand dengan Anda.')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-brand-surfaceBorder bg-brand-surface/90 hover:bg-brand-surface text-gray-100 font-bold text-base hover:border-emerald-500/50 hover:text-emerald-400 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Diskusi Ide Kampanye (WA)</span>
              </button>
            </div>

            {/* Micro Proofs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Rate Card Transparan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Respon Cepat Tim Management (&lt; 2 Jam)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Visual Sinematik 4K</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composite Bento Grid (Stitch UI Style) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Hero Card */}
              <div className="relative rounded-3xl overflow-hidden border border-brand-surfaceBorder bg-brand-surface shadow-stitch-card">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
                  alt="Kuliner Khas Medan"
                  className="w-full h-80 sm:h-96 object-cover object-center filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent"></div>
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Kesawan & Pasar Ramai, Medan</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand-accent">
                    Signature Content
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Eksplorasi Soto Kesawan & Mie Balap</h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                    Mengangkat cita rasa rempah otentik dan warisan kuliner lintas generasi yang viral di seantero Sumatera.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Engagement */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-brand-surface/95 backdrop-blur-md border border-brand-surfaceBorder p-4 rounded-2xl shadow-stitch-glow flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-black text-white font-heading">8.2%</p>
                  <p className="text-[11px] text-brand-muted">Avg. Engagement Rate</p>
                </div>
              </div>

              {/* Floating Badge 2: Local Reach */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-brand-surface/95 backdrop-blur-md border border-brand-surfaceBorder p-4 rounded-2xl shadow-stitch-gold flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-black text-white font-heading">72%</p>
                  <p className="text-[11px] text-brand-muted">Audiens Warga Medan</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
