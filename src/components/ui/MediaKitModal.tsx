import React, { useState } from 'react';
import { X, FileText, Download, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { openWhatsAppChat } from '../../utils/whatsapp';

interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaKitModal: React.FC<MediaKitModalProps> = ({ isOpen, onClose }) => {
  const [brandName, setBrandName] = useState('');
  const [contact, setContact] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback if confetti fails
    }

    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-brand-surface border border-brand-surfaceBorder rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-surfaceBorder pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/20 text-brand-primary flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">Media Kit Resmi 2026</h3>
              <p className="text-xs text-brand-muted">Medan Bites & Trails • Rate Card & Audience Insights</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-brand-surfaceBorder transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight Stats */}
        <div className="rounded-2xl bg-brand-dark p-4 border border-brand-surfaceBorder/80 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-gray-300">Total Followers Lintas Platform</span>
            <span className="text-white font-bold">185.000+</span>
          </div>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-gray-300">Rata-rata Penonton per Reels/TikTok</span>
            <span className="text-brand-accent font-bold">45.000 - 150.000 Views</span>
          </div>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-gray-300">Demografi Usia Tertinggi</span>
            <span className="text-emerald-400 font-bold">25 - 34 Tahun (50%)</span>
          </div>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-gray-300">Format File Dokumen</span>
            <span className="text-brand-primary font-bold">PDF High-Resolution (12 Halaman)</span>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div className="space-y-3 pt-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
            Kirim Salinan Dokumen ke Email / WhatsApp Anda:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input 
              type="text" 
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Nama Brand / Bisnis Anda" 
              className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-surfaceBorder text-white text-sm focus:outline-none focus:border-brand-primary transition-colors"
            />
            <input 
              type="text" 
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Nomor WA / Email" 
              className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-surfaceBorder text-white text-sm focus:outline-none focus:border-brand-primary transition-colors"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button 
            onClick={handleDownload}
            disabled={isDownloaded}
            className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white font-bold text-sm shadow-stitch-glow flex items-center justify-center gap-2 hover:opacity-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloaded ? "Sedang Mengunduh..." : "Unduh Media Kit PDF Sekarang"}</span>
          </button>

          <button 
            onClick={() => {
              openWhatsAppChat("Halo Medan Bites! Saya baru saja melihat Media Kit Anda dan ingin mengajukan proposal kolaborasi.");
              onClose();
            }}
            className="py-3.5 px-5 rounded-xl border border-brand-surfaceBorder bg-brand-dark hover:bg-brand-surfaceBorder text-gray-200 font-bold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat Tim</span>
          </button>
        </div>

        <p className="text-[11px] text-center text-brand-muted">
          Privasi Anda aman. Kami tidak akan membagikan kontak Anda kepada pihak ketiga.
        </p>

      </div>
    </div>
  );
};
