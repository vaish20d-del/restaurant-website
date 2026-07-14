export type MenuCategory =
  | 'Breakfast'
  | 'Salads'
  | 'Protein Bowls'
  | 'Smoothies'
  | 'Wraps'
  | 'Soups'
  | 'Healthy Desserts'
  | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  category: MenuCategory;
  image: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  prepTime: string; // e.g. "10 mins"
  ingredients: string[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  specialRequests?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'ingredients' | 'dishes' | 'chef' | 'customers' | 'kitchen';
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface LifestyleTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  fullContent: string;
  image: string;
  date: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
