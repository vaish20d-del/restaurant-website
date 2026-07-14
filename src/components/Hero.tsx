import { motion } from 'motion/react';
import { Calendar, ArrowRight, Sparkles, Star } from 'lucide-react';
import brooklynHarvestBowl from '../assets/images/brooklyn_harvest_bowl_1784024628953.jpg';

interface HeroProps {
  onTabChange: (tabId: string) => void;
  onOpenCart: () => void;
}

export default function Hero({ onTabChange, onOpenCart }: HeroProps) {
  const handleScrollTo = (id: string) => {
    onTabChange(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FCFCFA] text-[#2D2D2D] py-12 lg:py-20">
      {/* Decorative clean radial background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#81C784]/5 rounded-full blur-3xl -z-5 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#FFB74D]/5 rounded-full blur-3xl -z-5 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 w-fit"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#2E7D32]" />
              <span>Michelin Recommended 2024</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6 text-[#2D2D2D]"
            >
              Eat <span className="italic font-serif text-[#2E7D32]">Fresh</span>.<br />
              Live <span className="text-[#2E7D32] font-semibold">Healthy</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-500 max-w-md leading-relaxed mb-8"
            >
              Experience the art of organic dining. We craft vibrant, nutrient-dense meals using locally sourced Brooklyn ingredients and zero refined sugars.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8 sm:mb-12"
            >
              <button
                onClick={() => handleScrollTo('menu')}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-[#2E7D32] hover:bg-[#2E7D32]/95 px-8 py-3.5 font-bold text-xs uppercase tracking-wider text-white transition-all shadow-lg shadow-[#2E7D32]/15 hover:scale-[1.02] cursor-pointer"
              >
                Order Online
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleScrollTo('reservations')}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full border border-[#2E7D32]/20 hover:bg-[#FCFCFA] hover:border-[#2E7D32]/50 px-8 py-3.5 font-bold text-xs uppercase tracking-wider text-[#2D2D2D] transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="h-4 w-4 text-[#2E7D32]" />
                Book a Table
              </button>
            </motion.div>

            {/* Micro Rating Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Guest"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Guest"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Guest"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="text-xs">
                <p className="font-bold flex items-center gap-1">
                  4.9/5 Rating <Star className="h-3 w-3 fill-[#FFB74D] text-[#FFB74D]" />
                </p>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">From 2k+ Guests</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Abstract Visual Plate illustration */}
          <div className="lg:col-span-6 relative h-[400px] sm:h-[480px] w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute inset-0 bg-[#E8EAE3] rounded-3xl overflow-hidden shadow-xl border border-[#2E7D32]/5 flex items-center justify-center"
            >
              {/* Abstract plate graphic */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Outer soft glowing background rings */}
                <div className="absolute inset-0 bg-[#81C784]/20 rounded-full opacity-30 scale-125 blur-2xl animate-pulse" />
                <div className="w-full h-full rounded-full border-[12px] border-white/50 shadow-inner overflow-hidden flex items-center justify-center bg-white">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 bg-[#FCFCFA] rounded-full shadow-md relative overflow-hidden flex items-center justify-center">
                    
                    <img
                      src={brooklynHarvestBowl}
                      alt="The Brooklyn Harvest Superfood Bowl"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Concentric clean dashed border overlay */}
                    <div className="absolute inset-5 border border-dashed border-white/45 rounded-full pointer-events-none flex items-center justify-center">
                      <LeafDecorative />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating signature badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 text-left">
                <p className="text-[10px] uppercase font-bold text-[#2E7D32] tracking-wider mb-0.5">Signature Dish</p>
                <p className="text-base font-bold text-[#2D2D2D]">The Brooklyn Harvest</p>
                <p className="text-xs text-gray-500">$18.50 • 420 Cal • Organic</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Minimal metrics banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 sm:mt-24 border-t border-[#2E7D32]/10 pt-12"
        >
          <div className="text-left">
            <span className="text-2xl sm:text-3xl font-light text-[#2E7D32] block mb-1">100%</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">USDA Organic</span>
            <span className="text-xs text-gray-500 font-light block mt-1">No refined oils or synthetic pesticides.</span>
          </div>
          <div className="text-left">
            <span className="text-2xl sm:text-3xl font-light text-[#2E7D32] block mb-1">24 Hours</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Farm-To-Plate</span>
            <span className="text-xs text-gray-500 font-light block mt-1">Sourced from 12 local Brooklyn farms.</span>
          </div>
          <div className="text-left">
            <span className="text-2xl sm:text-3xl font-light text-[#2E7D32] block mb-1">Zero</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Refined Sugars</span>
            <span className="text-xs text-gray-500 font-light block mt-1">Naturally sweetened with premium honey.</span>
          </div>
          <div className="text-left">
            <span className="text-2xl sm:text-3xl font-light text-[#2E7D32] block mb-1">Carbon Neutral</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Eco Delivery</span>
            <span className="text-xs text-gray-500 font-light block mt-1">Dispatched in solar electric vehicles.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Minimal decorative leaves to give aesthetic organic touch inside the plate illustration
function LeafDecorative() {
  return (
    <svg className="w-16 h-16 text-white/40 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8 7 9.5V17c-2.5 0-3-1.5-3-1.5-.5-1-1-1.5-1-1.5-1-.5 0-.5 0-.5 1 0 1.5 1 1.5 1 .5 1.5 1.5 1.5 2.5 1a3.5 3.5 0 0 1 .5-2C5.5 12.5 3.5 10 3.5 6.5 3.5 5 4 3.5 5 2.5c0 0 .5-1.5 2-.5a10 10 0 0 1 5 3.5c1.5-1 3.5-1.5 5-1.5 1.5 0 2 1 2 1s.5 1 .5 2c0 3.5-2 6-6 7.5a3.5 3.5 0 0 1 .5 2c0 2.5-.5 4.5-.5 4.5M12 2v20" strokeLinecap="round" />
    </svg>
  );
}
