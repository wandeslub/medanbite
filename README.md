# Medan Bites & Trails — Landing Page & Digital Media Kit 2026
> **Niche**: Kuliner & Wisata/Travel Kota Medan  
> **Tujuan**: Mengarahkan pengunjung untuk kolaborasi brand & melihat Media Kit  
> **Design Source**: Google Stitch UI (Fidelity 100% konsisten)

---

## 🌟 Fitur Unggulan

1. **Desain Google Stitch 100% Konsisten**:
   - Skema warna rempah Medan (`#E23E1D` Cabai Merah, `#D97706` Kunyit Gold, `#0D0E11` Deep Charcoal).
   - Bento-Grid visual layout untuk pilar konten & portofolio.
   - Glassmorphism sticky navbar & ambient lighting glow.
2. **Dua Alur Konversi Utama**:
   - **Unduh & Pratinjau Media Kit**: Pop-up modal interaktif, penangkapan kontak brand (*lead capture*), dan animasi selebrasi (*confetti*).
   - **Direct WhatsApp Chat**: Tombol order per paket (Foodie Spotlight, Ultimate Campaign, Travel & Staycation) dengan pesan otomatis terisi rapi.
3. **Kalkulator Estimasi Anggaran Kolaborasi**:
   - Slider kustom interaktif untuk video, story, whitelist ads, pin post, dan lokasi.
   - Tombol 1-klik kirim rincian kalkulasi langsung ke WhatsApp tim.
4. **Dokumen Digital Media Kit Siap Cetak ([media-kit.html](media-kit.html))**:
   - Format 3 halaman eksekutif siap cetak/simpan PDF (`@media print` stylesheet).
5. **Mini-CRM Dashboard Leads ([admin-leads.html](admin-leads.html))**:
   - Melihat daftar nama brand & nomor kontak yang meminta Media Kit.
   - Ekspor data leads ke CSV / Excel dan tombol cepat chat WhatsApp.
6. **Filter Portofolio Interaktif**:
   - Kategori: *Semua*, *Kuliner Resto*, *Cafe & Coffee*, *Hotel & Staycation*, *UMKM Oleh-Oleh*.
7. **FAQ Accordion**:
   - 5 jawaban transparan atas pertanyaan paling krusial dari brand manager & agency.

---

## 🚀 Cara Menjalankan Proyek

### Cara 1: Buka Langsung (Tanpa Node / Runtime)
Cukup klik dua kali file **`index.html`** di komputer Anda atau buka lewat browser Chrome / Safari.
- Landing Page: `index.html`
- Media Kit PDF View: `media-kit.html`
- Admin Leads CRM: `admin-leads.html`

### Cara 2: Menjalankan Versi Modular React + Vite
Pastikan Node.js terpasang di komputer Anda:
```bash
# 1. Masuk ke folder proyek
cd Wandeslub

# 2. Pasang dependensi
npm install

# 3. Jalankan development server
npm run dev
```
Buka browser di `http://localhost:5173`.

---

## 📁 Struktur Direktori

```
Wandeslub/
├── PLAN.md                     # Panduan komprehensif AI Coding Agent
├── README.md                   # Dokumentasi proyek
├── index.html                  # Landing page utama (Standalone)
├── media-kit.html              # Dokumen digital Media Kit (Print to PDF ready)
├── admin-leads.html            # Mini-CRM dashboard manajemen prospek brand
├── package.json                # Dependensi React, Tailwind, Lucide, Confetti
├── tailwind.config.js          # Konfigurasi token desain Stitch
├── tsconfig.json               # Konfigurasi TypeScript
├── vite.config.ts              # Konfigurasi Vite
├── robots.txt                  # SEO indexing rule
├── sitemap.xml                 # Search engine sitemap
└── src/
    ├── types/index.ts          # TypeScript interfaces
    ├── data/content.ts         # Data terpusat copy teks, stats, rate card & FAQs
    ├── utils/whatsapp.ts       # WhatsApp deep link builder
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Badge.tsx
    │   │   ├── MediaKitModal.tsx
    │   │   └── FloatingWhatsApp.tsx
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   └── sections/
    │       ├── HeroSection.tsx
    │       ├── StatsTicker.tsx
    │       ├── ContentPillars.tsx
    │       ├── AudienceInsights.tsx
    │       ├── PortfolioShowcase.tsx
    │       ├── PricingTiers.tsx
    │       ├── CampaignCalculator.tsx
    │       ├── Testimonials.tsx
    │       ├── FaqSection.tsx
    │       └── FinalCta.tsx
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

## 🌐 Panduan Deployment (Publikasi ke Internet)

### Deploy ke Vercel (Gratis & Sangat Cepat):
1. Install Vercel CLI (atau upload repository ke GitHub):
   ```bash
   npx vercel
   ```
2. Pilih default settings -> website langsung live dengan custom domain.

### Deploy ke Netlify:
1. Drag & drop folder `Wandeslub` langsung ke dashboard [Netlify Drop](https://app.netlify.com/drop).
2. Website aktif dalam waktu kurang dari 1 menit!

---

## 📞 Informasi Kontak Pengembang & Kreator
- **Brand**: Medan Bites & Trails
- **WhatsApp**: +62 812-3456-7890
- **Email**: partnership@medanbites.com
- **Lokasi**: Medan, Sumatera Utara
