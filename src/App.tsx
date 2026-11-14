import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { StatsTicker } from './components/sections/StatsTicker';
import { ContentPillars } from './components/sections/ContentPillars';
import { AudienceInsights } from './components/sections/AudienceInsights';
import { PortfolioShowcase } from './components/sections/PortfolioShowcase';
import { PricingTiers } from './components/sections/PricingTiers';
import { CampaignCalculator } from './components/sections/CampaignCalculator';
import { Testimonials } from './components/sections/Testimonials';
import { FaqSection } from './components/sections/FaqSection';
import { FinalCta } from './components/sections/FinalCta';
import { Footer } from './components/layout/Footer';
import { MediaKitModal } from './components/ui/MediaKitModal';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export function App() {
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark text-[#F3F4F6] relative antialiased selection:bg-brand-primary selection:text-white">
      {/* Ambient Lighting Gradients (Google Stitch Visual Signature) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] gradient-radial-spice"></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] gradient-gold-subtle"></div>
      </div>

      {/* Navigation */}
      <Navbar onOpenMediaKit={() => setIsMediaKitOpen(true)} />

      {/* Main Sections */}
      <main>
        <HeroSection onOpenMediaKit={() => setIsMediaKitOpen(true)} />
        <StatsTicker />
        <ContentPillars />
        <AudienceInsights onOpenMediaKit={() => setIsMediaKitOpen(true)} />
        <PortfolioShowcase />
        <PricingTiers />
        <CampaignCalculator />
        <Testimonials />
        <FaqSection />
        <FinalCta onOpenMediaKit={() => setIsMediaKitOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Media Kit Modal */}
      <MediaKitModal
        isOpen={isMediaKitOpen}
        onClose={() => setIsMediaKitOpen(false)}
      />
    </div>
  );
}

export default App;
