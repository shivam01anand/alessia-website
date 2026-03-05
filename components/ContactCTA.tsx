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
            Work With Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Have something in mind?
          </h2>
          <p className="text-[#4A4543] max-w-md mx-auto mb-10">
            Brand activations. Private celebrations. Destination events.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#2C2825] hover:bg-[#4A4543] text-[#F7F4F0] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Inquire
            </Link>
            <a
              href="https://wa.me/393925251663"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2C2825]/30 hover:border-[#2C2825] text-[#2C2825] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
