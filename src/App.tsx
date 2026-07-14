import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ReservationSection from './components/ReservationSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import SpecialSections from './components/SpecialSections';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';
import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on init
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('healthy_food_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.warn('Could not load cart from localStorage', e);
    }
  }, []);

  // Save cart to localStorage on changes
  const saveCartToStorage = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem('healthy_food_cart', JSON.stringify(newCart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  };

  // Cart operations
  const handleAddToCart = (menuItem: MenuItem, quantity: number, instructions?: string) => {
    const existingIndex = cart.findIndex(
      (item) => item.menuItem.id === menuItem.id && item.specialInstructions === instructions
    );

    let newCart = [...cart];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({ menuItem, quantity, specialInstructions: instructions });
    }
    saveCartToStorage(newCart);
  };

  const handleUpdateQty = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    const newCart = cart.map((item) =>
      item.menuItem.id === itemId ? { ...item, quantity } : item
    );
    saveCartToStorage(newCart);
  };

  const handleRemoveItem = (itemId: string) => {
    const newCart = cart.filter((item) => item.menuItem.id !== itemId);
    saveCartToStorage(newCart);
  };

  const handleClearCart = () => {
    saveCartToStorage([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Inject SEO metadata on component mount
  useEffect(() => {
    // 1. Set document title
    document.title = "Healthy Food Restaurant | Eat Fresh. Live Healthy. Brooklyn, NY";

    // 2. Inject meta description and tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Healthy Food Restaurant in Brooklyn, New York. Indulge in 100% USDA Certified Organic nutrient-dense bowls, fresh cold-pressed superfood smoothies, chemical-free wraps, and custom diet curations with zero seed oils.');
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Healthy Food Restaurant in Brooklyn, New York. Indulge in 100% USDA Certified Organic nutrient-dense bowls, fresh cold-pressed superfood smoothies, chemical-free wraps, and custom diet curations with zero seed oils.";
      document.head.appendChild(meta);
    }

    // 3. Inject Open Graph Tags
    const ogTags = [
      { property: "og:title", content: "Healthy Food Restaurant | Wholesome Farm-to-Table Experience" },
      { property: "og:description", content: "Experience Michelin Green Star certified dining in Brooklyn. 100% Organic bowls, smoothies, and wraps crafted entirely from local New York farms." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80" },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "restaurant:contact_info:street_address", content: "123 Organic Way" },
      { property: "restaurant:contact_info:locality", content: "Brooklyn Heights" },
      { property: "restaurant:contact_info:region", content: "NY" },
      { property: "restaurant:contact_info:postal_code", content: "11201" }
    ];

    ogTags.forEach((tag) => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // 4. Inject Structured Schema Data JSON-LD
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Healthy Food Restaurant",
      "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
      "telePhone": "+1-917-111-1111",
      "url": window.location.href,
      "priceRange": "$$",
      "servesCuisine": "Healthy Bowls, Salads, Smoothies, Wraps, Organic Meals",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Organic Way",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11201",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "21:00"
        }
      ],
      "starRating": {
        "@type": "Rating",
        "ratingValue": "5.0",
        "bestRating": "5.0"
      }
    };

    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.innerHTML = JSON.stringify(schemaData);
  }, []);

  // Section observer to update current navbar highlight on scroll
  useEffect(() => {
    const handleScrollObserve = () => {
      const sections = ['home', 'menu', 'about', 'gallery', 'reservations', 'testimonials', 'specials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserve);
    return () => window.removeEventListener('scroll', handleScrollObserve);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-primary/20 selection:text-brand-primary">
      
      {/* 1. Navigation Sticky Bar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 2. Main Content Stack */}
      <main className="flex-grow">
        {/* Full-screen Hero Banner */}
        <Hero
          onTabChange={setCurrentTab}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Nutritional Menu Grid Page */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Farm-to-Table About Us Page */}
        <AboutSection />

        {/* Masonry Lightbox Gallery Page */}
        <GallerySection />

        {/* Seat Reservation Form Page */}
        <ReservationSection />

        {/* Verified Patron Reviews Page */}
        <TestimonialsSection />

        {/* Specialized Special Sections (Specials, Tips, Rewards, FAQs) */}
        <SpecialSections />

        {/* Operational Hours & Contact Us Page */}
        <ContactSection />
      </main>

      {/* 3. Sliding Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveItem}
        onClear={handleClearCart}
      />

      {/* 4. Structured Global Footer */}
      <Footer />
    </div>
  );
}
