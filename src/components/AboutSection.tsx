import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Leaf, HelpCircle, Utensils, Star, CheckCircle } from 'lucide-react';
import { TIMELINE, AWARDS } from '../data';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FCFCFA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Vision Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em]">
              <Leaf className="h-3.5 w-3.5" /> Our Organic Roots
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-brand-dark tracking-tight leading-[1.1]">
              Nourishing Communities Through <span className="italic font-serif text-[#2E7D32]">Organic</span> Culinary Craft.
            </h2>
            <p className="text-gray-500 font-light text-base sm:text-lg leading-relaxed">
              Founded in Brooklyn, New York, <strong>Healthy Food</strong> was born out of a simple but powerful mission: to make organic, dense, micronutrient-rich food accessible and breathtakingly delicious. 
            </p>
            <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed">
              We believe that eating well shouldn't feel like a compromise. Our culinary team, led by award-winning health advocates and certified nutritional chefs, curates recipes that seamlessly pair clean dietary science with Michelin-standard gastronomic execution. We completely ban GMOs, artificial preservatives, high-glycemic sweeteners, and inflammatory refined seed oils from our kitchens, cooking exclusively with organic cold-pressed avocado and extra virgin olive oils.
            </p>

            {/* Farm to Table Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
                  <Leaf className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xs text-brand-dark tracking-wider uppercase">100% Certified Organic</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Every grain, fruit, seed, and vegetable is USDA Certified Organic.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xs text-brand-dark tracking-wider uppercase">Zero Additives & Seed Oils</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Cooked purely with cold-press extra virgin olive oil and avocado oil.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overlapping Visual Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#2E7D32]/10 bg-[#E8EAE3]">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                alt="Chef plating fresh microgreens"
                className="h-full w-full object-cover grayscale-20"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay Badges */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-md border border-[#2E7D32]/10 max-w-[200px] hidden sm:block text-left">
              <div className="flex items-center gap-1 text-[#FFB74D] mb-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3 w-3 fill-[#FFB74D] text-[#FFB74D]" />
                ))}
              </div>
              <p className="text-xs font-semibold text-brand-dark">"The gold standard for clean dining in NY."</p>
              <span className="text-[10px] text-gray-400 mt-1 block">— NY Times</span>
            </div>
          </motion.div>
        </div>

        {/* The Farm-to-Table Philosophy */}
        <div className="my-24 py-16 px-6 sm:px-12 bg-[#2E7D32] rounded-3xl text-white relative overflow-hidden shadow-lg text-left">
          <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#81C784] block mb-3">Our Ultimate Commitment</span>
            <h3 className="font-heading text-2xl sm:text-3.5xl font-light mb-6 leading-tight">
              Honest Traceability: Knowing Your Farmers
            </h3>
            <p className="text-lg leading-snug font-serif italic mb-10 max-w-3xl mx-auto text-white/90">
              "Nature doesn't hurry, yet everything is accomplished."
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-10 max-w-3xl mx-auto">
              We trace every grain of quinoa, every leaf of baby spinach, and every fillet of wild Atlantic salmon back to its origin. Our team works hand-in-hand with multi-generational certified biodynamic agriculturalists upstate who prioritize topsoil regeneration, organic composting, and solar-powered greenhouses. This closed-loop sourcing eliminates carbon footprint, maintains pesticide-free cultivation, and preserves natural culinary flavor.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="border-l border-white/20 pl-4">
                <span className="text-[#81C784] font-bold text-xs block uppercase tracking-wider mb-1">Local Sourcing</span>
                <p className="text-[11px] text-white/60">Within a 150-mile radius of our Brooklyn flagship greenhouse.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <span className="text-[#81C784] font-bold text-xs block uppercase tracking-wider mb-1">Biodynamic Soil</span>
                <p className="text-[11px] text-white/60">No chemical pesticides or heavy metals are introduced to crops.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <span className="text-[#81C784] font-bold text-xs block uppercase tracking-wider mb-1">Eco Transport</span>
                <p className="text-[11px] text-white/60">Transported via cooled hybrid and full-electric vehicles.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Timeline */}
        <div className="my-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary bg-[#2E7D32]/10 px-3.5 py-1.5 rounded-full">Our Organic Journey</span>
            <h3 className="font-heading text-3xl sm:text-4.5xl font-light text-brand-dark mt-4">Milestones & Growth</h3>
          </div>

          <div className="relative border-l border-gray-100 ml-4 md:ml-0 md:grid md:grid-cols-2 md:gap-x-12 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[1px] md:before:bg-gray-100">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative pb-12 md:pb-16 ${
                    isEven ? 'md:text-right md:col-start-1' : 'md:text-left md:col-start-2'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1.5 h-4.5 w-4.5 rounded-full border-4 border-[#FCFCFA] bg-[#2E7D32] shadow-xs md:left-1/2 md:-translate-x-1/2" />

                  {/* Content Container */}
                  <div className={`pl-6 md:pl-0 text-left ${isEven ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <span className="inline-block bg-[#2E7D32]/10 text-[#2E7D32] px-3 py-1 rounded-full text-xs font-bold mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-brand-dark mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light max-w-md mx-auto md:mx-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Awards Curation Panel */}
        <div className="bg-white rounded-3xl border border-[#2E7D32]/5 p-8 sm:p-12 shadow-xs text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-gray-100 pb-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-brand-dark flex items-center gap-2">
                <Award className="h-6 w-6 text-[#FFB74D] shrink-0" />
                Industry Acknowledgements
              </h3>
              <p className="text-xs text-gray-400 mt-1">Our sustainable certifications and gastronomic excellence awards.</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-brand-primary rounded-xl text-[10px] font-bold">
              <CheckCircle className="h-4 w-4 shrink-0" /> Accredited Sustainable Operator
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AWARDS.map((award) => (
              <div key={award.title} className="space-y-2 border-l-2 border-[#2E7D32]/20 pl-4 hover:border-brand-primary transition-colors">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">{award.issuer}</span>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-dark">{award.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{award.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
