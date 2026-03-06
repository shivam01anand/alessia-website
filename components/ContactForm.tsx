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

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "a39897ff-ebf5-46d3-a7cc-164019f8a1c2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
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
          I&apos;ll be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Interest Type - New Field */}
      <div className="relative group">
        <label
          className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-4"
        >
          I&apos;m interested in *
        </label>
        <div className="flex flex-wrap gap-3">
          {["Events", "Real Estate", "Both"].map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name="interestType"
                value={option.toLowerCase().replace(" ", "-")}
                required
                className="peer sr-only"
              />
              <span className="inline-block px-6 py-3 border border-[#2C2825]/20 text-sm tracking-wide transition-all duration-300 peer-checked:bg-[#2C2825] peer-checked:text-white peer-checked:border-[#2C2825] hover:border-[#2C2825]/50">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <label
            htmlFor="name"
            className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3 transition-colors duration-300 group-focus-within:text-[#C4856A]"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-transparent border-b-2 border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-all duration-[400ms]"
            placeholder="Full name"
          />
        </div>
        <div className="relative group">
          <label
            htmlFor="email"
            className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3 transition-colors duration-300 group-focus-within:text-[#C4856A]"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-b-2 border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-all duration-[400ms]"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <label
            htmlFor="phone"
            className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3 transition-colors duration-300 group-focus-within:text-[#C4856A]"
          >
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-transparent border-b-2 border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-all duration-[400ms]"
            placeholder="+971 XX XXX XXXX"
          />
        </div>
        <div className="relative group">
          <label
            htmlFor="eventType"
            className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3 transition-colors duration-300 group-focus-within:text-[#C4856A]"
          >
            Type
          </label>
          <select
            id="eventType"
            name="eventType"
            className="w-full bg-transparent border-b-2 border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-all duration-[400ms] cursor-pointer"
          >
            <option value="">Select type</option>
            <option value="brand-activation">Brand Activation</option>
            <option value="private-event">Private Event</option>
            <option value="corporate">Corporate Event</option>
            <option value="nightlife">Nightlife / Entertainment</option>
            <option value="destination">Destination Event</option>
            <option value="property-search">Property Search</option>
            <option value="property-investment">Property Investment</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="relative group">
        <label
          htmlFor="message"
          className="block text-xs tracking-[0.2em] uppercase text-[#4A4543] mb-3 transition-colors duration-300 group-focus-within:text-[#C4856A]"
        >
          Tell Me More *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b-2 border-[#2C2825]/20 focus:border-[#C4856A] py-3 outline-none transition-all duration-[400ms] resize-none"
          placeholder="Share details about your event or property requirements..."
        />
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="group bg-[#C4856A] hover:bg-[#D4A08A] disabled:bg-[#C4856A]/50 text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-[400ms] ease-out inline-flex items-center gap-3 hover:shadow-lg hover:-translate-y-0.5"
        >
          {isLoading ? (
            <>
              <span className="animate-pulse">Sending...</span>
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="w-4 h-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
