"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "Fashion & Luxury",
  "Destination Weddings",
  "Motorsport & Corporate",
  "Hospitality & Nightlife",
];

const projects = [
  {
    id: 1,
    title: "Valentino Roma",
    category: "Fashion & Luxury",
    location: "Rome, Italy",
    year: "2021",
    description: "Collection launch event for one of Italy's most iconic fashion houses.",
    image: "/images/venues/05_valentino_events_rome.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Chanel Private Preview",
    category: "Fashion & Luxury",
    location: "Milan, Italy",
    year: "2022",
    description: "Exclusive collection preview for VIP clients and press.",
    image: "/images/venues/06_chanel_events_italy.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Formula E Riyadh",
    category: "Motorsport & Corporate",
    location: "Riyadh, Saudi Arabia",
    year: "2024",
    description: "Event logistics for the premier electric motorsport championship.",
    image: "/images/venues/11_formula_e_riyadh_2024.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "St. Tropez Destination Wedding",
    category: "Destination Weddings",
    location: "St. Tropez, France",
    year: "2022",
    description: "Luxury destination wedding with Vincenzo D'Ascanio Agency.",
    image: "/images/venues/14_st_tropez_wedding_venues.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Italia Polo Challenge",
    category: "Motorsport & Corporate",
    location: "Sardinia, Italy",
    year: "2022",
    description: "15-day luxury polo event for international HNWI guests.",
    image: "/images/venues/13_italia_polo_challenge_sardinia.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Moni Mykonos",
    category: "Hospitality & Nightlife",
    location: "Mykonos, Greece",
    year: "2023",
    description: "Managing one of the island's most exclusive private members' clubs.",
    image: "/images/venues/02_moni_mykonos.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Dior Private Dinner",
    category: "Fashion & Luxury",
    location: "Florence, Italy",
    year: "2021",
    description: "Intimate dinner event for Dior's most valued clients.",
    image: "/images/venues/07_dior_events_florence.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "Gianvito Rossi Gala",
    category: "Fashion & Luxury",
    location: "Rome, Italy",
    year: "2020",
    description: "Annual gala for the luxury footwear brand.",
    image: "/images/venues/10_gianvito_rossi_gala.jpg",
    featured: false,
  },
  {
    id: 9,
    title: "Isola d'Elba Wedding",
    category: "Destination Weddings",
    location: "Isola d'Elba, Italy",
    year: "2022",
    description: "Mediterranean island wedding for international clients.",
    image: "/images/venues/15_isola_delba_wedding_venues.jpg",
    featured: false,
  },
  {
    id: 10,
    title: "Saudi Founding Day",
    category: "Motorsport & Corporate",
    location: "Diriyah, Saudi Arabia",
    year: "2024",
    description: "National celebration event at the historic Diriyah site.",
    image: "/images/venues/12_saudi_founding_day_diriyah_2024.jpg",
    featured: false,
  },
  {
    id: 11,
    title: "Moncler Winter Collection",
    category: "Fashion & Luxury",
    location: "Milan, Italy",
    year: "2021",
    description: "Seasonal launch for the iconic outerwear brand.",
    image: "/images/venues/08_moncler_events_milan.jpg",
    featured: false,
  },
  {
    id: 12,
    title: "Sottovento Porto Cervo",
    category: "Hospitality & Nightlife",
    location: "Porto Cervo, Sardinia",
    year: "2017",
    description: "PR at the legendary Mediterranean nightclub.",
    image: "/images/venues/01_sottovento_porto_cervo.jpg",
    featured: false,
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F7F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Selected Work
            </h1>
            <p className="text-[#4A4543] max-w-2xl text-lg">
              Seven years of fashion events, destination weddings, motorsport
              activations, and hospitality experiences across Rome, Dubai, and Riyadh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 bg-[#F7F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#2C2825] text-[#F7F4F0]"
                    : "bg-transparent border border-[#2C2825]/20 text-[#2C2825] hover:border-[#2C2825]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32 bg-[#F7F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="group"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="block">
                    <div className="relative overflow-hidden aspect-[3/4] mb-5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-[#C4856A] text-white px-3 py-1 text-[10px] tracking-widest uppercase">
                          Featured
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-[#F7F4F0] text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-2">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 bg-[#C4856A] rounded-full" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-serif text-xl group-hover:text-[#C4856A] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#2C2825] text-[#F7F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "7+", label: "Years Experience" },
              { number: "6", label: "Fashion Houses" },
              { number: "5", label: "Countries" },
              { number: "100+", label: "Events" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-serif text-4xl md:text-5xl text-[#C4856A]">
                  {stat.number}
                </span>
                <p className="text-xs tracking-[0.2em] uppercase text-[#F7F4F0]/60 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#EDE8E1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-6">
              Availability
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Currently accepting select projects.
            </h2>
            <p className="text-[#4A4543] mb-10">
              Dubai · Europe · Middle East
            </p>
            <Link
              href="/contact"
              className="inline-block border border-[#2C2825] hover:bg-[#2C2825] hover:text-[#F7F4F0] text-[#2C2825] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Inquire
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
