import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Trash2, CheckCircle2, Ticket, ShieldCheck, AlertCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemove,
  onClear,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('delivery');
  const [formError, setFormError] = useState('');

  // Customer details form
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const discountAmount = subtotal * discountPercent;
  const deliveryFee = deliveryMethod === 'delivery' && subtotal > 0 ? 3.99 : 0;
  const packagingFee = subtotal > 0 ? 1.50 : 0; // Sustainable packing
  const total = subtotal - discountAmount + deliveryFee + packagingFee;

  const handleApplyPromo = () => {
    const code = promoCode.toUpperCase().trim();
    if (code === 'HEALTHY20') {
      setDiscountPercent(0.2);
      setPromoMessage('20% discount applied successfully!');
    } else if (code === 'FRESH10') {
      setDiscountPercent(0.1);
      setPromoMessage('10% discount applied successfully!');
    } else if (code === 'GREENLIFE') {
      setDiscountPercent(0.15);
      setPromoMessage('15% discount applied successfully!');
    } else {
      setPromoMessage('Invalid code. Try HEALTHY20, FRESH10, or GREENLIFE');
      setDiscountPercent(0);
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || (deliveryMethod === 'delivery' && !address)) {
      setFormError('Please fill out all required checkout fields.');
      return;
    }
    setFormError('');
    setCheckoutStep('success');
  };

  const handleReset = () => {
    onClear();
    setIsCheckingOut(false);
    setCheckoutStep('cart');
    setPromoCode('');
    setDiscountPercent(0);
    setPromoMessage('');
    setName('');
    setPhone('');
    setAddress('');
    setNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 bottom-0 top-0 z-50 flex h-full w-full flex-col bg-white shadow-2xl sm:max-w-md md:max-w-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
                  <ShoppingBag className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h2 className="font-heading text-sm font-semibold text-brand-dark uppercase tracking-wider">Your Healthy Order</h2>
                  <p className="text-[10px] text-gray-400 font-mono">
                    {cart.length === 0 ? 'Empty cart' : `${cart.reduce((a, b) => a + b.quantity, 0)} items selected`}
                  </p>
                </div>
              </div>
              <button
                id="cart-close-btn"
                onClick={onClose}
                className="rounded-full p-1.5 text-gray-400 hover:bg-gray-50 hover:text-brand-dark transition-colors"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Content Switcher */}
            <div className="flex-1 overflow-y-auto p-5">
              {checkoutStep === 'success' ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center p-6"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-[#2E7D32] animate-bounce">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-heading text-2xl font-light text-brand-dark mb-2">Order Confirmed!</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed font-light">
                    Thank you, <span className="font-medium text-brand-dark">{name}</span>! Your healthy meal is being freshly prepared with care.
                  </p>
                  
                  <div className="w-full rounded-2xl bg-[#FCFCFA] p-5 text-left border border-gray-100 mb-6 space-y-3">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Order Type:</span>
                      <span className="font-medium capitalize text-brand-dark">{deliveryMethod}</span>
                    </div>
                    {deliveryMethod === 'delivery' && (
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Address:</span>
                        <span className="font-medium text-brand-dark text-right truncate max-w-[200px]">{address}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Est. Preparation Time:</span>
                      <span className="font-semibold text-[#2E7D32]">20 - 25 minutes</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Contact Phone:</span>
                      <span className="font-medium text-brand-dark">{phone}</span>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="flex justify-between text-sm font-semibold text-brand-dark">
                      <span>Total Paid:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-green-800 bg-[#2E7D32]/5 px-3.5 py-2.5 rounded-xl mb-8">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-[#2E7D32]" />
                    <span>You earned <strong>{Math.floor(subtotal)} Loyalty Points</strong> with this order!</span>
                  </div>

                  <button
                    id="finish-order-btn"
                    onClick={handleReset}
                    className="w-full rounded-full bg-[#2E7D32] py-3.5 px-6 font-semibold text-white hover:bg-[#2E7D32]/95 transition-colors shadow-xs cursor-pointer text-xs uppercase tracking-wider"
                  >
                    Back to Dining Menu
                  </button>
                </motion.div>
              ) : checkoutStep === 'details' ? (
                /* Shipping / Payment Details */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-heading font-light text-xl text-brand-dark">Delivery & <span className="italic font-serif text-[#2E7D32]">Contact</span></h3>
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="text-xs text-[#2E7D32] font-semibold tracking-wider uppercase hover:underline cursor-pointer"
                    >
                      Edit Cart
                    </button>
                  </div>

                  {/* Delivery / Pickup Switch */}
                  <div className="grid grid-cols-2 gap-2.5 rounded-xl bg-gray-50 p-1 border border-gray-100">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`rounded-lg py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        deliveryMethod === 'delivery'
                          ? 'bg-white text-[#2E7D32] shadow-xs'
                          : 'text-gray-400 hover:text-brand-dark'
                      }`}
                    >
                      Home Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`rounded-lg py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        deliveryMethod === 'pickup'
                          ? 'bg-white text-[#2E7D32] shadow-xs'
                          : 'text-gray-400 hover:text-brand-dark'
                      }`}
                    >
                      Store Pickup
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-800 text-xs flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none transition-colors bg-[#FCFCFA]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none transition-colors bg-[#FCFCFA]"
                      />
                    </div>

                    {deliveryMethod === 'delivery' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-1"
                      >
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Delivery Address (Brooklyn Only) *
                        </label>
                        <input
                          type="text"
                          required={deliveryMethod === 'delivery'}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="123 Organic Way, Brooklyn, NY"
                          className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none transition-colors bg-[#FCFCFA]"
                        />
                      </motion.div>
                    )}

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Special Chef Notes / Delivery Instructions
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="E.g., Dressing on the side, ring buzzer 2B."
                        rows={3}
                        className="w-full rounded-xl border border-gray-100 px-4 py-3 text-xs focus:border-[#2E7D32]/30 focus:outline-none transition-colors resize-none bg-[#FCFCFA]"
                      />
                    </div>

                    <div className="rounded-xl border border-[#2E7D32]/5 p-4 bg-[#FCFCFA]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#FFB74D]"></span>
                        <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-wider">Secure Sandbox checkout</h4>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                        To guarantee a seamless demo experience, this order uses secure simulated billing. Your private information remains stored strictly locally in your browser session.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#2E7D32] py-4 px-6 font-semibold text-white hover:bg-[#2E7D32]/95 transition-all shadow-xs cursor-pointer mt-4 text-xs uppercase tracking-wider"
                    >
                      Submit Secure Order (${total.toFixed(2)})
                    </button>
                  </form>
                </motion.div>
              ) : cart.length === 0 ? (
                /* Empty Cart Screen */
                <div className="flex h-full flex-col items-center justify-center text-center py-16 bg-white">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 text-gray-300">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-light text-brand-dark mb-1">Your Basket is Empty</h3>
                  <p className="text-xs text-gray-400 max-w-[240px] leading-relaxed mb-6 font-light">
                    Add healthy bowls, functional salads, and nutritious organic wraps from our menu to begin.
                  </p>
                  <button
                    onClick={onClose}
                    className="rounded-full bg-[#2E7D32]/10 px-5 py-2 text-xs font-semibold text-[#2E7D32] hover:bg-[#2E7D32]/20 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    Browse Our Menu
                  </button>
                </div>
              ) : (
                /* Standard Cart Items List */
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading font-semibold text-brand-dark text-xs uppercase tracking-wider">Selected Bowls & Dishes</h3>
                    <button
                      onClick={onClear}
                      className="text-xs text-red-500 hover:text-red-600 font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Clear All
                    </button>
                  </div>

                  {/* Items List */}
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        layout
                        key={item.menuItem.id}
                        className="flex gap-3 rounded-xl border border-gray-100 p-3 bg-white hover:shadow-xs transition-shadow"
                      >
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="h-16 w-16 rounded-lg object-cover bg-gray-50"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <h4 className="font-heading text-xs font-semibold text-brand-dark truncate uppercase tracking-wider">
                            {item.menuItem.name}
                          </h4>
                          <p className="text-[10px] text-gray-400 mb-1.5 font-light">{item.menuItem.prepTime} • {item.menuItem.calories} kcal</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-brand-dark font-mono">
                              ${(item.menuItem.price * item.quantity).toFixed(2)}
                            </span>

                            {/* Qty Counter */}
                            <div className="flex items-center gap-2.5 rounded-full bg-gray-50 px-2 py-1 border border-gray-100">
                              <button
                                onClick={() => onUpdateQty(item.menuItem.id, item.quantity - 1)}
                                className="rounded-full p-0.5 hover:bg-gray-200 text-gray-500 transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="text-xs font-semibold text-brand-dark min-w-[12px] text-center font-mono">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQty(item.menuItem.id, item.quantity + 1)}
                                className="rounded-full p-0.5 hover:bg-gray-200 text-gray-500 transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemove(item.menuItem.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Promo Section */}
                  <div className="rounded-xl bg-[#FCFCFA] p-4 border border-gray-100">
                    <div className="flex items-center gap-1.5 mb-2 text-brand-dark">
                      <Ticket className="h-4 w-4 text-[#2E7D32]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Apply Promo Code</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="E.g., HEALTHY20"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs uppercase focus:border-[#2E7D32]/30 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="rounded-lg bg-[#2E7D32] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#2E7D32]/95 transition-colors cursor-pointer uppercase tracking-wider"
                      >
                        Apply
                      </button>
                    </div>
                    {promoMessage && (
                      <p className={`mt-1.5 text-[10px] font-bold uppercase tracking-wider ${discountPercent > 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {promoMessage}
                      </p>
                    )}
                    <div className="mt-2.5 flex flex-wrap gap-1.5 text-[10px] text-gray-400">
                      <span>Available codes:</span>
                      <button onClick={() => { setPromoCode('HEALTHY20'); setPromoMessage(''); }} className="underline hover:text-[#2E7D32]">HEALTHY20 (-20%)</button>
                      <span>•</span>
                      <button onClick={() => { setPromoCode('FRESH10'); setPromoMessage(''); }} className="underline hover:text-[#2E7D32]">FRESH10 (-10%)</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Pricing / Checkout Footer */}
            {cart.length > 0 && checkoutStep === 'cart' && (
              <div className="border-t border-gray-100 p-5 space-y-4 bg-[#FCFCFA]">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-gray-400 font-medium">
                    <span>Items Subtotal</span>
                    <span className="font-semibold text-brand-dark font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Discount ({(discountPercent * 100)}%)</span>
                      <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-400 font-medium">
                    <span>Eco-Friendly Packaging</span>
                    <span className="font-semibold text-brand-dark font-mono">${packagingFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 font-medium">
                    <span>Delivery Fee ({deliveryMethod})</span>
                    <span className="font-semibold text-brand-dark font-mono">
                      {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  <hr className="border-gray-100 my-1" />
                  <div className="flex justify-between text-sm font-bold text-brand-dark uppercase tracking-wider">
                    <span>Estimated Total</span>
                    <span className="text-base text-[#2E7D32] font-mono">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  id="checkout-proceed-btn"
                  onClick={() => setCheckoutStep('details')}
                  className="w-full rounded-full bg-[#2E7D32] py-4 px-6 text-center font-semibold text-white hover:bg-[#2E7D32]/95 transition-all shadow-xs cursor-pointer text-xs uppercase tracking-wider"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
