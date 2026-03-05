"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle className="w-16 h-16 text-[#C4856A] mx-auto mb-6" />
        <h3 className="font-serif text-3xl mb-4">Thank You</h3>
        <p className="text-[#4A4543]">
          I&apos;ll be in touch within 24 hours to discuss your event.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-transparent border-b border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-colors"
            placeholder="Full name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3"
          >
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-transparent border-b border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-colors"
            placeholder="+971 XX XXX XXXX"
          />
        </div>
        <div>
          <label
            htmlFor="eventType"
            className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3"
          >
            Event Type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            className="w-full bg-transparent border-b border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-colors cursor-pointer"
          >
            <option value="">Select event type</option>
            <option value="brand-activation">Brand Activation</option>
            <option value="private-event">Private Event</option>
            <option value="corporate">Corporate Event</option>
            <option value="nightlife">Nightlife / Entertainment</option>
            <option value="destination">Destination Event</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3"
        >
          Estimated Budget (AED)
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full bg-transparent border-b border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-colors cursor-pointer"
        >
          <option value="">Prefer not to say</option>
          <option value="50k-100k">50,000 - 100,000</option>
          <option value="100k-250k">100,000 - 250,000</option>
          <option value="250k-500k">250,000 - 500,000</option>
          <option value="500k+">500,000+</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3"
        >
          Tell Me About Your Vision *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-colors resize-none"
          placeholder="Share details about your event: the occasion, guest count, desired atmosphere, any inspiration..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="group bg-[#C4856A] hover:bg-[#D4A08A] disabled:bg-[#C4856A]/50 text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-3"
        >
          {isLoading ? (
            <>
              <span className="animate-pulse">Sending...</span>
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
