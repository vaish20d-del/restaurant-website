import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Share2, Sparkles, Check, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill out all required message fields.');
      return;
    }
    setFormError('');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 4000);
  };

  const workingHours = [
    { day: 'Monday — Friday', time: '08:00 AM — 10:00 PM' },
    { day: 'Saturday', time: '09:00 AM — 11:00 PM' },
    { day: 'Sunday (Brunch Club)', time: '09:00 AM — 09:00 PM' },
  ];

  return (
    <section id="contact" className="py-24 bg-[#FCFCFA] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-left sm:text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Mail className="h-3.5 w-3.5" /> Contact Channels
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-brand-dark mb-4 tracking-tight">
            Connect With Our <span className="italic font-serif text-[#2E7D32]">Wellness</span> Team
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            Have questions about nutrient calculations, allergen sourcing, corporate catering programs, or wellness gatherings? We are always here to assist you.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Detailed Info Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Sourcing Hub Detail */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#2E7D32]/5 shadow-xs space-y-4">
              <h3 className="font-heading font-semibold text-sm text-brand-dark border-b border-gray-100 pb-3 uppercase tracking-wider">
                Brooklyn Flagship
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2E7D32]/5 text-[#2E7D32]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-brand-dark">Address Location</h4>
                    <p className="text-gray-400 font-light mt-0.5">123 Organic Way, Brooklyn Heights, NY 11201</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2E7D32]/5 text-[#2E7D32]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-brand-dark">Phone Helpline</h4>
                    <p className="text-gray-400 font-light mt-0.5">+1 (917) 111-1111</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2E7D32]/5 text-[#2E7D32]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-brand-dark">General Inquiries</h4>
                    <p className="text-gray-400 font-light mt-0.5 font-mono">hello@healthyfood.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational timetable */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#2E7D32]/5 shadow-xs space-y-4">
              <h3 className="font-heading font-semibold text-sm text-brand-dark flex items-center gap-2 border-b border-gray-100 pb-3 uppercase tracking-wider">
                <Clock className="h-4.5 w-4.5 text-[#2E7D32]" /> Hours of Operation
              </h3>
              <div className="space-y-3">
                {workingHours.map((wh) => (
                  <div key={wh.day} className="flex justify-between items-center text-xs border-b border-gray-100 pb-2.5 last:border-0 last:pb-0">
                    <span className="font-semibold text-brand-dark">{wh.day}</span>
                    <span className="text-gray-400 font-light">{wh.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#2E7D32]/5 shadow-xs">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-4 bg-white"
                >
                  <div className="h-16 w-16 rounded-full bg-green-50 text-[#2E7D32] flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-brand-dark">Message Dispatched!</h3>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed font-light">
                    Thank you, <span className="font-bold text-brand-dark">{formData.name}</span>! Your message has been routed to our nutritional coordinators. We respond within 2-4 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left bg-white">
                  <h3 className="font-heading font-semibold text-sm text-brand-dark flex items-center gap-2 border-b border-gray-100 pb-4 uppercase tracking-wider">
                    <Sparkles className="h-4.5 w-4.5 text-[#2E7D32]" />
                    Send a Message
                  </h3>

                  {formError && (
                    <div className="p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-800 text-xs flex items-center gap-2 text-left">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full text-xs rounded-xl border border-gray-100 px-4 py-2.5 focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="w-full text-xs rounded-xl border border-gray-100 px-4 py-2.5 focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="E.g., Catering inquiry, bulk orders, allergen info..."
                      className="w-full text-xs rounded-xl border border-gray-100 px-4 py-2.5 focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Message Content *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your inquiry in detail. Include any group counts, specific dietary demands, or timelines."
                      rows={4}
                      className="w-full text-xs rounded-xl border border-gray-100 px-4 py-3 focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#2E7D32] py-4 px-6 font-semibold text-white hover:bg-[#2E7D32]/95 transition-all shadow-xs flex items-center justify-center gap-2.5 cursor-pointer text-xs uppercase tracking-wider"
                  >
                    <Send className="h-4 w-4" />
                    Dispatch Secure Message
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Vector map simulation */}
        <div className="bg-white rounded-3xl border border-[#2E7D32]/5 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-4 space-y-4">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#2E7D32] bg-[#2E7D32]/5 px-2.5 py-1 rounded-md">
                Williamsburg, Brooklyn Hotspot
              </span>
              <h3 className="font-heading font-light text-xl sm:text-2xl text-brand-dark tracking-tight leading-snug">
                Our Sourcing & <span className="italic font-serif text-[#2E7D32]">Delivery</span> Buffer
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                We are situated in the center of Brooklyn. Our solar-powered electric delivery vehicles service a fast, guaranteed <strong>3-mile radius</strong> covering Williamsburg, DUMBO, Brooklyn Heights, Cobble Hill, and Prospect Heights.
              </p>
              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-brand-dark">
                  <ChevronRight className="h-4 w-4 text-[#2E7D32]" />
                  Williamsburg Flags: 0.5 miles away
                </div>
                <div className="flex items-center gap-2 font-semibold text-brand-dark">
                  <ChevronRight className="h-4 w-4 text-[#2E7D32]" />
                  DUMBO Waterfront: 1.2 miles away
                </div>
                <div className="flex items-center gap-2 font-semibold text-brand-dark">
                  <ChevronRight className="h-4 w-4 text-[#2E7D32]" />
                  Prospect Heights: 2.1 miles away
                </div>
              </div>
            </div>

            {/* Gorgeous Vector-style CSS map detailing local streets */}
            <div className="lg:col-span-8 bg-brand-dark rounded-2xl h-80 relative overflow-hidden flex items-center justify-center border border-white/5 shadow-inner">
              {/* Map background grids and streets */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-white/5 rotate-6" />
              <div className="absolute top-2/3 left-0 right-0 h-1.5 bg-white/5 -rotate-12" />
              <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-white/5 rotate-45" />
              <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-white/5 -rotate-45" />

              {/* Delivery Boundary Circle */}
              <div className="absolute h-64 w-64 rounded-full border border-dashed border-[#81C784]/25 animate-pulse flex items-center justify-center">
                <span className="text-[10px] text-[#81C784] font-mono font-bold tracking-widest uppercase">
                  3-Mile Electric Delivery Buffer
                </span>
              </div>

              {/* DUMBO label pin */}
              <div className="absolute top-24 left-36 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/5 text-[9px] text-gray-300">
                <MapPin className="h-3 w-3 text-[#81C784]" /> DUMBO
              </div>

              {/* Brooklyn Heights label pin */}
              <div className="absolute bottom-20 left-28 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/5 text-[9px] text-gray-300">
                <MapPin className="h-3 w-3 text-[#81C784]" /> Brooklyn Heights
              </div>

              {/* Cobble Hill label pin */}
              <div className="absolute bottom-16 right-24 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/5 text-[9px] text-gray-300">
                <MapPin className="h-3 w-3 text-[#81C784]" /> Cobble Hill
              </div>

              {/* Our Flagship Location Pin (Animate pulse) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                {/* Floating flag card */}
                <div className="bg-white text-brand-dark px-3.5 py-2 rounded-xl shadow-lg border border-emerald-100 flex items-center gap-2 mb-2 animate-bounce">
                  <span className="h-2 w-2 rounded-full bg-[#2E7D32] animate-ping" />
                  <span className="text-xs font-bold font-heading whitespace-nowrap">Healthy Food Brooklyn</span>
                </div>
                {/* Visual Pin shadow ring */}
                <div className="relative">
                  <div className="h-4 w-4 bg-[#FFB74D] rounded-full border border-white shadow-md z-10 relative" />
                  <div className="h-8 w-8 bg-[#FFB74D]/30 rounded-full absolute -top-2 -left-2 animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
