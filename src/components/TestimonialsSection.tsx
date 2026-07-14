import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Sparkles, User, ThumbsUp, Send, Check, AlertCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { TestimonialItem } from '../types';

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('Brooklyn Resident');
  const [formReview, setFormReview] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Stats calculation
  const totalReviews = reviews.length;
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1);

  // Helpful reviews counter state
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});

  const handleHelpfulClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formReview) {
      setFormError('Please fill out your name and review content.');
      return;
    }
    setFormError('');

    const newReview: TestimonialItem = {
      id: `custom-${Date.now()}`,
      name: formName,
      role: formRole || 'Organic Food Enthusiast',
      image: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80`, // Neutral avatar
      rating: formRating,
      review: formReview,
      date: 'Just now',
    };

    setReviews((prev) => [newReview, ...prev]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormReview('');
      setFormRating(5);
      setFormSubmitted(false);
      setIsFormOpen(false);
    }, 2000);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FCFCFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-left sm:text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <MessageSquare className="h-3.5 w-3.5" /> Customer Testimonials
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-brand-dark mb-4 tracking-tight">
            Verified Patrons <span className="italic font-serif text-[#2E7D32]">Stories</span>
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            We are deeply honored to nourish active professionals, organic farmers, fitness enthusiasts, and neighborhood families across Brooklyn. Read their honest stories.
          </p>
        </div>

        {/* Rating Breakdown & Submit Review CTA (Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center">
          <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-[#2E7D32]/5 text-center shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Average Score</span>
            <span className="text-5xl sm:text-6xl font-light text-brand-dark font-heading block mb-2">{avgRating}</span>
            <div className="flex justify-center gap-1 text-[#FFB74D] mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-[#FFB74D] text-[#FFB74D]" />
              ))}
            </div>
            <p className="text-[10px] text-gray-400 font-light">Based on {totalReviews} real Brooklyn reviews</p>
          </div>

          <div className="md:col-span-5 bg-white rounded-3xl p-8 border border-[#2E7D32]/5 space-y-3.5 shadow-xs">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Patron Curation Distribution</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-10 font-medium text-gray-500">5 star</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2E7D32] rounded-full w-full" />
                </div>
                <span className="w-8 text-right text-gray-400 font-mono">100%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 font-medium text-gray-500">4 star</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2E7D32] rounded-full w-[0%]" />
                </div>
                <span className="w-8 text-right text-gray-400 font-mono">0%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 font-medium text-gray-500">3 star</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2E7D32] rounded-full w-[0%]" />
                </div>
                <span className="w-8 text-right text-gray-400 font-mono">0%</span>
              </div>
            </div>
          </div>

          {/* Share Feedback CTA */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="font-heading font-semibold text-lg text-brand-dark mb-2">Nourished by us?</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed mb-5">
              Your stories inspire our culinary development. Share your wholesome experience with our community.
            </p>
            <button
              id="write-review-btn"
              onClick={() => {
                setIsFormOpen(!isFormOpen);
                setFormError('');
              }}
              className="rounded-full bg-[#2E7D32]/10 hover:bg-[#2E7D32] text-[#2E7D32] hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              {isFormOpen ? 'Collapse Form' : 'Write a Review'}
            </button>
          </div>
        </div>

        {/* Dynamic Review Submission Form Accordion */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-16 bg-white rounded-3xl border border-[#2E7D32]/5 p-6 sm:p-8 shadow-xs"
            >
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="h-12 w-12 rounded-full bg-green-100 text-[#2E7D32] flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-brand-dark">Review Submitted!</h3>
                  <p className="text-xs text-gray-400 mt-1">Thank you for helping us grow. Your review has been added below.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4 max-w-xl mx-auto text-left">
                  <h3 className="font-heading font-semibold text-sm text-brand-dark mb-4 border-b border-gray-100 pb-2 flex items-center gap-1.5 uppercase tracking-wider">
                    <Sparkles className="h-4.5 w-4.5 text-[#2E7D32]" /> Tell us what you loved!
                  </h3>

                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="E.g., Charlotte Green"
                        className="w-full text-xs rounded-xl border border-gray-100 px-4 py-2.5 focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Who you are (Role)</label>
                      <input
                        type="text"
                        value={formRole}
                        onChange={(e) => setFormRole(e.target.value)}
                        placeholder="E.g., Certified Dietician"
                        className="w-full text-xs rounded-xl border border-gray-100 px-4 py-2.5 focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Rating Score</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="text-[#FFB74D] p-1 cursor-pointer hover:scale-110 transition-transform"
                        >
                          <Star className={`h-6 w-6 ${star <= formRating ? 'fill-[#FFB74D]' : 'text-gray-100'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Your Review *</label>
                    <textarea
                      required
                      value={formReview}
                      onChange={(e) => setFormReview(e.target.value)}
                      placeholder="Write your honest dining or online-ordering experience. Describe the flavors, ingredients, or service."
                      rows={3.5}
                      className="w-full text-xs rounded-xl border border-gray-100 px-4 py-3 focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-full bg-[#2E7D32] text-white font-bold px-6 py-3.5 text-xs uppercase tracking-wider hover:bg-[#2E7D32]/95 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" /> Submit Review
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {reviews.map((testimonial) => (
              <motion.div
                layout
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-[#2E7D32]/5 p-6 sm:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-[#FFB74D] mb-4.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#FFB74D] text-[#FFB74D]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6 italic text-left">
                    "{testimonial.review}"
                  </p>
                </div>

                {/* Customer Info footer */}
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover border border-gray-100 bg-gray-50 grayscale-10"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-left">
                      <h4 className="font-heading font-semibold text-xs text-brand-dark leading-none">
                        {testimonial.name}
                      </h4>
                      <span className="text-[9px] text-gray-400 mt-1 block leading-none font-medium">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>

                  {/* Date & Upvote action */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={(e) => handleHelpfulClick(testimonial.id, e)}
                      className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 hover:text-[#2E7D32] transition-colors cursor-pointer p-1"
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span>{helpfulCounts[testimonial.id] || 0}</span>
                    </button>
                    <span className="text-[10px] text-gray-300 font-mono">{testimonial.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
