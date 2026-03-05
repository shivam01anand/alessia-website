"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Formula E Riyadh",
    category: "Motorsport",
    year: "2024",
    image: "/images/venues/11_formula_e_riyadh_2024.jpg",
  },
  {
    title: "Valentino Roma",
    category: "Fashion",
    year: "2021",
    image: "/images/venues/05_valentino_events_rome.jpg",
  },
  {
    title: "St. Tropez Wedding",
    category: "Private",
    year: "2022",
    image: "/images/venues/14_st_tropez_wedding_venues.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 bg-[#EDE8E1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Featured Work
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 text-sm tracking-widest uppercase hover-underline text-[#2C2825] hover:text-[#C4856A] transition-colors inline-flex items-center gap-2"
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link href="/portfolio" className="block">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-[800ms] ease-out group-hover:scale-[1.03] group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-[#2C2825]/0 group-hover:bg-[#2C2825]/10 transition-colors duration-[600ms]" />

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-[#F7F4F0] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out group-hover:translate-x-0 translate-x-2">
                    <ArrowUpRight className="w-5 h-5 text-[#2C2825]" />
                  </div>
                </div>

                <p className="text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-2">
                  {project.category} · {project.year}
                </p>
                <h3 className="font-serif text-2xl group-hover:text-[#C4856A] transition-colors">
                  {project.title}
                </h3>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
