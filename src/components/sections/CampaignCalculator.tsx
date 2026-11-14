import React, { useState } from 'react';
import { Calculator, MessageCircle, Sparkles, Check } from 'lucide-react';
import { openWhatsAppChat } from '../../utils/whatsapp';

export const CampaignCalculator: React.FC = () => {
  const [videoCount, setVideoCount] = useState<number>(1);
  const [storyCount, setStoryCount] = useState<number>(3);
  const [includeAds, setIncludeAds] = useState<boolean>(false);
  const [includePin, setIncludePin] = useState<boolean>(false);
  const [includePhotos, setIncludePhotos] = useState<boolean>(false);
  const [isOutOfTown, setIsOutOfTown] = useState<boolean>(false);

  // Pricing constants
  const baseVideoPrice = 2000000; // per video
  const storyPrice = 150000;      // per story
  const adsPrice = 1000000;       // 30 days whitelist
  const pinPrice = 500000;        // 14 days pin
  const photosPrice = 800000;     // 10 high-res photos
  const outOfTownFee = 750000;    // luar kota transport/time

  const totalEstimate = 
    (videoCount * baseVideoPrice) +
    (storyCount * storyPrice) +
    (includeAds ? adsPrice : 0) +
    (includePin ? pinPrice : 0) +
    (includePhotos ? photosPrice : 0) +
    (isOutOfTown ? outOfTownFee : 0);

  const handleSendToWhatsApp = () => {
    let breakdown = `Halo Medan Bites! Saya telah menghitung estimasi paket kustom untuk brand saya:\n`;
    breakdown += `- Video Reels/TikTok: ${videoCount}x\n`;
    breakdown += `- Instagram Story: ${storyCount}x\n`;
    if (includeAds) breakdown += `- Whitelist Ads (30 Hari): Ya\n`;
    if (includePin) breakdown += `- Pin Post 14 Hari: Ya\n`;
    if (includePhotos) breakdown += `- Paket 10 Foto High-Res: Ya\n`;
    breakdown += `- Lokasi: ${isOutOfTown ? 'Luar Kota Medan (Berastagi/Toba)' : 'Kota Medan'}\n`;
    breakdown += `Total Estimasi: Rp ${totalEstimate.toLocaleString('id-ID')}\n\n`;
    breakdown += `Apakah jadwal untuk paket ini tersedia di bulan depan?`;

    openWhatsAppChat(breakdown);
  };

  return (
    <section className="relative z-10 py-20 bg-brand-surface/50 border-b border-brand-surfaceBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Kustom</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Hitung Estimasi Anggaran Kolaborasi Anda
          </h2>
          <p className="text-sm text-brand-muted">
            Sesuaikan jumlah video dan layanan pendukung sesuai target kebutuhan kampanye brand Anda.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="rounded-3xl border border-brand-surfaceBorder bg-brand-surface p-6 sm:p-10 shadow-stitch-card space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Controls */}
            <div className="space-y-6">
              
              {/* Video Count */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-gray-200 mb-2">
                  <span>Jumlah Video Reels / TikTok 4K</span>
                  <span className="text-brand-primary text-sm font-extrabold">{videoCount} Video</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={videoCount}
                  onChange={(e) => setVideoCount(Number(e.target.value))}
                  className="w-full accent-brand-primary cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-brand-muted mt-1">
                  <span>1 Video</span>
                  <span>2 Video</span>
                  <span>3 Video</span>
                  <span>4 Video</span>
                </div>
              </div>

              {/* Story Count */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-gray-200 mb-2">
                  <span>Jumlah Instagram Story</span>
                  <span className="text-brand-accent text-sm font-extrabold">{storyCount} Story</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="3"
                  value={storyCount}
                  onChange={(e) => setStoryCount(Number(e.target.value))}
                  className="w-full accent-brand-accent cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-brand-muted mt-1">
                  <span>3 Story</span>
                  <span>6 Story</span>
                  <span>9 Story</span>
                  <span>12 Story</span>
                </div>
              </div>

              {/* Location Select */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-gray-300 mb-2">Lokasi Kunjungan:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsOutOfTown(false)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                      !isOutOfTown
                        ? 'border-brand-primary bg-brand-primary/20 text-white'
                        : 'border-brand-surfaceBorder bg-brand-dark text-gray-400'
                    }`}
                  >
                    Dalam Kota Medan
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOutOfTown(true)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                      isOutOfTown
                        ? 'border-brand-primary bg-brand-primary/20 text-white'
                        : 'border-brand-surfaceBorder bg-brand-dark text-gray-400'
                    }`}
                  >
                    Luar Kota (Berastagi/Toba)
                  </button>
                </div>
              </div>

            </div>

            {/* Right Controls: Add-ons & Checkboxes */}
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                Pilihan Layanan Tambahan (Add-ons):
              </label>

              <div
                onClick={() => setIncludeAds(!includeAds)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  includeAds
                    ? 'border-brand-primary bg-brand-primary/10 text-white'
                    : 'border-brand-surfaceBorder bg-brand-dark/50 text-gray-300'
                }`}
              >
                <div>
                  <p className="text-xs font-bold">Hak Lisensi Digital Ads (30 Hari)</p>
                  <p className="text-[11px] text-brand-muted">Bebas dijadikan iklan berbayar (Meta/TikTok Ads)</p>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${includeAds ? 'bg-brand-primary border-brand-primary text-white' : 'border-gray-600'}`}>
                  {includeAds && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>

              <div
                onClick={() => setIncludePin(!includePin)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  includePin
                    ? 'border-brand-accent bg-brand-accent/10 text-white'
                    : 'border-brand-surfaceBorder bg-brand-dark/50 text-gray-300'
                }`}
              >
                <div>
                  <p className="text-xs font-bold">Pin Post Profil 14 Hari</p>
                  <p className="text-[11px] text-brand-muted">Tampil di baris teratas feed Instagram</p>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${includePin ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'border-gray-600'}`}>
                  {includePin && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>

              <div
                onClick={() => setIncludePhotos(!includePhotos)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  includePhotos
                    ? 'border-emerald-500 bg-emerald-500/10 text-white'
                    : 'border-brand-surfaceBorder bg-brand-dark/50 text-gray-300'
                }`}
              >
                <div>
                  <p className="text-xs font-bold">Paket 10 Foto High-Res Hak Komersial</p>
                  <p className="text-[11px] text-brand-muted">Foto profesional untuk media sosial brand</p>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${includePhotos ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-600'}`}>
                  {includePhotos && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>

            </div>

          </div>

          {/* Result Total & Action */}
          <div className="pt-6 border-t border-brand-surfaceBorder flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-brand-muted font-semibold">Estimasi Total Investasi</span>
              <p className="text-3xl sm:text-4xl font-black text-white font-heading mt-0.5">
                Rp {totalEstimate.toLocaleString('id-ID')}
              </p>
              <p className="text-[11px] text-brand-muted">Transparan & dapat disesuaikan kembali saat diskusi</p>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-primaryHover text-white font-bold text-sm shadow-stitch-glow hover:opacity-95 transition-all flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Kirim Rincian Estimasi ke WA</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
