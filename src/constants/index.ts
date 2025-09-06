// Application constants

export const APP_CONFIG = {
  name: 'Footsteps Furniture Company Limited',
  shortName: 'Footsteps Furniture',
  description: 'Professional furniture catalog featuring office, kitchen, sitting room, dining room, and bedroom furniture.',
  version: '1.0.0',
  author: 'Footsteps Furniture Team',
} as const;

export const CONTACT_INFO = {
  phone: '+256 123 456 789',
  email: 'sales@footstepsfurniture.com',
  address: {
    street: '123 Furniture Street',
    city: 'Kampala',
    country: 'Uganda',
  },
  businessHours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 5:00 PM',
    sunday: '10:00 AM - 4:00 PM',
  },
} as const;

export const CATEGORIES = [
  {
    id: 'home-office',
    name: 'Home Office',
    description: 'Professional furniture for your workspace',
    subcategories: ['Office Chairs', 'Desks', 'Storage'],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    description: 'Modern kitchen furniture and storage',
    subcategories: ['Cabinets', 'Stools', 'Dining Sets'],
  },
  {
    id: 'sitting-room',
    name: 'Sitting Room',
    description: 'Comfortable seating and living room furniture',
    subcategories: ['Sofas', 'Recliners', 'Coffee Tables'],
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    description: 'Elegant dining furniture for family gatherings',
    subcategories: ['Dining Tables', 'Chairs', 'Sideboards'],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    description: 'Restful bedroom furniture and storage',
    subcategories: ['Beds', 'Wardrobes', 'Dressers'],
  },
] as const;

export const FEATURES = [
  {
    title: 'Quality Craftsmanship',
    description: 'Premium materials and expert construction for lasting durability',
    icon: 'Award',
  },
  {
    title: 'Customer Focused',
    description: 'Personalized service and custom solutions for your needs',
    icon: 'Users',
  },
  {
    title: 'Free Delivery',
    description: 'Complimentary delivery and setup within Kampala',
    icon: 'Truck',
  },
  {
    title: '5-Year Warranty',
    description: 'Comprehensive warranty on all our furniture products',
    icon: 'Star',
  },
] as const;

export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const STORAGE_KEYS = {
  cart: 'footsteps_cart',
  wishlist: 'footsteps_wishlist',
  compare: 'footsteps_compare',
  recentlyViewed: 'footsteps_recently_viewed',
  preferences: 'footsteps_preferences',
} as const;
