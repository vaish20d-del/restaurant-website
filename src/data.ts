import { MenuItem, TestimonialItem, GalleryItem, FAQItem, LifestyleTip } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- Breakfast ---
  {
    id: 'b1',
    name: 'Sprouted Avocado Toast',
    description: 'Fresh mashed organic avocados on toasted artisanal sourdough, topped with heirloom cherry tomatoes, organic microgreens, toasted pumpkin seeds, and a squeeze of fresh Meyer lemon.',
    price: 16.00,
    calories: 380,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isPopular: true,
    prepTime: '8 mins',
    ingredients: ['Avocado', 'Sourdough bread', 'Microgreens', 'Pumpkin seeds', 'Lemon', 'Cherry tomatoes']
  },
  {
    id: 'b2',
    name: 'Superfood Acai Dream Bowl',
    description: 'Blended organic Brazilian acai berries with house-made almond milk, topped with gluten-free superfood hemp granola, organic blueberries, wild strawberries, raw chia seeds, and premium local wildflower honey.',
    price: 15.00,
    calories: 420,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: true,
    prepTime: '10 mins',
    ingredients: ['Acai berry', 'Almond milk', 'Hemp granola', 'Chia seeds', 'Blueberries', 'Wildflower honey']
  },
  {
    id: 'b3',
    name: 'Truffled Forest Mushroom Omelette',
    description: 'Fluffy farm-fresh pasture-raised organic egg whites with sautéed wild chanterelle mushrooms, baby spinach, caramelized onions, and a delicate drizzle of white truffle oil.',
    price: 18.00,
    calories: 310,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80', // Fallback styled nicely
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    prepTime: '12 mins',
    ingredients: ['Egg whites', 'Chanterelle mushrooms', 'Spinach', 'Caramelized onion', 'White truffle oil']
  },

  // --- Salads ---
  {
    id: 's1',
    name: 'Michelin Green Goddess Salad',
    description: 'Crisp baby gem lettuce, tri-color organic quinoa, shaved cucumber ribbons, local sugar snap peas, and Persian avocado, tossed in our signature cold-pressed herb-infused Green Goddess vinaigrette.',
    price: 19.50,
    calories: 290,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isPopular: true,
    prepTime: '8 mins',
    ingredients: ['Baby gem lettuce', 'Quinoa', 'Cucumber', 'Sugar snap peas', 'Persian avocado', 'Herb vinaigrette']
  },
  {
    id: 's2',
    name: 'Roasted Golden Beet & Goat Cheese',
    description: 'Slow-roasted sweet organic golden beets, wild baby arugula, candied premium walnuts, and creamy artisanal Vermont goat cheese, tossed lightly with citrus balsamic reduction.',
    price: 21.00,
    calories: 340,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    prepTime: '10 mins',
    ingredients: ['Golden beets', 'Wild arugula', 'Candied walnuts', 'Vermont goat cheese', 'Balsamic reduction']
  },

  // --- Protein Bowls ---
  {
    id: 'p1',
    name: 'Wild-Caught Salmon Quinoa Bowl',
    description: 'Pan-seared sustainably sourced wild Atlantic salmon filet over warm organic black and white quinoa, steamed Japanese edamame, grated daikon, and premium seaweed, glazed with ginger-tamari reduction.',
    price: 28.00,
    calories: 590,
    category: 'Protein Bowls',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isChefSpecial: true,
    isPopular: true,
    prepTime: '15 mins',
    ingredients: ['Atlantic salmon', 'Quinoa', 'Edamame', 'Seaweed', 'Tamari', 'Ginger']
  },
  {
    id: 'p2',
    name: 'Marinated Organic Tofu Zen Bowl',
    description: 'Sesame-crusted baked organic high-protein tofu, brown basmati rice, charred purple broccoli florets, spiralized organic carrots, and fresh purple cabbage, with dry-roasted peanut dipping sauce.',
    price: 23.00,
    calories: 480,
    category: 'Protein Bowls',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', // Fallback
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    prepTime: '12 mins',
    ingredients: ['Organic tofu', 'Brown basmati rice', 'Purple broccoli', 'Carrots', 'Cabbage', 'Peanut sauce']
  },

  // --- Smoothies ---
  {
    id: 'm1',
    name: 'The Brooklyn Green Elixir',
    description: 'Cold-pressed organic baby kale, spinach, fresh celery stalk, organic green apple, sweet pineapple chunks, wild ginger root, and premium coconut water. High fiber, full detox power.',
    price: 11.50,
    calories: 160,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isPopular: true,
    prepTime: '5 mins',
    ingredients: ['Baby kale', 'Spinach', 'Celery', 'Green apple', 'Ginger', 'Coconut water']
  },
  {
    id: 'm2',
    name: 'Maca Protein Berry Boost',
    description: 'Organic wild blueberries, red raspberries, vegan pea protein isolate, organic Peruvian maca root powder, sugar-free cold-brew hemp milk, and raw organic cocoa nibs.',
    price: 12.50,
    calories: 240,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80', // Fallback
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    prepTime: '5 mins',
    ingredients: ['Wild blueberries', 'Raspberries', 'Vegan pea protein', 'Maca root', 'Hemp milk', 'Cocoa nibs']
  },

  // --- Wraps ---
  {
    id: 'w1',
    name: 'Tuscan Charred Chickpea Wrap',
    description: 'Crispy fire-roasted organic chickpeas, crushed garlic hummus, wild baby arugula, sun-dried tomatoes, and house-made dairy-free cashew milk aioli in an organic spinach flatbread.',
    price: 15.50,
    calories: 410,
    category: 'Wraps',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isPopular: true,
    prepTime: '8 mins',
    ingredients: ['Chickpeas', 'Garlic hummus', 'Arugula', 'Sun-dried tomatoes', 'Cashew aioli', 'Spinach wrap']
  },
  {
    id: 'w2',
    name: 'Pasture Grilled Chicken & Avocado Wrap',
    description: 'Charbroiled free-range hormone-free organic chicken breast slices, sliced Hass avocado, crisp romaine lettuce, farm tomatoes, and dynamic organic honey mustard in a whole wheat wrap.',
    price: 17.50,
    calories: 520,
    category: 'Wraps',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80', // Fallback
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isChefSpecial: true,
    prepTime: '10 mins',
    ingredients: ['Organic chicken', 'Hass avocado', 'Romaine lettuce', 'Tomatoes', 'Honey mustard', 'Whole wheat wrap']
  },

  // --- Soups ---
  {
    id: 'so1',
    name: 'Velvety Roasted Butternut Squash Soup',
    description: 'Slow-simmered organic organic butternut squash blended with fresh sage, warm nutmeg, raw pumpkin seeds, and finished with a rich swirl of cold-pressed organic coconut cream.',
    price: 12.00,
    calories: 190,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    prepTime: '6 mins',
    ingredients: ['Butternut squash', 'Sage', 'Nutmeg', 'Pumpkin seeds', 'Coconut cream']
  },
  {
    id: 'so2',
    name: 'Slow-Simmered Tuscan Kale & White Bean',
    description: 'A comforting, mineral-rich broth packed with organic lacinato kale, hearty organic cannellini beans, slow-roasted garlic cloves, garden herbs, and organic extra virgin olive oil.',
    price: 13.00,
    calories: 220,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80', // Fallback
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isPopular: true,
    prepTime: '6 mins',
    ingredients: ['Lacinato kale', 'Cannellini beans', 'Garlic', 'Rosemary', 'Extra virgin olive oil']
  },

  // --- Healthy Desserts ---
  {
    id: 'd1',
    name: 'Organic Madagascar Vanilla Chia Pudding',
    description: 'Organic chia seeds soaked overnight in cold-press cashew milk and rich Madagascar vanilla bean paste, topped with fresh passionfruit seeds and toasted slivered almonds.',
    price: 10.50,
    calories: 180,
    category: 'Healthy Desserts',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isPopular: true,
    prepTime: '5 mins',
    ingredients: ['Chia seeds', 'Cashew milk', 'Madagascar vanilla', 'Passionfruit', 'Slivered almonds']
  },
  {
    id: 'd2',
    name: 'Raw Avocado Chocolate Mousse',
    description: 'A rich, decadent chocolate mousse crafted from organic Hass avocados, dark premium Belgian cacao, raw blue agave, and topped with shaved 90% single-origin dark chocolate.',
    price: 12.00,
    calories: 230,
    category: 'Healthy Desserts',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80', // Fallback
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isChefSpecial: true,
    prepTime: '7 mins',
    ingredients: ['Hass avocado', 'Belgian cacao', 'Blue agave', '90% dark chocolate', 'Sea salt']
  },

  // --- Drinks ---
  {
    id: 'dr1',
    name: 'Cold-Pressed Hibiscus Rose Tea',
    description: 'Brewed premium organic hibiscus petals, organic rosewater, hints of fresh mint leaves, and sweetened with a touch of zero-glycemic stevia leaf. Visually stunning, high antioxidant drink.',
    price: 8.00,
    calories: 20,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    prepTime: '3 mins',
    ingredients: ['Hibiscus petals', 'Rosewater', 'Fresh mint', 'Stevia leaf']
  },
  {
    id: 'dr2',
    name: 'Double-Shot Organic Matcha Latte',
    description: 'Ceremonial-grade Japanese stone-ground matcha whisked to order with organic oat milk and a hint of house-infused lavender organic agave syrup.',
    price: 9.50,
    calories: 110,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80', // Fallback
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isPopular: true,
    prepTime: '4 mins',
    ingredients: ['Ceremonial matcha', 'Organic oat milk', 'Lavender', 'Organic agave']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Elizabeth Sterling',
    role: 'Wellness Consultant & Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80',
    rating: 5,
    review: 'Healthy Food has fundamentally elevated what clean eating means in Brooklyn. The Green Goddess Salad is an absolute masterpiece of crisp textures and complex flavor profiles. This isn\'t just fuel; it\'s fine culinary dining.',
    date: '2 weeks ago'
  },
  {
    id: 't2',
    name: 'Dr. Marcus Vance',
    role: 'Cardiologist & Nutritionist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    rating: 5,
    review: 'I recommend Healthy Food to all my patients looking to reduce inflammation and enjoy a vibrant lifestyle. The farm-to-table traceability is real. I especially admire their absolute commitment to low-glycemic, raw ingredients.',
    date: '1 month ago'
  },
  {
    id: 't3',
    name: 'Sarah Chen',
    role: 'Creative Director, Brooklyn Tech Studio',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
    rating: 5,
    review: 'As someone who orders wraps and protein bowls multiple times a week, Healthy Food is a lifesaver. The web app is lightning-fast, and the ordering flow is seamless. The Salmon Quinoa Bowl is my permanent daily fuel.',
    date: '3 days ago'
  },
  {
    id: 't4',
    name: 'James Rodriguez',
    role: 'Professional Triathlete',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
    rating: 5,
    review: 'The Maca Protein Berry Boost and Zen Bowls are packed with macro and micronutrients. Perfect clean fuel before and after intense physical conditioning. Zero seed oils, pure wholesome ingredients!',
    date: '5 days ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Aesthetic Light-filled Dining Area',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    description: 'Our minimalist Brooklyn interior features organic white oak, indoor olive trees, and glass-skylight illumination designed to nourish the soul.'
  },
  {
    id: 'g2',
    title: 'Chef plater at work',
    category: 'chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    description: 'Chef Amanda Reyes detailing our custom signature Sprouted Avocado Toast with freshly harvested microgreens.'
  },
  {
    id: 'g3',
    title: 'Seasonal Organic Farm Ingredients',
    category: 'ingredients',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    description: 'Sustainably cultivated heirloom crops sourced exclusively from upstate New York certified organic family farms.'
  },
  {
    id: 'g4',
    title: 'Signature Protein Bowl Plating',
    category: 'dishes',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Our nutrient-dense Wild-Caught Salmon Quinoa Bowl, crafted with accurate protein and essential fats ratios.'
  },
  {
    id: 'g5',
    title: 'Modern Oak Counter & Seating',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Warm light, handcrafted minimalist concrete elements, and premium custom acoustic damping for peaceful dining.'
  },
  {
    id: 'g6',
    title: 'Chef selecting microgreens',
    category: 'chef',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    description: 'Strict curation of every single ingredient, harvested with absolute local farm-to-table traceability.'
  },
  {
    id: 'g7',
    title: 'Warm Shared Culinary Dining',
    category: 'customers',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    description: 'Local young professionals and health-conscious families enjoying fresh meals in our open, breezy dining room.'
  },
  {
    id: 'g8',
    title: 'State of the Art Open Kitchen',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    description: 'Our hyper-clean, professional open kitchen where cold-press smoothies and nutrient-retaining bowls are assembled.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Are all of your ingredients certified organic and locally sourced?',
    answer: 'Yes. 100% of our vegetables, fruits, grains, and nuts are certified USDA Organic. We partner directly with upstate New York and Long Island organic family farms to source seasonal ingredients within 48 hours of harvest.',
    category: 'Ingredients'
  },
  {
    question: 'Do you offer options for gluten-free, vegan, or keto diets?',
    answer: 'Absolutely. Over 80% of our menu is naturally gluten-free and plant-based. We clearly label Vegetarian, Vegan, and Gluten-Free items with dedicated visual badges. Our kitchen uses strict cross-contamination protocols.',
    category: 'Dietary Options'
  },
  {
    question: 'How do your Delivery Partners and online orders work?',
    answer: 'We deliver directly via our integrated website and premium partners (DoorDash, UberEats, and Grubhub). When you order online through our website, you skip the extra fees and support local business. All meals are packed in compostable plant-starch containers.',
    category: 'Delivery'
  },
  {
    question: 'Tell me about the Loyalty Rewards program. How do I join?',
    answer: 'It is simple. For every dollar you spend online or in-store, you earn 1 Loyalty Point. 100 points equal $10 off your next order. You can sign up using our newsletter or simply check the rewards section in your profile.',
    category: 'Rewards'
  },
  {
    question: 'Can I book private events or wellness gatherings at your Brooklyn location?',
    answer: 'Yes! We host private wellness gatherings, healthy cooking workshops, yoga breakfast social clubs, and clean-catering events. Use our Reservations screen to submit an inquiry, or email events@healthyfood.com directly.',
    category: 'Events'
  }
];

export const LIFESTYLE_TIPS: LifestyleTip[] = [
  {
    id: 'tip-1',
    title: 'The Anti-Inflammatory Guide: Curing with Real Foods',
    category: 'Nutrition',
    readTime: '5 min read',
    description: 'Understand how cold-pressed green juices, rich wild-caught salmon, and raw turmeric fight inflammation and restore gut health.',
    fullContent: 'Chronic inflammation is the silent driver of many modern health issues. Transitioning to a whole-food, organic diet enriched with dark leafy greens (like the baby kale in our Green Elixir) and omega-3-rich fats (like wild Atlantic salmon) resets your body\'s inflammatory markers. Avoid highly processed seed oils and refined sugars; instead, load up on polyphenol-rich berries, microgreens, and active probiotics. Studies show that a 14-day premium whole-food diet significantly improves cognitive clarity, energy levels, and skin health.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    date: 'July 12, 2026'
  },
  {
    id: 'tip-2',
    title: 'Unlocking Sustainable Energy: Carbs vs Complex Fibers',
    category: 'Lifestyle',
    readTime: '4 min read',
    description: 'Why organic sprouted grains and slow-cooked quinoa protect you from mid-day energy crashes and stabilize blood glucose.',
    fullContent: 'Refined carbohydrates cause sharp spikes in blood glucose followed by exhaustive insulin crashes. By shifting your primary energy source to high-fiber complex carbohydrates—such as our black and white sprouted organic quinoa and slow-fermented artisanal sourdough—you provide your muscles and brain with a slow, continuous trickle of clean glucose. Pair these fibers with active healthy fats like fresh avocados and toasted pumpkin seeds to optimize nutrient absorption and sustain focus all afternoon.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    date: 'June 28, 2026'
  },
  {
    id: 'tip-3',
    title: 'Hydration and Detox: Beyond the Standard 8 Glasses',
    category: 'Wellness',
    readTime: '6 min read',
    description: 'How cold-pressed herbal teas, hibiscus, and pure coconut water rehydrate cellular pathways and cleanse your blood.',
    fullContent: 'True cellular hydration requires essential mineral electrolytes—specifically potassium, magnesium, and sodium. Plain filtered water often lacks these ionic compounds. Incorporating organic coconut water, cold-brewed herbal teas (like our Hibiscus Rose Tea), and raw leafy green extracts introduces vital bioavailable electrolytes directly into your cells. This assists the liver and kidneys in flushing out environmental toxins while boosting metabolic efficiency and clarifying skin tissue.',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
    date: 'May 15, 2026'
  }
];

export const TIMELINE = [
  { year: '2021', title: 'The Brooklyn Greenhouse', text: 'Founded as a tiny 8-table sustainable farm-to-table pop-up in Brooklyn Heights.' },
  { year: '2022', title: 'Organic Pioneer Award', text: 'Voted New York\'s Top Sustainable Lunch Spot, certifying 100% pesticide-free ingredient supply chain.' },
  { year: '2023', title: 'Expansion to Williamsburg', text: 'Moved to our modern glasshouse flagship building, installing a cold-press laboratory and custom indoor farm.' },
  { year: '2025', title: 'Carbon Neutral Certification', text: 'Implemented 100% compostable packaging and solar-powered electric delivery fleets.' },
  { year: '2026', title: 'The Michelin Green Star', text: 'Recognized for excellent cuisine combined with outstanding sustainable operations.' }
];

export const AWARDS = [
  { title: 'Michelin Green Star', body: 'Outstanding sustainable culinary excellence and local stewardship.', issuer: 'Michelin Guide 2026' },
  { title: 'Best Healthy Concept', body: 'First place for innovative high-nutrient culinary design and flavor integration.', issuer: 'New York Food Awards' },
  { title: 'Leader in Eco-Packaging', body: '100% waste-free container supply chain and solar-backed operations.', issuer: 'Green City Initiative' }
];
