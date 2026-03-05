"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Building2, Music } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Sparkles,
    title: "Fashion Brand Activations",
    description:
      "Runway shows, product launches, and brand experiences that capture the essence of luxury fashion.",
    image: "/images/services/fashion-brand-activations.webp",
  },
  {
    icon: Users,
    title: "Luxury Private Events",
    description:
      "Intimate celebrations, milestone anniversaries, and exclusive gatherings for discerning clients.",
    image: "/images/venues/15_isola_delba_wedding_venues.jpg",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Sophisticated galas, executive retreats, and brand activations that elevate corporate culture.",
    image: "/images/services/corporate-events.png",
  },
  {
    icon: Music,
    title: "Nightlife & Entertainment",
    description:
      "Elite venue openings, VIP experiences, and entertainment concepts for the most exclusive clientele.",
    image: "/images/services/nightlife.png",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
            Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Services
          </h2>
          <p className="text-[#4A4543] max-w-2xl mx-auto">
            From intimate private celebrations to grand fashion house activations,
            each event is crafted to be unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-all duration-[800ms] ease-out group-hover:scale-[1.03] group-hover:brightness-110"
              />

              {/* Overlay - shifts warmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/90 via-[#2C2825]/40 to-transparent transition-all duration-[600ms] group-hover:from-[#2C2825]/85 group-hover:via-[#C4856A]/20" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <service.icon className="w-8 h-8 text-[#C4856A] mb-4 transition-transform duration-[400ms] group-hover:scale-110" />
                <h3 className="font-serif text-2xl md:text-3xl text-[#F7F4F0] mb-3 transition-transform duration-[400ms] group-hover:translate-x-1">
                  {service.title}
                </h3>
                <p className="text-[#F7F4F0]/70 text-sm leading-relaxed max-w-md transition-all duration-[400ms] group-hover:text-[#F7F4F0]/85">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-block text-sm tracking-widest uppercase hover-underline text-[#2C2825] hover:text-[#C4856A] transition-colors"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
