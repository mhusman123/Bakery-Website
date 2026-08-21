export const QUETTA_BAKERY_LOCATION = {
  city: "Quetta",
  province: "Balochistan",
  country: "Pakistan",
  address: "Plot 14-B, Jinnah Town Main Boulevard, Near Serena Gate, Quetta",
  phone: "+92 333 7819021",
  whatsapp: "+923337819021",
  whatsappDisplay: "+92 333 781 9021",
  email: "hello@portosdonuts.pk",
  openingHours: "Mon - Sun: 8:00 AM - 11:30 PM",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110190.23721345914!2d66.9538356!3d30.1832704!2m3!1f0d0f3f0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2df8083818e69%3A0x6b24d773229b4334!2sQuetta%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
};

export const QUETTA_DELIVERY_ZONES = [
  "Jinnah Town",
  "Satellite Town",
  "Airport Road",
  "Cantt Area",
  "Samungli Road",
  "Brewery Road",
  "Sariab Road",
  "Chiltan Housing Scheme",
  "Model Town",
  "Zarghoon Road",
  "Shahbaz Town",
  "Serena Hotel Area",
  "Nawa Killi",
  "Gulshan-e-Iqbal Town",
  "Spinny Road",
  "Kasi Road"
] as const;

export type QuettaDeliveryZone = typeof QUETTA_DELIVERY_ZONES[number];

export const FLAT_DELIVERY_FEE_PKR = 150;
export const FREE_DELIVERY_THRESHOLD_PKR = 1500;
export const ESTIMATED_DELIVERY_MINS = "35 - 45 Mins";
