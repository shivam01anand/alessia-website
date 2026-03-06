"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Building2, Music, Plane, Home, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Sparkles,
    title: "Fashion Brand Activations",
    tagline: "Where runway meets reality",
    description:
      "Three years with IF Experience taught me how the world's most demanding fashion houses expect their events to be executed. From Valentino to Chanel to Dior, I learned that every detail communicates brand values.",
    features: [
      "Collection launches",
      "Press previews",
      "VIP client events",
      "Runway productions",
      "Pop-up experiences",
      "Store openings",
    ],
    image: "/images/services/fashion-brand-activations.webp",
  },
  {
    icon: Heart,
    title: "Destination Weddings",
    tagline: "La dolce vita, wherever you are",
    description:
      "Working with Vincenzo D'Ascanio, one of Italy's most sought-after wedding designers, taught me that destination weddings aren't just events. They're multi-day experiences that need to flow like a beautiful story.",
    features: [
      "Multi-day planning",
      "Guest experiences",
      "Venue sourcing",
      "Vendor coordination",
      "Welcome events",
      "Post-wedding brunches",
    ],
    image: "/images/venues/15_isola_delba_wedding_venues.jpg",
  },
  {
    icon: Building2,
    title: "Corporate & Motorsport Events",
    tagline: "From boardrooms to race circuits",
    description:
      "Formula E in Riyadh. Italia Polo Challenge in Sardinia. Saudi Founding Day at Diriyah. I bring the same attention to detail from fashion into corporate and sporting events where precision and logistics are everything.",
    features: [
      "Brand activations",
      "Executive experiences",
      "Award ceremonies",
      "Product launches",
      "Hospitality programs",
      "VIP guest management",
    ],
    image: "/images/services/corporate-events.png",
  },
  {
    icon: Music,
    title: "Hospitality & Nightlife",
    tagline: "Creating the places people remember",
    description:
      "From my first summer at Sottovento in Porto Cervo to managing Moni in Mykonos, I understand how to create atmospheres that become legendary. The energy, the exclusivity, the details that make a venue iconic.",
    features: [
      "Venue openings",
      "Seasonal programming",
      "VIP experiences",
      "Artist hosting",
      "Member events",
      "Concept development",
    ],
    image: "/images/services/nightlife.png",
  },
  {
    icon: Plane,
    title: "Luxury Private Events",
    tagline: "Intimate moments, extraordinary execution",
    description:
      "Whether it's a milestone birthday in Dubai, an engagement party in Rome, or a family celebration anywhere in the Mediterranean. I bring fashion-house standards to the most personal occasions.",
    features: [
      "Milestone celebrations",
      "Engagement parties",
      "Anniversary dinners",
      "Private dinners",
      "Family gatherings",
      "Exclusive experiences",
    ],
    image: "/images/venues/14_st_tropez_wedding_venues.jpg",
  },
  {
    icon: Home,
    title: "Dubai Real Estate",
    tagline: "Your address in the Gulf",
    description:
      "The same eye for detail I bring to events, I bring to finding your Dubai home. Whether you're relocating, investing, or seeking a pied-à-terre, I guide you through Dubai's most desirable addresses with discretion and expertise.",
    features: [
      "Property search",
      "Investment advisory",
      "Off-plan opportunities",
      "Marina & Downtown",
      "Palm Jumeirah",
      "Relocation support",
    ],
    image: "/images/venues/18_dubai_luxury.jpg",
  },
];

const process = [
  {
    step: "01",
    title: "Listen",
    description:
      "Your vision, your guests, the feeling you want to create. I need to understand before I can design.",
  },
  {
    step: "02",
    title: "Envision",
    description:
      "A tailored concept takes shape. Every element considered, from venue to florals to the music at midnight.",
  },
  {
    step: "03",
    title: "Curate",
    description:
      "The right team, the right partners. Relationships built across Rome, Milan, Mykonos, Dubai, and Riyadh.",
  },
  {
    step: "04",
    title: "Execute",
    description:
      "On the day, I manage everything. You are a guest at your own event. That is how it should be.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Services
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8">
              What I Do
            </h1>
            <p className="text-[#4A4543] text-lg leading-relaxed">
              Fashion houses taught me that luxury is in the details. Eight years
              in events, now bringing that same standard to Dubai real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-4 w-24 h-24 bg-[#C4856A]/10 ${
                      index % 2 === 1 ? "-left-4" : "-right-4"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-6 h-6 text-[#C4856A]" />
                    <span className="text-xs tracking-[0.2em] uppercase text-[#4A4543]">
                      {service.tagline}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6">
                    {service.title}
                  </h2>
                  <p className="text-[#4A4543] leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-[#4A4543]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#C4856A] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-[#2C2825] text-[#F7F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Process
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">How We Work Together</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Elegant step indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full border border-[#C4856A]/40 flex items-center justify-center text-xs text-[#C4856A]">
                    {item.step}
                  </span>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-[#C4856A]/20" />
                  )}
                </div>
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-[#F7F4F0]/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 md:py-32 bg-[#EDE8E1]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Where I Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Based in Dubai. Available Worldwide.
            </h2>
            <p className="text-[#4A4543] leading-relaxed mb-10 max-w-2xl mx-auto">
              With established vendor networks and venue relationships across the
              UAE, Saudi Arabia, Italy, France, Greece, and Portugal, I can execute
              your event wherever your vision takes us.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#4A4543]">
              {[
                "Dubai",
                "Abu Dhabi",
                "Riyadh",
                "Rome",
                "Milan",
                "Florence",
                "Mykonos",
                "Sardinia",
                "St. Tropez",
                "Lisbon",
              ].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 border border-[#2C2825]/20"
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-24 md:py-32 bg-[#F7F4F0]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Investment
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Investment
            </h2>
            <p className="text-[#4A4543] leading-relaxed">
              Every event is unique. Reach out to discuss scope and investment.
            </p>
          </motion.div>
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
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Let&apos;s discuss your vision.
            </h2>
            <p className="text-[#F7F4F0]/50 mb-10">
              Currently based in Dubai. Available worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-[#F7F4F0]/30 hover:bg-[#F7F4F0] hover:text-[#2C2825] text-[#F7F4F0] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Inquire
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
