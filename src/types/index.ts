export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  images: string[];
  specifications: {
    dimensions: string;
    material: string;
    color: string;
    weight?: string;
    style: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: string[];
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface QuoteRequest {
  id: string;
  productId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message: string;
  timestamp: string;
  status: 'pending' | 'responded' | 'closed';
}