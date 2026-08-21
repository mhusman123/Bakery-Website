'use client';

import React, { useState } from 'react';
import { QUETTA_BAKERY_LOCATION } from '@/lib/deliveryZones';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useUIStore } from '@/store/uiStore';
import { MapPin, Phone, Clock, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const showToast = useUIStore(s => s.showToast);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSubmitted(true);
    showToast('Message sent! Our Quetta team will get back to you shortly.', 'success');
  };

  return (
    <div className="py-12 bg-stone-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Quetta Store & Support
          </span>
          <h1 className="text-4xl font-black font-display text-stone-900 mt-3">Contact Porto&apos;s Bakery</h1>
          <p className="text-sm text-stone-600 mt-2">
            Have questions about custom event orders, catering in Quetta, or delivery? Reach out to our bakery team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Store Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold font-display text-stone-900 border-b border-stone-100 pb-3">
                Bakery Information
              </h3>

              <div className="space-y-4 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Quetta Address</span>
                    <p className="text-stone-600 mt-0.5">{QUETTA_BAKERY_LOCATION.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Direct Order Hotline</span>
                    <p className="text-stone-600 mt-0.5">{QUETTA_BAKERY_LOCATION.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">WhatsApp Orders</span>
                    <p className="text-emerald-700 font-semibold mt-0.5">{QUETTA_BAKERY_LOCATION.whatsappDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Opening Hours</span>
                    <p className="text-stone-600 mt-0.5">{QUETTA_BAKERY_LOCATION.openingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm h-64 relative">
              <iframe
                title="Porto's Bakery Quetta Map"
                src={QUETTA_BAKERY_LOCATION.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Contact Form UI */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold font-display text-stone-900 mb-2">Send Us a Message</h3>
            <p className="text-xs text-stone-500 mb-6">Fill out the form below and our team will get back to you within 2 hours.</p>

            {submitted ? (
              <div className="py-12 text-center bg-amber-50 rounded-2xl p-6 border border-amber-200 text-amber-950 space-y-2">
                <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto" />
                <h4 className="text-lg font-bold font-display">Thank You! Your message was received.</h4>
                <p className="text-xs text-stone-600">Our Quetta store representative will respond to your query shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" size="sm" className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Your Name *"
                    required
                    placeholder="e.g. Fatima Zafar"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    label="Phone Number"
                    placeholder="0304 8844719"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl py-2.5 px-3 text-xs text-stone-900 focus:outline-none focus:border-amber-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Custom Donut Box">Custom Donut Box Order</option>
                      <option value="Wedding / Party Catering">Wedding / Party Catering</option>
                      <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you today?"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl p-3 text-xs text-stone-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <Button type="submit" variant="amber" size="lg" rightIcon={<Send className="w-4 h-4" />} className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
