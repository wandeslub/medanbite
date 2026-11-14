import React from 'react';
import { Sparkles, MessageCircle, FileDown } from 'lucide-react';
import { openWhatsAppChat } from '../../utils/whatsapp';

interface FinalCtaProps {
  onOpenMediaKit: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenMediaKit }) => {
  return (
    <section id="kontak" className="relative z-10 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl p-8 sm:p-14 border border-brand-primary/40 bg-gradient-to-tr from-brand-surface via-[#201514] to-brand-surface text-center space-y-8 shadow-stitch-glow relative overflow-hidden">
          
          {/* Decorative Ambient Light */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none"></div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary border border-brand-primary/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Slot Terbatas Setiap Bulan</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto font-heading">
            Siap Jadikan Brand Anda Rekomendasi Teratas di Kota Medan?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Amankan tanggal visit tim kami sekarang. Hubungi kami untuk konsultasi gratis mengenai konsep konten yang paling tepat bagi target audiens Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openWhatsAppChat('Halo Medan Bites! Kami ingin mendiskusikan slot kolaborasi kuliner/travel untuk bulan depan.')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white font-bold text-base shadow-stitch-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat Langsung via WhatsApp</span>
            </button>

            <button
              onClick={onOpenMediaKit}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-brand-surfaceBorder bg-brand-surface hover:bg-brand-surfaceBorder text-gray-200 font-bold text-base transition-all flex items-center justify-center gap-3"
            >
              <FileDown className="w-5 h-5 text-brand-accent" />
              <span>Unduh Media Kit (PDF)</span>
            </button>
          </div>

          <p className="text-xs text-brand-muted pt-2">
            Respon kilat di hari kerja (09.00 - 18.00 WIB) • Lokasi: Medan, Sumatera Utara
          </p>

        </div>

      </div>
    </section>
  );
};
