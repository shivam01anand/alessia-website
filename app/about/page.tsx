"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const timeline = [
  {
    year: "2024",
    role: "Event Manager",
    company: "DAW Event Production, Riyadh",
    description:
      "Formula E Riyadh, Saudi Founding Day at Diriyah, Ministry of Education events. Managing logistics for the Kingdom's most prestigious occasions.",
  },
  {
    year: "2022–2023",
    role: "Coordinator & Manager",
    company: "Addmind Hospitality — Babylon Dubai & Moni Mykonos",
    description:
      "Started as coordinator at Babylon DFC in Dubai, then promoted to Manager at Moni — one of Mykonos' most exclusive private members' clubs.",
  },
  {
    year: "2022",
    role: "Project Manager",
    company: "Italia Polo Challenge, Sardinia",
    description:
      "Led a 15-day luxury polo event — managing hotels, private transfers, dining, and exclusive experiences for international HNWI guests.",
  },
  {
    year: "2022",
    role: "Assistant Project Manager",
    company: "Vincenzo D'Ascanio Agency",
    description:
      "Luxury destination weddings across St. Tropez and Isola d'Elba. Working with one of Italy's most sought-after wedding designers.",
  },
  {
    year: "2019–2022",
    role: "Assistant Project Manager",
    company: "IF Experience",
    description:
      "Brand events for Valentino, Chanel, Dior, Moncler, and Golden Goose across Rome, Milan, Florence, and Lisbon. This is where fashion-house precision was forged.",
  },
  {
    year: "2017–2022",
    role: "Staff Coordinator",
    company: "Private Events & Galas, Rome",
    description:
      "Gianvito Rossi gala dinners, LBL corporate events, and exclusive private celebrations. Five years mastering the art of flawless execution.",
  },
  {
    year: "2017",
    role: "PR Intern",
    company: "Sottovento Club, Porto Cervo",
    description:
      "Where it all began — Sardinia's most legendary nightclub since 1979. The Mediterranean's original temple of la dolce vita.",
  },
];

const values = [
  {
    title: "Italian Heritage",
    description:
      "Born and raised in Rome, educated in communication sciences. Mediterranean warmth and Italian attention to detail are in my DNA.",
  },
  {
    title: "Fashion-House Training",
    description:
      "Three years with IF Experience taught me that luxury brands accept nothing less than perfection. Every detail matters.",
  },
  {
    title: "Mediterranean to Gulf",
    description:
      "From Porto Cervo to Mykonos to Dubai to Riyadh — I understand how luxury translates across cultures while keeping its soul.",
  },
  {
    title: "Boutique Approach",
    description:
      "I don't take on dozens of events. I take on yours — fully present, personally invested, completely dedicated.",
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
                  src="/images/alessia/beach-club.jpg"
                  alt="Alessia Forcellati"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#C4856A]/30" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C4856A]/10" />
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
                Alessia
                <br />
                Forcellati
              </h1>
              <div className="flex items-center gap-2 text-sm text-[#4A4543] mb-8">
                <MapPin className="w-4 h-4 text-[#C4856A]" />
                <span>Dubai, UAE · Originally from Rome</span>
              </div>
              <div className="space-y-6 text-[#4A4543] leading-relaxed">
                <p className="text-lg">
                  Seven years creating moments for fashion houses, private clients,
                  and the world&apos;s most demanding venues — from the runways of
                  Rome to the circuits of Riyadh.
                </p>
                <p>
                  I started at Sottovento in Porto Cervo, where I learned that true
                  luxury isn&apos;t about showing off — it&apos;s about feeling
                  extraordinary. From there, I spent three years with IF Experience,
                  orchestrating events for Valentino, Chanel, Dior, Moncler, and
                  Golden Goose.
                </p>
                <p>
                  That fashion-house precision now shapes everything I do — whether
                  it&apos;s a Formula E activation in Saudi Arabia, a private wedding
                  in St. Tropez, or an intimate celebration in Dubai.
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
            &ldquo;I don&apos;t create events. I create the feeling you&apos;ll remember
            <span className="text-[#C4856A]"> forever</span>.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[#EDE8E1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">What Sets Me Apart</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-[#F7F4F0] p-8 lg:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-serif text-2xl mb-4 text-[#C4856A]">
                  {value.title}
                </h3>
                <p className="text-[#4A4543] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-[#F7F4F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Rome · Sardinia · Mykonos · Dubai · Riyadh
            </h2>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year + item.role}
                className="relative pl-8 border-l-2 border-[#EDE8E1]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#C4856A] rounded-full" />
                <p className="text-sm tracking-[0.2em] uppercase text-[#C4856A] mb-2">
                  {item.year}
                </p>
                <h3 className="font-serif text-2xl mb-1">{item.role}</h3>
                <p className="text-sm text-[#4A4543] mb-3">{item.company}</p>
                <p className="text-[#4A4543] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-[#EDE8E1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
            Education
          </p>
          <h3 className="font-serif text-2xl md:text-3xl mb-2">
            Laurea in Scienze della Comunicazione
          </h3>
          <p className="text-[#4A4543]">
            Università degli Studi eCampus · 2020–2023
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
              Let&apos;s Create Together
            </h2>
            <p className="text-[#F7F4F0]/70 mb-10 max-w-xl mx-auto">
              Whether it&apos;s a brand activation, private celebration, destination
              wedding, or something entirely unique — I&apos;d love to hear your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C4856A] hover:bg-[#D4A08A] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
