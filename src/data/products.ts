import { Product } from '../types';

// Sample products - in a real app, this would come from an API
export const products: Product[] = [
  // Home Office Products
  {
    id: 'ho-001',
    name: 'Executive Leather Office Chair',
    description: 'Premium leather executive chair with ergonomic design and lumbar support. Perfect for long working hours.',
    category: 'home-office',
    subcategory: 'office-chairs',
    images: [
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '65cm W x 70cm D x 110-120cm H',
      material: 'Genuine Leather, Steel Frame',
      color: 'Black',
      weight: '25kg',
      style: 'Executive',
    },
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isNew: true,
    tags: ['ergonomic', 'leather', 'executive', 'adjustable'],
  },
  {
    id: 'ho-002',
    name: 'Modern Standing Desk',
    description: 'Height-adjustable standing desk with electric motor. Promotes healthy working posture.',
    category: 'home-office',
    subcategory: 'desks',
    images: [
      'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '120cm W x 60cm D x 70-120cm H',
      material: 'Engineered Wood, Steel Frame',
      color: 'Walnut',
      weight: '35kg',
      style: 'Modern',
    },
    rating: 4.6,
    reviews: 89,
    inStock: true,
    discount: 15,
    tags: ['standing', 'adjustable', 'electric', 'modern'],
  },
  // Kitchen Products
  {
    id: 'k-001',
    name: 'Modern Kitchen Cabinet Set',
    description: 'Complete kitchen cabinet set with soft-close doors and drawers. Includes wall and base units.',
    category: 'kitchen',
    subcategory: 'cabinets',
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: 'Various sizes available',
      material: 'MDF with Laminate Finish',
      color: 'White',
      style: 'Modern',
    },
    rating: 4.7,
    reviews: 156,
    inStock: true,
    tags: ['cabinet', 'kitchen', 'modern', 'storage'],
  },
  {
    id: 'k-002',
    name: 'Bar Stool Set',
    description: 'Set of 2 adjustable bar stools with comfortable padding and footrest.',
    category: 'kitchen',
    subcategory: 'stools',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '40cm W x 40cm D x 60-80cm H',
      material: 'PU Leather, Chrome Base',
      color: 'Brown',
      style: 'Contemporary',
    },
    rating: 4.4,
    reviews: 73,
    inStock: true,
    tags: ['bar stool', 'adjustable', 'set of 2', 'contemporary'],
  },
  // Sitting Room Products
  {
    id: 'sr-001',
    name: 'Luxury 3-Seater Sofa',
    description: 'Comfortable 3-seater sofa with premium fabric upholstery and solid wood frame.',
    category: 'sitting-room',
    subcategory: 'sofas',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '200cm W x 90cm D x 85cm H',
      material: 'Premium Fabric, Solid Wood Frame',
      color: 'Grey',
      style: 'Contemporary',
    },
    rating: 4.9,
    reviews: 203,
    inStock: true,
    isNew: true,
    tags: ['sofa', '3-seater', 'luxury', 'comfortable'],
  },
  {
    id: 'sr-002',
    name: 'Glass Coffee Table',
    description: 'Modern glass coffee table with chrome legs. Perfect centerpiece for any living room.',
    category: 'sitting-room',
    subcategory: 'coffee-tables',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '120cm W x 60cm D x 45cm H',
      material: 'Tempered Glass, Chrome Steel',
      color: 'Clear',
      style: 'Modern',
    },
    rating: 4.5,
    reviews: 91,
    inStock: true,
    tags: ['coffee table', 'glass', 'modern', 'chrome'],
  },
  // Dining Room Products
  {
    id: 'dr-001',
    name: 'Solid Wood Dining Table',
    description: 'Handcrafted solid wood dining table that seats 6 people comfortably.',
    category: 'dining-room',
    subcategory: 'dining-tables',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '180cm W x 90cm D x 75cm H',
      material: 'Solid Oak Wood',
      color: 'Natural Oak',
      style: 'Traditional',
    },
    rating: 4.8,
    reviews: 167,
    inStock: true,
    tags: ['dining table', 'solid wood', 'seats 6', 'handcrafted'],
  },
  {
    id: 'dr-002',
    name: 'Upholstered Dining Chairs',
    description: 'Set of 4 comfortable dining chairs with upholstered seats and solid wood legs.',
    category: 'dining-room',
    subcategory: 'chairs',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '45cm W x 50cm D x 85cm H',
      material: 'Fabric Upholstery, Solid Wood',
      color: 'Beige',
      style: 'Contemporary',
    },
    rating: 4.6,
    reviews: 134,
    inStock: true,
    tags: ['dining chairs', 'upholstered', 'set of 4', 'comfortable'],
  },
  // Bedroom Products
  {
    id: 'br-001',
    name: 'King Size Platform Bed',
    description: 'Modern platform bed with built-in nightstands and LED lighting.',
    category: 'bedroom',
    subcategory: 'beds',
    images: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '200cm W x 220cm D x 100cm H',
      material: 'Engineered Wood, LED Lights',
      color: 'White',
      style: 'Modern',
    },
    rating: 4.7,
    reviews: 198,
    inStock: true,
    isNew: true,
    tags: ['king size', 'platform bed', 'LED lighting', 'modern'],
  },
  {
    id: 'br-002',
    name: '4-Door Wardrobe',
    description: 'Spacious 4-door wardrobe with hanging space, shelves, and drawers.',
    category: 'bedroom',
    subcategory: 'wardrobes',
    images: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    specifications: {
      dimensions: '200cm W x 60cm D x 220cm H',
      material: 'MDF with Melamine Finish',
      color: 'Oak',
      style: 'Contemporary',
    },
    rating: 4.5,
    reviews: 112,
    inStock: true,
    tags: ['wardrobe', '4-door', 'spacious', 'storage'],
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsBySubcategory = (categoryId: string, subcategory: string): Product[] => {
  return products.filter(
    product => product.category === categoryId && product.subcategory === subcategory
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isNew || product.discount).slice(0, 8);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};