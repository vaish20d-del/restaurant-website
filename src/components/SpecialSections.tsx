import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Award, Star, Gift, BookOpen, Clock, Leaf, Smile, Check, ShieldCheck, AlertCircle } from 'lucide-react';
import { FAQ_ITEMS, LIFESTYLE_TIPS } from '../data';
import { FAQItem, LifestyleTip } from '../types';

export default function SpecialSections() {
  // FAQs State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Lifestyle Tips State
  const [selectedTip, setSelectedTip] = useState<LifestyleTip | null>(null);

  // Loyalty Rewards Simulator State
  const [loyaltyName, setLoyaltyName] = useState('');
  const [loyaltyEmail, setLoyaltyEmail] = useState('');
  const [simulatedPoints, setSimulatedPoints] = useState<number | null>(null);
  const [redeemedCode, setRedeemedCode] = useState('');
  const [rewardsMsg, setRewardsMsg] = useState('');
  const [pointsError, setPointsError] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleCalculatePoints = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loyaltyName || !loyaltyEmail) {
      setPointsError('Please fill out your name and email to lookup points.');
      return;
    }
    setPointsError('');
    // Generate simulated point count based on email string length
    const points = (loyaltyEmail.length * 12) + 40;
    setSimulatedPoints(points);
    setRedeemedCode('');
    setRewardsMsg('');
  };

  const handleRedeemPoints = () => {
    if (simulatedPoints && simulatedPoints >= 150) {
      setPointsError('');
      setSimulatedPoints(prev => (prev ? prev - 150 : 0));
      setRedeemedCode('GREENORGANIC2026');
      setRewardsMsg('Congratulations! You redeemed 150 points for a $15 voucher! Code is: GREENORGANIC2026');
    } else {
      setPointsError('You need at least 150 points to redeem a reward.');
    }
  };

  return (
    <section id="specials" className="py-24 bg-[#FCFCFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* --- Seasonal Menu & Today's Special --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Today's Special Card */}
          <div className="rounded-3xl border border-[#2E7D32]/5 bg-[#2E7D32] p-6 sm:p-10 text-white relative overflow-hidden shadow-lg text-left">
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-2xl" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Today's Culinary Special
            </span>
            <h3 className="font-heading text-3xl sm:text-4.5xl font-light tracking-tight mb-4">
              Pan-Seared Organic <span className="font-serif italic">Halibut</span> Bowl
            </h3>
            <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
              Sustainably sourced wild halibut over cold-press spinach basmati rice, steamed asparagus tips, organic micro-parsley, and a warm ginger-infused coconut turmeric reduction.
            </p>
            <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
              <div>
                <span className="block text-[10px] text-white/50 uppercase tracking-wider">Nutritional value</span>
                <span className="text-xs font-bold text-[#81C784] uppercase tracking-wider font-heading">510 kcal • 42g Protein</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="font-heading text-xl font-bold text-white">$29.00</span>
                <button
                  onClick={() => {
                    const element = document.getElementById('menu');
                    if (element) {
                      window.scrollTo({
                        top: element.getBoundingClientRect().top + window.scrollY - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#2E7D32] uppercase tracking-wider hover:bg-white/95 transition-all cursor-pointer"
                >
                  Order From Menu
                </button>
              </div>
            </div>
          </div>

          {/* Seasonal Focus */}
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary bg-[#2E7D32]/10 px-3.5 py-1.5 rounded-full">
              Summer Curations
            </span>
            <h3 className="font-heading text-4xl sm:text-5xl font-light text-brand-dark tracking-tight leading-[1.1]">
              Our Active Summer <span className="italic font-serif text-[#2E7D32]">Harvest</span> Curation.
            </h3>
            <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
              Summer is the pinnacle of upstate New York farm yields. This season, our menu heavily highlights certified heirloom blueberries, sugar snap peas, wild chanterelle mushrooms, and crisp cucumber ribbons. Our recipes are modified quarterly to reflect seasonal crop properties, providing optimal thermal hydration during hotter months.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <Leaf className="h-4.5 w-4.5 text-[#2E7D32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-xs text-brand-dark uppercase tracking-wider">Hydration Balancing</h4>
                  <p className="text-[11px] text-gray-400">Dense water-rich leafy vegetables and electrolyte herbs.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Leaf className="h-4.5 w-4.5 text-[#2E7D32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-xs text-brand-dark uppercase tracking-wider">Freshly Harvested Berries</h4>
                  <p className="text-[11px] text-gray-400">High-polyphenol wild-harvested strawberries and berries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Meet Our Culinary Team --- */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary bg-[#2E7D32]/10 px-3.5 py-1.5 rounded-full">Master Craftsmen</span>
            <h3 className="font-heading text-3xl sm:text-4.5xl font-light text-brand-dark mt-4">The Minds Behind the Cuisine</h3>
            <p className="text-xs text-gray-400 mt-2">Certified nutritional experts practicing sustainable gastronomy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Chef 1 */}
            <div className="rounded-3xl border border-[#2E7D32]/5 bg-white p-6 flex flex-col sm:flex-row gap-6 items-center text-left">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Chef Amanda Reyes"
                className="h-32 w-32 rounded-2xl object-cover shrink-0 border border-gray-100 grayscale-10"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-[#FFB74D] uppercase tracking-widest block">Co-Executive Chef</span>
                <h4 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider leading-none">Amanda Reyes</h4>
                <p className="text-[11px] text-gray-400 leading-none">Graduate of Culinary Institute of NY & Certified Dietician</p>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  "Food is medicine. Every seasoning, crop, and cooking temperature is customized to maximize cell nutrient retention without compromising flavor elegance."
                </p>
              </div>
            </div>

            {/* Chef 2 */}
            <div className="rounded-3xl border border-[#2E7D32]/5 bg-white p-6 flex flex-col sm:flex-row gap-6 items-center text-left">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Chef Lucas Thorne"
                className="h-32 w-32 rounded-2xl object-cover shrink-0 border border-gray-100 grayscale-10"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-[#FFB74D] uppercase tracking-widest block">Nutrition Curation lead</span>
                <h4 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider leading-none">Lucas Thorne</h4>
                <p className="text-[11px] text-gray-400 leading-none">Organic Farming advocate & Fermentation Researcher</p>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  "I dedicate my work to eliminating industrial processed toxins and seed oils. We cook strictly with organic whole fats and farm fresh ingredients."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Healthy Lifestyle Tips --- */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary bg-[#2E7D32]/10 px-3.5 py-1.5 rounded-full">Wholesome Knowledge</span>
            <h3 className="font-heading text-3xl sm:text-4.5xl font-light text-brand-dark mt-4 font-sans">Healthy Lifestyle Guidelines</h3>
            <p className="text-xs text-gray-400 mt-2">Practical nutrition advice authored by our executive dieticians.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LIFESTYLE_TIPS.map((tip) => (
              <div
                key={tip.id}
                onClick={() => setSelectedTip(tip)}
                className="group rounded-2xl border border-[#2E7D32]/5 p-5 bg-white hover:shadow-md hover:border-[#2E7D32]/10 transition-all cursor-pointer flex flex-col justify-between text-left h-full"
              >
                <div>
                  {/* Photo representation */}
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-[#FCFCFA]">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="h-full w-full object-cover grayscale-10 group-hover:scale-[1.02] transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 mb-2">
                    <span className="uppercase tracking-[0.1em] text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded-sm">{tip.category}</span>
                    <span>{tip.readTime}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-brand-dark mb-2 group-hover:text-[#2E7D32] transition-colors line-clamp-1">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-2">
                    {tip.description}
                  </p>
                </div>

                <div className="border-t border-gray-50 pt-3 mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-mono">{tip.date}</span>
                  <span className="text-xs font-bold text-[#2E7D32] group-hover:underline flex items-center gap-1 cursor-pointer">
                    Read Guidelines <BookOpen className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Guidelines Details Modal */}
          <AnimatePresence>
            {selectedTip && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedTip(null)}
                  className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: 'spring', damping: 25 }}
                  className="fixed inset-x-4 bottom-4 top-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 mx-auto max-w-xl bg-[#FCFCFA] rounded-3xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] text-left space-y-4"
                >
                  <div className="flex justify-between items-start border-b border-gray-100 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-[#2E7D32] uppercase tracking-widest bg-[#2E7D32]/10 px-2 py-0.5 rounded-md">
                        {selectedTip.category} • {selectedTip.readTime}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-semibold tracking-tight text-brand-dark mt-1">
                        {selectedTip.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedTip(null)}
                      className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 cursor-pointer"
                    >
                      <span className="text-lg font-bold text-[#2D2D2D] leading-none">×</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 font-mono">Published {selectedTip.date} by Amanda Reyes</p>
                  <hr className="border-gray-100" />
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed whitespace-pre-line">
                    {selectedTip.fullContent}
                  </p>
                  <div className="rounded-2xl border border-dashed border-[#2E7D32]/20 bg-green-50/50 p-4 text-xs text-emerald-800 leading-relaxed">
                    <strong>Dietary Curation Notice:</strong> Our complete menu is designed in exact accordance with these clinical nutrition rules. Select "Browse Menu" to practice active inflammation reduction today!
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* --- Loyalty Rewards Simulator --- */}
        <div className="bg-[#2E7D32] text-white rounded-3xl p-6 sm:p-12 text-left relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#81C784] uppercase tracking-wider">
                <Gift className="h-4 w-4" /> Patron Rewards Network
              </span>
              <h3 className="font-heading text-3xl sm:text-4.5xl font-light tracking-tight leading-tight">
                Earn Wholesome Points on Every Organic Meal
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-lg">
                Join our sustainable loyalty program! Every dollar spent online or in-store translates to <strong>1 Loyalty Point</strong>. Accumulate 150 points to redeem a full <strong>$15 organic voucher</strong>, or claim free Avocado Toast.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#81C784] animate-ping" />
                  Free Signup
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#81C784]" />
                  Skip Transaction Fees
                </div>
              </div>
            </div>

            {/* Simulated Live Lookup form */}
            <div className="lg:col-span-6 bg-[#FCFCFA] rounded-2xl p-6 text-brand-dark border border-[#2E7D32]/5 shadow-md space-y-4">
              <h4 className="font-heading font-semibold text-xs text-brand-dark border-b border-gray-100 pb-2.5 uppercase tracking-wider">
                Simulated Balance Lookup & Voucher Claim
              </h4>

              {/* Points error state banner instead of window.alert */}
              {pointsError && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{pointsError}</span>
                </div>
              )}

              {simulatedPoints === null ? (
                <form onSubmit={handleCalculatePoints} className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-500 font-semibold mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={loyaltyName}
                        onChange={(e) => setLoyaltyName(e.target.value)}
                        placeholder="Charlotte Green"
                        className="w-full text-xs rounded-lg border border-gray-200 px-3 py-2 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 font-semibold mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={loyaltyEmail}
                        onChange={(e) => setLoyaltyEmail(e.target.value)}
                        placeholder="char@example.com"
                        className="w-full text-xs rounded-lg border border-gray-200 px-3 py-2 bg-white"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#2E7D32] text-white font-bold py-2.5 text-xs uppercase tracking-wider hover:bg-[#2E7D32]/95 transition-all cursor-pointer"
                  >
                    Simulate Point Lookup
                  </button>
                </form>
              ) : (
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between items-center bg-white p-3.5 rounded-xl border border-gray-100">
                    <div>
                      <span className="text-gray-400 uppercase block tracking-wider text-[9px] font-bold">Patron</span>
                      <span className="font-bold text-[#2D2D2D] text-sm block">{loyaltyName}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 uppercase block tracking-wider text-[9px] font-bold">Points Balance</span>
                      <span className="font-extrabold text-[#2E7D32] text-base block">{simulatedPoints} Points</span>
                    </div>
                  </div>

                  {redeemedCode ? (
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100 space-y-1 text-center">
                      <Check className="h-5 w-5 mx-auto text-[#2E7D32]" />
                      <p className="font-semibold text-xs">{rewardsMsg}</p>
                      <p className="text-[10px] text-gray-400">Apply this code in your shopping cart checkout to deduct $15!</p>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSimulatedPoints(null);
                          setPointsError('');
                        }}
                        className="flex-1 rounded-lg border border-gray-200 py-2.5 font-bold text-xs uppercase tracking-wider text-gray-500 hover:bg-gray-50 text-center cursor-pointer"
                      >
                        Reset Lookup
                      </button>
                      <button
                        onClick={handleRedeemPoints}
                        className="flex-1 rounded-lg bg-[#FFB74D] text-[#2D2D2D] font-bold text-xs uppercase tracking-wider py-2.5 hover:bg-[#FFB74D]/90 text-center cursor-pointer"
                      >
                        Redeem 150 pts ($15 Off)
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- Delivery Partners & Sustainability Hub --- */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#2E7D32]/5 text-left space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-brand-dark">Our Verified Delivery Ecosystem</h3>
              <p className="text-xs text-gray-400 mt-1">Order directly from us for the ultimate zero-fee, local carbon neutral shipping.</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#2E7D32]/10 text-brand-primary rounded-full text-[10px] font-bold">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" /> Zero Seed Oils Guarantee
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#FCFCFA] border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center">
              <span className="font-heading font-extrabold text-[10px] text-brand-dark uppercase tracking-wider block">Healthy Express</span>
              <span className="text-[10px] text-[#2E7D32] font-semibold mt-1">Our Local Solar Fleet</span>
            </div>
            <div className="bg-[#FCFCFA] border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center opacity-70">
              <span className="font-heading font-extrabold text-[10px] text-gray-400 uppercase tracking-wider block">UberEats</span>
              <span className="text-[10px] text-gray-400 font-semibold mt-1">Direct Partner API</span>
            </div>
            <div className="bg-[#FCFCFA] border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center opacity-70">
              <span className="font-heading font-extrabold text-[10px] text-gray-400 uppercase tracking-wider block">DoorDash</span>
              <span className="text-[10px] text-gray-400 font-semibold mt-1">Direct Partner API</span>
            </div>
            <div className="bg-[#FCFCFA] border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center opacity-70">
              <span className="font-heading font-extrabold text-[10px] text-gray-400 uppercase tracking-wider block">Grubhub</span>
              <span className="text-[10px] text-gray-400 font-semibold mt-1">Direct Partner API</span>
            </div>
          </div>
        </div>

        {/* --- FAQs Accordion --- */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary bg-[#2E7D32]/10 px-3.5 py-1.5 rounded-full">Got Questions?</span>
            <h3 className="font-heading text-3xl sm:text-4.5xl font-light text-brand-dark mt-4">Frequently Asked Questions</h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-100 bg-white shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-5 text-left font-heading font-semibold text-sm sm:text-base text-brand-dark hover:text-[#2E7D32] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="h-4.5 w-4.5 text-[#2E7D32] shrink-0 ml-4" /> : <ChevronDown className="h-4.5 w-4.5 text-gray-400 shrink-0 ml-4" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed font-light border-t border-gray-50 bg-[#FCFCFA]/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
