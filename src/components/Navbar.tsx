import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Calendar, Leaf, Award } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tabId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({
  currentTab,
  onTabChange,
  cartCount,
  onOpenCart,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection to apply glassmorphic styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'specials', label: 'Special' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onTabChange(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFCFA]/90 backdrop-blur-md py-3 shadow-xs border-b border-[#2E7D32]/5'
            : 'bg-[#FCFCFA]/70 py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 text-left group cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] group-hover:scale-105 transition-transform">
                <Leaf className="h-5 w-5 fill-[#2E7D32]/20" />
              </div>
              <div>
                <span className="font-heading text-lg font-light tracking-tight text-brand-dark flex items-center gap-1.5 leading-none">
                  Healthy <span className="italic font-serif text-[#2E7D32]">Food</span>
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#FFB74D]"></span>
                </span>
                <span className="text-[9px] tracking-[0.15em] text-gray-400 font-bold uppercase leading-none block mt-1">
                  Fresh. Healthy. Delicious.
                </span>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors rounded-full cursor-pointer ${
                      isActive ? 'text-[#2E7D32]' : 'text-gray-400 hover:text-brand-dark'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 bg-[#2E7D32]/5 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Icons / CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Michelin green badge on desktop */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2E7D32]/10 bg-[#2E7D32]/5 text-[10px] font-bold text-[#2E7D32] tracking-wider uppercase">
                <Award className="h-3 w-3" />
                MICHELIN GREEN STAR
              </div>

              {/* Shopping Bag Icon with Count Badge */}
              <button
                id="cart-toggle-btn"
                onClick={onOpenCart}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-500 hover:text-[#2E7D32] hover:border-[#2E7D32]/20 hover:shadow-xs transition-all cursor-pointer"
                aria-label="Open shopping cart"
              >
                <ShoppingBag className="h-4.5 w-4.5" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#2E7D32] text-[9px] font-bold text-white shadow-xs"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Booking CTA Button */}
              <button
                onClick={() => handleLinkClick('reservations')}
                className="hidden sm:flex items-center gap-2 rounded-full bg-[#2E7D32] px-5 py-2.5 text-[10px] font-semibold tracking-wider uppercase text-white hover:bg-[#2E7D32]/95 transition-all shadow-xs cursor-pointer"
              >
                <Calendar className="h-3.5 w-3.5" />
                Book a Table
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-500 hover:text-brand-dark lg:hidden transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="space-y-1 px-4 py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full rounded-xl px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      currentTab === link.id
                        ? 'bg-[#2E7D32]/5 text-[#2E7D32] pl-6'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-brand-dark'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                
                {/* Mobile Extra Button */}
                <div className="pt-4 border-t border-gray-100 mt-2">
                  <button
                    onClick={() => handleLinkClick('reservations')}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2E7D32] py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2E7D32]/95 transition-colors cursor-pointer"
                  >
                    <Calendar className="h-4 w-4" />
                    Book a Table
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer so content doesn't slip under navbar */}
      <div className="h-20" />
    </>
  );
}
