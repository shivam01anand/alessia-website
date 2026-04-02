"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    period: "2025 — Present",
    title: "Digital Minds · MC Holding",
    description:
      "Project Event Manager at a global luxury tech and marketing group. Dubai, Milan, New York, China.",
  },
  {
    period: "2022 — 2025",
    title: "Events & Real Estate",
    description:
      "Clients started asking for properties. A natural evolution — from hosting them to finding their Dubai address.",
  },
  {
    period: "2020 — 2022",
    title: "Nightlife & Hospitality",
    description:
      "From Sottovento in Porto Cervo to Moni in Mykonos — curating atmospheres that became destinations.",
  },
  {
    period: "2017 — 2020",
    title: "Fashion & Luxury Events",
    description:
      "Styled events for Valentino, Chanel, Dior, and Moncler across Rome, Milan, and Florence.",
  },
];

export default function Journey() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4F0]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
            Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            How I Got Here
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#2C2825]/10" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                className="relative pl-8 md:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Dot on the line */}
                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 -translate-x-[3.5px] bg-[#C4856A] rounded-full" />

                <p className="text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-2">
                  {milestone.period}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-3">
                  {milestone.title}
                </h3>
                <p className="text-[#4A4543] leading-relaxed max-w-lg">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
