export type CompressionLevel = 'Light' | 'Medium' | 'Firm' | 'Ultra-Sculpt';

export type ProductColor = {
  name: string;
  hex: string;
  image: string;
};

export type ProductReview = {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  sizePurchased: string;
};

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: 'bodysuits' | 'waist-cinchers' | 'shorts' | 'everyday-support' | 'bras';
  compression: CompressionLevel;
  rating: number;
  reviewCount: number;
  description: string;
  benefits: string[];
  fabricCare: string[];
  colors: ProductColor[];
  sizes: string[];
  featuredImage: string;
  galleryImages: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  id: string; // unique item instance id: `${productId}-${color}-${size}`
  productId: string;
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
}
