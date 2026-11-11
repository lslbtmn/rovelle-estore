import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'rovelle-signature-thong-suit',
    name: 'Signature Seamless Thong Bodysuit',
    subtitle: 'Targeted midsection smoothing with second-skin contouring',
    price: 64,
    originalPrice: 85,
    category: 'bodysuits',
    compression: 'Firm',
    rating: 4.9,
    reviewCount: 428,
    isBestSeller: true,
    isNew: false,
    featuredImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Onyx', hex: '#1C1B1A', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Nude Almond', hex: '#E2C2A7', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80' },
      { name: 'Warm Mocha', hex: '#8B5B43', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Rich Cocoa', hex: '#4B332A', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    description: 'Designed to sculpt without squeezing. The Signature Seamless Thong Bodysuit utilizes targeted compression panels to flatten the lower tummy and snatch the waist while keeping your bust lifted and naturally contoured.',
    benefits: [
      'Zero panty lines with ultra-comfortable thong back',
      'Hook-and-eye gusset closure for effortless bathroom breaks',
      'Breathable, moisture-wicking micro-fiber compression weave',
      'Adjustable straps for custom torso length fit'
    ],
    fabricCare: [
      '78% Polyamide, 22% Elastane',
      'Hand wash cold or gentle machine cycle in a wash bag',
      'Do not bleach, iron, or dry clean. Lay flat to dry.'
    ]
  },
  {
    id: 'rovelle-hourglass-cincher',
    name: 'Hourglass 360° Waist Cincher',
    subtitle: 'Instant 2-3 inch waist reduction with flexible contour boning',
    price: 78,
    originalPrice: 98,
    category: 'waist-cinchers',
    compression: 'Ultra-Sculpt',
    rating: 4.95,
    reviewCount: 312,
    isBestSeller: true,
    isNew: false,
    featuredImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Onyx', hex: '#1C1B1A', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80' },
      { name: 'Warm Mocha', hex: '#8B5B43', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'Our most powerful contouring cincher. Engineered with 9 spiral steel bones that mold to your curves for dramatic hourglass definition without pinching or rolling down.',
    benefits: [
      '3 columns of adjustable hook-and-eye closures as you size down',
      'Anti-roll silicone edge prevents digging or sliding',
      'Back posture support relieves lower back pressure',
      'Completely imperceptible under bodycon dresses and gowns'
    ],
    fabricCare: [
      'Outer: 100% High-grade Natural Latex',
      'Lining: 96% Cotton, 4% Spandex for sweat absorption',
      'Wipe clean with a damp cloth. Air dry away from direct heat.'
    ]
  },
  {
    id: 'rovelle-high-waist-butt-lift-shorts',
    name: 'CurvMax™ High-Waist Shaper Shorts',
    subtitle: 'Thigh smoothing, tummy control & natural peach-lifting band',
    price: 52,
    originalPrice: 65,
    category: 'shorts',
    compression: 'Firm',
    rating: 4.85,
    reviewCount: 260,
    isBestSeller: false,
    isNew: true,
    featuredImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Onyx', hex: '#1C1B1A', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Nude Almond', hex: '#E2C2A7', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80' },
      { name: 'Warm Mocha', hex: '#8B5B43', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    description: 'Smooth cellulites and eliminate chafing while shaping thighs and lifting the glutes. Sits right under the bra line for a seamless transition.',
    benefits: [
      'Anatomical glute pocket lifts without flattening buttocks',
      'Chafe-free inner thigh protection for all-day comfort',
      'Silicone waist strip guarantees no roll down',
      'Seamless edges lie flat under thin fabrics'
    ],
    fabricCare: [
      '75% Nylon, 25% Spandex',
      'Machine wash gentle cold in lingerie bag. Do not tumble dry.'
    ]
  },
  {
    id: 'rovelle-scoop-everyday-suit',
    name: 'Sculpt & Glow Scoop Neck Bodysuit',
    subtitle: 'Buttery-soft all-day support with gentle, breathable compression',
    price: 58,
    originalPrice: 70,
    category: 'bodysuits',
    compression: 'Medium',
    rating: 4.88,
    reviewCount: 194,
    isBestSeller: false,
    isNew: false,
    featuredImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Onyx', hex: '#1C1B1A', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80' },
      { name: 'Rich Cocoa', hex: '#4B332A', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Nude Almond', hex: '#E2C2A7', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'The versatile wardrobe staple you will reach for daily. Wear it as outerwear with high-waisted denim or as an undetectable base layer.',
    benefits: [
      'Double-layer front panel for light tummy control',
      'Buttery soft touch with high shape retention',
      'Full coverage bottom or thong option',
      'Doesn’t stretch out or fade with washing'
    ],
    fabricCare: [
      '80% Recycled Polyamide, 20% Elastane',
      'Machine wash gentle. Hang dry.'
    ]
  },
  {
    id: 'rovelle-open-bust-bodysuit',
    name: 'Open Bust Mid-Thigh Full Sculptor',
    subtitle: 'Full torso and thigh shaping, wear your own bra support',
    price: 88,
    originalPrice: 110,
    category: 'everyday-support',
    compression: 'Ultra-Sculpt',
    rating: 4.92,
    reviewCount: 156,
    isBestSeller: true,
    isNew: false,
    featuredImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Onyx', hex: '#1C1B1A', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80' },
      { name: 'Nude Almond', hex: '#E2C2A7', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    description: 'The ultimate event and red-carpet secret weapon. Features an open bust to accommodate any bra plunge line while smoothing the back, waist, hips, and thighs in one seamless silhouette.',
    benefits: [
      'Side zipper with inner soft hooks for effortless dressing',
      'Convenient open-crotch gusset for all-night wear',
      'U-shaped back design lifts bust and smooths back bra rolls',
      'Seamless laser-cut thigh hem disappears under silk'
    ],
    fabricCare: [
      '72% Polyamide, 28% Spandex',
      'Hand wash in lukewarm water. Dry flat in shade.'
    ]
  },
  {
    id: 'rovelle-plunge-backless-suit',
    name: 'Plunge U-Backless Bridal Bodysuit',
    subtitle: 'Deep plunging neckline with convertible clear & nude straps',
    price: 82,
    originalPrice: 99,
    category: 'bodysuits',
    compression: 'Firm',
    rating: 4.9,
    reviewCount: 180,
    isBestSeller: false,
    isNew: true,
    featuredImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Nude Almond', hex: '#E2C2A7', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
      { name: 'Onyx', hex: '#1C1B1A', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    description: 'Specially crafted for low-cut gowns, wedding dresses, and backless evening wear. Features built-in padded underwire cups and clear adhesive wings.',
    benefits: [
      'Deep plunge down to the solar plexus',
      'Low back plunge accommodates dresses dipping to the lower spine',
      'Includes both nude fabric straps and clear invisible straps',
      '3-level crotch adjustment for ease and comfort'
    ],
    fabricCare: [
      '84% Nylon, 16% Spandex with cotton gusset',
      'Hand wash only. Do not machine wash.'
    ]
  }
];

export const MOCK_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Ama Osei',
    rating: 5,
    date: '3 days ago',
    comment: 'I wore this under my fitted wedding reception dress in Accra and my waist looked unbelievable. Snatched yet so comfortable I danced all night!',
    verified: true,
    sizePurchased: 'Size L · Warm Mocha'
  },
  {
    id: 'rev-2',
    author: 'Serwaa K.',
    rating: 5,
    date: '1 week ago',
    comment: 'The 14-day fit guarantee made me confident to order. I initially ordered M, but exchanged for S seamlessly. The customer care team was fast and helpful.',
    verified: true,
    sizePurchased: 'Size S · Onyx'
  },
  {
    id: 'rev-3',
    author: 'Chloe M.',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Truly second skin! Most shapewear rolls down into a tight sausage roll around my waist, but this stayed flat all 10 hours at work.',
    verified: true,
    sizePurchased: 'Size 2XL · Nude Almond'
  }
];
