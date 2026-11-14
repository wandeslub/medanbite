import React, { useState } from 'react';
import { Utensils, FileText, MessageCircle, Menu, X } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/content';

interface NavbarProps {
  onOpenMediaKit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMediaKit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav border-b border-brand-surfaceBorder/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center text-white shadow-stitch-glow group-hover:scale-105 transition-transform">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                  MEDAN<span className="text-brand-primary">BITES</span>
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-brand-primary/20 text-brand-primary font-medium border border-brand-primary/30">
                  Official
                </span>
              </div>
              <p className="text-[11px] text-brand-muted tracking-wide -mt-0.5">{BRAND_CONFIG.tagline}</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#tentang" className="hover:text-brand-primary transition-colors">Tentang</a>
            <a href="#statistik" className="hover:text-brand-primary transition-colors">Statistik</a>
            <a href="#pilar" className="hover:text-brand-primary transition-colors">Pilar Konten</a>
            <a href="#portofolio" className="hover:text-brand-primary transition-colors">Portofolio</a>
            <a href="#paket" className="hover:text-brand-primary transition-colors">Paket Kolaborasi</a>
            <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
          </nav>

          {/* Dual Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenMediaKit}
              className="px-4 py-2.5 rounded-xl border border-brand-surfaceBorder bg-brand-surface/80 hover:bg-brand-surface text-gray-200 text-sm font-semibold flex items-center gap-2 hover:border-brand-primary/50 transition-all"
            >
              <FileText className="w-4 h-4 text-brand-accent" />
              <span>Media Kit</span>
            </button>
            <a
              href="#kontak"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white text-sm font-semibold shadow-stitch-glow hover:opacity-95 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Kolaborasi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-brand-surface border border-brand-surfaceBorder"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-surfaceBorder bg-brand-surface/95 backdrop-blur-xl px-4 py-6 space-y-4">
          <a href="#tentang" className="block text-base font-medium text-gray-300 hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Tentang</a>
          <a href="#statistik" className="block text-base font-medium text-gray-300 hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Statistik</a>
          <a href="#pilar" className="block text-base font-medium text-gray-300 hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Pilar Konten</a>
          <a href="#portofolio" className="block text-base font-medium text-gray-300 hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Portofolio</a>
          <a href="#paket" className="block text-base font-medium text-gray-300 hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Paket Kolaborasi</a>
          <a href="#faq" className="block text-base font-medium text-gray-300 hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <div className="pt-4 border-t border-brand-surfaceBorder flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenMediaKit();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl border border-brand-surfaceBorder bg-brand-surface text-gray-200 font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-brand-accent" />
              <span>Lihat Media Kit 2026</span>
            </button>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-brand-primary text-white font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
