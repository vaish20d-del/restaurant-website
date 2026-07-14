import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Leaf, Flame, ShieldAlert, Heart, Eye, Plus, ShoppingCart, Check, Scale } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS } from '../data';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number, instructions?: string) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dietary toggles
  const [filterVegan, setFilterVegan] = useState(false);
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [filterGlutenFree, setFilterGlutenFree] = useState(false);

  // Active dish detail modal
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [dishQty, setDishQty] = useState(1);
  const [customInstructions, setCustomInstructions] = useState('');
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  const categories: (MenuCategory | 'All')[] = [
    'All',
    'Breakfast',
    'Salads',
    'Protein Bowls',
    'Smoothies',
    'Wraps',
    'Soups',
    'Healthy Desserts',
    'Drinks',
  ];

  // Filtering Logic
  const filteredDishes = MENU_ITEMS.filter((dish) => {
    const matchesCategory = selectedCategory === 'All' || dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dish.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesVegan = !filterVegan || dish.isVegan;
    const matchesVegetarian = !filterVegetarian || dish.isVegetarian;
    const matchesGlutenFree = !filterGlutenFree || dish.isGlutenFree;

    return matchesCategory && matchesSearch && matchesVegan && matchesVegetarian && matchesGlutenFree;
  });

  const handleOpenDishDetails = (dish: MenuItem) => {
    setSelectedDish(dish);
    setDishQty(1);
    setCustomInstructions('');
  };

  const handleQuickAdd = (dish: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(dish, 1);
    setAddedItemName(dish.name);
    setTimeout(() => {
      setAddedItemName(null);
    }, 1800);
  };

  const handleModalAdd = () => {
    if (selectedDish) {
      onAddToCart(selectedDish, dishQty, customInstructions);
      setAddedItemName(selectedDish.name);
      setSelectedDish(null);
      setTimeout(() => {
        setAddedItemName(null);
      }, 1800);
    }
  };

  return (
    <section id="menu" className="py-24 bg-[#FCFCFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-left sm:text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Nourishing Fine Dining
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-brand-dark mb-4 tracking-tight">
            Curated <span className="italic font-serif text-[#2E7D32]">Culinary</span> Creations
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            Every dish is nutritionally calculated, utilizing premium organic ingredients to promote clean metabolic energy, mental focus, and cardiovascular wellness.
          </p>
        </div>

        {/* Filter Toolbar (Bento Grid Style) */}
        <div className="bg-white rounded-3xl border border-[#2E7D32]/5 p-6 mb-12 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-4.5 w-4.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ingredients, bowls, or dressing..."
                className="w-full bg-[#FCFCFA] rounded-full border border-gray-100 pl-11 pr-5 py-3 text-sm focus:border-[#2E7D32]/30 focus:outline-none transition-all"
              />
            </div>

            {/* Dietary Badge Toggles */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              <button
                onClick={() => setFilterVegan(!filterVegan)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer transition-all ${
                  filterVegan
                    ? 'bg-[#2E7D32] border-[#2E7D32] text-white shadow-xs'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                }`}
              >
                <Leaf className="h-3.5 w-3.5" />
                Vegan Only
              </button>

              <button
                onClick={() => setFilterVegetarian(!filterVegetarian)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer transition-all ${
                  filterVegetarian
                    ? 'bg-[#2E7D32] border-[#2E7D32] text-white shadow-xs'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                }`}
              >
                <Leaf className="h-3.5 w-3.5" />
                Vegetarian
              </button>

              <button
                onClick={() => setFilterGlutenFree(!filterGlutenFree)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer transition-all ${
                  filterGlutenFree
                    ? 'bg-[#FFB74D] border-[#FFB74D] text-[#2D2D2D] shadow-xs'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                }`}
              >
                <Scale className="h-3.5 w-3.5" />
                Gluten-Free
              </button>
            </div>
          </div>

          {/* Categories Slider */}
          <div className="overflow-x-auto -mx-6 px-6 pb-2.5 flex items-center gap-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2E7D32] text-white shadow-sm'
                      : 'bg-white border border-gray-100 text-gray-500 hover:bg-[#FCFCFA] hover:text-brand-dark'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Toast Notification for Quick Add */}
        <AnimatePresence>
          {addedItemName && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full bg-brand-dark text-white shadow-xl text-xs font-semibold tracking-wide border border-white/10"
            >
              <Check className="h-4 w-4 text-[#81C784] shrink-0" />
              <span>Added <strong className="text-[#81C784]">{addedItemName}</strong> to your basket!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => (
              <motion.div
                layout
                key={dish.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleOpenDishDetails(dish)}
                className="group relative rounded-3xl border border-[#2E7D32]/5 bg-white p-4 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#FCFCFA] mb-4">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorphic tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[85%]">
                    {dish.isChefSpecial && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-bold tracking-widest uppercase text-[#2E7D32]">
                        <Sparkles className="h-2.5 w-2.5" /> Chef Special
                      </span>
                    )}
                    {dish.isPopular && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-bold tracking-widest uppercase text-[#2E7D32]">
                        <Heart className="h-2.5 w-2.5 fill-[#2E7D32]" /> Best Seller
                      </span>
                    )}
                  </div>

                  {/* Dietary icons */}
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    {dish.isVegan && (
                      <span className="h-6 w-6 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-[#2E7D32]" title="Vegan">V</span>
                    )}
                    {dish.isVegetarian && (
                      <span className="h-6 w-6 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-[#2E7D32]" title="Vegetarian">VG</span>
                    )}
                    {dish.isGlutenFree && (
                      <span className="h-6 w-6 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-[#2E7D32]" title="Gluten-Free">GF</span>
                    )}
                  </div>

                  {/* Calories Count Badge */}
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-dark text-[10px] font-semibold">
                    <Flame className="h-3 w-3 text-orange-500" />
                    <span>{dish.calories} kcal</span>
                  </div>

                  {/* Hover Quick Eye Reveal */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-dark shadow-sm scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="h-4.5 w-4.5 text-[#2E7D32]" />
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 flex flex-col text-left">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-base text-brand-dark group-hover:text-[#2E7D32] transition-colors line-clamp-1">
                      {dish.name}
                    </h3>
                    <span className="font-heading font-bold text-base text-[#2E7D32] shrink-0">
                      ${dish.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2 mb-4 flex-1">
                    {dish.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">
                      Prep: {dish.prepTime}
                    </span>

                    {/* Order Button */}
                    <button
                      id={`add-btn-${dish.id}`}
                      onClick={(e) => handleQuickAdd(dish, e)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#2E7D32]/10 hover:bg-[#2E7D32] text-[#2E7D32] hover:text-white px-4 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty Results Fallback */}
          {filteredDishes.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-[#2E7D32]/5">
              <ShieldAlert className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-lg text-brand-dark mb-1">No Healthy Dishes Found</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                We couldn't find any menu items matching "{searchQuery}" under the selected dietary configurations. Try resetting your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setFilterVegan(false);
                  setFilterVegetarian(false);
                  setFilterGlutenFree(false);
                }}
                className="mt-4 rounded-full bg-[#2E7D32] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 shadow-sm cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Dish Customization Modal */}
        <AnimatePresence>
          {selectedDish && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDish(null)}
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="fixed inset-x-4 bottom-4 top-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 mx-auto max-w-2xl bg-[#FCFCFA] rounded-3xl shadow-2xl border border-[#2E7D32]/5 overflow-hidden flex flex-col max-h-[90vh]"
              >
                {/* Hero Image in Modal */}
                <div className="relative h-64 md:h-72 shrink-0 bg-[#FCFCFA]">
                  <img
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <button
                    onClick={() => setSelectedDish(null)}
                    className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-dark hover:bg-white transition-colors cursor-pointer"
                  >
                    <span className="text-lg font-bold text-[#2D2D2D] leading-none">×</span>
                  </button>

                  <div className="absolute bottom-5 left-6 right-6 text-white text-left">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#2E7D32] text-[9px] font-bold uppercase tracking-wider mb-2">
                      {selectedDish.category}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold tracking-tight">{selectedDish.name}</h3>
                  </div>
                </div>

                {/* Scrollable details area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-left">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Culinary Description</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{selectedDish.description}</p>
                  </div>

                  {/* Micro Nutrients / Macros */}
                  <div className="grid grid-cols-4 gap-3 bg-white rounded-2xl p-4 border border-gray-100 text-center">
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Calories</span>
                      <span className="font-heading font-bold text-brand-dark text-sm">{selectedDish.calories}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Carbs</span>
                      <span className="font-heading font-bold text-brand-dark text-sm">{Math.floor(selectedDish.calories * 0.11)}g</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Protein</span>
                      <span className="font-heading font-bold text-[#2E7D32] text-sm">{Math.floor(selectedDish.price * 1.1 + 8)}g</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Prep Time</span>
                      <span className="font-heading font-bold text-[#FFB74D] text-sm">{selectedDish.prepTime}</span>
                    </div>
                  </div>

                  {/* Ingredients Tags */}
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Key Organic Ingredients</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedDish.ingredients.map((ing) => (
                        <span key={ing} className="px-3 py-1 rounded-full bg-[#2E7D32]/5 text-[#2E7D32] text-xs font-medium border border-[#2E7D32]/10">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Dish Customization / Dietary Requirements
                    </label>
                    <textarea
                      value={customInstructions}
                      onChange={(e) => setCustomInstructions(e.target.value)}
                      placeholder="E.g., No dressing, substitute with balsamic, allergies, double protein (+ $4)..."
                      rows={2.5}
                      className="w-full text-sm rounded-xl border border-gray-100 px-4 py-3 bg-white focus:border-[#2E7D32]/30 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Footer Selection / Add to Cart */}
                <div className="border-t border-gray-100 p-6 bg-white flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3 bg-[#FCFCFA] border border-gray-100 rounded-full px-3 py-1.5 shadow-xs">
                    <button
                      onClick={() => setDishQty(Math.max(1, dishQty - 1))}
                      className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center font-bold text-gray-500 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-semibold text-brand-dark text-sm w-4 text-center">{dishQty}</span>
                    <button
                      onClick={() => setDishQty(dishQty + 1)}
                      className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center font-bold text-gray-500 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    id="add-modal-submit"
                    onClick={handleModalAdd}
                    className="flex items-center gap-2 rounded-full bg-[#2E7D32] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#2E7D32]/95 transition-all shadow-sm cursor-pointer"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add {dishQty} to Order • ${(selectedDish.price * dishQty).toFixed(2)}
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
