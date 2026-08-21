export type CategoryId = 'all' | 'donuts' | 'cakes' | 'pastries' | 'breads' | 'beverages';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
  image: string;
}

export interface ProductOption {
  id: string;
  name: string;
  priceModifier: number; // e.g. 0 for single, +850 for box of 6
  popular?: boolean;
}

export interface ProductCustomizationGroup {
  id: string;
  title: string;
  type: 'select' | 'radio' | 'checkbox';
  options: ProductOption[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // base price in PKR (Rs.)
  category: CategoryId;
  images: string[];
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isEggless?: boolean;
  isHalal?: boolean;
  prepTimeMinutes?: number;
  calories?: number;
  ingredients: string[];
  customizations?: ProductCustomizationGroup[];
}
