import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsAppChat } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => openWhatsAppChat('Halo tim Medan Bites! Saya ingin bertanya mengenai ketersediaan jadwal kolaborasi.')}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-stitch-float hover:scale-105 active:scale-95 transition-all"
        aria-label="Tanya Jadwal Kolaborasi via WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Tanya Jadwal Kolaborasi</span>
        <span className="sm:hidden">WhatsApp</span>
      </button>
    </div>
  );
};
