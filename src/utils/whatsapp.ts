import { BRAND_CONFIG } from '../data/content';

export const generateWhatsAppLink = (customMessage?: string): string => {
  const defaultText = "Halo Medan Bites! Saya tertarik untuk mendiskusikan peluang kolaborasi brand kuliner/travel di Medan.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${BRAND_CONFIG.phone}?text=${text}`;
};

export const openWhatsAppChat = (customMessage?: string): void => {
  const url = generateWhatsAppLink(customMessage);
  window.open(url, '_blank');
};
