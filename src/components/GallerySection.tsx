import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronLeft, ChevronRight, X, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Restaurant Interior' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'ingredients', label: 'Fresh Ingredients' },
    { id: 'chef', label: 'Our Chefs' },
    { id: 'kitchen', label: 'Kitchen & Preparation' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return 0;
        return prev === 0 ? filteredItems.length - 1 : prev - 1;
      });
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return 0;
        return prev === filteredItems.length - 1 ? 0 : prev + 1;
      });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FCFCFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-left sm:text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <ImageIcon className="h-3.5 w-3.5" /> Organic Lens
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-brand-dark mb-4 tracking-tight">
            Visual Plating & <span className="italic font-serif text-[#2E7D32]">Ambience</span>
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            Take a visual tour through our sun-drenched Brooklyn glasshouse dining hall, state-of-the-art cold-press labs, and vibrant, organic farm harvests.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setActiveFilter(f.id);
                setLightboxIndex(null); // Reset lightbox focus
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#2E7D32] text-white shadow-xs'
                  : 'bg-white border border-gray-100 text-gray-500 hover:bg-[#FCFCFA] hover:text-[#2E7D32]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-white cursor-pointer shadow-xs hover:shadow-md transition-all border border-[#2E7D32]/5"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover grayscale-10 group-hover:scale-[1.04] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Overlay with Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-left">
                  <span className="text-[9px] font-bold text-[#81C784] uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-heading text-sm font-semibold text-white tracking-tight leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-gray-300 font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Zoom Magnifier Icon on top right */}
                <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all text-brand-dark">
                  <Search className="h-4 w-4 text-[#2E7D32]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.95 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-md flex flex-col justify-between"
              >
                {/* Lightbox Header */}
                <div className="flex items-center justify-between p-6 text-white shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#81C784]"></span>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400">
                      Photo {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Lightbox Main Slider */}
                <div className="flex-1 flex items-center justify-between px-4 sm:px-8 relative min-h-0">
                  {/* Left arrow */}
                  <button
                    onClick={handlePrev}
                    className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/15 text-white transition-colors shrink-0 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  {/* Active Slide */}
                  <div className="max-w-4xl max-h-[60vh] flex items-center justify-center relative overflow-hidden px-4">
                    <motion.img
                      key={lightboxIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      src={filteredItems[lightboxIndex].image}
                      alt={filteredItems[lightboxIndex].title}
                      className="max-h-[60vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Right arrow */}
                  <button
                    onClick={handleNext}
                    className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/15 text-white transition-colors shrink-0 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Lightbox Footer Content */}
                <div className="p-6 sm:p-8 text-center text-white max-w-2xl mx-auto shrink-0 mb-4">
                  <span className="text-[10px] text-[#81C784] font-bold uppercase tracking-widest block mb-1">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold tracking-tight mb-2">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
