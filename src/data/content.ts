import { MetricItem, ContentPillar, PortfolioItem, PricingTier, Testimonial } from '../types';

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const BRAND_CONFIG = {
  name: "MEDAN BITES & TRAILS",
  handle: "@medanbites",
  tagline: "Hyperlocal Culinary & Travel Creator",
  phone: "6281234567890", // Ganti dengan nomor WhatsApp pemilik
  email: "partnership@medanbites.com",
  location: "Medan, Sumatera Utara",
  socials: {
    instagram: "https://instagram.com/medanbites",
    tiktok: "https://tiktok.com/@medanbites",
    youtube: "https://youtube.com/@medanbites",
  }
};

export const STATS: MetricItem[] = [
  {
    value: "500K+",
    label: "Monthly Reach",
    description: "Total impresi organik per bulan"
  },
  {
    value: "150+",
    label: "Venue Terulas",
    description: "Resto, Cafe & Destinasi Wisata"
  },
  {
    value: "94%",
    label: "Tingkat Rekomendasi",
    description: "Audiens percaya review jujur kami"
  },
  {
    value: "4.9/5",
    label: "Kepuasan Klien Brand",
    description: "Berdasarkan 50+ kemitraan sukses"
  }
];

export const PILLARS: ContentPillar[] = [
  {
    title: "Street Food Legendaris & Hidden Gems",
    category: "Paling Viral",
    description: "Liputan otentik penjual makanan legendaris: Bihun Bebek, Lontong Kak Lin, Soto Kesawan, hingga gerai durian favorit yang selalu menjadi buruan wisatawan.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
    span: "wide",
    accentColor: "border-brand-primary/40 text-brand-primary"
  },
  {
    title: "Modern Cafe & Bakery Hits",
    category: "Lifestyle",
    description: "Sorotan estetika tempat nongkrong, suasana kerja, dan menu andalan cafe kekinian anak muda Medan.",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80",
    span: "single",
    accentColor: "border-brand-accent/40 text-brand-accent"
  },
  {
    title: "Hotel Heritage & Staycation",
    category: "Hospitality",
    description: "Review komprehensif kenyamanan kamar, fasilitas, dan pengalaman menginap hotel di pusat kota Medan.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80",
    span: "single",
    accentColor: "border-emerald-500/40 text-emerald-400"
  },
  {
    title: "Rute Wisata Medan - Berastagi - Danau Toba",
    category: "Weekend Escape",
    description: "Panduan perjalanan komplit bagi turis domestik dan mancanegara: spot foto spektakuler, oleh-oleh khas, hingga penginapan bernuansa alam.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    span: "wide",
    accentColor: "border-brand-primary/40 text-brand-primary"
  }
];

export const PORTFOLIO: (PortfolioItem & { categoryKey: string })[] = [
  {
    title: "Peluncuran Menu Baru Resto Seafood Medan",
    category: "Kuliner Restoran",
    categoryKey: "resto",
    description: "Memproduksi 1 Reels cinematic berdurasi 75 detik yang menonjolkan kepiting saus Padang dan aroma bakar khas.",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
    metrics: {
      primaryValue: "1.4M",
      primaryLabel: "Organik Video Views",
      secondaryValue: "+320%",
      secondaryLabel: "Antrean di Weekend 1"
    }
  },
  {
    title: "Staycation Boutique Hotel Kesawan",
    category: "Hotel & Staycation",
    categoryKey: "hotel",
    description: "Paket video tour arsitektur kolonial, menu sarapan khas Melayu Deli, dan lokasi strategis dekat Istana Maimun.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80",
    metrics: {
      primaryValue: "920+",
      primaryLabel: "DM Reservasi Masuk",
      secondaryValue: "95%",
      secondaryLabel: "Okupansi Kamar Liburan"
    }
  },
  {
    title: "Kampanye Pancake Durian & Bolu Gulung",
    category: "UMKM & Oleh-Oleh",
    categoryKey: "retail",
    description: "Menghadirkan visual proses pembuatan fresh harian dan fitur pengiriman kilat untuk traveler yang pulang lewat Kualanamu.",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
    metrics: {
      primaryValue: "4.8K+",
      primaryLabel: "Save & Share Post",
      secondaryValue: "+180%",
      secondaryLabel: "Order Pengiriman Luar Kota"
    }
  },
  {
    title: "Kopi Tiam & Toast Legendaris Kesawan",
    category: "Cafe & Coffee",
    categoryKey: "cafe",
    description: "Mengangkat suasana sarapan tempo doeloe dengan kopi saring mentega dan roti bakar srikaya buatan rumahan.",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80",
    metrics: {
      primaryValue: "850K",
      primaryLabel: "Video Impressions",
      secondaryValue: "+240%",
      secondaryLabel: "Pelanggan Pagi Hari"
    }
  },
  {
    title: "Weekend Escape Villa Pegunungan Berastagi",
    category: "Hotel & Staycation",
    categoryKey: "hotel",
    description: "Eksplorasi panorama Gunung Sinabung, udara sejuk, dan fasilitas api unggun BBQ keluarga.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=700&q=80",
    metrics: {
      primaryValue: "1.1M",
      primaryLabel: "Total Tayangan",
      secondaryValue: "100%",
      secondaryLabel: "Fully Booked 4 Weekend"
    }
  },
  {
    title: "Kampanye Mie Aceh Kepiting & Soto Rempah",
    category: "Kuliner Restoran",
    categoryKey: "resto",
    description: "Menampilkan atraksi racik bumbu rempah panas di wajan besar dengan visual audio ASMR mendidih.",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
    metrics: {
      primaryValue: "1.8M",
      primaryLabel: "Viral Views",
      secondaryValue: "+400%",
      secondaryLabel: "Porsi Terjual per Hari"
    }
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "foodie-spotlight",
    name: "Foodie Spotlight",
    badge: "Starter",
    description: "Cocok untuk menu baru cafe, promo opening, atau review hidangan signature resto.",
    startingPrice: "Rp 2.500.000",
    featured: false,
    features: [
      "1x Video Reels / TikTok (Durasi 60-90 detik, 4K)",
      "3x Instagram Story bersambung + swipe-up link lokasi",
      "Google Maps Local Guide Review (Foto & Rating Bintang 5)",
      "Laporan Insight analitik setelah 7 hari penayangan"
    ],
    ctaText: "Pilih Paket Foodie",
    whatsappMessage: "Halo Medan Bites! Saya berminat untuk memesan Paket 1: Foodie Spotlight. Mohon informasi jadwal slot visit terdekat."
  },
  {
    id: "ultimate-campaign",
    name: "Ultimate Brand Campaign",
    badge: "Paling Diminati Brand",
    description: "Solusi all-in-one untuk grand opening resto besar, peluncuran produk FMCG, atau hotel baru.",
    startingPrice: "Rp 5.500.000",
    featured: true,
    features: [
      "2x Video Multi-Platform (Reels + TikTok + YT Shorts)",
      "5x Instagram Story + Q&A interaktif polling",
      "Pin Post selama 14 Hari di baris teratas profil kami",
      "Hak Lisensi Digital Ads (Whitelist) selama 30 hari",
      "Masuk dalam Highlight Khusus 'Rekomendasi Kuliner Medan'"
    ],
    ctaText: "Konsultasikan Kampanye Ini",
    whatsappMessage: "Halo Medan Bites! Saya ingin mengonsultasikan Paket 2: Ultimate Brand Campaign untuk peluncuran kampanye brand kami."
  },
  {
    id: "travel-staycation",
    name: "Travel & Staycation",
    badge: "Hospitality & Tourism",
    description: "Didedikasikan untuk hotel bintang, resort di Berastagi/Toba, dan biro perjalanan wisata.",
    startingPrice: "Rp 8.000.000",
    featured: false,
    features: [
      "1x Full Staycation Cinematic Vlog (2-3 Menit)",
      "Liputan lengkap: Kamar, Dining / Sarapan, Kolam & Fasilitas",
      "Paket 10 Foto High-Res bebas hak cipta untuk aset media sosial hotel",
      "Promosi kode voucher booking eksklusif audiens"
    ],
    ctaText: "Book Jadwal Visit Hotel",
    whatsappMessage: "Halo Medan Bites! Kami dari manajemen hotel/resort ingin mendiskusikan Paket 3: Travel & Hospitality Experience."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Efek videonya luar biasa! Di hari kedua setelah reels tayang, resto kami kebanjiran pelanggan baru yang bawa screenshot video mereka. Penjualan menu kepiting naik 3 kali lipat.",
    clientName: "Hendro Budiman",
    clientRole: "Owner Restoran Seafood Kesawan",
    rating: 5
  },
  {
    quote: "Sangat profesional dalam pengambilan angle video hotel kami. Mereka tahu persis spot mana yang disukai traveler anak muda. Okupansi weekend kami mencapai titik tertinggi tahun ini.",
    clientName: "Siti Nurhaliza",
    clientRole: "Marketing Manager Boutique Hotel Medan",
    rating: 5
  },
  {
    quote: "Kreator kuliner Medan yang paling komunikatif. Laporan performa analitik dikirim tepat waktu setelah kampanye selesai. Sangat direkomendasikan untuk brand yang butuh angka nyata.",
    clientName: "Albert Wijaya",
    clientRole: "Brand Lead Cafe & Roastery Medan",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Berapa lama estimasi pengerjaan konten dari visit hingga tayang?",
    answer: "Rata-rata proses produksi membutuhkan waktu 3 hingga 5 hari kerja setelah sesi kunjungan/syuting. Kami memberikan waktu 1x24 jam bagi pihak brand untuk meninjau (preview) draft video dan mengajukan revisi minor sebelum konten dipublikasikan secara resmi."
  },
  {
    id: 2,
    question: "Apakah brand boleh menggunakan video untuk iklan berbayar (Digital Ads / Whitelisting)?",
    answer: "Ya, tentu saja! Hak lisensi iklan komersial (whitelisting di Meta Ads / TikTok Ads) sudah termasuk secara otomatis selama 30 hari dalam Paket Ultimate Brand Campaign. Untuk paket Starter, add-on hak iklan tersedia dengan penyesuaian biaya yang bersahabat."
  },
  {
    id: 3,
    question: "Bagaimana tahapan pembayaran dan reservasi tanggal visit?",
    answer: "Skema pembayaran kami sangat aman: Down Payment (DP) 50% dibayarkan saat penguncian tanggal jadwal visit, dan pelunasan 50% dilakukan setelah draft video disetujui (sebelum penayangan di media sosial). Kami menyediakan invoice resmi dan kwitansi berbadan hukum."
  },
  {
    id: 4,
    question: "Apakah menerima ulasan tempat kuliner di luar Kota Medan?",
    answer: "Tentu! Kami rutin meliput destinasi kuliner dan wisata di seluruh penjuru Sumatera Utara, seperti Berastagi, Danau Toba, Bukit Lawang, Pematangsiantar, hingga Samosir. Akomodasi dan transportasi luar kota akan disesuaikan secara transparan dalam penawaran."
  },
  {
    id: 5,
    question: "Bagaimana kebijakan seputar kuliner Halal dan Non-Halal?",
    answer: "Kami menjunjung tinggi kejujuran informasi bagi audiens majemuk di Medan. Setiap konten selalu dilengkapi dengan label status makanan yang jelas dan tegas di detik-detik awal video (Halal Certified / No Pork No Lard / Non-Halal Discovery) sehingga audiens dapat memilih sesuai preferensi masing-masing."
  }
];
