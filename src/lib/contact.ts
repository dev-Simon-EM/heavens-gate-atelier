export const BUSINESS = {
  name: 'Heavens Gate Atelier',
  phoneDisplay: '+234 703 390 9781',
  phoneHref: 'tel:+2347033909781',
  whatsappNumber: '2347033909781',
  address: 'Bala Estate, Gishiri, Maitama Extension, Abuja, Nigeria',
  mapHref:
    'https://www.google.com/maps/search/?api=1&query=Bala+Estate%2C+Gishiri%2C+Maitama+Extension%2C+Abuja%2C+Nigeria',
} as const;

export const DEFAULT_ENQUIRY_MESSAGE =
  'Hello Heavens Gate Atelier. I would like to enquire about your services.';

export function buildWhatsAppUrl(message: string = DEFAULT_ENQUIRY_MESSAGE) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
