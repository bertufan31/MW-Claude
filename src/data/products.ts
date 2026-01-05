// Sample products for Manifesting Works
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'crystals' | 'sage' | 'palo-santo' | 'vases' | 'cards' | 'bundles';
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  inStock: boolean;
  stockCount?: number;
  details?: string[];
  bundleItems?: string[];
}

export const products: Product[] = [
  {
    id: 'starter-pack',
    name: 'Manifestation Starter Pack',
    description: 'Begin your manifestation journey with this carefully curated bundle. Includes a powerful crystal, cleansing sage, sacred palo santo, an elegant vase, and our exclusive tarot-themed manifesting cards featuring adorable cat illustrations.',
    price: 79.99,
    originalPrice: 99.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bundles',
    featured: true,
    bestseller: true,
    inStock: true,
    stockCount: 50,
    details: [
      'Hand-selected clear quartz crystal for amplifying intentions',
      'California white sage bundle for cleansing',
      'Ethically sourced palo santo sticks',
      'Handcrafted ceramic vase',
      'Full deck of 44 manifesting cards with cat illustrations'
    ],
    bundleItems: ['Clear Quartz Crystal', 'White Sage Bundle', 'Palo Santo Sticks (3)', 'Ceramic Intention Vase', 'Cat Tarot Manifesting Cards']
  },
  {
    id: 'clear-quartz',
    name: 'Clear Quartz Master Healer',
    description: 'Known as the master healer, clear quartz amplifies energy and intention. Perfect for manifestation work and crystal grids.',
    price: 24.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'crystals',
    bestseller: true,
    inStock: true,
    stockCount: 100,
    details: [
      'Ethically sourced from Brazil',
      'Each crystal is unique',
      'Approximately 2-3 inches',
      'Comes with care instructions'
    ]
  },
  {
    id: 'rose-quartz',
    name: 'Rose Quartz Love Stone',
    description: 'The stone of unconditional love. Rose quartz opens the heart chakra and attracts love, self-love, and deep inner healing.',
    price: 22.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'crystals',
    new: true,
    inStock: true,
    stockCount: 75,
    details: [
      'Ethically sourced from Madagascar',
      'Beautiful pink hue',
      'Approximately 2-3 inches',
      'Perfect for love manifestations'
    ]
  },
  {
    id: 'amethyst',
    name: 'Amethyst Intuition Crystal',
    description: 'Enhance your intuition and spiritual awareness with this stunning amethyst. Perfect for meditation and psychic development.',
    price: 28.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'crystals',
    inStock: true,
    stockCount: 60,
    details: [
      'Deep purple color',
      'Natural formation',
      'Approximately 2-4 inches',
      'Ideal for third eye activation'
    ]
  },
  {
    id: 'white-sage-bundle',
    name: 'California White Sage Bundle',
    description: 'Cleanse your space and aura with our ethically harvested California white sage. Perfect for clearing negative energy before manifestation rituals.',
    price: 12.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    category: 'sage',
    bestseller: true,
    inStock: true,
    stockCount: 200,
    details: [
      'Ethically wild-harvested in California',
      'Approximately 4-5 inches long',
      'Tightly bundled for even burning',
      'Includes smudging instructions'
    ]
  },
  {
    id: 'sage-rose-petals',
    name: 'Rose Petal Sage Bundle',
    description: 'White sage infused with dried rose petals for a beautiful, love-attracting cleansing ritual. Perfect for self-love and romance manifestations.',
    price: 16.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    category: 'sage',
    new: true,
    inStock: true,
    stockCount: 80,
    details: [
      'White sage with organic rose petals',
      'Sweet, floral aroma',
      'Perfect for love rituals',
      'Approximately 4 inches'
    ]
  },
  {
    id: 'palo-santo-sticks',
    name: 'Palo Santo Sacred Wood',
    description: 'Holy wood from Peru, traditionally used for purification and attracting positive energy. Light before your manifestation practice.',
    price: 14.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    category: 'palo-santo',
    bestseller: true,
    inStock: true,
    stockCount: 150,
    details: [
      'Sustainably sourced from Peru',
      'Pack of 5 sticks',
      'Sweet, warm aroma',
      'Naturally fallen wood only'
    ]
  },
  {
    id: 'ceramic-moon-vase',
    name: 'Crescent Moon Ceramic Vase',
    description: 'Beautiful handcrafted ceramic vase in a crescent moon design. Perfect for holding your sage, palo santo, or as a crystal display piece.',
    price: 34.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'vases',
    new: true,
    inStock: true,
    stockCount: 40,
    details: [
      'Handmade ceramic',
      'Moon phase design',
      'Approximately 5 inches tall',
      'Food-safe glaze'
    ]
  },
  {
    id: 'intention-vase',
    name: 'Intention Holder Vase',
    description: 'A minimalist ceramic vase designed to hold your written intentions, crystals, or sacred tools. Features engraved affirmation text.',
    price: 29.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    category: 'vases',
    inStock: true,
    stockCount: 55,
    details: [
      'Matte finish ceramic',
      'Engraved with "I Am Manifesting"',
      'Approximately 4 inches tall',
      'Perfect desk accessory'
    ]
  },
  {
    id: 'cat-tarot-cards',
    name: 'Cat Tarot Manifesting Cards',
    description: 'Our signature deck of 44 manifesting cards featuring adorable cat illustrations with powerful affirmations and manifestation prompts. Draw a card daily to guide your practice.',
    price: 38.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'cards',
    featured: true,
    bestseller: true,
    inStock: true,
    stockCount: 120,
    details: [
      '44 unique cards with cat illustrations',
      'Gold foil details',
      'Includes guidebook',
      'Comes in beautiful keepsake box',
      'Perfect for daily draws'
    ]
  },
  {
    id: 'abundance-crystal-set',
    name: 'Abundance Crystal Set',
    description: 'Attract wealth and prosperity with this powerful trio: citrine for abundance, pyrite for manifestation, and green aventurine for opportunity.',
    price: 45.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'crystals',
    new: true,
    inStock: true,
    stockCount: 35,
    details: [
      'Citrine, Pyrite, and Green Aventurine',
      'Comes in velvet pouch',
      'Includes crystal guide',
      'Perfect for money manifestation'
    ]
  },
  {
    id: 'cleansing-kit',
    name: 'Ultimate Cleansing Kit',
    description: 'Everything you need to cleanse your space, crystals, and aura. Includes sage, palo santo, selenite wand, and abalone shell.',
    price: 49.99,
    originalPrice: 59.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'bundles',
    inStock: true,
    stockCount: 45,
    bundleItems: ['White Sage Bundle', 'Palo Santo (3 sticks)', 'Selenite Wand', 'Abalone Shell', 'Feather'],
    details: [
      'Complete cleansing ritual set',
      'All ethically sourced',
      'Includes instruction guide',
      'Beautiful gift packaging'
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'bundles', name: 'Bundles & Sets', count: products.filter(p => p.category === 'bundles').length },
  { id: 'crystals', name: 'Crystals', count: products.filter(p => p.category === 'crystals').length },
  { id: 'sage', name: 'Sage', count: products.filter(p => p.category === 'sage').length },
  { id: 'palo-santo', name: 'Palo Santo', count: products.filter(p => p.category === 'palo-santo').length },
  { id: 'vases', name: 'Vases', count: products.filter(p => p.category === 'vases').length },
  { id: 'cards', name: 'Manifesting Cards', count: products.filter(p => p.category === 'cards').length },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(p => p.bestseller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.new);
};
