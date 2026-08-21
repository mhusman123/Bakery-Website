import { Category, Product } from '@/types/product';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'donuts',
    name: 'Gourmet Donuts',
    description: 'Freshly fried, soft dough rings with signature glazes & toppings.',
    iconName: 'Donut',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cakes',
    name: 'Artisan Cakes',
    description: 'Rich, multi-layered celebration cakes baked with premium butter & cocoa.',
    iconName: 'Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pastries',
    name: 'Flaky Pastries',
    description: 'French butter croissants, Danish pastries, and creamy eclairs.',
    iconName: 'Croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'breads',
    name: 'Fresh Breads',
    description: 'Daily sourdoughs, soft milk loaves, and herb focaccias.',
    iconName: 'Wheat',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'beverages',
    name: 'Craft Beverages',
    description: 'Quetta Karak Chai, specialty cold brews, and fruit shakes.',
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p-1',
    slug: 'quetta-hazelnut-rocher-donut',
    name: 'Quetta Hazelnut Rocher Donut',
    tagline: 'Rich Belgian chocolate glaze topped with roasted Quetta hazelnut crunch.',
    description: 'Our crown jewel. A pillow-soft donut hand-dipped in silky Belgian milk chocolate glaze, crowned with toasted roasted hazelnuts, and stuffed with a velvety Nutella cream center.',
    price: 320,
    category: 'donuts',
    images: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewCount: 142,
    isBestseller: true,
    isNew: false,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 15,
    calories: 380,
    ingredients: ['Enriched Wheat Flour', 'Belgian Milk Chocolate', 'Quetta Roasted Hazelnuts', 'Pure Butter', 'Whole Milk', 'Vanilla Extract'],
    customizations: [
      {
        id: 'box-size',
        title: 'Select Box Quantity',
        type: 'radio',
        options: [
          { id: 'single', name: 'Single Donut', priceModifier: 0 },
          { id: 'box-6', name: 'Box of 6 (Save 10%)', priceModifier: 1400, popular: true },
          { id: 'box-12', name: 'Box of 12 (Save 20%)', priceModifier: 2600 }
        ]
      },
      {
        id: 'extra-topping',
        title: 'Extra Drizzle',
        type: 'radio',
        options: [
          { id: 'none', name: 'Standard Glaze', priceModifier: 0 },
          { id: 'extra-nutella', name: 'Extra Warm Nutella Drizzle', priceModifier: 60 },
          { id: 'caramel-drizzle', name: 'Salted Caramel Drizzle', priceModifier: 50 }
        ]
      }
    ]
  },
  {
    id: 'p-2',
    slug: 'pistachio-cardamom-royal-donut',
    name: 'Pistachio & Cardamom Royal Donut',
    tagline: 'Fragrant Balochistan pistachio cream with white chocolate glaze.',
    description: 'Inspired by traditional Pakistani sweet heritage. Soft yeast donut dipped in white chocolate infused with green cardamom, topped with crushed Balochistan pistachios and gold leaf powder.',
    price: 340,
    category: 'donuts',
    images: [
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.95,
    reviewCount: 98,
    isBestseller: true,
    isNew: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 15,
    calories: 390,
    ingredients: ['Wheat Flour', 'White Chocolate', 'Crushed Pistachio', 'Green Cardamom', 'Butter', 'Cream'],
    customizations: [
      {
        id: 'box-size',
        title: 'Select Box Quantity',
        type: 'radio',
        options: [
          { id: 'single', name: 'Single Donut', priceModifier: 0 },
          { id: 'box-6', name: 'Box of 6 (Save 10%)', priceModifier: 1500, popular: true },
          { id: 'box-12', name: 'Box of 12 (Save 20%)', priceModifier: 2800 }
        ]
      }
    ]
  },
  {
    id: 'p-3',
    slug: 'classic-honey-glazed-ring',
    name: 'Classic Honey Glazed Ring',
    tagline: 'Light, fluffy, melt-in-your-mouth golden honey glaze.',
    description: 'The iconic classic. Light as air, fried to golden perfection, and blanketed in a warm, glossy acacia honey glaze that melts instantly on your tongue.',
    price: 220,
    category: 'donuts',
    images: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 210,
    isBestseller: true,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 10,
    calories: 290,
    ingredients: ['Flour', 'Acacia Honey', 'Cane Sugar', 'Butter', 'Milk', 'Yeast'],
    customizations: [
      {
        id: 'box-size',
        title: 'Select Box Quantity',
        type: 'radio',
        options: [
          { id: 'single', name: 'Single Donut', priceModifier: 0 },
          { id: 'box-6', name: 'Box of 6 (Save 10%)', priceModifier: 1000 },
          { id: 'box-12', name: 'Box of 12 (Save 20%)', priceModifier: 1900, popular: true }
        ]
      }
    ]
  },
  {
    id: 'p-4',
    slug: 'lotus-biscoff-crunch-donut',
    name: 'Lotus Biscoff Crunch Donut',
    tagline: 'Caramelized Biscoff spread glaze with crushed Biscoff biscuit crumble.',
    description: 'Filled with smooth Biscoff cookie butter cream, glazed with melted Lotus spread, and sprinkled liberally with caramelized biscuit crumbles.',
    price: 330,
    category: 'donuts',
    images: [
      'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.88,
    reviewCount: 175,
    isBestseller: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 15,
    calories: 410,
    ingredients: ['Lotus Biscoff Spread', 'Biscoff Biscuit Crumble', 'Wheat Flour', 'Butter', 'Cream'],
    customizations: [
      {
        id: 'box-size',
        title: 'Select Box Quantity',
        type: 'radio',
        options: [
          { id: 'single', name: 'Single Donut', priceModifier: 0 },
          { id: 'box-6', name: 'Box of 6 (Save 10%)', priceModifier: 1450, popular: true },
          { id: 'box-12', name: 'Box of 12 (Save 20%)', priceModifier: 2700 }
        ]
      }
    ]
  },
  {
    id: 'p-5',
    slug: 'pink-sprinkle-strawberry-dream',
    name: 'Pink Sprinkle Strawberry Dream',
    tagline: 'Wild strawberry chocolate glaze topped with colorful sugar sprinkles.',
    description: 'A nostalgic favorite. Infused with natural strawberry essence, dipped in vibrant pink cocoa glaze, and generously covered in rainbow sprinkles.',
    price: 250,
    category: 'donuts',
    images: [
      'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.75,
    reviewCount: 88,
    isNew: false,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 10,
    calories: 310,
    ingredients: ['Flour', 'Real Strawberry Jam', 'Pink White Chocolate', 'Rainbow Sprinkles', 'Butter'],
    customizations: [
      {
        id: 'box-size',
        title: 'Select Box Quantity',
        type: 'radio',
        options: [
          { id: 'single', name: 'Single Donut', priceModifier: 0 },
          { id: 'box-6', name: 'Box of 6', priceModifier: 1100, popular: true },
          { id: 'box-12', name: 'Box of 12', priceModifier: 2100 }
        ]
      }
    ]
  },
  {
    id: 'p-6',
    slug: 'belgian-dark-chocolate-fudge-cake',
    name: 'Belgian Dark Chocolate Fudge Cake',
    tagline: '70% Dark Belgian cocoa sponge with silky fudge ganache (2 Lbs).',
    description: 'An indulgent 2-pound celebration cake made with premium 70% dark Belgian cocoa, layered with rich chocolate fudge ganache and decorated with chocolate curls.',
    price: 2450,
    category: 'cakes',
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.96,
    reviewCount: 115,
    isBestseller: true,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 45,
    calories: 1450,
    ingredients: ['70% Belgian Dark Chocolate', 'Cocoa Powder', 'Butter', 'Eggs', 'Heavy Cream', 'Vanilla'],
    customizations: [
      {
        id: 'cake-weight',
        title: 'Select Cake Size',
        type: 'radio',
        options: [
          { id: '2lbs', name: '2 Lbs (Serves 6-8)', priceModifier: 0, popular: true },
          { id: '4lbs', name: '4 Lbs (Serves 12-16)', priceModifier: 2200 }
        ]
      },
      {
        id: 'message',
        title: 'Custom Chocolate Message Tag',
        type: 'radio',
        options: [
          { id: 'none', name: 'No Message Tag', priceModifier: 0 },
          { id: 'happy-birthday', name: '"Happy Birthday!" Tag', priceModifier: 150 },
          { id: 'congratulations', name: '"Congratulations!" Tag', priceModifier: 150 }
        ]
      }
    ]
  },
  {
    id: 'p-7',
    slug: 'velvet-red-berry-layer-cake',
    name: 'Velvet Red Berry Layer Cake',
    tagline: 'Moist red velvet cake with creamy vanilla bean frosting (2 Lbs).',
    description: 'Striking red velvet sponges layered with cream cheese frosting, dusted with velvet cake crumbs and fresh berries.',
    price: 2250,
    category: 'cakes',
    images: [
      'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.89,
    reviewCount: 74,
    isBestseller: false,
    isNew: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 40,
    calories: 1380,
    ingredients: ['Cake Flour', 'Cream Cheese', 'Vanilla Bean Paste', 'Cocoa Powder', 'Butter'],
    customizations: [
      {
        id: 'cake-weight',
        title: 'Select Cake Size',
        type: 'radio',
        options: [
          { id: '2lbs', name: '2 Lbs (Serves 6-8)', priceModifier: 0, popular: true },
          { id: '4lbs', name: '4 Lbs (Serves 12-16)', priceModifier: 2000 }
        ]
      }
    ]
  },
  {
    id: 'p-8',
    slug: 'golden-french-butter-croissant',
    name: 'Golden French Butter Croissant',
    tagline: 'Laminated 81-layer flaky French butter croissant.',
    description: 'Baked fresh every morning at 7:30 AM. Crisp golden exterior, soft honeycomb interior made with 100% Normandy style butter.',
    price: 280,
    category: 'pastries',
    images: [
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.91,
    reviewCount: 160,
    isBestseller: true,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 5,
    calories: 320,
    ingredients: ['French Wheat Flour', ' Normandy Pure Butter', 'Yeast', 'Sea Salt', 'Cane Sugar'],
    customizations: [
      {
        id: 'pack-size',
        title: 'Select Quantity',
        type: 'radio',
        options: [
          { id: 'single', name: 'Single Croissant', priceModifier: 0 },
          { id: 'box-4', name: 'Pack of 4 (Save Rs. 100)', priceModifier: 740, popular: true }
        ]
      }
    ]
  },
  {
    id: 'p-9',
    slug: 'chocolate-eclair-suprême',
    name: 'Chocolate Éclair Suprême',
    tagline: 'Chux pastry filled with cold vanilla bean custard & dark chocolate icing.',
    description: 'Crisp light choux pastry casing stuffed generously with cold whipped Madagascar vanilla pastry cream and topped with shiny dark chocolate glaze.',
    price: 290,
    category: 'pastries',
    images: [
      'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.85,
    reviewCount: 92,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 5,
    calories: 340,
    ingredients: ['Choux Dough', 'Pastry Cream', 'Madagascar Vanilla Bean', 'Dark Chocolate Glaze'],
    customizations: []
  },
  {
    id: 'p-10',
    slug: 'artisan-country-sourdough-loaf',
    name: 'Artisan Country Sourdough Loaf',
    tagline: 'Naturally fermented 36-hour wild starter sourdough with crispy crust.',
    description: 'Hand-shaped and stone-baked daily. Made with 36-hour wild yeast starter from Quetta mountain spring water flour.',
    price: 450,
    category: 'breads',
    images: [
      'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.93,
    reviewCount: 65,
    isBestseller: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 5,
    calories: 820,
    ingredients: ['Stoneground Flour', 'Wild Sourdough Starter', 'Filtered Spring Water', 'Sea Salt'],
    customizations: [
      {
        id: 'slicing',
        title: 'Slicing Preference',
        type: 'radio',
        options: [
          { id: 'unsliced', name: 'Whole Loaf (Unsliced)', priceModifier: 0, popular: true },
          { id: 'sliced', name: 'Sliced for Toasting', priceModifier: 0 }
        ]
      }
    ]
  },
  {
    id: 'p-11',
    slug: 'quetta-karak-chai-latte',
    name: 'Quetta Special Karak Chai Latte',
    tagline: 'Slow-brewed black tea with green cardamom, saffron & condensed milk.',
    description: 'Our signature local recipe! Strong tea leaves slow-boiled with cracked cardamom pods, a pinch of saffron, and rich milk for the ultimate warmth.',
    price: 220,
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.98,
    reviewCount: 310,
    isBestseller: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 8,
    calories: 180,
    ingredients: ['Black Tea', 'Cardamom', 'Saffron', 'Whole Milk', 'Brown Sugar'],
    customizations: [
      {
        id: 'sweetness',
        title: 'Sweetness Level',
        type: 'radio',
        options: [
          { id: 'regular', name: 'Regular Karak Sweetness', priceModifier: 0, popular: true },
          { id: 'less', name: 'Less Sugar', priceModifier: 0 },
          { id: 'sugar-free', name: 'No Added Sugar', priceModifier: 0 }
        ]
      }
    ]
  },
  {
    id: 'p-12',
    slug: 'iced-hazelnut-vanilla-cold-brew',
    name: 'Iced Hazelnut Vanilla Cold Brew',
    tagline: '18-hour cold brew Arabica coffee with hazelnut syrup & oat milk.',
    description: 'Smooth, low-acidity 18-hour steeped cold brew coffee shaken over ice with pure vanilla bean syrup and topped with cold oat milk foam.',
    price: 420,
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.87,
    reviewCount: 84,
    isNew: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 5,
    calories: 140,
    ingredients: ['100% Arabica Coffee', 'Filtered Water', 'Vanilla Bean Syrup', 'Hazelnut Essence', 'Milk'],
    customizations: [
      {
        id: 'milk-choice',
        title: 'Choose Milk',
        type: 'radio',
        options: [
          { id: 'whole', name: 'Whole Milk', priceModifier: 0, popular: true },
          { id: 'oat', name: 'Oat Milk (+ Rs. 80)', priceModifier: 80 }
        ]
      }
    ]
  },
  {
    id: 'p-13',
    slug: 'pistachio-rocher-crunch-cake',
    name: 'Pistachio Rocher Crunch Cake',
    tagline: 'Balochistan pistachio cream with white chocolate rocher crunch (2 Lbs).',
    description: 'A masterpiece celebration cake. Soft pistachio-infused sponge layers with crushed Balochistan roasted pistachios, white chocolate ganache, and edible gold dust.',
    price: 2650,
    category: 'cakes',
    images: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.97,
    reviewCount: 62,
    isBestseller: true,
    isNew: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 45,
    calories: 1420,
    ingredients: ['Balochistan Pistachios', 'White Belgian Chocolate', 'Pure Butter', 'Vanilla Paste'],
    customizations: [
      {
        id: 'cake-weight',
        title: 'Select Cake Size',
        type: 'radio',
        options: [
          { id: '2lbs', name: '2 Lbs (Serves 6-8)', priceModifier: 0, popular: true },
          { id: '4lbs', name: '4 Lbs (Serves 12-16)', priceModifier: 2400 }
        ]
      }
    ]
  },
  {
    id: 'p-14',
    slug: 'mango-passion-fruit-supreme-cake',
    name: 'Mango Passion Fruit Supreme Cake',
    tagline: 'Tropical mango mousse layer cake with fresh fruit glaze (2 Lbs).',
    description: 'Light, refreshing summer delight. Layers of moist vanilla chiffon cake filled with organic mango passionfruit pulp and whipped cream frosting.',
    price: 2350,
    category: 'cakes',
    images: [
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.92,
    reviewCount: 48,
    isBestseller: false,
    isNew: true,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 40,
    calories: 1290,
    ingredients: ['Fresh Mango Puree', 'Passion Fruit Glaze', 'Chiffon Sponge', 'Heavy Cream'],
    customizations: []
  },
  {
    id: 'p-15',
    slug: 'salted-caramel-lotus-donut',
    name: 'Salted Caramel Lotus Donut',
    tagline: 'Warm acacia caramel glaze with sea salt flake & Biscoff crunch.',
    description: 'Golden fried donut glazed in house-made salted butter caramel, drizzled with warm Lotus cookie spread and flaky Himalayan pink salt.',
    price: 330,
    category: 'donuts',
    images: [
      'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.89,
    reviewCount: 94,
    isBestseller: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 12,
    calories: 395,
    ingredients: ['Wheat Flour', 'Salted Butter Caramel', 'Sea Salt Flakes', 'Lotus Spread'],
    customizations: [
      {
        id: 'box-size',
        title: 'Select Box Quantity',
        type: 'radio',
        options: [
          { id: 'single', name: 'Single Donut', priceModifier: 0 },
          { id: 'box-6', name: 'Box of 6 (Save 10%)', priceModifier: 1450, popular: true },
          { id: 'box-12', name: 'Box of 12 (Save 20%)', priceModifier: 2700 }
        ]
      }
    ]
  },
  {
    id: 'p-16',
    slug: 'hazelnut-nutella-bomb-donut',
    name: 'Hazelnut Nutella Bomb Donut',
    tagline: 'Exploding Nutella center covered in dark cocoa sugar.',
    description: 'Every bite bursts with creamy Nutella! Overfilled with 60 grams of warm cocoa hazelnut spread and tossed in cinnamon cocoa sugar.',
    price: 350,
    category: 'donuts',
    images: [
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.96,
    reviewCount: 182,
    isBestseller: true,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 15,
    calories: 430,
    ingredients: ['Nutella Hazelnut Spread', 'Flour', 'Cocoa Powder', 'Cinnamon Sugar'],
    customizations: []
  },
  {
    id: 'p-17',
    slug: 'blueberry-cream-cheese-danish',
    name: 'Blueberry Cream Cheese Danish',
    tagline: 'Crisp laminated pastry with wild blueberry jam & sweet cream cheese.',
    description: 'Multi-layered square puff pastry centered with sweet Philadelphia cream cheese and wild blueberry compote baked to a crisp golden finish.',
    price: 310,
    category: 'pastries',
    images: [
      'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.88,
    reviewCount: 57,
    isNew: true,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 8,
    calories: 360,
    ingredients: ['Wild Blueberry Jam', 'Cream Cheese', 'Laminated Puff Dough', 'Butter'],
    customizations: []
  },
  {
    id: 'p-18',
    slug: 'cinnamon-apple-turnover',
    name: 'Cinnamon Apple Flaky Turnover',
    tagline: 'Warm spiced caramelized apples folded in crisp butter puff pastry.',
    description: 'Fresh local apples slow-cooked in brown sugar, cinnamon, and nutmeg, wrapped in paper-thin buttery pastry crusts and dusted with icing sugar.',
    price: 295,
    category: 'pastries',
    images: [
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.84,
    reviewCount: 42,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 8,
    calories: 330,
    ingredients: ['Local Quetta Apples', 'Ceylon Cinnamon', 'Brown Sugar', 'Butter Puff Pastry'],
    customizations: []
  },
  {
    id: 'p-19',
    slug: 'tiramisu-mascarpone-slice-cake',
    name: 'Tiramisu Mascarpone Slice Cake',
    tagline: 'Espresso-soaked ladyfinger sponge with light mascarpone mousse.',
    description: 'Authentic Italian classic recipe. Espresso coffee soaked cake layers filled with light mascarpone cheese cream and dusted with Dutch cocoa powder.',
    price: 650,
    category: 'cakes',
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.94,
    reviewCount: 86,
    isBestseller: true,
    isEggless: false,
    isHalal: true,
    prepTimeMinutes: 10,
    calories: 450,
    ingredients: ['Italian Espresso', 'Mascarpone Cheese', 'Ladyfinger Biscuits', 'Cocoa Powder'],
    customizations: []
  },
  {
    id: 'p-20',
    slug: 'quetta-saffron-pistachio-milkshake',
    name: 'Quetta Saffron Pistachio Milkshake',
    tagline: 'Thick whole milk shake blended with pure saffron threads & pistachios.',
    description: 'A luxurious cold beverage! Whole milk blended with roasted Balochistan pistachios, cracked green cardamom, vanilla ice cream, and topped with real saffron strands.',
    price: 450,
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.97,
    reviewCount: 135,
    isBestseller: true,
    isNew: true,
    isEggless: true,
    isHalal: true,
    prepTimeMinutes: 5,
    calories: 380,
    ingredients: ['Pure Saffron Threads', 'Balochistan Pistachios', 'Vanilla Ice Cream', 'Whole Milk', 'Cardamom'],
    customizations: []
  }
];
