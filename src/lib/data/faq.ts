export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'delivery' | 'ordering' | 'products' | 'custom';
}

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where in Quetta do you deliver?',
    answer: 'We deliver to all major Quetta residential and commercial areas including Jinnah Town, Satellite Town, Airport Road, Cantt, Samungli Road, Brewery Road, Sariab Road, Model Town, Zarghoon Road, Shahbaz Town, and Serena area. Currently we do not ship outside Quetta city.',
    category: 'delivery'
  },
  {
    id: 'faq-2',
    question: 'How fast is delivery after placing an order?',
    answer: 'Standard fresh box delivery takes approximately 35 to 45 minutes depending on your Quetta location. All donuts and pastries are packed fresh directly from our Shahbaz Town kitchen upon order confirmation.',
    category: 'delivery'
  },
  {
    id: 'faq-3',
    question: 'What is the delivery fee in Quetta?',
    answer: 'We charge a flat delivery fee of Rs. 150 for all orders under Rs. 1,500. Orders above Rs. 1,500 get FREE home delivery anywhere within Quetta city limits!',
    category: 'delivery'
  },
  {
    id: 'faq-4',
    question: 'Are all products 100% Halal and fresh daily?',
    answer: 'Yes! All our ingredients are 100% Halal certified, premium quality, and we bake fresh dough batches every single morning at 7:30 AM. Any unsold dough at the end of the day is donated to local Quetta charities.',
    category: 'products'
  },
  {
    id: 'faq-5',
    question: 'Do you offer Eggless options?',
    answer: 'Yes! We have dedicated eggless donut flavors (including Pistachio Cardamom and Lotus Biscoff) as well as eggless Red Velvet cakes clearly tagged on our menu.',
    category: 'products'
  },
  {
    id: 'faq-6',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash on Delivery (COD), JazzCash, EasyPaisa, and Credit/Debit cards upon delivery or online mockup at checkout.',
    category: 'ordering'
  },
  {
    id: 'faq-7',
    question: 'Can I order custom box mixes or party catering in Quetta?',
    answer: 'Absolutely! You can choose custom single, box of 6, or box of 12 donut assortments. For large wedding or corporate events in Quetta, contact us via WhatsApp (03048844719).',
    category: 'custom'
  }
];

export async function getFaqs(): Promise<FAQItem[]> {
  return MOCK_FAQS;
}
