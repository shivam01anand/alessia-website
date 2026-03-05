"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F4F0]">
      {/* Grid Layout */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-xs tracking-[0.4em] uppercase text-[#C4856A] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Luxury Event Management · Dubai
            </motion.p>

            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#2C2825] leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Italian Elegance,
              <br />
              <span className="text-[#C4856A]">Gulf Grandeur</span>
            </motion.h1>

            <motion.p
              className="text-[#4A4543] text-lg md:text-xl max-w-md leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              From Valentino&apos;s ateliers to Formula E circuits, creating
              unforgettable moments for fashion houses and discerning clients.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#2C2825] hover:bg-[#C4856A] text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-[400ms] ease-out hover:shadow-lg hover:-translate-y-0.5"
              >
                Inquire
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center border border-[#2C2825]/30 hover:border-[#2C2825] text-[#2C2825] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-[400ms] ease-out hover:shadow-sm"
              >
                Portfolio
              </Link>
            </motion.div>

            {/* Locations */}
            <motion.p
              className="mt-12 text-xs tracking-[0.3em] uppercase text-[#4A4543]/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Rome · Milan · Mykonos · Dubai · Riyadh
            </motion.p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/alessia/hero-mykonos.jpg"
                alt="Alessia Forcellati"
                fill
                className="object-cover object-[center_35%]"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#C4856A]/30 hidden lg:block" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#C4856A]/10 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
