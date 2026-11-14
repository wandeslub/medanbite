import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative z-10 py-24 bg-brand-surface/30 border-y border-brand-surfaceBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Pertanyaan yang Sering Diajukan Klien Brand
          </h2>
          <p className="text-sm text-brand-muted">
            Segala hal yang perlu Anda ketahui sebelum memulai kolaborasi bersama tim kami.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-brand-surfaceBorder bg-brand-surface overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between text-white font-bold text-base hover:text-brand-primary transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-brand-primary' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-brand-surfaceBorder/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
