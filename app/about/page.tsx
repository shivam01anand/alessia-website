"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const offices = [
  {
    city: "Dubai",
    role: "Headquarters",
    focus: "Events, marketing, and operations",
  },
  {
    city: "Milan",
    role: "Europe",
    focus: "Fashion and marketing projects",
  },
  {
    city: "New York",
    role: "Americas",
    focus: "PR and media relations",
  },
  {
    city: "China",
    role: "Asia",
    focus: "AI-based products and manufacturing",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F7F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/alessia/professional-blazer.png"
                  alt="Alessia Forcellati"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#C4856A]/30" />
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
                About
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8">
                My Story
              </h1>
              <div className="flex items-center gap-2 text-sm text-[#4A4543] mb-8">
                <MapPin className="w-4 h-4 text-[#C4856A]" />
                <span>Dubai, UAE · Originally from Rome</span>
              </div>
              <div className="space-y-6 text-[#4A4543] leading-relaxed">
                <p className="text-lg">
                  I started in the world of fashion events. Valentino, Chanel, Dior,
                  Moncler. Three years learning that luxury brands accept nothing
                  less than perfection.
                </p>
                <p>
                  From there I moved into nightlife and hospitality. Sottovento in
                  Porto Cervo, Moni in Mykonos. Places where the atmosphere is
                  everything and the details make it legendary.
                </p>
                <p>
                  Along the way, clients started asking me about properties in Dubai.
                  They trusted my eye, my taste, my understanding of what luxury
                  actually means when you live in it every day. So I started working
                  with an Italian real estate agency, freelance, helping people find
                  their Dubai address.
                </p>
                <p>
                  Today I&apos;m a Project Event Manager at Digital Minds, part of
                  MC Holding Group, a global luxury tech and marketing company with
                  offices in Dubai, Milan, New York, and China. I still take on select
                  private events and real estate clients on the side.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 bg-[#2C2825] text-[#F7F4F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.blockquote
            className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The details they notice. The moments they
            <span className="text-[#C4856A]"> don&apos;t forget</span>.
          </motion.blockquote>
        </div>
      </section>

      {/* MC Holding / Digital Minds */}
      <section className="py-24 md:py-32 bg-[#EDE8E1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Current Role
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Digital Minds · MC Holding Group
            </h2>
            <p className="text-[#4A4543] leading-relaxed max-w-2xl">
              A global luxury tech and marketing group operating across four
              continents. From AI-powered products to fashion PR, the group
              brings Italian craftsmanship to global scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="bg-[#F7F4F0] p-6 lg:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-2">
                  {office.role}
                </p>
                <h3 className="font-serif text-2xl mb-2">{office.city}</h3>
                <p className="text-[#4A4543] text-sm">{office.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-[#F7F4F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
            Education
          </p>
          <h3 className="font-serif text-2xl md:text-3xl mb-2">
            Laurea in Scienze della Comunicazione
          </h3>
          <p className="text-[#4A4543]">
            Universit&agrave; degli Studi eCampus · 2020–2023
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#2C2825] text-[#F7F4F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Let&apos;s Connect
            </h2>
            <p className="text-[#F7F4F0]/70 mb-10 max-w-xl mx-auto">
              Events, real estate, or global projects. I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C4856A] hover:bg-[#D4A08A] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
