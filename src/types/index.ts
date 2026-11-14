export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface ContentPillar {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  span: 'single' | 'wide';
  accentColor: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  metrics: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue: string;
    secondaryLabel: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  description: string;
  startingPrice: string;
  featured?: boolean;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface Testimonial {
  quote: string;
  clientName: string;
  clientRole: string;
  rating: number;
}
