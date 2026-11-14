import React from 'react';
import { Utensils, Instagram, Video, Youtube, Mail } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-brand-surfaceBorder bg-brand-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-heading">{BRAND_CONFIG.name}</p>
              <p className="text-[11px] text-brand-muted">{BRAND_CONFIG.tagline}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href={BRAND_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-1.5">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a href={BRAND_CONFIG.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-1.5">
              <Video className="w-4 h-4" />
              <span>TikTok</span>
            </a>
            <a href={BRAND_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-1.5">
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </a>
            <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-brand-primary transition-colors flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {BRAND_CONFIG.name}. Seluruh hak cipta dilindungi.
          </p>

        </div>
      </div>
    </footer>
  );
};
