"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4F0]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-6">
            Let&apos;s Create Together
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
            Ready to create something
            <br />
            <span className="text-[#C4856A]">unforgettable?</span>
          </h2>
          <p className="text-[#4A4543] max-w-xl mx-auto mb-10">
            Whether you&apos;re planning a brand activation, private celebration,
            or exclusive event, I&apos;d love to hear your vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#C4856A] hover:bg-[#D4A08A] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Start a Conversation
            </Link>
            <a
              href="https://wa.me/393925251663"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2C2825] hover:bg-[#2C2825] hover:text-[#F7F4F0] text-[#2C2825] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
