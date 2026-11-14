import React from 'react';
import { Crosshair, Wallet, BarChart3, PieChart } from 'lucide-react';

interface AudienceInsightsProps {
  onOpenMediaKit: () => void;
}

export const AudienceInsights: React.FC<AudienceInsightsProps> = ({ onOpenMediaKit }) => {
  return (
    <section className="relative z-10 py-20 bg-brand-surface/40 border-y border-brand-surfaceBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
              Data-Driven Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Audiens Matang, Siap Menjadi Pelanggan Baru Anda.
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Mayoritas pengikut kami adalah kaum profesional muda dan pencinta kuliner yang gemar mencoba tempat baru dan berani mengeluarkan anggaran untuk pengalaman bersantap berkualitas.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-primary/20 text-brand-primary mt-1">
                  <Crosshair className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Hyperlocal Targeting</h4>
                  <p className="text-xs text-brand-muted">
                    Lebih dari 68% audiens berdomisili di dalam kota Medan, menjamin dampak kunjungan langsung (direct foot-traffic).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-accent/20 text-brand-accent mt-1">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Daya Beli Menengah ke Atas</h4>
                  <p className="text-xs text-brand-muted">
                    84% audiens berada pada usia produktif 18-34 tahun dengan kebiasaan kuliner mingguan yang konsisten.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenMediaKit}
                className="px-6 py-3 rounded-xl border border-brand-surfaceBorder bg-brand-surface hover:bg-brand-surfaceBorder text-white text-sm font-semibold flex items-center gap-2 transition-all"
              >
                <BarChart3 className="w-4 h-4 text-brand-accent" />
                <span>Buka Data Demografi Lengkap (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right: Charts & Breakdown */}
          <div className="lg:col-span-7 bg-brand-surface rounded-3xl p-6 sm:p-8 border border-brand-surfaceBorder shadow-stitch-card space-y-6">
            <div className="flex items-center justify-between border-b border-brand-surfaceBorder pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-heading">
                <PieChart className="w-5 h-5 text-brand-primary" />
                <span>Ringkasan Demografi Pengikut (Q4 2026)</span>
              </h3>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Data Terverifikasi
              </span>
            </div>

            {/* Age Breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-300">Segmen Usia: 18 - 34 Tahun (Prime Spenders)</span>
                <span className="text-brand-accent font-bold">84%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-brand-dark overflow-hidden flex">
                <div className="h-full bg-brand-primary" style={{ width: '50%' }} title="25-34 thn (50%)"></div>
                <div className="h-full bg-brand-accent" style={{ width: '34%' }} title="18-24 thn (34%)"></div>
                <div className="h-full bg-gray-600" style={{ width: '16%' }} title="35+ thn (16%)"></div>
              </div>
              <div className="flex gap-4 text-[11px] text-brand-muted pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-primary"></span> 25-34 thn (50%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-accent"></span> 18-24 thn (34%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-600"></span> 35+ thn (16%)
                </span>
              </div>
            </div>

            {/* Geographic Distribution */}
            <div className="space-y-3 pt-3 border-t border-brand-surfaceBorder">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Sebaran Geografis Audiens
              </h4>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-200">Kota Medan (Konsumen Lokal Aktif)</span>
                    <span className="text-white font-bold">68%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-brand-dark overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-primary to-brand-primaryHover rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-200">Jabodetabek (Calon Turis Kuliner / Holiday Travelers)</span>
                    <span className="text-white font-bold">18%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-brand-dark overflow-hidden">
                    <div className="h-full bg-brand-secondary rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-200">Sumatera Utara & Luar Kota Lainnya</span>
                    <span className="text-white font-bold">14%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-brand-dark overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{ width: '14%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gender Ratio */}
            <div className="pt-3 border-t border-brand-surfaceBorder flex items-center justify-around text-center">
              <div>
                <p className="text-2xl font-black text-white font-heading">54%</p>
                <p className="text-xs text-brand-muted">Wanita (Deciders / Foodies)</p>
              </div>
              <div className="w-px h-8 bg-brand-surfaceBorder"></div>
              <div>
                <p className="text-2xl font-black text-white font-heading">46%</p>
                <p className="text-xs text-brand-muted">Pria (Coffee / Travelers)</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
