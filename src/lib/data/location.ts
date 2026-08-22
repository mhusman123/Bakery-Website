export interface BakeryLocation {
  id: string;
  name: string;
  area: string;
  displayName: string;
  image: string;
  address: string;
  landmark: string;
  city: string;
  province: string;
  country: string;
  phone: string;
  phoneTel: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  onlineOrderingCutoff: string;
  preorderPickupHours: string;
  dineInHours: string;
  deliveryHours: string;
  freshBakeTimes: string[];
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export const QUETTA_MAIN_LOCATION: BakeryLocation = {
  id: 'quetta-shahbaz-town',
  name: "Porto's Donuts Bakery",
  area: 'Shahbaz Town',
  displayName: 'QUETTA — SHAHBAZ TOWN',
  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
  address: 'Shop No 2, Shahbaz Town, Near Agha Pharmacy',
  landmark: 'Near Agha Pharmacy, Shahbaz Town',
  city: 'Quetta',
  province: 'Balochistan',
  country: 'Pakistan',
  phone: '0304 8844719',
  phoneTel: '+923048844719',
  whatsapp: '0304 8844719',
  whatsappUrl: 'https://wa.me/923048844719?text=Hello%20Porto%27s%20Donuts%20Quetta,%20I%20would%20like%20to%20place%20an%20order',
  email: 'hello@portosdonuts.pk',
  onlineOrderingCutoff: 'Online orders accepted until 10:00 PM daily',
  preorderPickupHours: '8:00 AM – 10:30 PM (Daily)',
  dineInHours: '8:00 AM – 11:30 PM (Monday – Sunday)',
  deliveryHours: '8:30 AM – 10:30 PM (35-45 min Quetta express delivery)',
  freshBakeTimes: ['7:30 AM (Morning Warm Batch)', '3:00 PM (Afternoon Fresh Batch)'],
  googleMapsUrl: 'https://maps.google.com/?q=Shop+No+2+Shahbaz+Town+Near+Agha+Pharmacy+Quetta+Balochistan+Pakistan',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110190.23721345914!2d66.9538356!3d30.1832704!2m3!1f0d0f3f0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2df8083818e69%3A0x6b24d773229b4334!2sQuetta%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s'
};

export const CORE_QUETTA_COVERAGE_ZONES = [
  'Jinnah Town',
  'Satellite Town',
  'Airport Road',
  'Cantt Area',
  'Samungli Road',
  'Brewery Road',
  'Sariab Road',
  'Chiltan Housing Scheme',
  'Model Town',
  'Zarghoon Road'
] as const;
