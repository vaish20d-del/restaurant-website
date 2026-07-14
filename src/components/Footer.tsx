import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Award, Mail, Sparkles, Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsEmail('');
    }, 4500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2D2D] text-gray-400 text-left pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-white/5 pb-16 items-start">
          
          {/* Logo / Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E7D32]/15 text-[#81C784]">
                <Leaf className="h-5 w-5 fill-[#2E7D32]/20" />
              </div>
              <span className="font-heading text-lg font-light tracking-tight text-white flex items-center gap-1.5 leading-none">
                Healthy <span className="italic font-serif text-[#81C784]">Food</span>
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#FFB74D]"></span>
              </span>
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-xs">
              Sustainably sourced, micro-calculated organic culinary dining in Brooklyn, NY. We prioritize soil health, zero GMOs, zero seed oils, and absolute community nourishment.
            </p>
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-[9px] font-bold text-[#81C784] tracking-wider uppercase shadow-xs">
              <Award className="h-3 w-3" />
              MICHELIN GREEN STAR RECIPIENT
            </div>
          </div>

          {/* Quick Links Directory */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-3">
              <h4 className="text-white font-semibold uppercase tracking-wider text-[10px]">Dining Menu</h4>
              <ul className="space-y-2 font-light">
                <li><a href="#menu" className="hover:text-white transition-colors">Breakfast Specials</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Protein Salad Bowls</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Functional Smoothies</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Compostable Wraps</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold uppercase tracking-wider text-[10px]">Sustainable Hub</h4>
              <ul className="space-y-2 font-light">
                <li><a href="#about" className="hover:text-white transition-colors">Our Farms Story</a></li>
                <li><a href="#specials" className="hover:text-white transition-colors">Lifestyle Guidelines</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Patron Reviews</a></li>
                <li><a href="#reservations" className="hover:text-white transition-colors">Private Events</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#FFB74D]" /> Join the Wholesome Dispatch
            </h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Subscribe to claim a <strong>15% welcome discount</strong>, custom diet guides, and early access to glasshouse dining workshops.
            </p>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 bg-brand-dark text-green-300 rounded-xl border border-white/5 text-xs text-left flex items-start gap-2.5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#81C784]" />
                  <div>
                    <h5 className="font-bold text-white">Inbox verified!</h5>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-relaxed font-light">
                      Your 15% promo code is: <strong className="text-white font-mono">FRESHLIFE</strong>. We have emailed your diet welcome pack.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 bg-transparent">
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="E.g. user@example.com"
                    className="flex-1 rounded-xl bg-white/5 border border-white/5 text-white px-3.5 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none placeholder-gray-600 focus:bg-white/10"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-[#2E7D32] text-white hover:bg-[#2E7D32]/95 px-4 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section: Address details, working hours & credits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs border-b border-white/5 pb-12 items-start font-light">
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[10px] mb-2.5">Flagship Hub</h4>
            <p className="text-gray-400">123 Organic Way</p>
            <p className="text-gray-400">Brooklyn Heights, NY 11201</p>
            <p className="text-gray-400 mt-2">Call: +1 (917) 111-1111</p>
          </div>
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[10px] mb-2.5">Hours of Operations</h4>
            <p className="text-gray-400">Mon — Fri: 08:00 AM — 10:00 PM</p>
            <p className="text-gray-400">Saturday: 09:00 AM — 11:00 PM</p>
            <p className="text-gray-400">Sunday Brunch: 09:00 AM — 09:00 PM</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[10px]">Organic Transport Credentials</h4>
            <div className="flex gap-1.5 flex-wrap">
              <span className="inline-block px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-[9px] text-gray-400 font-medium">100% Compostable Boxes</span>
              <span className="inline-block px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-[9px] text-gray-400 font-medium">Solar-charged Fleet</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed">
              Healthy Food is certified carbon neutral, and strictly prohibits the inclusion of industrial toxins, pesticides, and ultra-processed food components.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 gap-4">
          <p>© {currentYear} Healthy Food Restaurant LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-white">Privacy Charter</a>
            <span>•</span>
            <a href="#about" className="hover:text-white">Farming Code</a>
            <span>•</span>
            <a href="#about" className="hover:text-white">Sourcing Traceability</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
