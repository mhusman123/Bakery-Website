export interface Testimonial {
  id: string;
  name: string;
  location: string; // Quetta town (e.g. Jinnah Town, Quetta)
  rating: number;
  comment: string;
  avatar: string;
  favoriteItem: string;
  date: string;
}

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Tariq Kasi',
    location: 'Jinnah Town, Quetta',
    rating: 5,
    comment: 'The Quetta Hazelnut Rocher Donut is legendary! We ordered 2 boxes for a hospital staff meeting and every single person was blown away. Fast delivery within 35 minutes to Jinnah Town!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    favoriteItem: 'Quetta Hazelnut Rocher Donut',
    date: '2 days ago'
  },
  {
    id: 't-2',
    name: 'Fatima Zafar',
    location: 'Cantt Area, Quetta',
    rating: 5,
    comment: 'Finally a bakery in Quetta that takes fresh baking seriously! Their French butter croissants are so flaky and authentic. Paired with Karak Chai, it is my daily morning routine.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    favoriteItem: 'Golden French Butter Croissant',
    date: '1 week ago'
  },
  {
    id: 't-3',
    name: 'Ahmed Shah',
    location: 'Satellite Town, Quetta',
    rating: 5,
    comment: 'Ordered the Belgian Dark Chocolate Fudge cake for my daughter’s birthday. Delivered in pristine condition to Satellite Town. Tasted like luxury chocolate melt!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    favoriteItem: 'Belgian Dark Chocolate Fudge Cake',
    date: '3 days ago'
  },
  {
    id: 't-4',
    name: 'Zainab Baloch',
    location: 'Samungli Road, Quetta',
    rating: 5,
    comment: 'The Pistachio Cardamom Donut is unbelievable. The local cardamom aroma with white chocolate is pure perfection. Quetta finally has world-class donuts!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    favoriteItem: 'Pistachio & Cardamom Royal Donut',
    date: '5 days ago'
  }
];

export async function getTestimonials(): Promise<Testimonial[]> {
  return MOCK_TESTIMONIALS;
}
