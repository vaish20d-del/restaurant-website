import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, Coffee, Sparkles, MapPin, CheckCircle2, Ticket, QrCode, ShieldCheck, Heart, Leaf, AlertCircle } from 'lucide-react';
import { ReservationData } from '../types';

export default function ReservationSection() {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '2026-07-15',
    time: '19:00',
    guests: 2,
    occasion: 'General Dining',
    specialRequests: '',
  });

  const [selectedZone, setSelectedZone] = useState<'greenhouse' | 'oakbar' | 'skylight' | 'patio'>('greenhouse');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [formError, setFormError] = useState('');

  const diningZones = [
    {
      id: 'greenhouse',
      name: 'Glass Greenhouse',
      desc: 'Sun-drenched botanical garden filled with indoor olive trees and lush foliage.',
      premiumCharge: 'No extra charge',
    },
    {
      id: 'oakbar',
      name: 'Oak Counter Bar',
      desc: 'Watch the mixologists and culinary chefs plate organic dishes close up.',
      premiumCharge: 'No extra charge',
    },
    {
      id: 'skylight',
      name: 'Skylight Mezzanine',
      desc: 'Romantic upper-level under-skylight seating with gentle ambient acoustics.',
      premiumCharge: 'No extra charge',
    },
    {
      id: 'patio',
      name: 'Outdoor Green Patio',
      desc: 'Charming open-air patio enclosed by active vertical organic herb gardens.',
      premiumCharge: 'No extra charge',
    },
  ];

  const handleZoneClick = (zoneId: 'greenhouse' | 'oakbar' | 'skylight' | 'patio') => {
    setSelectedZone(zoneId);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill out all required fields.');
      return;
    }
    setFormError('');
    // Generate simulated ticket number
    const randCode = Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(`HF-${randCode}`);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '2026-07-15',
      time: '19:00',
      guests: 2,
      occasion: 'General Dining',
      specialRequests: '',
    });
  };

  return (
    <section id="reservations" className="py-24 bg-[#FCFCFA] relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#2E7D32]/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#81C784]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Reservation Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-left sm:text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Users className="h-3.5 w-3.5" /> Book Your Table
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-brand-dark mb-4 tracking-tight">
            Reserve An <span className="italic font-serif text-[#2E7D32]">Organic</span> Culinary Session
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            Reserve your seat in our glasshouse dining room. Experience pure farm-to-table traceability, botanical aromatherapy, and premium cold-press botanical mocktails.
          </p>
        </div>

        {/* Content Box */}
        <div className="mx-auto max-w-4xl bg-white rounded-3xl border border-[#2E7D32]/5 shadow-xs overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              /* Booking Form */
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Inputs area */}
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:col-span-7 space-y-6">
                  <h3 className="font-heading font-semibold text-sm text-brand-dark flex items-center gap-2 border-b border-gray-100 pb-4 uppercase tracking-wider">
                    <Sparkles className="h-4.5 w-4.5 text-[#2E7D32]" />
                    Guest Information
                  </h3>

                  {formError && (
                    <div className="p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-800 text-xs flex items-center gap-2 text-left">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Elizabeth Sterling"
                        className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (917) 111-1111"
                        className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@healthyfood.com"
                      className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-[#2E7D32]" /> Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-100 px-3.5 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#2E7D32]" /> Time Slot *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-100 px-3.5 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                      >
                        <option value="08:00">08:00 AM (Breakfast)</option>
                        <option value="09:30">09:30 AM (Breakfast)</option>
                        <option value="11:30">11:30 AM (Lunch)</option>
                        <option value="13:00">01:00 PM (Lunch)</option>
                        <option value="17:30">05:30 PM (Dinner)</option>
                        <option value="19:00">07:00 PM (Dinner)</option>
                        <option value="20:30">08:30 PM (Dinner)</option>
                        <option value="21:30">09:30 PM (Dinner)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-[#2E7D32]" /> Guests *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-100 px-3.5 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8">8 Guests</option>
                        <option value="10">10 Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Occasion
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-xs focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors"
                    >
                      <option value="General Dining">General Dining</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Corporate Wellness Dinner">Corporate Wellness Dinner</option>
                      <option value="Casual Lunch Meeting">Casual Lunch Meeting</option>
                    </select>
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Special Table Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Let us know about allergen constraints (celiac, nuts), or if you prefer a corner table near the olive trees."
                      rows={3}
                      className="w-full text-xs rounded-xl border border-gray-100 px-4 py-3 focus:border-[#2E7D32]/30 focus:outline-none bg-[#FCFCFA] transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="submit-reservation-btn"
                    type="submit"
                    className="w-full rounded-full bg-[#2E7D32] py-4 px-6 font-semibold text-white hover:bg-[#2E7D32]/95 uppercase tracking-wider text-xs transition-all cursor-pointer shadow-xs"
                  >
                    Confirm Table Reservation
                  </button>
                </form>

                {/* Seating Zone Map Selection area */}
                <div className="lg:col-span-5 bg-brand-dark text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 text-left">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[9px] font-bold text-[#81C784] uppercase tracking-widest block mb-1">Interactive Customization</span>
                      <h3 className="font-heading font-light text-xl text-white">Select Your <span className="italic font-serif text-[#81C784]">Botanical</span> Zone</h3>
                    </div>

                    {/* Zone list */}
                    <div className="space-y-4">
                      {diningZones.map((zone) => {
                        const isSelected = selectedZone === zone.id;
                        return (
                          <div
                            key={zone.id}
                            onClick={() => handleZoneClick(zone.id as any)}
                            className={`rounded-2xl p-4 border text-left cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-white/10 border-[#81C784] text-white'
                                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <h4 className={`font-heading text-xs font-semibold ${isSelected ? 'text-[#81C784]' : 'text-white'}`}>
                                {zone.name}
                              </h4>
                              <span className="text-[9px] font-bold text-[#FFB74D] uppercase tracking-widest">{zone.premiumCharge}</span>
                            </div>
                            <p className="text-[11px] font-light leading-relaxed text-gray-400">{zone.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Curation note */}
                  <div className="rounded-xl border border-dashed border-white/10 p-4 bg-white/5 mt-8 text-left">
                    <span className="text-xs font-semibold text-white uppercase block mb-1">Chef's Table Experience</span>
                    <p className="text-[10px] leading-relaxed text-gray-400 font-light">
                      Zone selections are guaranteed on a first-come basis. For special events containing more than 10 guests, contact our reservations coordinator at <strong>+1 (917) 111-1111</strong>.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Success / Ticket Confirmation Screen */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center p-6 sm:p-12 text-center bg-[#FCFCFA]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-[#2E7D32] animate-bounce">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-heading text-3xl font-light text-brand-dark mb-2">Reservation <span className="italic font-serif text-[#2E7D32]">Confirmed</span>!</h3>
                <p className="text-xs text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
                  We have successfully saved your booking, <strong className="text-brand-dark">{formData.name}</strong>. A digital receipt and nutrition prep instructions have been emailed to <strong className="text-brand-dark">{formData.email}</strong>.
                </p>

                {/* Digital Ticket Layout (Michelin Premium Feel) */}
                <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white shadow-xs overflow-hidden relative">
                  {/* Circle cutouts for ticket aesthetics */}
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FCFCFA] border-r border-gray-100 z-10" />
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FCFCFA] border-l border-gray-100 z-10" />

                  {/* Ticket Header */}
                  <div className="bg-[#2E7D32] text-white p-5 text-left flex justify-between items-center">
                    <div>
                      <span className="text-[9px] font-bold text-emerald-100 uppercase tracking-widest block">Accredited Dining Ticket</span>
                      <h4 className="font-heading text-lg font-light">Healthy Food Brooklyn</h4>
                    </div>
                    <Leaf className="h-6 w-6 text-[#81C784]" />
                  </div>

                  {/* Ticket Details */}
                  <div className="p-6 grid grid-cols-2 gap-y-4 gap-x-2 text-left text-xs border-b border-dashed border-gray-200 relative bg-white">
                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wider text-[9px] font-bold">Customer Name</span>
                      <span className="font-semibold text-brand-dark text-sm truncate block">{formData.name}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wider text-[9px] font-bold">Reservation ID</span>
                      <span className="font-semibold text-[#2E7D32] font-mono text-sm block">{ticketNumber}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wider text-[9px] font-bold">Date & Time</span>
                      <span className="font-semibold text-brand-dark text-sm block">{formData.date} at {formData.time}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wider text-[9px] font-bold">Party Count</span>
                      <span className="font-semibold text-brand-dark text-sm block">
                        {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wider text-[9px] font-bold">Preferred Seating</span>
                      <span className="font-semibold text-[#FFB74D] text-sm capitalize block">
                        {diningZones.find(z => z.id === selectedZone)?.name}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wider text-[9px] font-bold">Occasion</span>
                      <span className="font-semibold text-brand-dark text-sm block">{formData.occasion}</span>
                    </div>
                  </div>

                  {/* Ticket QR Barcode */}
                  <div className="p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#2E7D32] bg-[#2E7D32]/5 px-2.5 py-1 rounded-md mb-2">
                        <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                        Green Star Accredited
                      </span>
                      <p className="text-[10px] text-gray-400 leading-relaxed max-w-[200px] font-light">
                        Please present this QR ticket upon arrival. Dress code is casual-elegant. Tables are held for up to 15 minutes.
                      </p>
                    </div>
                    {/* Simulated SVG QR Code */}
                    <div className="h-20 w-20 bg-[#FCFCFA] border border-gray-100 rounded-xl flex items-center justify-center p-2 shrink-0">
                      <QrCode className="h-full w-full text-brand-dark" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-10">
                  <button
                    onClick={handleReset}
                    className="rounded-full border border-gray-100 bg-white hover:bg-[#FCFCFA] font-bold uppercase tracking-wider px-6 py-3.5 text-xs text-brand-dark cursor-pointer transition-colors"
                  >
                    Modify Booking
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      // Jump to menu
                      const element = document.getElementById('menu');
                      if (element) {
                        window.scrollTo({
                          top: element.getBoundingClientRect().top + window.scrollY - 80,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="rounded-full bg-[#2E7D32] text-white font-bold uppercase tracking-wider px-6 py-3.5 text-xs hover:bg-[#2E7D32]/95 transition-all cursor-pointer"
                  >
                    Order Pre-Arrival Meals
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
