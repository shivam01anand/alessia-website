"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Credibility() {
  return (
    <section className="py-24 md:py-32 bg-[#2C2825] text-[#F7F4F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/alessia/dubai-dinner.jpg"
                alt="Alessia at Burj Al Arab"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-6">
              The Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Seven years. Six fashion houses. Five countries. One standard:
              <span className="text-[#C4856A]"> perfection</span>.
            </h2>
            <div className="space-y-5 text-[#F7F4F0]/70 leading-relaxed">
              <p>
                It started at Sottovento in Porto Cervo, Sardinia&apos;s most
                legendary club. That&apos;s where I learned that luxury isn&apos;t
                about excess. It&apos;s about making people feel extraordinary.
              </p>
              <p>
                Three years with IF Experience taught me how Valentino, Chanel, and
                Dior expect their events executed. Then Moni Mykonos, where I managed
                one of the Mediterranean&apos;s most exclusive private clubs. Then
                Formula E in Riyadh.
              </p>
              <p>
                Now based in Dubai, I bring that same fashion-house precision to
                every event, whether it&apos;s a brand activation, destination
                wedding, or intimate private celebration.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-block border border-[#F7F4F0]/30 hover:border-[#F7F4F0] hover:bg-[#F7F4F0]/5 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              >
                Read Full Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
